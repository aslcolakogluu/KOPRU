// ============================================================
// middleware/auth.js — JWT doğrulama middleware
// Korumalı route'lara eklenir: router.get('/...', requireAuth, handler)
// ============================================================

const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET || 'kopru-secret-key-2026';

/**
 * Gelen isteğin Authorization header'ında geçerli bir JWT token olup
 * olmadığını kontrol eder. Geçerliyse req.user'a kullanıcı bilgisini ekler.
 */
function requireAuth(req, res, next) {
  const authHeader = req.headers['authorization'];
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Yetkisiz: Token bulunamadı.' });
  }

  const token = authHeader.split(' ')[1];
  try {
    const payload = jwt.verify(token, JWT_SECRET);
    req.user = payload; // { id, email, name, role }
    next();
  } catch (err) {
    return res.status(401).json({ error: 'Yetkisiz: Geçersiz veya süresi dolmuş token.' });
  }
}

module.exports = { requireAuth, JWT_SECRET };
