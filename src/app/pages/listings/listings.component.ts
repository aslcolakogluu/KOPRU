import { Component, inject, signal, OnInit, OnDestroy, PLATFORM_ID, AfterViewInit } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { SkeletonModule } from 'primeng/skeleton';
import { TabViewModule } from 'primeng/tabview';
import { TooltipModule } from 'primeng/tooltip';
import { FoodListingService } from '../../services/food-listing.service';
import { CartService } from '../../services/cart.service';
import { ScrollRevealService } from '../../services/scroll-reveal.service';
import { AuthService } from '../../services/auth.service';
import { NotificationService } from '../../services/notification.service';
import {
  BusinessType,
  FoodCategory,
  BUSINESS_TYPE_LABELS,
  FOOD_CATEGORY_LABELS,
  BUSINESS_TYPE_ICONS,
  FoodListing
} from '../../models/food-listing.model';
import { FoodListingUtilsService } from '../../services/food-listing-utils.service';

import * as L from 'leaflet';

@Component({
  selector: 'app-listings',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    TagModule,
    DropdownModule,
    InputTextModule,
    DialogModule,
    SkeletonModule,
    TabViewModule,
    TooltipModule,
    RouterModule
  ],
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.scss']
})
export class ListingsComponent implements OnInit, OnDestroy, AfterViewInit {
  private listingService = inject(FoodListingService);
  private cartService = inject(CartService);
  private scrollReveal = inject(ScrollRevealService);
  private notif = inject(NotificationService);
  private platformId = inject(PLATFORM_ID);
  auth = inject(AuthService);
  utils = inject(FoodListingUtilsService);

  activeTab = 0; // 0: Tüm İlanlar, 1: İlanlarım
  
  businessTypeOptions = Object.entries(BUSINESS_TYPE_LABELS).map(([value, label]) => ({ label, value }));
  categoryOptions = Object.entries(FOOD_CATEGORY_LABELS).map(([value, label]) => ({ label, value }));

  loading = signal(false);
  searchQuery = '';
  selectedBusinessType: string | null = null;
  selectedCategory: string | null = null;
  detailVisible = false;
  selectedListing = signal<FoodListing | null>(null);

  // Map feature
  viewMode: 'list' | 'map' = 'list';
  private map: L.Map | undefined;
  private markers: L.Marker[] = [];

  // Data signals
  listings = signal<FoodListing[]>([]);
  filteredListings = signal<FoodListing[]>([]);

  constructor() { }

  ngOnInit(): void {
    this.loadListings();
    this.scrollReveal.observe();
  }

  ngAfterViewInit(): void { }

  ngOnDestroy(): void {
    if (this.map) {
      this.map.remove();
    }
  }

  loadListings(): void {
    this.loading.set(true);
    this.listingService.loadListings().then(() => {
      this.listings.set(this.listingService.allListings());
      this.applyFilters();
      this.loading.set(false);
    }).catch(err => {
      console.error('Error loading listings:', err);
      this.loading.set(false);
    });
  }

  applyFilters(): void {
    let filtered = this.listings();

    if (this.searchQuery) {
      const q = this.searchQuery.toLowerCase();
      filtered = filtered.filter(l =>
        l.title.toLowerCase().includes(q) ||
        l.businessName.toLowerCase().includes(q)
      );
    }

    if (this.selectedBusinessType) {
      filtered = filtered.filter(l => l.businessType === this.selectedBusinessType);
    }

    if (this.selectedCategory) {
      filtered = filtered.filter(l => l.category === this.selectedCategory);
    }

    this.filteredListings.set(filtered);

    if (this.viewMode === 'map') {
      this.updateMapMarkers();
    }
  }

  getMyListings(): FoodListing[] {
    const user = this.auth.currentUser();
    if (!user) return [];
    return this.listings().filter(l => l.ownerId === user.id);
  }

  toggleViewMode(mode: 'list' | 'map'): void {
    if (this.viewMode === mode) return;
    this.viewMode = mode;

    if (mode === 'map' && isPlatformBrowser(this.platformId)) {
      setTimeout(() => this.initMap(), 400);
    }
  }

  onTabChange(event: any) {
    this.activeTab = event.index;
  }

