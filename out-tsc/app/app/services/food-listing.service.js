import { Injectable, signal, computed, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import * as i0 from "@angular/core";
export class FoodListingService {
    http = inject(HttpClient);
    apiUrl = 'http://localhost:3000/listings';
    listings = signal([]);
    allListings = this.listings.asReadonly();
    activeListings = computed(() => this.listings().filter(l => l.status === 'active'));
    stats = computed(() => ({
        totalListings: this.listings().length,
        activeListings: this.activeListings().length,
        totalSaved: 1247, // Mocked overall stats
        activeCouriers: 34,
        partnerBusinesses: 186,
        receiverOrgs: 42
    }));
    constructor() {
        this.loadListings();
    }
    async loadListings() {
        try {
            const data = await firstValueFrom(this.http.get(this.apiUrl));
            this.listings.set(data);
        }
        catch (error) {
            console.error('Error fetching listings from backend:', error);
            // Fallback or retry logic could go here
        }
    }
    getListingsByType(type) {
        return this.listings().filter(l => l.businessType === type);
    }
    getListingsByCategory(category) {
        return this.listings().filter(l => l.category === category);
    }
    async addListing(listing) {
        const newListing = {
            ...listing,
            status: 'active',
            createdAt: new Date().toISOString()
        };
        try {
            const addedListing = await firstValueFrom(this.http.post(this.apiUrl, newListing));
            this.listings.update(list => [...list, addedListing]);
        }
        catch (error) {
            console.error('Error adding listing:', error);
        }
    }
    async updateStatus(id, status, extraUpdates = {}) {
        try {
            const currentItem = this.listings().find(l => l.id === id);
            if (!currentItem)
                return;
            const updatedItem = { ...currentItem, ...extraUpdates, status };
            await firstValueFrom(this.http.put(`${this.apiUrl}/${id}`, updatedItem));
            this.listings.update(list => list.map(l => l.id === id ? updatedItem : l));
        }
        catch (error) {
            console.error(`Error updating listing ${id}:`, error);
        }
    }
    async reserveListing(id, deliveryAddress) {
        await this.updateStatus(id, 'reserved', { deliveryAddress });
    }
    static ɵfac = function FoodListingService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || FoodListingService)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: FoodListingService, factory: FoodListingService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FoodListingService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], () => [], null); })();
//# sourceMappingURL=food-listing.service.js.map