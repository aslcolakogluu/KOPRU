import { Component, inject, signal, computed, effect, OnInit, OnDestroy, PLATFORM_ID, AfterViewInit } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { SkeletonModule } from 'primeng/skeleton';
import { TabViewModule } from 'primeng/tabview';
import { TooltipModule } from 'primeng/tooltip';
import { PaginatorModule } from 'primeng/paginator';
import { FoodListingService } from '../../services/food-listing.service';
import { CartService } from '../../services/cart.service';
import { ScrollRevealService } from '../../services/scroll-reveal.service';
import { AuthService } from '../../services/auth.service';
import { CreateListingComponent } from '../create-listing/create-listing.component';
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
import { firstValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';

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
    RouterModule,
    CreateListingComponent,
    PaginatorModule
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
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  auth = inject(AuthService);
  utils = inject(FoodListingUtilsService);
  private http = inject(HttpClient);

  activeTab = 0; // 0: Tüm İlanlar, 1: İlanlarım, 2: İlan Ver
  
  businessTypeOptions = Object.entries(BUSINESS_TYPE_LABELS).map(([value, label]) => ({ label, value }));
  categoryOptions = Object.entries(FOOD_CATEGORY_LABELS).map(([value, label]) => ({ label, value }));

  loading = signal(false);
  searchQuery = signal('');
  selectedBusinessType = signal<string | null>(null);
  selectedCategory = signal<string | null>(null);
  detailVisible = false;
  selectedListing = signal<FoodListing | null>(null);
  
  editVisible = false;
  editForm = signal<Partial<FoodListing>>({});
  savingEdit = signal(false);

  // Pagination
  first = signal(0);
  rows = signal(6);
  firstMy = signal(0);
  rowsMy = signal(6);

  // Map feature
  viewMode: 'list' | 'map' = 'list';
  private map: L.Map | undefined;
  private markers: L.Marker[] = [];

  // Data signals
  listings = this.listingService.activeListings;
  
  filteredListings = computed(() => {
    let filtered = this.listings();

    const query = this.searchQuery().toLowerCase();
    if (query) {
      filtered = filtered.filter(l =>
        l.title.toLowerCase().includes(query) ||
        l.businessName.toLowerCase().includes(query)
      );
    }

    const bType = this.selectedBusinessType();
    if (bType) {
      filtered = filtered.filter(l => l.businessType === bType);
    }

    const cat = this.selectedCategory();
    if (cat) {
      filtered = filtered.filter(l => l.category === cat);
    }

    return filtered;
  });

  myListings = computed(() => {
    const user = this.auth.currentUser();
    if (!user) return [];
    
    // Daha güvenli karşılaştırma için sayısal dönüşüm ve businessName kontrolü
    const currentUserId = Number(user.id);
    
    return this.listingService.allListings().filter(l => 
      Number(l.ownerId) === currentUserId || 
      (l.businessName === user.businessName && user.businessName !== undefined)
    );
  });

  refreshListings(): void {
    // Tüm filtreleri temizle ve 1. Sekmeye (İlanlarım) geç
    this.searchQuery.set('');
    this.selectedBusinessType.set(null);
    this.selectedCategory.set(null);
    
    // Sayfalamayı sıfırla
    this.first.set(0);
    this.firstMy.set(0);
    
    // Verileri tazele
    this.loadListings();
    
    // İlanlarım sekmesine geç
    this.activeTab = 1;
  }

  paginatedListings = computed(() => {
    const start = this.first();
    const end = start + this.rows();
    return this.filteredListings().slice(start, end);
  });

  paginatedMyListings = computed(() => {
    const start = this.firstMy();
    const end = start + this.rowsMy();
    return this.myListings().slice(start, end);
  });

  constructor() {
    // Haritayı filtre değişimlerine göre otomatik güncelle
    effect(() => {
      const listings = this.filteredListings();
      if (this.viewMode === 'map' && this.map) {
        this.updateMapMarkers();
      }
    });

    // Filtre değişince sayfalamayı sıfırla
    effect(() => {
      this.searchQuery();
      this.selectedBusinessType();
      this.selectedCategory();
      this.first.set(0);
    });
  }

  ngOnInit(): void {
    this.loadListings();
    this.scrollReveal.observe();

    // Query param kontrolü (Dışarıdan belirli tab'a yönlendirme için)
    this.route.queryParams.subscribe(params => {
      const tabParam = params['tab'];
      if (tabParam) {
        this.activeTab = parseInt(tabParam);
      }
    });
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
      this.loading.set(false);
    }).catch(err => {
      console.error('Error loading listings:', err);
      this.loading.set(false);
    });
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
    // Tab değişimlerinde verileri sunucudan tazele
    if (this.activeTab === 0 || this.activeTab === 1) {
      this.loadListings();
    }
  }

  onPageChange(event: any) {
    this.first.set(event.first);
    this.rows.set(event.rows);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  onMyPageChange(event: any) {
    this.firstMy.set(event.first);
    this.rowsMy.set(event.rows);
  }

  goToCreateListing(): void {
    this.activeTab = 2;
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
      let lat = listing.lat;
      let lng = listing.lng;

      // Veritabanında lat/lng yoksa, İstanbul içinde haritayı boş bırakmamak için 
      // id tabanlı stabil sahte koordinatlar üret (Sadece görselleştirme amaçlı)
      if (!lat || !lng) {
        const id = listing.id || Math.floor(Math.random() * 100);
        lat = 41.0082 + (Math.sin(id * 123) * 0.04);
        lng = 28.9784 + (Math.cos(id * 321) * 0.06);
      }

      if (lat && lng) {
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

        const marker = L.marker([lat, lng], { icon: customIcon })
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

  private detailMapInstance: L.Map | null = null;

  private async initDetailMap(listing: FoodListing): Promise<void> {
    if (this.detailMapInstance) {
      this.detailMapInstance.remove();
      this.detailMapInstance = null;
    }

    const mapElement = document.getElementById('detail-map');
    if (!mapElement) return;

    let lat = listing.lat;
    let lng = listing.lng;

    // Eğer veritabanından lat/lng gelmediyse (sadece adres metni varsa), adresi koordinata çevir
    if ((!lat || !lng) && listing.location) {
      try {
        const url = `https://nominatim.openstreetmap.org/search?format=jsonv2&q=${encodeURIComponent(listing.location)}`;
        const res = await firstValueFrom(this.http.get<any[]>(url));
        if (res && res.length > 0) {
          lat = parseFloat(res[0].lat);
          lng = parseFloat(res[0].lon);
        }
      } catch (e) {
        console.error('Geocoding fallback failed', e);
      }
    }

    // Geocoding de başarısız olursa varsayılan konumu kullan (İstanbul)
    if (!lat || !lng) {
      lat = 41.0082;
      lng = 28.9784;
    }

    this.detailMapInstance = L.map('detail-map', {
      attributionControl: false,
      zoomControl: false,
      dragging: false,
      scrollWheelZoom: false,
      doubleClickZoom: false
    }).setView([lat, lng], 15);

    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
      maxZoom: 19
    }).addTo(this.detailMapInstance);

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

    L.marker([lat, lng], { icon: customIcon }).addTo(this.detailMapInstance);

    // Çakışmaları ve animasyon bozulmalarını engellemek için boyutu tazele
    setTimeout(() => {
      if (this.detailMapInstance) {
        this.detailMapInstance.invalidateSize();
      }
    }, 100);
  }

  getCategoryLabel(category: FoodCategory): string {
    return FOOD_CATEGORY_LABELS[category];
  }

  getCategoryIcon(category: string): string {
    return this.utils.getCategoryIcon(category as any);
  }

  getListingImage(listing: FoodListing): string {
    if (listing.imageUrl) return listing.imageUrl;
    return this.utils.getCategoryImage(listing.category as any);
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

  formatQuantity(q: string | number | undefined): string {
    if (!q) return '';
    const s = q.toString();
    if (s.toLowerCase().includes('porsiyon')) return s;
    return `${s} porsiyon`;
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

  // --- Düzenleme (Edit) İşlemleri ---
  openEdit(listing: FoodListing): void {
    this.editForm.set({ ...listing });
    this.editVisible = true;
  }

  updateEditForm(field: keyof FoodListing, value: any) {
    let finalValue = value;
    if (field === 'price') {
      finalValue = value === '' || value === null ? 0 : Number(value);
    }
    this.editForm.set({ ...this.editForm(), [field]: finalValue });
  }

  async saveEdit() {
    const data = this.editForm();
    if (!data.id) return;
    
    if (!data.title?.trim()) {
      this.notif.add('Eksik Bilgi', 'İlan başlığı boş bırakılamaz.', 'warning');
      return;
    }

    this.savingEdit.set(true);
    try {
      await this.listingService.updateListing(data.id, data);
      this.editVisible = false;
      this.notif.add('Başarılı', 'İlan başarıyla güncellendi.', 'success');
      this.loadListings();
    } catch (err: any) {
      this.notif.add('Hata', err.message || 'Güncelleme yapılamadı.', 'error');
    } finally {
      this.savingEdit.set(false);
    }
  }

  openWebsite(url: string | undefined): void {
    if (!url) return;
    window.open(url, '_blank', 'noopener,noreferrer');
  }
}
