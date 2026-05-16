// ============================================================
// demand.service.ts — Gıda Talepleri Servisi
// Gerçek Node.js + Express backend API'sine bağlanır.
// Backend yoksa mock verilerle çalışmaya devam eder.
// ============================================================

import { Injectable, inject, signal, computed } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { FoodDemand, DemandStatus } from '../models/food-demand.model';
import { AuthService } from './auth.service';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root'
})
export class DemandService {
  private http = inject(HttpClient);
  private auth = inject(AuthService);
  private notification = inject(NotificationService);
  private apiUrl = 'http://localhost:3000/api/demands';

  private demandsSignal = signal<FoodDemand[]>([]);
  public readonly demands       = this.demandsSignal.asReadonly();
  public readonly openDemands   = computed(() => this.demands().filter(d => d.status === 'open'));
  public readonly fulfilledDemands = computed(() => this.demands().filter(d => d.status === 'fulfilled'));

  constructor() {
    this.loadDemands();
  }

  // ─────────────────────────────────────────
  // Talepleri API'den yükle ve rastgele yenilerini ekle
  // ─────────────────────────────────────────
  async loadDemands(randomize = false): Promise<void> {
    let backendDemands: FoodDemand[] = [];
    try {
      backendDemands = await firstValueFrom(this.http.get<FoodDemand[]>(this.apiUrl));
    } catch (error) {
      console.warn('Backend erişilemedi.');
    }

    if (randomize) {
      // Sayfanın dolu gözükmesi için daha fazla rastgele veri (7-12 arası)
      const randomMockCount = Math.floor(Math.random() * 6) + 7;
      const randomMocks: FoodDemand[] = Array.from({ length: randomMockCount }).map((_, i) => this.generateRandomMockDemand(i));
      
      const combined = [...backendDemands, ...randomMocks];
      // Karıştır
      combined.sort(() => Math.random() - 0.5);
      
      this.demandsSignal.set(combined);
    } else {
      // Mevcut ilanları koru veya mock verileri yükle
      if (this.demandsSignal().length === 0) {
        this.demandsSignal.set(backendDemands.length > 0 ? backendDemands : this.getMockDemands());
      } else if (backendDemands.length > 0) {
        this.demandsSignal.set(backendDemands);
      }
    }
  }

  private generateRandomMockDemand(index: number): FoodDemand {
    const requesters = [
      'Umut Barınağı', 'Merkez Aşevi', 'Sokak Hayvanları Derneği', 'Öğrenci Yurdu', 
      'Dayanışma Vakfı', 'Mahalle Komitesi', 'Kardeşlik Sofrası', 'İyilik Hareketi',
      'Yuvamız Çocuk Esirgeme', 'Yaşlı Bakımevi Derneği', 'Gıda Bankası'
    ];
    const categories = ['bakery_item', 'prepared', 'produce', 'packaged', 'mixed'] as const;
    
    const titlePrefixes = ['Acil', 'Haftalık', 'Günlük', 'Sürpriz', 'Öğle Yemeği', 'Akşam Menüsü', 'Etkinlik için', 'Yarınki'];
    const titleSubjects = ['Ekmek Desteği', 'Çorba Malzemesi', 'Meyve Sepeti', 'Hazır Yemek Takviyesi', 'Kuru Gıda Paketi', 'Süt Ürünleri', 'Sandviç Malzemesi', 'Tatlı İkramı'];
    const titleSuffixes = ['İhtiyacı', 'Talebi', 'Arayışı', 'Eksiği', 'Gereksinimi'];

    const descriptions = [
      'Etkinliğimiz için acil gıda desteğine ihtiyacımız var.',
      'Ramazan ayı dolayısıyla iftariyelik eksiğimiz oluştu.',
      'Çocuklara dağıtılmak üzere taze meyve ve sebze arıyoruz.',
      'Gönüllü ekibimizin öğle yemeği için pratik yiyeceklere ihtiyacımız var.',
      'Haftalık erzak dağıtımı için paketli ürünler arıyoruz.',
      'Kapanış saati öncesi kalan ürünlerinizi değerlendirmek istiyoruz.',
      'Yaklaşan kermesimiz için çeşitli gıda ürünlerine ihtiyacımız var.'
    ];
    
    const randomRequester = requesters[Math.floor(Math.random() * requesters.length)];
    const randomCategory = categories[Math.floor(Math.random() * categories.length)];
    
    // Create a more unique title by combining parts
    const randomPrefix = titlePrefixes[Math.floor(Math.random() * titlePrefixes.length)];
    const randomSubject = titleSubjects[Math.floor(Math.random() * titleSubjects.length)];
    const randomSuffix = titleSuffixes[Math.floor(Math.random() * titleSuffixes.length)];
    const randomTitle = `${randomPrefix} ${randomSubject} ${randomSuffix}`;
    
    const randomDesc = descriptions[Math.floor(Math.random() * descriptions.length)];
    
    // Future date between 1 and 14 days
    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + Math.floor(Math.random() * 14) + 1);
    
