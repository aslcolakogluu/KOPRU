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
  // Talepleri API'den yükle
  // ─────────────────────────────────────────
  async loadDemands(): Promise<void> {
    try {
      const data = await firstValueFrom(this.http.get<FoodDemand[]>(this.apiUrl));
      this.demandsSignal.set(data);
    } catch (error) {
      console.warn('Backend erişilemedi, örnek talepler yükleniyor.');
      this.demandsSignal.set(this.getMockDemands());
    }
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
