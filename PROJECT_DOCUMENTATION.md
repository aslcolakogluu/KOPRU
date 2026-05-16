# KÖPRÜ: Gıda İsrafıyla Mücadelede Dijital Ekosistem ve Sosyal Etki Platformu
## Teknik Analiz ve Proje Dokümantasyonu (Tez Hazırlık Formatı)

---

## 1. Özet (Abstract)
Bu çalışma, günümüzün en büyük küresel sorunlarından biri olan gıda israfına teknolojik bir çözüm sunan **KÖPRÜ** platformunun tasarım, geliştirme ve uygulama süreçlerini ele almaktadır. KÖPRÜ, arz fazlası gıdayı (surplus food) dijital bir pazar yeri üzerinden son kullanıcıyla buluşturan, gerçek zamanlı veri akışı ve lokasyon tabanlı servisleri kullanan tam kapsamlı bir (full-stack) web uygulamasıdır.

---

## 2. Problemin Tanımı ve Motivasyon
### 2.1. Küresel Gıda İsrafı ve Çevresel Etki
Birleşmiş Milletler raporlarına göre, üretilen gıdaların üçte biri çöpe gitmektedir. Bu durum sadece ekonomik bir kayıp değil, aynı zamanda metan gazı emisyonu ve su israfı gibi ciddi çevresel krizlerin tetikleyicisidir.
### 2.2. Yerel Dinamikler ve İhtiyaç
Restoran, market ve otel gibi işletmeler, gün sonunda "kaliteli ancak satılamayacak" gıdaları bertaraf etmek zorunda kalmaktadır. KÖPRÜ, bu süreci bir lojistik ve veri problemine indirgeyerek, hızlı tüketim gerektiren bu gıdaların saniyeler içinde "kurtarılmasını" sağlar.

---

## 3. Sistem Mimarisi (System Architecture)
Proje, **Monolitik API** ve **SPA (Single Page Application)** mimarilerinin hibrit bir yapısını kullanmaktadır.

### 3.1. Frontend Mimari (Client-Side)
- **Framework:** Angular 18 (Signal tabanlı reaktif yapı).
- **Durum Yönetimi (State Management):** Angular Signals kullanılarak, bileşenler arası veri senkronizasyonu minimum maliyet ve maksimum hızla gerçekleştirilmiştir.
- **Tasarım Felsefesi:** *Glassmorphism* ve *Modern Minimalizm*. Kullanıcı arayüzünde şeffaflık ve derinlik hissi veren CSS teknikleri kullanılarak, gıda güvenliği ve temizliği algısı pekiştirilmiştir.
- **UI Bileşenleri:** PrimeNG kütüphanesi üzerinden özelleştirilmiş (customized) bileşenler.

### 3.2. Backend Mimari (Server-Side)
- **Çalışma Ortamı:** Node.js.
- **Sunucu Yazılımı:** Express.js Framework.
- **Veritabanı:** SQLite3 (better-sqlite3 entegrasyonu). İlişkisel veritabanı yapısı, ilanlar, kullanıcılar ve rezervasyonlar arasındaki karmaşık ilişkileri yönetmek için tercih edilmiştir.
- **API Yapısı:** RESTful API prensipleri doğrultusunda tasarlanmış, stateless (durumsuz) iletişim protokolü.

---

## 4. Veritabanı ve Veri Modeli Tasarımı
Uygulamanın kalbi olan `FoodListing` modeli, şu kritik parametreleri içermektedir:
- **Spatial Data:** İlanların harita üzerinde gösterimi için `lat` (enlem) ve `lng` (boylam) koordinatları.
- **Temporal Data:** Gıdanın tazeliğini koruduğu süreyi belirten `expiresAt`.
- **Identity & Traceability:** İlanı oluşturan (`ownerId`) ve rezerve eden (`reservedById`) kullanıcıların takibi.
- **Business Metadata:** İşletme şeffaflığı için `websiteUrl` ve `imageUrl`.

---

## 5. Uygulanan Kritik Teknolojik Çözümler

### 5.1. Flash Alerts (Gerçek Zamanlı Farkındalık)
Bozulma riski en yüksek ürünlerin (örneğin sıcak yemekler) fark edilmesi için geliştirilen bu sistem, CSS animasyonları ve `isUrgent` bayrağı (flag) ile kullanıcıyı görsel olarak uyarır.

### 5.2. KVKK ve Yasal Uyumluluk Entegrasyonu
Kullanıcı verilerinin korunması amacıyla, kayıt aşamasında engellenemez (blocking) bir onay mekanizması kurgulanmıştır. Yasal metinler dinamik dialog bileşenleri ile sunulmuş, kullanıcı onayı veritabanında zaman damgalı (timestamp) olarak saklanmaktadır.

### 5.3. Dinamik Görselleştirme (AI-Generated Content)
Proje kapsamında, kullanıcı deneyimini artırmak amacıyla her işletme türüne özel, markalı görseller (CarrefourSA, Hilton vb.) entegre edilmiştir. Bu, uygulamanın ticari potansiyelini ve güvenilirliğini artıran bir "proof-of-concept" çalışmasıdır.

### 5.4. Lokasyon Servisleri (Leaflet Integration)
İlanların doğruluğunu teyit etmek ve kullanıcıya en yakın gıdayı göstermek için açık kaynaklı Leaflet kütüphanesi kullanılarak interaktif bir harita modülü geliştirilmiştir.

---

## 6. Geliştirme Süreci ve Metodoloji
1.  **Analiz:** İşletme ve kullanıcı ihtiyaçları belirlendi.
2.  **Prototipleme:** Önce Figma benzeri bir vizyonla UI/UX tasarımı yapıldı, ardından SCSS ile hayata geçirildi.
3.  **Core Development:** API uç noktaları (endpoints) ve frontend servisleri asenkron bir yapıda bağlandı.
4.  **Testing & Optimization:** Build hataları giderildi, "dead-code" temizliği yapıldı ve görsel varlıklar (assets) optimize edildi.

---

## 7. Sonuç ve Gelecek Vizyonu
KÖPRÜ, sadece bir uygulama değil, bir **döngüsel ekonomi** aracıdır. Gelecekte sisteme eklenebilecek "Gamification" (oyunlaştırma) modülleri ile en çok gıda kurtaran kullanıcılara rozetler verilmesi ve "Heatmap" (ısı haritası) ile gıda israfının yoğun olduğu bölgelerin tespiti planlanmaktadır.

---
**Hazırlayan:** Antigravity AI (Geliştirici Asistanı)
**Proje Adı:** KÖPRÜ
**Tarih:** 15 Mayıs 2026
