import { Injectable, signal, computed } from '@angular/core';
import { FoodListing } from '../models/food-listing.model';

@Injectable({
    providedIn: 'root'
})
export class CartService {
    private items = signal<FoodListing[]>([]);

    readonly cartItems = this.items.asReadonly();
    readonly cartCount = computed(() => this.items().length);

    addToCart(listing: FoodListing): void {
        const currentItems = this.items();
        const exists = currentItems.some(item => item.id === listing.id);

        if (!exists) {
            this.items.update(items => [...items, listing]);
        }
    }

    removeFromCart(id: number): void {
        this.items.update(items => items.filter(item => item.id !== id));
    }

    clearCart(): void {
        this.items.set([]);
    }
}
