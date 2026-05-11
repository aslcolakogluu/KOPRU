// ============================================================
// database.js — SQLite veritabanı bağlantısı ve tablo kurulumu
// Uygulama ilk başladığında tabloları oluşturur ve örnek veri yükler
// ============================================================

const Database = require('better-sqlite3');
const path = require('path');

// Veritabanı dosyası backend/ klasöründe kopru.db olarak oluşturulur
const db = new Database(path.join(__dirname, 'kopru.db'));

// Performans için WAL modu aktif et
db.pragma('journal_mode = WAL');
db.pragma('foreign_keys = ON');

// ─────────────────────────────────────────
// Tabloları oluştur (yoksa)
// ─────────────────────────────────────────
db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id            INTEGER PRIMARY KEY AUTOINCREMENT,
    email         TEXT    NOT NULL UNIQUE,
    password_hash TEXT    NOT NULL,
    name          TEXT    NOT NULL,
    role          TEXT    NOT NULL DEFAULT 'donor',  -- 'donor' | 'receiver'
    business_name TEXT,
    phone         TEXT,
    saved_kg      REAL    NOT NULL DEFAULT 0,
    shared_meals  INTEGER NOT NULL DEFAULT 0,
    reset_token   TEXT,
    reset_token_expiry TEXT,
    created_at    TEXT    NOT NULL DEFAULT (datetime('now'))
  );

  CREATE TABLE IF NOT EXISTS listings (
    id                  INTEGER PRIMARY KEY AUTOINCREMENT,
    owner_id            INTEGER REFERENCES users(id) ON DELETE SET NULL,
    business_name       TEXT    NOT NULL,
    business_type       TEXT    NOT NULL,
    category            TEXT    NOT NULL,
    title               TEXT    NOT NULL,
    description         TEXT    NOT NULL,
    quantity            TEXT    NOT NULL,
    expires_at          TEXT    NOT NULL,
    location            TEXT    NOT NULL,
    image_url           TEXT,
    status              TEXT    NOT NULL DEFAULT 'active',
    is_urgent           INTEGER NOT NULL DEFAULT 0,
    is_recurring        INTEGER NOT NULL DEFAULT 0,
    recurring_frequency TEXT,
    contact_phone       TEXT,
    delivery_address    TEXT,
    created_at          TEXT    NOT NULL DEFAULT (datetime('now'))
  );

  CREATE TABLE IF NOT EXISTS demands (
    id                INTEGER PRIMARY KEY AUTOINCREMENT,
    requester_id      INTEGER REFERENCES users(id) ON DELETE SET NULL,
    requester_name    TEXT    NOT NULL,
    category          TEXT    NOT NULL,
    title             TEXT    NOT NULL,
    description       TEXT    NOT NULL,
    required_quantity TEXT    NOT NULL,
    needed_by         TEXT    NOT NULL,
    status            TEXT    NOT NULL DEFAULT 'open',
    fulfilled_by_id   INTEGER REFERENCES users(id) ON DELETE SET NULL,
    fulfilled_by_name TEXT,
    created_at        TEXT    NOT NULL DEFAULT (datetime('now'))
  );
