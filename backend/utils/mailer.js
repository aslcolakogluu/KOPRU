require('dotenv').config();
const nodemailer = require('nodemailer');

// ─────────────────────────────────────────
// Mail Yapılandırması
// ─────────────────────────────────────────
const SMTP_CONFIG = {
  host: process.env.MAIL_HOST || 'smtp.gmail.com',
  port: process.env.MAIL_PORT || 587,
  secure: false,
  auth: {
    user: process.env.MAIL_USER, // .env dosyasından okunur
    pass: process.env.MAIL_PASS, // .env dosyasından okunur
  },
};

async function sendMail({ to, subject, html }) {
  let transporter;

  // Eğer .env dosyasında bilgiler varsa gerçek SMTP kullan
  if (SMTP_CONFIG.auth.user && SMTP_CONFIG.auth.pass) {
    transporter = nodemailer.createTransport(SMTP_CONFIG);
    console.log(`📧 Gerçek mail gönderiliyor (${SMTP_CONFIG.auth.user} üzerinden)...`);
  } else {
    // Bilgiler yoksa test hesabı (Ethereal) kullan
    console.log('ℹ️ .env dosyasında mail bilgileri bulunamadı, test modunda çalışılıyor...');
    const testAccount = await nodemailer.createTestAccount();
    transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      secure: false,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass,
      },
    });
  }

  const info = await transporter.sendMail({
    from: `"KÖPRÜ Platformu" <${SMTP_CONFIG.auth.user || 'noreply@kopru.com'}>`,
    to,
    subject,
    html,
  });

  if (SMTP_CONFIG.auth.user && SMTP_CONFIG.auth.pass) {
    console.log('✅ Gerçek mail başarıyla gönderildi: %s', info.messageId);
  } else {
    console.log('📧 ========================================');
    console.log('📧  ŞİFRE SIFIRLAMA KODU GÖNDERİLDİ!');
    console.log(`📧  Alıcı: ${to}`);
    console.log(`📧  KOD: ${html.match(/\d{6}/)[0]}`); 
    console.log('📧 ========================================');
    console.log(`🔗  Önizleme Linki: ${nodemailer.getTestMessageUrl(info)}`);
  }

  return info;
}

module.exports = { sendMail };
