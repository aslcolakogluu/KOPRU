import { Injectable, signal, computed } from '@angular/core';

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

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userSignal = signal<User | null>(null);

  readonly currentUser = this.userSignal.asReadonly();
  readonly isLoggedIn = computed(() => this.userSignal() !== null);
  readonly isDonor = computed(() => this.userSignal()?.role === 'donor');
  readonly isReceiver = computed(() => this.userSignal()?.role === 'receiver');

  constructor() {
    // Check local storage for mock persistent session if needed (optional)
    if (typeof window !== 'undefined') {
      const savedUser = localStorage.getItem('kopru_user');
      if (savedUser) {
        try {
          this.userSignal.set(JSON.parse(savedUser));
        } catch { }
      }
    }
  }

  login(email: string, password: string): Promise<User> {
    return new Promise((resolve, reject) => {
      // Mock login delay
      setTimeout(() => {
        if (email && password) {
          // Kayıtlı kullanıcıyı localStorage'dan oku, böylece rol bilgisi korunur
          let savedRole: 'donor' | 'receiver' = 'donor';
          let savedName = email.split('@')[0] || 'Kullanıcı';
          let savedId = 1;
          let savedImpact = { savedKg: 24, sharedMeals: 18 };

          if (typeof window !== 'undefined') {
            const savedUser = localStorage.getItem('kopru_user');
            if (savedUser) {
              try {
                const parsed = JSON.parse(savedUser);
                if (parsed.email === email) {
                  savedRole = parsed.role || 'donor';
                  savedName = parsed.name || savedName;
                  savedId = parsed.id || savedId;
                  savedImpact = parsed.impact || savedImpact;
                }
              } catch { }
            }
          }

          const mockUser: User = {
            id: savedId,
            email,
            name: savedName,
            role: savedRole,
            impact: savedImpact
          };
          this.userSignal.set(mockUser);
          if (typeof window !== 'undefined') {
            localStorage.setItem('kopru_user', JSON.stringify(mockUser));
          }
          resolve(mockUser);
        } else {
          reject('Geçersiz e-posta veya şifre');
        }
      }, 800);
    });
  }

  register(userData: any): Promise<User> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const mockUser: User = {
          id: Date.now(),
          email: userData.email,
          name: userData.name || 'Yeni Kullanıcı',
          role: userData.role || 'donor',
          impact: { savedKg: 0, sharedMeals: 0 }
        };
        this.userSignal.set(mockUser);
        if (typeof window !== 'undefined') {
          localStorage.setItem('kopru_user', JSON.stringify(mockUser));
        }
        resolve(mockUser);
      }, 800);
    });
  }

  updateProfile(data: Partial<Pick<User, 'name' | 'businessName' | 'phone'>>): void {
    const current = this.userSignal();
    if (!current) return;
    const updated = { ...current, ...data };
    this.userSignal.set(updated);
    if (typeof window !== 'undefined') {
      localStorage.setItem('kopru_user', JSON.stringify(updated));
    }
  }

  logout(): void {
    this.userSignal.set(null);
    if (typeof window !== 'undefined') {
      localStorage.removeItem('kopru_user');
    }
  }
}
