import { Injectable, signal, computed, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import {
    FoodListing,
    BusinessType,
    FoodCategory,
    ListingStatus
} from '../models/food-listing.model';
import { NotificationService } from './notification.service';
import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root'
})
export class FoodListingService {
    private http = inject(HttpClient);
    private notif = inject(NotificationService);
    private auth = inject(AuthService);
    private apiUrl = 'http://localhost:3000/api/listings';

    private listings = signal<FoodListing[]>([]);

    readonly allListings = this.listings.asReadonly();

    readonly activeListings = computed(() =>
        this.listings().filter(l => l.status === 'active')
    );

    readonly stats = computed(() => ({
        totalListings: this.listings().length,
        activeListings: this.activeListings().length,
        totalSaved: 1247, // Mocked overall stats
        partnerBusinesses: 186,
        receiverOrgs: 42
    }));

    constructor() {
        this.loadListings();
    }

    async loadListings(): Promise<void> {
        try {
            const data = await firstValueFrom(this.http.get<FoodListing[]>(this.apiUrl));
            this.listings.set(data);
        } catch (error) {
            console.warn('Backend unavailable, loading sample data.');
            this.listings.set(this.getSampleListings());
        }
    }

    private getSampleListings(): FoodListing[] {
        return [
            {
                id: 1, businessName: 'CarrefourSA Kadıköy', businessType: 'market', category: 'packaged',
                title: 'Son kullanma tarihi yaklaşan süt ürünleri',
                description: 'Yoğurt, süt ve ayran çeşitleri. Son kullanma tarihi 2 gün içinde.',
                quantity: '45 adet', expiresAt: '2026-03-07', location: 'Kadıköy, İstanbul',
                status: 'active', createdAt: '2026-03-05T10:00:00'
            },
            {
                id: 2, businessName: 'Hilton İstanbul Bomonti', businessType: 'hotel', category: 'prepared',
                title: 'Akşam büfe artığı yemekler',
                description: 'Pilav, sebze yemekleri, çorba ve salata çeşitleri. Taze ve hijyenik.',
                quantity: '~30 porsiyon', expiresAt: '2026-03-06', location: 'Şişli, İstanbul',
                status: 'active', createdAt: '2026-03-05T21:00:00'
            },
            {
                id: 3, businessName: 'Simit Sarayı Beşiktaş', businessType: 'bakery', category: 'bakery_item',
                title: 'Gün sonu kalan unlu mamuller',
                description: 'Simit, poğaça, açma ve börek çeşitleri. Bugünkü üretim.',
                quantity: '60+ adet', expiresAt: '2026-03-06', location: 'Beşiktaş, İstanbul',
                status: 'active', createdAt: '2026-03-05T19:30:00'
            },
            {
                id: 4, businessName: 'İTÜ Yurt Yemekhanesi', businessType: 'dormitory', category: 'prepared',
                title: 'Öğlen yemeği fazlası',
                description: 'Mercimek çorbası, kuru fasulye, pilav ve komposto.',
                quantity: '~50 porsiyon', expiresAt: '2026-03-06', location: 'Sarıyer, İstanbul',
                status: 'reserved', createdAt: '2026-03-05T14:00:00',
                deliveryAddress: 'Sarıyer, İTÜ Kampüsü'
            },
            {
                id: 5, businessName: 'Migros Ataşehir', businessType: 'market', category: 'produce',
                title: 'Taze meyve ve sebzeler',
                description: 'Az hasarlı ama tüketilebilir meyve ve sebzeler. Elma, portakal, domates.',
                quantity: '25 kg', expiresAt: '2026-03-07', location: 'Ataşehir, İstanbul',
                status: 'active', createdAt: '2026-03-05T08:00:00'
            },
            {
                id: 6, businessName: 'Nusr-Et Steakhouse', businessType: 'restaurant', category: 'prepared',
                title: 'Kapanış saati öncesi kalan yemekler',
                description: 'Çeşitli et yemekleri, garnitürler ve tatlı çeşitleri.',
                quantity: '~20 porsiyon', expiresAt: '2026-03-06', location: 'Etiler, İstanbul',
                status: 'active', createdAt: '2026-03-05T22:30:00'
            },
            {
                id: 7, businessName: 'Saray Muhallebicisi', businessType: 'bakery', category: 'bakery_item',
                title: 'Gün sonu kalan pasta ve tatlılar',
                description: 'Çeşitli pastalar, kurabiyeler, profiterol ve sütlaç.',
                quantity: '~35 porsiyon', expiresAt: '2026-03-06', location: 'Beyoğlu, İstanbul',
                status: 'active', createdAt: '2026-03-05T20:00:00'
            },
            {
                id: 8, businessName: 'BİM Üsküdar', businessType: 'market', category: 'mixed',
                title: 'Karışık gıda ürünleri',
                description: 'Ekmek, peynir, zeytin ve çeşitli konserve ürünler.',
                quantity: '~30 adet', expiresAt: '2026-03-08', location: 'Üsküdar, İstanbul',
                status: 'active', createdAt: '2026-03-05T16:00:00'
            }
        ];
    }

    getListingsByType(type: BusinessType): FoodListing[] {
        return this.listings().filter(l => l.businessType === type);
    }

    getListingsByCategory(category: FoodCategory): FoodListing[] {
        return this.listings().filter(l => l.category === category);
    }

    async addListing(listing: Omit<FoodListing, 'id' | 'status' | 'createdAt' | 'ownerId'>): Promise<void> {
        const newListing: FoodListing = {
            ...listing,
            id: Date.now(),
            ownerId: this.auth.currentUser()?.id,
            status: 'active',
            createdAt: new Date().toISOString()
        };

        try {
            const addedListing = await firstValueFrom(
                this.http.post<FoodListing>(this.apiUrl, newListing, { headers: this.auth.getAuthHeaders() })
            );
            this.listings.update(list => [...list, addedListing]);
        } catch (error) {
            console.warn('Backend error adding listing, updating locally:', error);
            this.listings.update(list => [...list, newListing]);
        }
    }

    async updateStatus(id: number, status: ListingStatus, extraUpdates: Partial<FoodListing> = {}): Promise<void> {
        const currentItem = this.listings().find(l => l.id === id);
        if (!currentItem) return;

        const updatedItem = { ...currentItem, ...extraUpdates, status };

        try {
            await firstValueFrom(
                this.http.put<FoodListing>(`${this.apiUrl}/${id}`, updatedItem, { headers: this.auth.getAuthHeaders() })
            );
            this.listings.update(list =>
                list.map(l => l.id === id ? updatedItem : l)
            );
        } catch (error) {
            console.warn(`Backend error updating listing ${id}, updating locally:`, error);
            this.listings.update(list =>
                list.map(l => l.id === id ? updatedItem : l)
            );
        }
    }

    async reserveListing(id: number, deliveryAddress: string): Promise<void> {
        await this.updateStatus(id, 'reserved', { deliveryAddress });
        this.notif.add(
            'Rezervasyon Oluşturuldu ✅',
            'İlan başarıyla sepete eklendi. İşletme onayını bekleyin.',
            'success'
        );
    }

    /** Bugün veya yarın bitiyor mu? */
    isExpiringSoon(expiresAt: string): boolean {
        if (!expiresAt) return false;
        const exp = new Date(expiresAt);
        const now = new Date();
        const diffMs = exp.getTime() - now.setHours(0, 0, 0, 0);
        const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));
        return diffDays <= 1 && diffDays >= 0;
    }
}
