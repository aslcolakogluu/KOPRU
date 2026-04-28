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
    SkeletonModule
  ],
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.scss']
})
export class ListingsComponent implements OnInit, OnDestroy, AfterViewInit {
  private listingService = inject(FoodListingService);
  private cartService = inject(CartService);
  private scrollReveal = inject(ScrollRevealService);
  utils = inject(FoodListingUtilsService);

  loading = signal(false);
  searchQuery = '';
  selectedBusinessType: string | null = null;
  selectedCategory: string | null = null;
  detailVisible = false;
  selectedListing = signal<FoodListing | null>(null);

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
      // Harita yüklemesi (DOM manipülasyonu) ana thread'i yorduğu için, 
      // sayfa geçiş animasyonu (350ms) bitene kadar bekletiyoruz ki tekleme yapmasın.
      setTimeout(() => this.initMap(), 400);
    }
  }

  private initMap(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    if (this.map) {
      this.map.remove();
    }

    // Default center (Istanbul)
    this.map = L.map('listings-map').setView([41.0082, 28.9784], 11);

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
        scrollWheelZoom: false // Modal içinde scroll karışmamak için disable edildi
    }).setView(coords, 14);

    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
      maxZoom: 19,
      attribution: '&copy; CARTO'
    }).addTo(this.detailMap);

    // Modern CSS destekli Spot ikonu
    const spotIcon = L.divIcon({
      className: 'custom-map-spot',
      html: '<div class="spot-pulse"></div><div class="spot-core"></div>',
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
}
