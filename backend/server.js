// ============================================================
// server.js — KÖPRÜ Backend Ana Sunucusu
// Node.js + Express + SQLite | Port: 3000
//
// Başlatmak için:  node backend/server.js
//                  veya: npm run backend
// ============================================================

const express = require('express');
const cors = require('cors');

const authRoutes     = require('./routes/auth');
const listingRoutes  = require('./routes/listings');
const demandRoutes   = require('./routes/demands');

const app = express();
const PORT = process.env.PORT || 3000;

// ─────────────────────────────────────────
// Middleware
// ─────────────────────────────────────────

// CORS: Angular dev server (localhost:4200) izin veriliyor
app.use(cors({
  origin: ['http://localhost:4200', 'http://localhost:4201'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// JSON body parsing
app.use(express.json());

// İstek loglama (geliştirme kolaylığı)
app.use((req, _res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
  next();
});

// ─────────────────────────────────────────
// Rotalar
// ─────────────────────────────────────────
app.use('/api/auth',     authRoutes);
app.use('/api/listings', listingRoutes);
app.use('/api/demands',  demandRoutes);

// Sağlık kontrolü
app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', message: 'KÖPRÜ Backend çalışıyor 🌉', timestamp: new Date().toISOString() });
});

// 404 handler
app.use((_req, res) => {
  res.status(404).json({ error: 'Endpoint bulunamadı.' });
});

// Global hata handler
app.use((err, _req, res, _next) => {
  console.error('Sunucu hatası:', err);
  res.status(500).json({ error: 'Sunucu hatası oluştu.' });
});

// ─────────────────────────────────────────
// Sunucuyu Başlat
// ─────────────────────────────────────────
app.listen(PORT, () => {
  console.log('');
  console.log('🌉 ========================================');
  console.log(`🌉  KÖPRÜ Backend çalışıyor!`);
  console.log(`🌉  API: http://localhost:${PORT}/api`);
  console.log('🌉 ========================================');
  console.log('');
});
