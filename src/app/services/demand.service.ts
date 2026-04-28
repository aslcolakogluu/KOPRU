import { Injectable, inject, signal, computed } from '@angular/core';
import { FoodDemand, DemandStatus } from '../models/food-demand.model';
import { AuthService } from './auth.service';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root'
})
export class DemandService {
  private auth = inject(AuthService);
  private notification = inject(NotificationService);

  private demandsSignal = signal<FoodDemand[]>([]);
  public readonly demands = this.demandsSignal.asReadonly();

  public readonly openDemands = computed(() => this.demands().filter(d => d.status === 'open'));
  public readonly fulfilledDemands = computed(() => this.demands().filter(d => d.status === 'fulfilled'));

  constructor() {
    this.loadMockDemands();
  }

  private loadMockDemands() {
    this.demandsSignal.set([
      {
        id: 1,
        requesterId: 101,
        requesterName: 'Umut Barınağı',
        category: 'bakery_item',
        title: 'Haftasonu Etkinliği İçin Börek/Sandviç',
        description: 'Barınağımızı ziyaret edecek 50 kişilik öğrenci grubu için öğle atıştırmalığına ihtiyacımız var.',
        requiredQuantity: '50 Porsiyon',
        neededBy: '2026-04-10',
        status: 'open',
        createdAt: '2026-04-06'
      },
      {
        id: 2,
        requesterId: 102,
        requesterName: 'Merkez Aşevi',
        category: 'prepared',
        title: 'Sıcak Akşam Yemeği Takviyesi',
        description: 'Ramazan dolayısıyla iftar menümüzde sulu yemek eksiğimiz oluştu.',
        requiredQuantity: '100 Porsiyon',
        neededBy: '2026-04-08',
        status: 'open',
        createdAt: '2026-04-07'
      }
    ]);
  }

  addDemand(demand: Omit<FoodDemand, 'id' | 'status' | 'createdAt' | 'requesterId' | 'requesterName'>): void {
    const user = this.auth.currentUser();
    if (!user) return;

    const newDemand: FoodDemand = {
      ...demand,
      id: Math.floor(Math.random() * 10000),
      requesterId: user.id || 999,
      requesterName: user.name,
      status: 'open',
      createdAt: new Date().toISOString().split('T')[0]
    };

    this.demandsSignal.update(deps => [newDemand, ...deps]);
    this.notification.add('Başarılı', 'Talebiniz başarıyla oluşturuldu ve bağışçılara iletildi.', 'success');
  }

  fulfillDemand(demandId: number): void {
    const user = this.auth.currentUser();
    if (!user) {
      this.notification.add('Hata', 'Talebi karşılamak için bağışçı olarak giriş yapmalısınız.', 'error');
      return;
    }

    this.demandsSignal.update(deps => deps.map(d => {
      if (d.id === demandId) {
        return { ...d, status: 'fulfilled', fulfilledById: user.id, fulfilledByName: user.name };
      }
      return d;
    }));

    this.notification.add('Harika!', 'Bu talebi başarıyla karşıladığınızı bildirdiniz. Kurum sizinle iletişime geçecektir.', 'success');
  }
}
