// ============================================================
// routes/auth.js — Kimlik doğrulama rotaları
// POST /api/auth/register  → Yeni kullanıcı kaydı
// POST /api/auth/login     → Giriş, JWT token döner
// GET  /api/auth/me        → Mevcut kullanıcı bilgisi (token ile)
// ============================================================

const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../database');
const { requireAuth, JWT_SECRET } = require('../middleware/auth');
const { sendMail } = require('../utils/mailer');
const crypto = require('crypto');

const router = express.Router();
const SALT_ROUNDS = 12;
const TOKEN_EXPIRY = '7d'; // Token 7 gün geçerli

// ─────────────────────────────────────────
// POST /api/auth/register
// ─────────────────────────────────────────
router.post('/register', async (req, res) => {
  try {
    let { email, password, name, role, businessName, phone } = req.body;
    email = email?.toLowerCase();

    // Zorunlu alan kontrolü
    if (!email || !password || !name || !role) {
      return res.status(400).json({ error: 'Email, şifre, isim ve rol zorunludur.' });
    }

    // Şifre uzunluğu kontrolü
    if (password.length < 6) {
      return res.status(400).json({ error: 'Şifre en az 6 karakter olmalıdır.' });
    }

    // Rol kontrolü
    if (!['donor', 'receiver'].includes(role)) {
      return res.status(400).json({ error: 'Geçersiz rol. donor veya receiver olmalıdır.' });
    }

    // Email zaten kayıtlı mı?
    const existing = db.prepare('SELECT id FROM users WHERE email = ?').get(email);
    if (existing) {
      return res.status(409).json({ error: 'Bu email adresi zaten kullanımda.' });
    }

    // Şifreyi hashle
    const password_hash = await bcrypt.hash(password, SALT_ROUNDS);

    // Kullanıcıyı veritabanına kaydet
    const result = db.prepare(`
      INSERT INTO users (email, password_hash, name, role, business_name, phone)
      VALUES (?, ?, ?, ?, ?, ?)
    `).run(email, password_hash, name, role, businessName || null, phone || null);

    const newUser = db.prepare('SELECT * FROM users WHERE id = ?').get(result.lastInsertRowid);

    // JWT token oluştur
    const token = jwt.sign(
      { id: newUser.id, email: newUser.email, name: newUser.name, role: newUser.role },
      JWT_SECRET,
      { expiresIn: TOKEN_EXPIRY }
    );

    res.status(201).json({
      token,
      user: formatUser(newUser)
    });

  } catch (err) {
    console.error('Register error:', err);
    res.status(500).json({ error: 'Kayıt sırasında bir hata oluştu.' });
  }
});

// ─────────────────────────────────────────
// POST /api/auth/login
// ─────────────────────────────────────────
router.post('/login', async (req, res) => {
  try {
    let { email, password } = req.body;
    email = email?.toLowerCase();

    if (!email || !password) {
      return res.status(400).json({ error: 'Email ve şifre zorunludur.' });
    }

    // Kullanıcıyı bul
    const user = db.prepare('SELECT * FROM users WHERE email = ?').get(email);
    if (!user) {
      return res.status(401).json({ error: 'Geçersiz email veya şifre.' });
    }

    // Şifreyi doğrula
    const isValid = await bcrypt.compare(password, user.password_hash);
    if (!isValid) {
      return res.status(401).json({ error: 'Geçersiz email veya şifre.' });
    }

    // JWT token oluştur
    const token = jwt.sign(
      { id: user.id, email: user.email, name: user.name, role: user.role },
      JWT_SECRET,
      { expiresIn: TOKEN_EXPIRY }
    );

    res.json({
      token,
      user: formatUser(user)
    });

  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ error: 'Giriş sırasında bir hata oluştu.' });
  }
});

// ─────────────────────────────────────────
// GET /api/auth/me — Token ile kullanıcı bilgisi
// ─────────────────────────────────────────
router.get('/me', requireAuth, (req, res) => {
  const user = db.prepare('SELECT * FROM users WHERE id = ?').get(req.user.id);
  if (!user) {
    return res.status(404).json({ error: 'Kullanıcı bulunamadı.' });
  }
  res.json(formatUser(user));
});

// ─────────────────────────────────────────
// PUT /api/auth/profile — Profil güncelle
// ─────────────────────────────────────────
router.put('/profile', requireAuth, (req, res) => {
  const { name, businessName, phone } = req.body;
  db.prepare(`
    UPDATE users SET name = ?, business_name = ?, phone = ?
    WHERE id = ?
  `).run(name || req.user.name, businessName || null, phone || null, req.user.id);

  const updated = db.prepare('SELECT * FROM users WHERE id = ?').get(req.user.id);
  res.json(formatUser(updated));
});