    return {
      id: 10000 + Math.floor(Math.random() * 90000) + index,
      requesterId: 200 + Math.floor(Math.random() * 100),
      requesterName: randomRequester,
      category: randomCategory,
      title: randomTitle,
      description: randomDesc,
      requiredQuantity: `${Math.floor(Math.random() * 40) + 10} Kişilik`,
      neededBy: futureDate.toISOString().split('T')[0],
      status: 'open', // Always open initially for mock generation
      createdAt: new Date().toISOString().split('T')[0]
    };
  }

  // ─────────────────────────────────────────
  // Yeni talep oluştur
  // ─────────────────────────────────────────
  async addDemand(
    demand: Omit<FoodDemand, 'id' | 'status' | 'createdAt' | 'requesterId' | 'requesterName'>
  ): Promise<void> {
    const user = this.auth.currentUser();
    if (!user) return;

    try {
      const newDemand = await firstValueFrom(
        this.http.post<FoodDemand>(this.apiUrl, demand, {
          headers: this.auth.getAuthHeaders()
        })
      );
      this.demandsSignal.update(deps => [newDemand, ...deps]);
    } catch {
      // Yerel fallback
      const localDemand: FoodDemand = {
        ...demand,
        id: Math.floor(Math.random() * 10000),
        requesterId: user.id,
        requesterName: user.name,
        status: 'open',
        createdAt: new Date().toISOString().split('T')[0]
      };
      this.demandsSignal.update(deps => [localDemand, ...deps]);
    }

    this.notification.add('Başarılı', 'Talebiniz başarıyla oluşturuldu ve bağışçılara iletildi.', 'success');
  }

  // ─────────────────────────────────────────
  // Talebi karşıla
  // ─────────────────────────────────────────
  async fulfillDemand(demandId: number): Promise<void> {
    const user = this.auth.currentUser();
    if (!user) {
      this.notification.add('Hata', 'Talebi karşılamak için bağışçı olarak giriş yapmalısınız.', 'error');
      return;
    }

    try {
      const updated = await firstValueFrom(
        this.http.put<FoodDemand>(`${this.apiUrl}/${demandId}/fulfill`, {}, {
          headers: this.auth.getAuthHeaders()
        })
      );
      this.demandsSignal.update(deps =>
        deps.map(d => d.id === demandId ? updated : d)
      );
    } catch {
      // Yerel fallback
      this.demandsSignal.update(deps =>
        deps.map(d => d.id === demandId
          ? { ...d, status: 'fulfilled' as DemandStatus, fulfilledById: user.id, fulfilledByName: user.name }
          : d
        )
      );
    }

    this.notification.add('Harika!', 'Bu talebi başarıyla karşıladığınızı bildirdiniz. Kurum sizinle iletişime geçecektir.', 'success');
  }

  // ─────────────────────────────────────────
  // Backend yoksa kullanılacak örnek veriler
  // ─────────────────────────────────────────
  private getMockDemands(): FoodDemand[] {
    return [
      {
        id: 1,
        requesterId: 101,
        requesterName: 'Umut Barınağı',
        category: 'bakery_item',
        title: 'Haftasonu Etkinliği İçin Börek/Sandviç',
        description: 'Barınağımızı ziyaret edecek 50 kişilik öğrenci grubu için öğle atıştırmalığına ihtiyacımız var.',
        requiredQuantity: '50 Porsiyon',
        neededBy: '2026-06-15',
        status: 'open',
        createdAt: '2026-05-01'
      },
      {
        id: 2,
        requesterId: 102,
        requesterName: 'Merkez Aşevi',
        category: 'prepared',
        title: 'Sıcak Akşam Yemeği Takviyesi',
        description: 'Ramazan dolayısıyla iftar menümüzde sulu yemek eksiğimiz oluştu.',
        requiredQuantity: '100 Porsiyon',
        neededBy: '2026-06-10',
        status: 'open',
        createdAt: '2026-05-02'
      }
    ];
  }
}