  private initMap(): void {
    if (this.map || !isPlatformBrowser(this.platformId)) return;

    this.map = L.map('listings-map', {
      attributionControl: false
    }).setView([41.0082, 28.9784], 11);

    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
      maxZoom: 19
    }).addTo(this.map);

    this.updateMapMarkers();
  }

  private updateMapMarkers(): void {
    if (!this.map) return;

    // Clear existing markers
    this.markers.forEach(m => m.remove());
    this.markers = [];

    this.filteredListings().forEach(listing => {
      if (listing.lat && listing.lng) {
        const themeClass = listing.isUrgent ? 'urgent-spot' : 'standard-spot';
        const iconHtml = listing.isUrgent ? '<i class="pi pi-bolt"></i>' : '';
        
        const glowHtml = `
          <div class="custom-spot-marker ${themeClass}">
            <div class="spot-icon">${iconHtml}</div>
            <div class="spot-glow"></div>
            <div class="spot-pulse"></div>
          </div>
        `;

        const customIcon = L.divIcon({
          html: glowHtml,
          className: 'spot-marker-container',
          iconSize: [40, 40],
          iconAnchor: [20, 20]
        });

        const marker = L.marker([listing.lat, listing.lng], { icon: customIcon })
          .addTo(this.map!)
          .on('click', () => this.openDetail(listing));
        
        this.markers.push(marker);
      }
    });
  }

  openDetail(listing: FoodListing): void {
    this.selectedListing.set(listing);
    this.detailVisible = true;
    setTimeout(() => this.initDetailMap(listing), 200);
  }

  private initDetailMap(listing: FoodListing): void {
    if (!listing.lat || !listing.lng) return;
    const detailMap = L.map('detail-map', {
      attributionControl: false,
      zoomControl: false,
      dragging: false,
      scrollWheelZoom: false,
      doubleClickZoom: false
    }).setView([listing.lat, listing.lng], 15);

    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
      maxZoom: 19
    }).addTo(detailMap);

    const themeClass = listing.isUrgent ? 'urgent-spot' : 'standard-spot';
    const iconHtml = listing.isUrgent ? '<i class="pi pi-bolt"></i>' : '';
    
    const glowHtml = `
      <div class="custom-spot-marker ${themeClass}">
        <div class="spot-icon">${iconHtml}</div>
        <div class="spot-glow"></div>
        <div class="spot-pulse"></div>
      </div>
    `;

    const customIcon = L.divIcon({
      html: glowHtml,
      className: 'spot-marker-container',
      iconSize: [40, 40],
      iconAnchor: [20, 20]
    });

    L.marker([listing.lat, listing.lng], { icon: customIcon }).addTo(detailMap);
  }

  getCategoryLabel(category: FoodCategory): string {
    return FOOD_CATEGORY_LABELS[category];
  }

  getCategoryIcon(category: string): string {
    return this.utils.getCategoryIcon(category as any);
  }

  getCategoryImage(category: string): string {
    return this.utils.getCategoryImage(category as any);
  }

  getBusinessIcon(type: string): string {
    return BUSINESS_TYPE_ICONS[type as BusinessType] || 'pi pi-building';
  }

  getStatusLabel(status: string): string {
    const labels: any = {
      'active': 'Aktif',
      'reserved': 'Rezerve',
      'completed': 'Tamamlandı'
    };
    return labels[status] || status;
  }

  isExpiringSoon(expiresAt: string): boolean {
    const today = new Date().toISOString().split('T')[0];
    return expiresAt === today;
  }

  markAsCompleted(id: number): void {
    this.listingService.updateStatus(id, 'completed').then(() => {
      this.loadListings();
      this.notif.add('İşlem tamamlandı', 'İlan başarıyla tamamlandı.', 'success');
    });
  }

  cancelReservation(id: number): void {
    this.listingService.updateStatus(id, 'active').then(() => {
      this.loadListings();
      this.notif.add('Rezervasyon iptal edildi', 'İlan tekrar aktif hale getirildi.', 'warning');
    });
  }

  addToCart(): void {
    const listing = this.selectedListing();
    if (listing) {
      this.cartService.addToCart(listing);
      this.detailVisible = false;
    }
  }
}
