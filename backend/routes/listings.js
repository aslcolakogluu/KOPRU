// ============================================================
// routes/listings.js — Gıda ilanları CRUD rotaları
// GET    /api/listings        → Tüm ilanlar
// GET    /api/listings/:id    → Tek ilan
// POST   /api/listings        → Yeni ilan (auth gerekli)
// PUT    /api/listings/:id    → İlan güncelle (auth gerekli)
// DELETE /api/listings/:id    → İlan sil (auth gerekli)
// ============================================================

const express = require('express');
const db = require('../database');
const { requireAuth } = require('../middleware/auth');

const router = express.Router();

// ─────────────────────────────────────────
// GET /api/listings — Tüm ilanları getir
// ─────────────────────────────────────────
router.get('/', (req, res) => {
  const { status, category, businessType, search } = req.query;

  let query = 'SELECT * FROM listings WHERE 1=1';
  const params = [];

  if (status)       { query += ' AND status = ?';        params.push(status); }
  if (category)     { query += ' AND category = ?';      params.push(category); }
  if (businessType) { query += ' AND business_type = ?'; params.push(businessType); }
  if (search) {
    query += ' AND (title LIKE ? OR description LIKE ? OR business_name LIKE ?)';
    const like = `%${search}%`;
    params.push(like, like, like);
  }

  query += ' ORDER BY created_at DESC';

  const listings = db.prepare(query).all(...params);
  res.json(listings.map(formatListing));
});

// ─────────────────────────────────────────
// GET /api/listings/:id — Tek ilan
// ─────────────────────────────────────────
router.get('/:id', (req, res) => {
  const listing = db.prepare('SELECT * FROM listings WHERE id = ?').get(req.params.id);
  if (!listing) return res.status(404).json({ error: 'İlan bulunamadı.' });
  res.json(formatListing(listing));
});

// ─────────────────────────────────────────
// POST /api/listings — Yeni ilan oluştur
// ─────────────────────────────────────────
router.post('/', requireAuth, (req, res) => {
  const {
    businessName, businessType, category, title, description,
    quantity, expiresAt, location, imageUrl,
    isUrgent, isRecurring, recurringFrequency, contactPhone, deliveryAddress,
    lat, lng, price, websiteUrl
  } = req.body;

  if (!businessName || !businessType || !category || !title || !description || !quantity || !expiresAt || !location) {
    return res.status(400).json({ error: 'Zorunlu alanlar eksik.' });
  }

  const result = db.prepare(`
    INSERT INTO listings
      (owner_id, business_name, business_type, category, title, description,
       quantity, expires_at, location, image_url, status,
       is_urgent, is_recurring, recurring_frequency, contact_phone, delivery_address,
       lat, lng, price, website_url)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'active', ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `).run(
    req.user.id,
    businessName, businessType, category, title, description,
    quantity, expiresAt, location, imageUrl || null,
    isUrgent ? 1 : 0,
    isRecurring ? 1 : 0,
    recurringFrequency || null,
    contactPhone || null,
    deliveryAddress || null,
    lat ?? null,
    lng ?? null,
    price || 0,
    websiteUrl || null
  );

  const newListing = db.prepare('SELECT * FROM listings WHERE id = ?').get(result.lastInsertRowid);
  res.status(201).json(formatListing(newListing));
});

// ─────────────────────────────────────────
// PUT /api/listings/:id — İlan güncelle
// ─────────────────────────────────────────
router.put('/:id', requireAuth, (req, res) => {
  const listing = db.prepare('SELECT * FROM listings WHERE id = ?').get(req.params.id);
  if (!listing) return res.status(404).json({ error: 'İlan bulunamadı.' });

  // Sadece ilan sahibi güncelleyebilir
  if (listing.owner_id && listing.owner_id !== req.user.id) {
    return res.status(403).json({ error: 'Bu ilanı güncelleme yetkiniz yok.' });
  }

  const {
    businessName, businessType, category, title, description,
    quantity, expiresAt, location, imageUrl, status,
    isUrgent, isRecurring, recurringFrequency, contactPhone, deliveryAddress,
    lat, lng, price, websiteUrl
  } = req.body;

  console.log(`Updating listing ${req.params.id}:`, req.body);

  const updateResult = db.prepare(`
    UPDATE listings SET
      business_name = ?, business_type = ?, category = ?, title = ?, description = ?,
      quantity = ?, expires_at = ?, location = ?, image_url = ?, status = ?,
      is_urgent = ?, is_recurring = ?, recurring_frequency = ?,
      contact_phone = ?, delivery_address = ?, lat = ?, lng = ?, price = ?, website_url = ?
    WHERE id = ?
  `).run(
    businessName   ?? listing.business_name,
    businessType   ?? listing.business_type,
    category       ?? listing.category,
    title          ?? listing.title,
    description    ?? listing.description,
    quantity       ?? listing.quantity,
    expiresAt      ?? listing.expires_at,
    location       ?? listing.location,
    imageUrl       ?? listing.image_url,
    status         ?? listing.status,
    isUrgent !== undefined ? (isUrgent ? 1 : 0) : listing.is_urgent,
    isRecurring !== undefined ? (isRecurring ? 1 : 0) : listing.is_recurring,
    recurringFrequency ?? listing.recurring_frequency,
    contactPhone   ?? listing.contact_phone,
    deliveryAddress ?? listing.delivery_address,
    lat            ?? listing.lat,
    lng            ?? listing.lng,
    price          ?? listing.price,
    websiteUrl     ?? listing.website_url,
    req.params.id
  );

  console.log(`Update result for ${req.params.id}:`, updateResult);

  const updated = db.prepare('SELECT * FROM listings WHERE id = ?').get(req.params.id);
  res.json(formatListing(updated));
});

// ─────────────────────────────────────────
// DELETE /api/listings/:id — İlan sil
// ─────────────────────────────────────────
router.delete('/:id', requireAuth, (req, res) => {
  const listing = db.prepare('SELECT * FROM listings WHERE id = ?').get(req.params.id);
  if (!listing) return res.status(404).json({ error: 'İlan bulunamadı.' });

  if (listing.owner_id && listing.owner_id !== req.user.id) {
    return res.status(403).json({ error: 'Bu ilanı silme yetkiniz yok.' });
  }

  db.prepare('DELETE FROM listings WHERE id = ?').run(req.params.id);
  res.json({ message: 'İlan başarıyla silindi.' });
});

// ─────────────────────────────────────────
// Yardımcı: Veritabanı sütun adlarını Angular modeline uyarla
// ─────────────────────────────────────────
function formatListing(l) {
  return {
    id:                 l.id,
    ownerId:            l.owner_id,
    businessName:       l.business_name,
    businessType:       l.business_type,
    category:           l.category,
    title:              l.title,
    description:        l.description,
    quantity:           l.quantity,
    expiresAt:          l.expires_at,
    location:           l.location,
    imageUrl:           l.image_url,
    status:             l.status,
    isUrgent:           !!l.is_urgent,
    isRecurring:        !!l.is_recurring,
    recurringFrequency: l.recurring_frequency,
    contactPhone:       l.contact_phone,
    deliveryAddress:    l.delivery_address,
    lat:                l.lat,
    lng:                l.lng,
    price:              l.price || 0,
    websiteUrl:         l.website_url,
    createdAt:          l.created_at
  };
}

module.exports = router;
