import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';
import { DialogModule } from 'primeng/dialog';
import { DemandService } from '../../services/demand.service';
import { AuthService } from '../../services/auth.service';
import { FOOD_CATEGORY_LABELS } from '../../models/food-listing.model';
import { FoodListingUtilsService } from '../../services/food-listing-utils.service';

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

  categoryOptions = Object.entries(FOOD_CATEGORY_LABELS).map(([value, label]) => ({ label, value }));

  isCreateModalVisible = signal(false);

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
}
