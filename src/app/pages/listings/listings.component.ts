import { Component, inject, signal, OnInit, OnDestroy, PLATFORM_ID, AfterViewInit } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { SkeletonModule } from 'primeng/skeleton';
import { FoodListingService } from '../../services/food-listing.service';
import { CartService } from '../../services/cart.service';
import { ScrollRevealService } from '../../services/scroll-reveal.service';
import { AuthService } from '../../services/auth.service';
import { NotificationService } from '../../services/notification.service';
import { CalendarModule } from 'primeng/calendar';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputSwitchModule } from 'primeng/inputswitch';
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
import { HttpClient } from '@angular/common/http';

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
    CalendarModule,
    InputTextareaModule,
    InputSwitchModule
  ],
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.scss']
})
export class ListingsComponent implements OnInit, OnDestroy, AfterViewInit {
  private listingService = inject(FoodListingService);
  private cartService = inject(CartService);
  private scrollReveal = inject(ScrollRevealService);
  private notif = inject(NotificationService);
  auth = inject(AuthService);
  utils = inject(FoodListingUtilsService);

  activeTab = 0; // 0: Tüm İlanlar, 1: İlanlarım, 2: İlan Ver

  loading = signal(false);
  searchQuery = '';
  selectedBusinessType: string | null = null;
  selectedCategory: string | null = null;
  detailVisible = false;
  selectedListing = signal<FoodListing | null>(null);
  
  // --- Create Listing Tab Logic ---
  private http = inject(HttpClient);
  submittedCreate = signal(false);
  createForm = {
    title: '',
    description: '',
    businessType: null as string | null,
    businessName: '',
    category: null as string | null,
    quantity: '',
    location: '',
    expiresAt: null as Date | null,
    lat: null as number | null,
    lng: null as number | null,
    isUrgent: false,
    isRecurring: false
  };
  private createMap: L.Map | undefined;
  private createMarker: L.Marker | undefined;
  searchAddressText = '';
  isSearchingMap = false;

  // Map feature
  viewMode: 'list' | 'map' = 'list';
  private map: L.Map | undefined;
  private markersLayer: L.LayerGroup | undefined;
  private detailMap: L.Map | undefined; // YENİ: İlan detay modalındaki harita
  private platformId = inject(PLATFORM_ID);

  private allListings = this.listingService.allListings;
  filteredListings = signal<FoodListing[]>([]);

  businessTypeOptions = Object.entries(BUSINESS_TYPE_LABELS).map(([value, label]) => ({ label, value }));
  categoryOptions = Object.entries(FOOD_CATEGORY_LABELS).map(([value, label]) => ({ label, value }));

  ngOnInit() {
    // Hemen veriyi ata ki sayfa açılır açılmaz "0" görünmesin
    this.filteredListings.set(this.allListings());
    this.applyFilters();
  }

  ngAfterViewInit() {
    this.scrollReveal.observe();
  }

  ngOnDestroy(): void {
    if (this.map) {
      this.map.remove();
      this.map = undefined;
    }
    if (this.detailMap) {
      this.detailMap.remove();
      this.detailMap = undefined;
    }
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
    if (event.index === 2 && isPlatformBrowser(this.platformId)) {
      setTimeout(() => this.initCreateMap(), 100);
    }
  }

