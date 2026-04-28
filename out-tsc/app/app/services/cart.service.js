import { Injectable, signal, computed } from '@angular/core';
import * as i0 from "@angular/core";
export class CartService {
    items = signal([]);
    cartItems = this.items.asReadonly();
    cartCount = computed(() => this.items().length);
    addToCart(listing) {
        const currentItems = this.items();
        const exists = currentItems.some(item => item.id === listing.id);
        if (!exists) {
            this.items.update(items => [...items, listing]);
        }
    }
    removeFromCart(id) {
        this.items.update(items => items.filter(item => item.id !== id));
    }
    clearCart() {
        this.items.set([]);
    }
    static ɵfac = function CartService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || CartService)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: CartService, factory: CartService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CartService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();
//# sourceMappingURL=cart.service.js.map