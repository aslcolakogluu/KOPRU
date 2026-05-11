// ============================================================
// routes/demands.js — Gıda talepleri rotaları
// GET  /api/demands            → Tüm talepler
// GET  /api/demands/:id        → Tek talep
// POST /api/demands            → Yeni talep (auth gerekli)
// PUT  /api/demands/:id/fulfill → Talebi karşıla (auth gerekli)
// DELETE /api/demands/:id      → Talep sil (auth gerekli)
// ============================================================

const express = require('express');
const db = require('../database');
const { requireAuth } = require('../middleware/auth');

const router = express.Router();

// ─────────────────────────────────────────
// GET /api/demands — Tüm talepleri getir
// ─────────────────────────────────────────
router.get('/', (req, res) => {
  const { status, category } = req.query;

  let query = 'SELECT * FROM demands WHERE 1=1';
  const params = [];

  if (status)   { query += ' AND status = ?';   params.push(status); }
  if (category) { query += ' AND category = ?'; params.push(category); }

  query += ' ORDER BY created_at DESC';

  const demands = db.prepare(query).all(...params);
  res.json(demands.map(formatDemand));
});

// ─────────────────────────────────────────
// GET /api/demands/:id — Tek talep
// ─────────────────────────────────────────
router.get('/:id', (req, res) => {
  const demand = db.prepare('SELECT * FROM demands WHERE id = ?').get(req.params.id);
  if (!demand) return res.status(404).json({ error: 'Talep bulunamadı.' });
  res.json(formatDemand(demand));
});

// ─────────────────────────────────────────
// POST /api/demands — Yeni talep oluştur
// ─────────────────────────────────────────
router.post('/', requireAuth, (req, res) => {
  const { category, title, description, requiredQuantity, neededBy } = req.body;

  if (!category || !title || !description || !requiredQuantity || !neededBy) {
    return res.status(400).json({ error: 'Zorunlu alanlar eksik.' });
  }

  const result = db.prepare(`
    INSERT INTO demands
      (requester_id, requester_name, category, title, description, required_quantity, needed_by, status)
    VALUES (?, ?, ?, ?, ?, ?, ?, 'open')
  `).run(req.user.id, req.user.name, category, title, description, requiredQuantity, neededBy);

  const newDemand = db.prepare('SELECT * FROM demands WHERE id = ?').get(result.lastInsertRowid);
  res.status(201).json(formatDemand(newDemand));
});

// ─────────────────────────────────────────
// PUT /api/demands/:id/fulfill — Talebi karşıla
// ─────────────────────────────────────────
router.put('/:id/fulfill', requireAuth, (req, res) => {
  const demand = db.prepare('SELECT * FROM demands WHERE id = ?').get(req.params.id);
  if (!demand) return res.status(404).json({ error: 'Talep bulunamadı.' });

  if (demand.status !== 'open') {
    return res.status(400).json({ error: 'Bu talep zaten karşılanmış veya iptal edilmiş.' });
  }

  db.prepare(`
    UPDATE demands SET status = 'fulfilled', fulfilled_by_id = ?, fulfilled_by_name = ?
    WHERE id = ?
  `).run(req.user.id, req.user.name, req.params.id);

  // Bağışçının etkisini güncelle (örnek: her karşılama +1 öğün)
  db.prepare(`
    UPDATE users SET shared_meals = shared_meals + 1 WHERE id = ?
  `).run(req.user.id);

  const updated = db.prepare('SELECT * FROM demands WHERE id = ?').get(req.params.id);
  res.json(formatDemand(updated));
});

// ─────────────────────────────────────────
// DELETE /api/demands/:id — Talep sil
// ─────────────────────────────────────────
router.delete('/:id', requireAuth, (req, res) => {
  const demand = db.prepare('SELECT * FROM demands WHERE id = ?').get(req.params.id);
  if (!demand) return res.status(404).json({ error: 'Talep bulunamadı.' });

  if (demand.requester_id !== req.user.id) {
    return res.status(403).json({ error: 'Bu talebi silme yetkiniz yok.' });
  }

  db.prepare('DELETE FROM demands WHERE id = ?').run(req.params.id);
  res.json({ message: 'Talep başarıyla silindi.' });
});

// ─────────────────────────────────────────
// Yardımcı: Veritabanı sütun adlarını Angular modeline uyarla
// ─────────────────────────────────────────
function formatDemand(d) {
  return {
    id:               d.id,
    requesterId:      d.requester_id,
    requesterName:    d.requester_name,
    category:         d.category,
    title:            d.title,
    description:      d.description,
    requiredQuantity: d.required_quantity,
    neededBy:         d.needed_by,
    status:           d.status,
    fulfilledById:    d.fulfilled_by_id,
    fulfilledByName:  d.fulfilled_by_name,
    createdAt:        d.created_at
  };
}

module.exports = router;
