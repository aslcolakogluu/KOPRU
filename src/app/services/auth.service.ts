// ============================================================
// auth.service.ts — Kimlik Doğrulama Servisi
// Gerçek Node.js + Express backend API'sine bağlanır.
// JWT token localStorage'da saklanır, oturum kalıcıdır.
// ============================================================

import { Injectable, signal, computed, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

export interface User {
  id: number;
  email: string;
  name: string;
  role: 'donor' | 'receiver';
  businessName?: string;
  phone?: string;
  impact?: {
    savedKg: number;
    sharedMeals: number;
  };
}

interface AuthResponse {
  token: string;
  user: User;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:3000/api/auth';

  private userSignal = signal<User | null>(null);

  readonly currentUser = this.userSignal.asReadonly();
  readonly isLoggedIn = computed(() => this.userSignal() !== null);
  readonly isDonor = computed(() => this.userSignal()?.role === 'donor');
  readonly isReceiver = computed(() => this.userSignal()?.role === 'receiver');

  constructor() {
    // Sayfa yenilendiğinde token'dan oturumu geri yükle
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('kopru_token');
      const savedUser = localStorage.getItem('kopru_user');
      if (token && savedUser) {
        try {
          this.userSignal.set(JSON.parse(savedUser));
          // Arka planda token'ı doğrula ve güncel kullanıcı bilgisini çek
          this.fetchCurrentUser();
        } catch { }
      }
    }
  }

  // ─────────────────────────────────────────
  // Kayıt
  // ─────────────────────────────────────────
  async register(userData: {
    email: string;
    password: string;
    name: string;
    role: 'donor' | 'receiver';
    businessName?: string;
    phone?: string;
  }): Promise<User> {
    try {
      const response = await firstValueFrom(
        this.http.post<AuthResponse>(`${this.apiUrl}/register`, userData)
      );
      this.saveSession(response);
      return response.user;
    } catch (err: any) {
      const message = err?.error?.error || 'Kayıt başarısız. Lütfen tekrar deneyin.';
      throw new Error(message);
    }
  }

  // ─────────────────────────────────────────
  // Giriş
  // ─────────────────────────────────────────
  async login(email: string, password: string): Promise<User> {
    try {
      const response = await firstValueFrom(
        this.http.post<AuthResponse>(`${this.apiUrl}/login`, { email, password })
      );
      this.saveSession(response);
      return response.user;
    } catch (err: any) {
      const message = err?.error?.error || 'Geçersiz e-posta veya şifre.';
      throw new Error(message);
    }
  }

  // ─────────────────────────────────────────
  // Profil güncelle
  // ─────────────────────────────────────────
  async updateProfile(data: Partial<Pick<User, 'name' | 'businessName' | 'phone'>>): Promise<void> {
    try {
      const updatedUser = await firstValueFrom(
        this.http.put<User>(`${this.apiUrl}/profile`, data, {
          headers: this.getAuthHeaders()
        })
      );
      this.userSignal.set(updatedUser);
      if (typeof window !== 'undefined') {
        localStorage.setItem('kopru_user', JSON.stringify(updatedUser));
      }
    } catch {
      // Backend yoksa yerel güncelle
      const current = this.userSignal();
      if (!current) return;
      const updated = { ...current, ...data };
      this.userSignal.set(updated);
      if (typeof window !== 'undefined') {
        localStorage.setItem('kopru_user', JSON.stringify(updated));
      }
    }
  }

  // ─────────────────────────────────────────
  // Şifre Sıfırlama İsteği
  // ─────────────────────────────────────────
  async requestPasswordReset(email: string): Promise<void> {
    try {
      await firstValueFrom(
        this.http.post(`${this.apiUrl}/forgot-password`, { email })
      );
    } catch (err: any) {
      const message = err?.error?.error || 'Sıfırlama isteği gönderilemedi.';
      throw new Error(message);
    }
  }

  // ─────────────────────────────────────────
  // Kodu Doğrula (Şifre değiştirmeden)
  // ─────────────────────────────────────────
  async verifyResetCode(email: string, token: string): Promise<void> {
    try {
      await firstValueFrom(
        this.http.post(`${this.apiUrl}/verify-reset-code`, { email, token })
      );
    } catch (err: any) {
      const message = err?.error?.error || 'Kod doğrulanamadı.';
      throw new Error(message);
    }
  }

  // ─────────────────────────────────────────
  // Şifreyi Sıfırla (Kod ile)
  // ─────────────────────────────────────────
  async resetPassword(data: { email: string; token: string; newPassword: string }): Promise<void> {
    try {
      await firstValueFrom(
        this.http.post(`${this.apiUrl}/reset-password`, data)
      );
    } catch (err: any) {
      const message = err?.error?.error || 'Şifre sıfırlanamadı.';
      throw new Error(message);
    }
  }

  // ─────────────────────────────────────────
  // Çıkış
  // ─────────────────────────────────────────
  logout(): void {
    this.userSignal.set(null);
    if (typeof window !== 'undefined') {
      localStorage.removeItem('kopru_token');
      localStorage.removeItem('kopru_user');
    }
  }

  // ─────────────────────────────────────────
  // Token header'ı oluştur
  // ─────────────────────────────────────────
  getAuthHeaders(): { [key: string]: string } {
    const token = typeof window !== 'undefined' ? localStorage.getItem('kopru_token') : null;
    return token ? { Authorization: `Bearer ${token}` } : {};
  }

  // ─────────────────────────────────────────
  // Oturumu localStorage'a kaydet
  // ─────────────────────────────────────────
  private saveSession(response: AuthResponse): void {
    this.userSignal.set(response.user);
    if (typeof window !== 'undefined') {
      localStorage.setItem('kopru_token', response.token);
      localStorage.setItem('kopru_user', JSON.stringify(response.user));
    }
  }

  // ─────────────────────────────────────────
  // Token'dan güncel kullanıcı bilgisini çek
  // ─────────────────────────────────────────
  private async fetchCurrentUser(): Promise<void> {
    try {
      const user = await firstValueFrom(
        this.http.get<User>(`${this.apiUrl}/me`, { headers: this.getAuthHeaders() })
      );
      this.userSignal.set(user);
      if (typeof window !== 'undefined') {
        localStorage.setItem('kopru_user', JSON.stringify(user));
      }
    } catch {
      // Token geçersizse oturumu temizle
      this.logout();
    }
  }
}
