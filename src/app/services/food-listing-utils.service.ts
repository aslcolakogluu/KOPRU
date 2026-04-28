import { Injectable } from '@angular/core';
import {
  BusinessType,
  FoodCategory,
  BUSINESS_TYPE_LABELS,
  BUSINESS_TYPE_ICONS,
  FOOD_CATEGORY_LABELS
} from '../models/food-listing.model';

/**
 * Merkezi yardımcı servis.
 * getCategoryImage, getCategoryIcon, getBusinessIcon gibi fonksiyonlar
 * tüm bileşenlerde tekrar tekrar tanımlanıyordu — artık tek bir yerden yönetilecek.
 */
@Injectable({ providedIn: 'root' })
export class FoodListingUtilsService {

  // ─── Kategori Görselleri ───
  getCategoryImage(category: string): string {
    const images: Record<string, string> = {
      prepared: 'assets/images/categories/prepared.png',
      packaged: 'assets/images/categories/packaged.png',
      bakery_item: 'assets/images/categories/bakery_item.png',
      produce: 'assets/images/categories/produce.png',
      mixed: 'assets/images/categories/mixed.png'
    };
    return images[category] || 'assets/images/categories/mixed.png';
  }

  // ─── Kategori İkonları (tek tutarlı set) ───
  getCategoryIcon(category: string): string {
    const icons: Record<string, string> = {
      prepared: 'pi pi-stopwatch',
      packaged: 'pi pi-box',
      bakery_item: 'pi pi-gift',
      produce: 'pi pi-sun',
      mixed: 'pi pi-th-large'
    };
    return icons[category] || 'pi pi-tag';
  }

  // ─── İşletme Türü Label ───
  getBusinessLabel(type: BusinessType | string): string {
    return BUSINESS_TYPE_LABELS[type as BusinessType] || 'İşletme';
  }

  // ─── İşletme Türü İkonu (tek tutarlı set) ───
  getBusinessIcon(type: BusinessType | string): string {
    return BUSINESS_TYPE_ICONS[type as BusinessType] || 'pi pi-building';
  }

  // ─── Kategori Label ───
  getCategoryLabel(category: FoodCategory | string): string {
    return FOOD_CATEGORY_LABELS[category as FoodCategory] || 'Diğer';
  }
}
