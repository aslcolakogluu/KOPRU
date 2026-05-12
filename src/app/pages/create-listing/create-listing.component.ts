import { Component, inject, signal, OnInit, OnDestroy, PLATFORM_ID, AfterViewInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CalendarModule } from 'primeng/calendar';
import { InputSwitchModule } from 'primeng/inputswitch';
import { FoodListingService } from '../../services/food-listing.service';
import { BUSINESS_TYPE_LABELS, FOOD_CATEGORY_LABELS } from '../../models/food-listing.model';
import * as L from 'leaflet';
import { HttpClient } from '@angular/common/http';

import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-create-listing',
  standalone: true,
  imports: [
    FormsModule,
    RouterModule,
    ButtonModule,
    InputTextModule,
    DropdownModule,
    InputTextareaModule,
    CalendarModule,
    InputSwitchModule
],
  templateUrl: './create-listing.component.html',
  styleUrls: ['./create-listing.component.scss']
})
export class CreateListingComponent implements OnInit, OnDestroy, AfterViewInit {
  private listingService = inject(FoodListingService);
  private http = inject(HttpClient);
  private platformId = inject(PLATFORM_ID);
  private notif = inject(NotificationService);

  submitted = signal(false);
  currentStep = signal(1);
  totalSteps = 2;

  businessTypeOptions = Object.entries(BUSINESS_TYPE_LABELS).map(([value, label]) => ({ label, value }));
  categoryOptions = Object.entries(FOOD_CATEGORY_LABELS).map(([value, label]) => ({ label, value }));

  form = {
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

  private map: L.Map | undefined;
  private marker: L.Marker | undefined;

  searchAddressText = '';
  isSearchingMap = false;

  ngOnInit() { }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => this.initMap(), 100);
    }
  }

  ngOnDestroy() {
    if (this.map) {
      this.map.remove();
    }
  }

  private initMap(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const initialLat = 41.0082;
    const initialLng = 28.9784;

    this.map = L.map('create-listing-map', {
      attributionControl: false
    }).setView([initialLat, initialLng], 11);

    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
      maxZoom: 19
    }).addTo(this.map);

    // Use ResizeObserver for robust map sizing, especially with animations
    const mapElement = document.getElementById('create-listing-map');
    if (mapElement) {
      const ro = new ResizeObserver(() => {
        if (this.map) {
          this.map.invalidateSize();
        }
      });
      ro.observe(mapElement);
    }

    // Handle map clicks
    this.map.on('click', (e: L.LeafletMouseEvent) => {
      this.setMarker(e.latlng.lat, e.latlng.lng);
      this.reverseGeocode(e.latlng.lat, e.latlng.lng);
    });
  }

  private setMarker(lat: number, lng: number): void {
    if (!this.map) return;

    const glowHtml = `
      <div class="custom-spot-marker">
        <div class="spot-icon"></div>
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

    if (this.marker) {
      this.marker.setIcon(customIcon);
      this.marker.setLatLng([lat, lng]);
    } else {
      this.marker = L.marker([lat, lng], { icon: customIcon }).addTo(this.map);
    }
    this.form.lat = lat;
    this.form.lng = lng;
  }

  // Reverse Geocoding: Lat/Lng -> Address using Nominatim
  private reverseGeocode(lat: number, lng: number): void {
    const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}`;
    this.http.get<any>(url).subscribe({
      next: (res) => {
        if (res && res.display_name) {
          // Simplify address for UX (e.g., take first couple of parts)
          const parts = res.display_name.split(', ');
          const shortAddress = parts.slice(0, 3).join(', ');
          this.form.location = shortAddress;
          this.searchAddressText = shortAddress;
        }
      },
      error: (err) => console.error('Geocoding error:', err)
    });
  }

  // Forward Geocoding: Address -> Lat/Lng
  searchMapAction(): void {
    if (!this.searchAddressText.trim() || !this.map) return;
    this.isSearchingMap = true;

    const url = `https://nominatim.openstreetmap.org/search?format=jsonv2&q=${encodeURIComponent(this.searchAddressText)}`;
    this.http.get<any[]>(url).subscribe({
      next: (res) => {
        if (res && res.length > 0) {
          const firstResult = res[0];
          const lat = parseFloat(firstResult.lat);
          const lng = parseFloat(firstResult.lon);

          this.map!.setView([lat, lng], 15);
          this.setMarker(lat, lng);
          this.form.location = firstResult.display_name.split(', ').slice(0, 3).join(', ');
        }
        this.isSearchingMap = false;
      },
      error: (err) => {
        console.error('Search error:', err);
        this.isSearchingMap = false;
      }
    });
  }

  nextStep(): void {
    if (this.currentStep() < this.totalSteps) {
      this.currentStep.update(s => s + 1);
    }
  }

  prevStep(): void {
    if (this.currentStep() > 1) {
      this.currentStep.update(s => s - 1);
      // Harita 1. adımda olduğu için geri gelindiğinde boyutu tazele
      if (this.currentStep() === 1) {
        setTimeout(() => {
          if (this.map) this.map.invalidateSize();
        }, 100);
      }
    }
  }

  async submitForm(): Promise<void> {
    const desc = this.form.description.trim() || 'Açıklama belirtilmedi.';
    
    if (!this.form.title || !this.form.businessType || !this.form.businessName || !this.form.category || !this.form.quantity || !this.form.location || !this.form.expiresAt) {
      this.notif.add('Eksik Bilgi', 'Lütfen tüm zorunlu alanları (Miktar, Konum ve SKT dahil) doldurunuz.', 'warning');
      return;
    }

    try {
      await this.listingService.addListing({
        title: this.form.title,
        description: desc,
        businessType: this.form.businessType as any,
        businessName: this.form.businessName,
        category: this.form.category as any,
        quantity: this.form.quantity,
        location: this.form.location,
        isUrgent: this.form.isUrgent,
        isRecurring: this.form.isRecurring,
        expiresAt: this.form.expiresAt ? this.form.expiresAt.toISOString().split('T')[0] : ''
      });

      this.submitted.set(true);
      this.notif.add('Başarılı', 'İlanınız başarıyla oluşturuldu.', 'success');
    } catch (err: any) {
      this.notif.add('Hata', err.message || 'İlan oluşturulamadı.', 'error');
    }
  }

  resetForm(): void {
    this.form = {
      title: '', description: '', businessType: null, businessName: '',
      category: null, quantity: '', location: '', expiresAt: null,
      lat: null,
      lng: null,
      isUrgent: false,
      isRecurring: false
    };
    this.searchAddressText = '';
    if (this.marker && this.map) {
      this.marker.remove();
      this.marker = undefined;
      this.map.setView([41.0082, 28.9784], 11);
    }
    this.submitted.set(false);
    this.currentStep.set(1);

    // re-init map if it was destroyed 
    if (!this.map && isPlatformBrowser(this.platformId)) {
      setTimeout(() => this.initMap(), 100);
    }
  }
}
