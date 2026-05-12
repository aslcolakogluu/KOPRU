export interface FoodListing {
    id: number;
    ownerId?: number;           // İlanı oluşturan kullanıcının ID'si
    businessName: string;
    businessType: BusinessType;
    category: FoodCategory;
    title: string;
    description: string;
    quantity: string;
    expiresAt: string;
    location: string;
    imageUrl?: string;
    status: ListingStatus;
    createdAt: string;
    contactPhone?: string;
    deliveryAddress?: string;
    lat?: number;
    lng?: number;

    // --- Yeni Özellikler ---
    isUrgent?: boolean;         // Acil durum ilanı mı? (Flash Alerts)
    isRecurring?: boolean;      // Düzenli (abonelik tarzı) bağış mı?
    recurringFrequency?: 'daily' | 'weekly'; 
    reservedById?: number;      // Rezervasyon yapan kullanıcının ID'si
    paymentMethod?: string;     // Ödeme yöntemi (Kredi Kartı vb.)
}

export type BusinessType = 'market' | 'restaurant' | 'hotel' | 'bakery' | 'dormitory';
export type FoodCategory = 'prepared' | 'packaged' | 'bakery_item' | 'produce' | 'mixed';
export type ListingStatus = 'active' | 'reserved' | 'completed';

export interface ReceiverOrg {
    id: number;
    name: string;
    type: ReceiverType;
    location: string;
    contactPerson: string;
    phone: string;
}

export type ReceiverType = 'shelter' | 'soup_kitchen' | 'public_restaurant' | 'bread_buffet';

export const BUSINESS_TYPE_LABELS: Record<BusinessType, string> = {
    market: 'Market',
    restaurant: 'Restoran',
    hotel: 'Otel',
    bakery: 'Pastane / Fırın',
    dormitory: 'Yurt'
};

export const FOOD_CATEGORY_LABELS: Record<FoodCategory, string> = {
    prepared: 'Hazır Yemek',
    packaged: 'Paketli Ürün',
    bakery_item: 'Unlu Mamul',
    produce: 'Taze Ürün',
    mixed: 'Karışık'
};

export const RECEIVER_TYPE_LABELS: Record<ReceiverType, string> = {
    shelter: 'Hayvan Barınağı',
    soup_kitchen: 'Aşevi',
    public_restaurant: 'Kent Lokantası',
    bread_buffet: 'Halk Ekmek'
};

export const STATUS_LABELS: Record<ListingStatus, string> = {
    active: 'Aktif',
    reserved: 'Rezerve',
    completed: 'Tamamlandı'
};

export const BUSINESS_TYPE_ICONS: Record<BusinessType, string> = {
    market: 'pi pi-shopping-cart',
    restaurant: 'pi pi-shop',
    hotel: 'pi pi-building',
    bakery: 'pi pi-gift',
    dormitory: 'pi pi-home'
};
