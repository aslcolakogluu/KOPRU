import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { TooltipModule } from 'primeng/tooltip';
import { FoodListingService } from '../../services/food-listing.service';
import { AuthService } from '../../services/auth.service';
import { FoodListingUtilsService } from '../../services/food-listing-utils.service';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule, RouterModule, ButtonModule, TagModule, TooltipModule],
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent {
  private listingService = inject(FoodListingService);
  private auth = inject(AuthService);
  utils = inject(FoodListingUtilsService);

  getListingImage(listing: any): string {
    if (listing.imageUrl) return listing.imageUrl;
    return this.utils.getCategoryImage(listing.category as any);
  }

  // Rezervasyonu bu kullanıcı tarafından yapılan ilanları filtrele
  orders = computed(() => {
    const user = this.auth.currentUser();
    if (!user) return [];
    return this.listingService.allListings().filter(l => 
      l.reservedById == user.id || (l.status === 'reserved' && l.reservedById === undefined) // Fallback for session-based testing
    ).sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  });

  getStatusSeverity(status: string) {
    switch (status) {
      case 'active': return 'info';
      case 'reserved': return 'warning';
      case 'completed': return 'success';
      default: return 'info';
    }
  }

  getStatusLabel(status: string) {
    switch (status) {
      case 'active': return 'Aktif';
      case 'reserved': return 'Hazırlanıyor';
      case 'completed': return 'Teslim Edildi';
      default: return status;
    }
  }

  openWebsite(url: string | undefined): void {
    if (!url) return;
    window.open(url, '_blank', 'noopener,noreferrer');
  }
}
