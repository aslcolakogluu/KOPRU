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
            console.warn('Backend unavailable, maintaining local state.');
            // Eğer liste boşsa örnek verileri yükle, değilse mevcut yerel listeyi koru
            if (this.listings().length === 0) {
                this.listings.set(this.getSampleListings());
            }
        }
    }

    private getSampleListings(): FoodListing[] {
        return [
            {
                id: 1, businessName: 'CarrefourSA Kadıköy', businessType: 'market', category: 'produce',
                title: 'Taze Meyve & Sebze Paketi', description: 'Günün sonunda kalan taze meyve ve sebzelerden oluşan karışık paket.',
                quantity: '5 kg', expiresAt: '2026-05-16', location: 'Kadıköy, İstanbul', status: 'active', price: 45, createdAt: '2026-03-05T10:00:00',
                websiteUrl: 'https://www.carrefoursa.com',
                imageUrl: 'assets/images/restaurants/carrefoursa_market_exterior_1778864375699.png'
            },
            {
                id: 2, businessName: 'Hilton İstanbul Bomonti', businessType: 'hotel', category: 'prepared',
                title: 'Açık Büfe Akşam Yemeği Menüsü', description: 'Restoranın açık büfesinden özenle seçilmiş, taze ve kaliteli yemek porsiyonları.',
                quantity: '3 porsiyon', expiresAt: '2026-05-15', location: 'Şişli, İstanbul', status: 'active', price: 120, createdAt: '2026-03-05T21:00:00',
                websiteUrl: 'https://www.hilton.com.tr/oteller/turkiye/istanbul/hilton-istanbul-bomonti-hotel-and-conference-center/dining/',
                imageUrl: 'assets/images/restaurants/hilton_restaurant_interior_1778864390307.png'
            },
            {
                id: 3, businessName: 'Simit Sarayı Beşiktaş', businessType: 'restaurant', category: 'bakery_item',
                title: 'Taze Pastane Ürünleri', description: 'Simit, poğaça ve tatlılardan oluşan günlük taze paket.',
                quantity: '10 adet', expiresAt: '2026-05-15', location: 'Beşiktaş, İstanbul', status: 'active', price: 35, createdAt: '2026-03-05T19:30:00',
                websiteUrl: 'https://www.simitsarayicom',
                imageUrl: 'assets/images/restaurants/simit_sarayi_bakery_1778864406478.png'
            },
            {
                id: 4, businessName: 'İTÜ Yemekhanesi', businessType: 'dormitory', category: 'prepared',
                title: 'Günün Tabldot Menüsü', description: 'Öğrenciler için hazırlanan besleyici ve taze günün menüsü.',
                quantity: '8 porsiyon', expiresAt: '2026-05-15', location: 'Maslak, İstanbul', status: 'reserved', price: 0, createdAt: '2026-03-05T14:00:00',
                websiteUrl: 'https://www.itu.edu.tr',
                imageUrl: 'assets/images/restaurants/itu_cafeteria_hall_1778864422486.png'
            },
            {
                id: 5, businessName: 'Migros Ataşehir', businessType: 'market', category: 'produce',
                title: 'Taze meyve ve sebzeler', description: 'Az hasarlı ama tüketilebilir meyve ve sebzeler. Elma, portakal, domates, biber.',
                quantity: '25 kg porsiyon', expiresAt: '2026-06-02', location: 'Ataşehir, İstanbul', status: 'active', price: 18, createdAt: '2026-03-05T08:00:00',
                websiteUrl: 'https://www.migros.com.tr',
                imageUrl: 'assets/images/restaurants/migros_supermarket_aisle_1778864438883.png'
            },
            {
                id: 6, businessName: 'Nusr-Et Steakhouse', businessType: 'restaurant', category: 'prepared',
                title: 'Premium Et Menüsü', description: 'Günün özel seçimlerinden oluşan yüksek kaliteli et yemekleri.',
                quantity: '2 porsiyon', expiresAt: '2026-05-16', location: 'Etiler, İstanbul', status: 'active', price: 250, createdAt: '2026-03-05T22:30:00',
                websiteUrl: 'https://www.nusr-et.com.tr',
                imageUrl: 'assets/images/restaurants/nusret_steakhouse_dining_1778864452266.png'
            },
            {
                id: 7, businessName: 'Saray Muhallebicisi', businessType: 'restaurant', category: 'bakery_item',
                title: 'Sütlü Tatlı Paketi', description: 'Geleneksel Türk sütlü tatlılarından oluşan taze paket.',
                quantity: '4 adet', expiresAt: '2026-05-15', location: 'Nişantaşı, İstanbul', status: 'active', price: 65, createdAt: '2026-03-05T20:00:00',
                websiteUrl: 'https://www.saraymuhallebicisi.com',
                imageUrl: 'assets/images/restaurants/saray_muhallebicisi_cafe_1778864470641.png'
            },
            {
                id: 8, businessName: 'BİM Mağazaları', businessType: 'market', category: 'packaged',
                title: 'Karışık Temel Gıda Paketi', description: 'Raf ömrü yaklaşan paketli temel gıda ürünleri.',
                quantity: '12 adet', expiresAt: '2026-05-17', location: 'Bağcılar, İstanbul', status: 'active', price: 30, createdAt: '2026-03-05T16:00:00',
                websiteUrl: 'https://www.bim.com.tr',
                imageUrl: 'assets/images/restaurants/bim_store_front_1778864489152.png'
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
        let ownerId = this.auth.currentUser()?.id;
        
        // Fallback for ownerId from sessionStorage if signal is not ready
        if (!ownerId && typeof window !== 'undefined') {
            const savedUser = sessionStorage.getItem('kopru_user');
            if (savedUser) {
                try {
                    ownerId = JSON.parse(savedUser).id;
                } catch (e) {
                    console.error('Error parsing saved user for ownerId', e);
                }
            }
        }

        const newListing: FoodListing = {
            ...listing,
            id: Date.now(),
            ownerId: ownerId,
            status: 'active',
            createdAt: new Date().toISOString()
        };

        try {
            const addedListing = await firstValueFrom(
                this.http.post<FoodListing>(this.apiUrl, newListing, { headers: this.auth.getAuthHeaders() })
            );
            // Sunucudan gelen gerçek veriyi listenin başına ekle (DESC sıralama için)
            this.listings.update(list => [addedListing, ...list]);
        } catch (error: any) {
            console.error('Backend error adding listing:', error);
            throw new Error(error.error?.error || 'İlan eklenirken bir hata oluştu.');
        }
    }

    async updateListing(id: number, updates: Partial<FoodListing>): Promise<void> {
        const currentItem = this.listings().find(l => l.id === id);
        if (!currentItem) return;

        const updatedItem = { ...currentItem, ...updates };

        try {
            const result = await firstValueFrom(
                this.http.put<FoodListing>(`${this.apiUrl}/${id}`, updates, { headers: this.auth.getAuthHeaders() })
            );
            this.listings.update(list =>
                list.map(l => l.id === id ? result : l)
            );
        } catch (error) {
            console.warn(`Backend error updating listing ${id}, updating locally:`, error);
            this.listings.update(list =>
                list.map(l => l.id === id ? updatedItem : l)
            );
        }
    }

    async updateStatus(id: number, status: ListingStatus, extraUpdates: Partial<FoodListing> = {}): Promise<void> {
        return this.updateListing(id, { ...extraUpdates, status });
    }

    async reserveListing(id: number, deliveryAddress: string, reservedById?: number, paymentMethod: string = 'Kredi Kartı'): Promise<void> {
        await this.updateStatus(id, 'reserved', { deliveryAddress, reservedById, paymentMethod });
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
