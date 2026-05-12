import { Component, inject, signal, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';
import { DialogModule } from 'primeng/dialog';
import { DemandService } from '../../services/demand.service';
import { AuthService } from '../../services/auth.service';
import { FOOD_CATEGORY_LABELS } from '../../models/food-listing.model';
import { FoodDemand } from '../../models/food-demand.model';
import { FoodListingUtilsService } from '../../services/food-listing-utils.service';
import * as L from 'leaflet';

@Component({
  selector: 'app-demands',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    InputTextModule,
    InputTextareaModule,
    DropdownModule,
    DialogModule
  ],
  templateUrl: './demands.component.html',
  styleUrls: ['./demands.component.scss']
})
export class DemandsComponent {
  demandService = inject(DemandService);
  auth = inject(AuthService);
  utils = inject(FoodListingUtilsService);
  private platformId = inject(PLATFORM_ID);

  categoryOptions = Object.entries(FOOD_CATEGORY_LABELS).map(([value, label]) => ({ label, value }));

  isCreateModalVisible = signal(false);
  detailVisible = false;
  selectedDemand = signal<FoodDemand | null>(null);
  private detailMapInstance: L.Map | undefined;

  newDemand = {
    title: '',
    category: null as string | null,
    requiredQuantity: '',
    description: '',
    neededBy: ''
  };

  openCreateModal() {
    this.isCreateModalVisible.set(true);
  }

  submitDemand() {
    if (!this.newDemand.title || !this.newDemand.category || !this.newDemand.requiredQuantity) return;
    
    this.demandService.addDemand({
      title: this.newDemand.title,
      category: this.newDemand.category as any,
      requiredQuantity: this.newDemand.requiredQuantity,
      description: this.newDemand.description,
      neededBy: this.newDemand.neededBy || new Date().toISOString().split('T')[0]
    });
    
    this.isCreateModalVisible.set(false);
    this.newDemand = { title: '', category: null, requiredQuantity: '', description: '', neededBy: '' };
  }

  fulfill(id: number) {
    this.demandService.fulfillDemand(id);
  }

  fulfillFromDetail() {
    const demand = this.selectedDemand();
    if (demand) {
      this.fulfill(demand.id);
      this.detailVisible = false;
    }
  }

  openDetail(demand: FoodDemand) {
    this.selectedDemand.set(demand);
    this.detailVisible = true;
    setTimeout(() => {
      this.initDetailMap();
    }, 100);
  }

  initDetailMap() {
    if (!isPlatformBrowser(this.platformId)) return;
    
    this.cleanupDetailMap();

    const demand = this.selectedDemand();
    if (!demand) return;

    // Pseudo-random coordinates
    const id = demand.id || Math.floor(Math.random() * 100);
    const lat = 41.0082 + (Math.sin(id * 123) * 0.04);
    const lng = 28.9784 + (Math.cos(id * 321) * 0.06);

    this.detailMapInstance = L.map('demand-detail-map', {
      attributionControl: false,
      zoomControl: false
    }).setView([lat, lng], 14);

    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
      maxZoom: 19
    }).addTo(this.detailMapInstance);

    const glowHtml = `
      <div class="custom-spot-marker urgent-spot">
        <div class="spot-icon"><i class="pi pi-building"></i></div>
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
  }

  cleanupDetailMap() {
    if (this.detailMapInstance) {
      this.detailMapInstance.remove();
      this.detailMapInstance = undefined;
    }
  }
}
