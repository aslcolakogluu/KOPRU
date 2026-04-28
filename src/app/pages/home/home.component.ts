import { Component, inject, OnInit, OnDestroy, AfterViewInit, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';
import { FoodListingService } from '../../services/food-listing.service';
import { FoodListingUtilsService } from '../../services/food-listing-utils.service';
import { CartService } from '../../services/cart.service';
import { AuthService } from '../../services/auth.service';
import { ScrollRevealService } from '../../services/scroll-reveal.service';
import {
  BUSINESS_TYPE_LABELS,
  BUSINESS_TYPE_ICONS,
  BusinessType
} from '../../models/food-listing.model';

import { DialogModule } from 'primeng/dialog';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ButtonModule,
    RippleModule,
    CardModule,
    TagModule,
    DialogModule,
    InputTextareaModule
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy, AfterViewInit {
  private listingService = inject(FoodListingService);
  private cartService = inject(CartService);
  auth = inject(AuthService);
  private router = inject(Router);
  private scrollReveal = inject(ScrollRevealService);
  utils = inject(FoodListingUtilsService);

  ngOnInit() {
    // Rotate activities every 5 seconds for a living feel
    this.activityInterval = setInterval(() => {
      this.currentActivityIndex.update(i => (i + 1) % this.liveActivities().length);
    }, 5000);
  }

  ngAfterViewInit() {
    this.scrollReveal.observe();
  }

  ngOnDestroy() {
    if (this.activityInterval) {
      clearInterval(this.activityInterval);
    }
  }

  stats = this.listingService.stats;
  recentListings = this.listingService.activeListings;

  // Simulated Live Activities for the "Living Hero" concept
  liveActivities = signal([
    { text: 'Saray Pastanesi 10 poğaça paylaştı', icon: 'pi pi-bolt', color: '#ffd54f' },
    { text: 'Murat Bey 3 porsiyon çorba ayırdı', icon: 'pi pi-heart-fill', color: '#ff8a80' },
    { text: 'Aşevi 20 kg sebze teslim aldı', icon: 'pi pi-truck', color: '#81c784' }
  ]);
  currentActivityIndex = signal(0);
  currentActivity = computed(() => this.liveActivities()[this.currentActivityIndex()]);

  private activityInterval: any;





  // Merkezi utils servisine yönlendirme
  getBusinessLabel = (t: BusinessType) => this.utils.getBusinessLabel(t);
  getBusinessIcon = (t: BusinessType) => this.utils.getBusinessIcon(t);
  getCategoryImage = (c: string) => this.utils.getCategoryImage(c);
  getCategoryIcon = (c: string) => this.utils.getCategoryIcon(c);

  // Sepete ekleme akışı — artık listings ile tutarlı
  detailVisible = false;
  selectedListingId: number | null = null;
  deliveryAddress = '';

  openDetail(listing: any) {
    // Sepete ekle ve bildirimi göster
    this.cartService.addToCart(listing);
  }

  openReserveDialog(listingId: number) {
    this.selectedListingId = listingId;
    this.detailVisible = true;
  }

  confirmReserve() {
    if (this.selectedListingId !== null && this.deliveryAddress.trim()) {
      this.listingService.reserveListing(this.selectedListingId, this.deliveryAddress);
      this.detailVisible = false;
      this.deliveryAddress = '';
      this.selectedListingId = null;
    }
  }
}