`);

// ─────────────────────────────────────────
// Örnek ilan verisi — sadece tablo boşsa yükle
// ─────────────────────────────────────────
const listingCount = db.prepare('SELECT COUNT(*) as c FROM listings').get().c;
if (listingCount === 0) {
  const insertListing = db.prepare(`
    INSERT INTO listings
      (business_name, business_type, category, title, description, quantity, expires_at, location, status, created_at)
    VALUES
      (@business_name, @business_type, @category, @title, @description, @quantity, @expires_at, @location, @status, @created_at)
  `);

  const seedListings = [
    { business_name: 'CarrefourSA Kadıköy',      business_type: 'market',    category: 'packaged',    title: 'Son kullanma tarihi yaklaşan süt ürünleri',  description: 'Yoğurt, süt ve ayran çeşitleri. Son kullanma tarihi 2 gün içinde.',               quantity: '45 adet',       expires_at: '2026-06-01', location: 'Kadıköy, İstanbul',  status: 'active', created_at: new Date().toISOString() },
    { business_name: 'Hilton İstanbul Bomonti',  business_type: 'hotel',     category: 'prepared',    title: 'Akşam büfe artığı yemekler',                 description: 'Pilav, sebze yemekleri, çorba ve salata çeşitleri. Taze ve hijyenik.',           quantity: '~30 porsiyon',  expires_at: '2026-06-01', location: 'Şişli, İstanbul',     status: 'active', created_at: new Date().toISOString() },
    { business_name: 'Simit Sarayı Beşiktaş',   business_type: 'bakery',    category: 'bakery_item', title: 'Gün sonu kalan unlu mamuller',               description: 'Simit, poğaça, açma ve börek çeşitleri. Bugünkü üretim.',                       quantity: '60+ adet',      expires_at: '2026-06-02', location: 'Beşiktaş, İstanbul', status: 'active', created_at: new Date().toISOString() },
    { business_name: 'İTÜ Yurt Yemekhanesi',    business_type: 'dormitory', category: 'prepared',    title: 'Öğlen yemeği fazlası',                       description: 'Mercimek çorbası, kuru fasulye, pilav ve komposto. Hijyenik koşullarda.',        quantity: '~50 porsiyon',  expires_at: '2026-06-01', location: 'Sarıyer, İstanbul',  status: 'reserved', created_at: new Date().toISOString() },
    { business_name: 'Migros Ataşehir',          business_type: 'market',    category: 'produce',     title: 'Taze meyve ve sebzeler',                     description: 'Az hasarlı ama tüketilebilir meyve ve sebzeler. Elma, portakal, domates, biber.', quantity: '25 kg',         expires_at: '2026-06-02', location: 'Ataşehir, İstanbul', status: 'active', created_at: new Date().toISOString() },
    { business_name: 'Nusr-Et Steakhouse',       business_type: 'restaurant',category: 'prepared',    title: 'Kapanış saati öncesi kalan yemekler',        description: 'Çeşitli et yemekleri, garnitürler ve tatlı çeşitleri.',                         quantity: '~20 porsiyon',  expires_at: '2026-06-01', location: 'Etiler, İstanbul',   status: 'active', created_at: new Date().toISOString() },
    { business_name: 'Saray Muhallebicisi',      business_type: 'bakery',    category: 'bakery_item', title: 'Gün sonu kalan pasta ve tatlılar',           description: 'Çeşitli pastalar, kurabiyeler, profiterol ve sütlaç.',                          quantity: '~35 porsiyon',  expires_at: '2026-06-02', location: 'Beyoğlu, İstanbul',  status: 'active', created_at: new Date().toISOString() },
    { business_name: 'BİM Üsküdar',             business_type: 'market',    category: 'mixed',       title: 'Karışık gıda ürünleri',                      description: 'Ekmek, peynir, zeytin ve çeşitli konserve ürünler. Son kullanma tarihleri yakın.', quantity: '~30 adet',      expires_at: '2026-06-03', location: 'Üsküdar, İstanbul',  status: 'active', created_at: new Date().toISOString() },
  ];

  const insertMany = db.transaction((items) => {
    for (const item of items) insertListing.run(item);
  });
  insertMany(seedListings);
  console.log('✅ Örnek ilan verileri yüklendi.');
}

// ─────────────────────────────────────────
// Örnek talep verisi — sadece tablo boşsa yükle
// ─────────────────────────────────────────
const demandCount = db.prepare('SELECT COUNT(*) as c FROM demands').get().c;
if (demandCount === 0) {
  db.prepare(`
    INSERT INTO demands (requester_id, requester_name, category, title, description, required_quantity, needed_by, status)
    VALUES (NULL, 'Umut Barınağı', 'bakery_item', 'Haftasonu Etkinliği İçin Börek/Sandviç',
      'Barınağımızı ziyaret edecek 50 kişilik öğrenci grubu için öğle atıştırmalığına ihtiyacımız var.',
      '50 Porsiyon', '2026-06-15', 'open')
  `).run();

  db.prepare(`
    INSERT INTO demands (requester_id, requester_name, category, title, description, required_quantity, needed_by, status)
    VALUES (NULL, 'Merkez Aşevi', 'prepared', 'Sıcak Akşam Yemeği Takviyesi',
      'Ramazan dolayısıyla iftar menümüzde sulu yemek eksiğimiz oluştu.',
      '100 Porsiyon', '2026-06-10', 'open')
  `).run();

  console.log('✅ Örnek talep verileri yüklendi.');
}

module.exports = db;