  private initMap(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    if (this.map) {
      this.map.remove();
    }

    // Default center (Istanbul)
    this.map = L.map('listings-map', {
        attributionControl: false
    }).setView([41.0082, 28.9784], 11);

    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://carto.com/">CARTO</a>'
    }).addTo(this.map);

    this.markersLayer = L.layerGroup().addTo(this.map);
    this.updateMapMarkers();
  }

  private getCoordsForLocation(location: string): [number, number] {
    const coords: Record<string, [number, number]> = {
      'Kadikoy, Istanbul': [40.9818, 29.0232],
      'Kadıköy, İstanbul': [40.9818, 29.0232],
      'Sisli, Istanbul': [41.0610, 28.9877],
      'Şişli, İstanbul': [41.0610, 28.9877],
      'Besiktas, Istanbul': [41.0428, 29.0076],
      'Beşiktaş, İstanbul': [41.0428, 29.0076],
      'Sariyer, Istanbul': [41.1685, 29.0573],
      'Sarıyer, İstanbul': [41.1685, 29.0573],
      'Atasehir, Istanbul': [40.9840, 29.1066],
      'Ataşehir, İstanbul': [40.9840, 29.1066],
      'Etiler, Istanbul': [41.0825, 29.0340],
      'Etiler, İstanbul': [41.0825, 29.0340],
      'Beyoglu, Istanbul': [41.0369, 28.9774],
      'Beyoğlu, İstanbul': [41.0369, 28.9774],
      'Uskudar, Istanbul': [41.0269, 29.0152],
      'Üsküdar, İstanbul': [41.0269, 29.0152],
    };
    return coords[location] || [41.0082 + (Math.random() - 0.5) * 0.1, 28.9784 + (Math.random() - 0.5) * 0.1];
  }

  private updateMapMarkers(): void {
    if (!this.map || !this.markersLayer) return;

    this.filteredListings().forEach(listing => {
      const coords = this.getCoordsForLocation(listing.location);
      
      const themeClass = listing.isUrgent ? 'urgent-spot' : 'standard-spot';
      const glowHtml = listing.isUrgent 
        ? '<div class="spot-pulse urgent"></div><div class="spot-core urgent"><i class="pi pi-bolt"></i></div>'
        : '<div class="spot-pulse standard"></div><div class="spot-core standard"></div>';

      const spotIcon = L.divIcon({
        className: `custom-map-spot ${themeClass}`,
        html: glowHtml,
        iconSize: [30, 30],
        iconAnchor: [15, 15],
        popupAnchor: [0, -15],
      });

      const marker = L.marker(coords, { icon: spotIcon });

      const popupContent = `
        <div class="map-popup">
          <strong style="font-size: 1rem; color: #1e293b;">${listing.businessName}</strong>
          <div style="font-size: 0.85rem; color: #475569; margin: 4px 0 8px;">${listing.title}</div>
          <p style="margin:0; font-size: 0.8rem;">📦 ${listing.quantity}</p>
        </div>
      `;

      marker.bindPopup(popupContent);
      this.markersLayer!.addLayer(marker);
    });
  }

  applyFilters(): void {
    this.loading.set(true);

    setTimeout(() => {
      let results = this.allListings();
      if (this.searchQuery) {
        const q = this.searchQuery.toLowerCase();
        results = results.filter(l =>
          l.title.toLowerCase().includes(q) ||
          l.businessName.toLowerCase().includes(q) ||
          l.description.toLowerCase().includes(q) ||
          l.location.toLowerCase().includes(q)
        );
      }
      if (this.selectedBusinessType) {
        results = results.filter(l => l.businessType === this.selectedBusinessType);
      }
      if (this.selectedCategory) {
        results = results.filter(l => l.category === this.selectedCategory);
      }
      this.filteredListings.set(results);

      if (this.viewMode === 'map') {
        this.updateMapMarkers();
      }
      this.loading.set(false);
    }, 600);
  }

  // --- Dashboard Merged Actions ---
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

  getMyListings() {
    const userId = this.auth.currentUser()?.id;
    return this.allListings().filter(l => l.ownerId === userId);
  }

  getSeverity(status: string): any {
    switch (status) {
      case 'active': return 'success';
      case 'reserved': return 'warning';
      case 'completed': return 'info';
      default: return 'info';
    }
  }

  getStatusLabel(status: string): string {
    const labels: any = { 'active': 'Aktif', 'reserved': 'Rezerve', 'completed': 'Tamamlandı' };
    return labels[status] || status;
  }

  getBusinessLabel = (t: BusinessType) => this.utils.getBusinessLabel(t);
  getBusinessIcon = (t: BusinessType) => this.utils.getBusinessIcon(t);
  getCategoryLabel = (c: FoodCategory) => this.utils.getCategoryLabel(c);
  isExpiringSoon = (d: string) => this.listingService.isExpiringSoon(d);

  getCategoryImage = (c: string) => this.utils.getCategoryImage(c);

  getCategoryIcon = (c: string) => this.utils.getCategoryIcon(c);

  openDetail(listing: FoodListing): void {
    this.selectedListing.set(listing);
    this.detailVisible = true;
    
    // Detay modalı açıldığında animasyon süresini bekleyip haritayı render et
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        this.initDetailMap(listing);
      }, 100); // Wait for Dialog DOM to stabilize
    }
  }

  private initDetailMap(listing: FoodListing): void {
    const mapElement = document.getElementById('detail-map');
    if (!mapElement) return;

    if (this.detailMap) {
      this.detailMap.remove();
    }
    
    const coords = this.getCoordsForLocation(listing.location);
    
    this.detailMap = L.map('detail-map', {
        zoomControl: false,
        attributionControl: false,
        scrollWheelZoom: false // Modal içinde scroll karışmamak için disable edildi
    }).setView(coords, 14);

    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
      maxZoom: 19,
      attribution: '&copy; CARTO'
    }).addTo(this.detailMap);

    const themeClass = listing.isUrgent ? 'urgent-spot' : 'standard-spot';
    const glowHtml = listing.isUrgent 
      ? '<div class="spot-pulse urgent"></div><div class="spot-core urgent"><i class="pi pi-bolt"></i></div>'
      : '<div class="spot-pulse standard"></div><div class="spot-core standard"></div>';

    const spotIcon = L.divIcon({
      className: `custom-map-spot ${themeClass}`,
      html: glowHtml,
      iconSize: [24, 24],
      iconAnchor: [12, 12]
    });

    L.marker(coords, { icon: spotIcon }).addTo(this.detailMap);
    
    // Map container boyutunu güncelle
    setTimeout(() => {
      if (this.detailMap) {
        this.detailMap.invalidateSize();
      }
    }, 150);
  }

  addToCart(): void {
    const listing = this.selectedListing();
    if (listing) {
      this.cartService.addToCart(listing);
      this.detailVisible = false;
    }
  }

  // --- Create Listing Tab Methods ---
  private initCreateMap(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    if (this.createMap) this.createMap.remove();

    this.createMap = L.map('create-listing-map-tab', {
      attributionControl: false
    }).setView([41.0082, 28.9784], 11);

    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
      maxZoom: 19
    }).addTo(this.createMap);

    this.createMap.on('click', (e: L.LeafletMouseEvent) => {
      this.setCreateMarker(e.latlng.lat, e.latlng.lng);
      this.reverseGeocode(e.latlng.lat, e.latlng.lng);
    });
  }

  private setCreateMarker(lat: number, lng: number): void {
    if (!this.createMap) return;
    if (this.createMarker) {
      this.createMarker.setLatLng([lat, lng]);
    } else {
      this.createMarker = L.marker([lat, lng]).addTo(this.createMap);
    }
    this.createForm.lat = lat;
    this.createForm.lng = lng;
  }

  private reverseGeocode(lat: number, lng: number): void {
    const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}`;
    this.http.get<any>(url).subscribe({
      next: (res) => {
        if (res && res.display_name) {
          const parts = res.display_name.split(', ');
          const shortAddress = parts.slice(0, 3).join(', ');
          this.createForm.location = shortAddress;
          this.searchAddressText = shortAddress;
        }
      }
    });
  }

  searchMapAction(): void {
    if (!this.searchAddressText.trim() || !this.createMap) return;
    this.isSearchingMap = true;
    const url = `https://nominatim.openstreetmap.org/search?format=jsonv2&q=${encodeURIComponent(this.searchAddressText)}`;
    this.http.get<any[]>(url).subscribe({
      next: (res) => {
        if (res && res.length > 0) {
          const lat = parseFloat(res[0].lat);
          const lng = parseFloat(res[0].lon);
          this.createMap!.setView([lat, lng], 15);
          this.setCreateMarker(lat, lng);
          this.createForm.location = res[0].display_name.split(', ').slice(0, 3).join(', ');
        }
        this.isSearchingMap = false;
      }
    });
  }

  async submitCreateForm(): Promise<void> {
    if (!this.createForm.title || !this.createForm.businessType || !this.createForm.businessName || !this.createForm.category) return;
    await this.listingService.addListing({
      title: this.createForm.title,
      description: this.createForm.description,
      businessType: this.createForm.businessType as any,
      businessName: this.createForm.businessName,
      category: this.createForm.category as any,
      quantity: this.createForm.quantity,
      location: this.createForm.location,
      isUrgent: this.createForm.isUrgent,
      isRecurring: this.createForm.isRecurring,
      expiresAt: this.createForm.expiresAt ? this.createForm.expiresAt.toISOString().split('T')[0] : ''
    });
    this.submittedCreate.set(true);
    this.applyFilters();
  }

  resetCreateForm(): void {
    this.createForm = {
      title: '', description: '', businessType: null, businessName: '',
      category: null, quantity: '', location: '', expiresAt: null,
      lat: null, lng: null, isUrgent: false, isRecurring: false
    };
    this.searchAddressText = '';
    this.submittedCreate.set(false);
    this.activeTab = 2;
    setTimeout(() => this.initCreateMap(), 100);
  }
}
