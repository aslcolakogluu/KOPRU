import { Component, inject, signal, computed } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { TooltipModule } from 'primeng/tooltip';
import { CartService } from '../../services/cart.service';
import { FoodListingUtilsService } from '../../services/food-listing-utils.service';
import { FoodListing } from '../../models/food-listing.model';

@Component({
    selector: 'app-cart',
    standalone: true,
    imports: [FormsModule, RouterModule, ButtonModule, InputTextareaModule, TooltipModule],
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss']
})
export class CartComponent {
    cart = inject(CartService);
    private router = inject(Router);
    utils = inject(FoodListingUtilsService);

    deliveryAddress = '';

    items = this.cart.cartItems;

    // Merkezi utils servisine yönlendirme
    getBusinessLabel = (t: any) => this.utils.getBusinessLabel(t);
    getBusinessIcon = (t: any) => this.utils.getBusinessIcon(t);
    getCategoryIcon = (c: any) => this.utils.getCategoryIcon(c);

    removeItem(id: number) {
        this.cart.removeFromCart(id);
    }

    proceedToPayment() {
        if (this.items().length === 0 || !this.deliveryAddress.trim()) return;

        // Pass delivery address via router state and navigate to global cart payment
        this.router.navigate(['/payment/cart'], { state: { deliveryAddress: this.deliveryAddress } });
    }
}
