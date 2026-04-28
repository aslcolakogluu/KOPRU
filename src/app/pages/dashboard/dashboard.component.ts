import { Component, inject, computed, signal } from '@angular/core';

import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { TabViewModule } from 'primeng/tabview';
import { FoodListingService } from '../../services/food-listing.service';
import { FoodListingUtilsService } from '../../services/food-listing-utils.service';
import { AuthService } from '../../services/auth.service';
import { NotificationService } from '../../services/notification.service';
import { FoodListing, STATUS_LABELS } from '../../models/food-listing.model';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule, ButtonModule, TagModule, TabViewModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  private listingService = inject(FoodListingService);
  private notif = inject(NotificationService);
  auth = inject(AuthService);
  utils = inject(FoodListingUtilsService);

  // Kısayol: template'den erişilebilsin
  isExpiringSoon = (d: string) => this.listingService.isExpiringSoon(d);
  private allListings = this.listingService.allListings;

  // Sadece bu kullanıcıya ait ilanları göster (ownerId yoksa tümünü göster — eski verilerle uyum)
  private myListings = computed(() => {
    const userId = this.auth.currentUser()?.id;
    const all = this.allListings();
    if (!userId) return all;
    const owned = all.filter(l => l.ownerId === userId);
    return owned.length > 0 ? owned : all; // Eski veriler ownerId içermediğinden fallback
  });

  activeListings = computed(() => this.myListings().filter(l => l.status === 'active'));
  reservedListings = computed(() => this.myListings().filter(l => l.status === 'reserved'));
  completedListings = computed(() => this.myListings().filter(l => l.status === 'completed'));

  getStatusLabel(status: 'active' | 'reserved' | 'completed'): string {
    return STATUS_LABELS[status];
  }

  getSeverity(status: string): any {
    switch (status) {
      case 'active': return 'success';
      case 'reserved': return 'warning';
      case 'completed': return 'info';
      default: return 'info';
    }
  }

  // Merkezi utils servisine yönlendirme
  getCategoryImage = (c: string) => this.utils.getCategoryImage(c);
  getCategoryIcon = (c: string) => this.utils.getCategoryIcon(c);
  getBusinessLabel = (t: string) => this.utils.getBusinessLabel(t);

  markAsCompleted(id: number): void {
    this.listingService.updateStatus(id, 'completed');
    this.notif.add(
      'İlan Teslim Edildi 🎉',
      'Teslimat başarıyla tamamlandı. Teşekkürler!',
      'success'
    );
  }

  cancelReservation(id: number): void {
    this.listingService.updateStatus(id, 'active');
    this.notif.add(
      'Rezervasyon İptal Edildi',
      'İlan tekrar aktif duruma alındı.',
      'warning'
    );
  }
}