// ─────────────────────────────────────────
// POST /api/auth/forgot-password
// ─────────────────────────────────────────
router.post('/forgot-password', async (req, res) => {
  try {
    let { email } = req.body;
    email = email?.toLowerCase();
    if (!email) return res.status(400).json({ error: 'Email adresi gereklidir.' });

    const user = db.prepare('SELECT id, name FROM users WHERE email = ?').get(email);
    if (!user) {
      // Güvenlik için kullanıcı bulunmasa bile başarılıymış gibi davranabiliriz 
      // ama geliştirme aşamasında hata dönmek daha net olur.
      return res.status(404).json({ error: 'Bu email adresine kayıtlı bir kullanıcı bulunamadı.' });
    }

    // 6 haneli rastgele bir kod oluştur (Crypto ile daha güvenli ve her seferinde farklı)
    const token = crypto.randomInt(100000, 999999).toString();
    const expiry = new Date(Date.now() + 3600000).toISOString(); // 1 saat geçerli

    db.prepare('UPDATE users SET reset_token = ?, reset_token_expiry = ? WHERE id = ?')
      .run(token, expiry, user.id);

    // Mail gönder (Async - Yanıtı beklemiyoruz ki UI takılmasın)
    sendMail({
      to: email,
      subject: 'KÖPRÜ - Şifre Sıfırlama Kodu',
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h2>Merhaba ${user.name},</h2>
          <p>Şifrenizi sıfırlamak için bir talep aldık. Aşağıdaki doğrulama kodunu kullanarak yeni şifrenizi belirleyebilirsiniz:</p>
          <div style="background: #f4f4f4; padding: 15px; text-align: center; font-size: 24px; font-weight: bold; letter-spacing: 5px; margin: 20px 0; border-radius: 8px;">
            ${token}
          </div>
          <p>Bu kod 1 saat boyunca geçerlidir. Eğer bu talebi siz yapmadıysanız, lütfen bu e-postayı dikkate almayın.</p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
          <p style="font-size: 12px; color: #999;">KÖPRÜ Platformu - Gıda İsrafını Önleyen Köprü</p>
        </div>
      `
    }).catch(err => console.error('Email sending failed in background:', err));

    res.json({ message: 'Şifre sıfırlama kodu başarıyla gönderildi.' });
  } catch (err) {
    console.error('Forgot password error:', err);
    res.status(500).json({ error: 'E-posta gönderilirken bir hata oluştu.' });
  }
});

// ─────────────────────────────────────────
// POST /api/auth/reset-password
// ─────────────────────────────────────────
router.post('/reset-password', async (req, res) => {
  try {
    let { email, token, newPassword } = req.body;
    email = email?.toLowerCase();

    if (!email || !token || !newPassword) {
      return res.status(400).json({ error: 'Tüm alanlar zorunludur.' });
    }

    const user = db.prepare('SELECT id, reset_token, reset_token_expiry FROM users WHERE email = ?').get(email);
    
    if (!user || user.reset_token !== token) {
      return res.status(400).json({ error: 'Geçersiz kod veya e-posta adresi.' });
    }

    const now = new Date().toISOString();
    if (user.reset_token_expiry < now) {
      return res.status(400).json({ error: 'Kodun süresi dolmuş.' });
    }

    // Şifreyi güncelle
    const password_hash = await bcrypt.hash(newPassword, SALT_ROUNDS);
    db.prepare('UPDATE users SET password_hash = ?, reset_token = NULL, reset_token_expiry = NULL WHERE id = ?')
      .run(password_hash, user.id);

    res.json({ message: 'Şifreniz başarıyla güncellendi. Giriş yapabilirsiniz.' });
  } catch (err) {
    console.error('Reset password error:', err);
    res.status(500).json({ error: 'Şifre sıfırlanırken bir hata oluştu.' });
  }
});

// ─────────────────────────────────────────
// Yardımcı: Kullanıcı nesnesini güvenli formata çevir (şifreyi gizle)
// ─────────────────────────────────────────
function formatUser(user) {
  return {
    id: user.id,
    email: user.email,
    name: user.name,
    role: user.role,
    businessName: user.business_name,
    phone: user.phone,
    impact: {
      savedKg: user.saved_kg || 0,
      sharedMeals: user.shared_meals || 0
    },
    createdAt: user.created_at
  };
}

module.exports = router;
