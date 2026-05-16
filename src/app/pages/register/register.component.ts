import { Component, inject, signal, computed, OnInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';
import { CheckboxModule } from 'primeng/checkbox';
import { DialogModule } from 'primeng/dialog';
import { AuthService } from '../../services/auth.service';

// ─────────────────────────────────────────
// Şifre gücü kuralları:
//   Zayıf (Weak)   → kurallara uymayan → REDDEDILIR
//   Orta  (Medium) → en az 3 kural sağlayan → KABUL EDİLİR
//   Güçlü (Strong) → tüm kurallar sağlanan → KABUL EDİLİR
//
// Kurallar:
//   ✅ En az 8 karakter
//   ✅ En az 1 büyük harf   (A-Z)
//   ✅ En az 1 rakam        (0-9)
//   ✅ En az 1 noktalama    (!@#$%^&*...)
// ─────────────────────────────────────────

export interface PasswordRule {
  key: string;
  label: string;
  met: boolean;
}

export type PasswordStrength = 'empty' | 'weak' | 'medium' | 'strong';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ButtonModule,
    InputTextModule,
    MessageModule,
    CheckboxModule,
    DialogModule
  ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, OnDestroy {
  private auth = inject(AuthService);
  private router = inject(Router);

  ngOnInit() {}
  ngOnDestroy() {}

  name     = '';
  email    = '';
  password = '';
  showPassword = false;
  role: 'donor' | 'receiver' = 'donor';
  legalConsent = false;
  showLegalModal = false;
  loading  = signal(false);
  errorMsg = signal('');

  // ─── Şifre Kural Kontrolü ───────────────
  get passwordRules(): PasswordRule[] {
    return [
      { key: 'length',    label: 'En az 8 karakter',        met: this.password.length >= 8 },
      { key: 'upper',     label: 'En az 1 büyük harf (A-Z)', met: /[A-Z]/.test(this.password) },
      { key: 'digit',     label: 'En az 1 rakam (0-9)',      met: /[0-9]/.test(this.password) },
      { key: 'special',   label: 'En az 1 noktalama işareti (!@#$%...)', met: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?`~]/.test(this.password) },
    ];
  }

  get passwordStrength(): PasswordStrength {
    if (!this.password) return 'empty';
    const metCount = this.passwordRules.filter(r => r.met).length;
    if (metCount <= 1) return 'weak';
    if (metCount === 2 || metCount === 3) return 'medium';
    return 'strong'; // tümü sağlandı
  }

  get strengthLabel(): string {
    const map: Record<PasswordStrength, string> = {
      empty:  '',
      weak:   'Zayıf',
      medium: 'Orta',
      strong: 'Güçlü'
    };
    return map[this.passwordStrength];
  }

  get isPasswordAccepted(): boolean {
    // Medium veya Strong → kabul edilir
    return this.passwordStrength === 'medium' || this.passwordStrength === 'strong';
  }

  // ─── Form Geçerlilik ────────────────────
  isValidEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  isFormValid(): boolean {
    return !!this.name && this.isValidEmail(this.email) && this.isPasswordAccepted && this.legalConsent;
  }

  // ─── Kayıt ─────────────────────────────
  async onRegister() {
    if (!this.name) {
      this.errorMsg.set('Lütfen isminizi giriniz.');
      return;
    }
    if (!this.isValidEmail(this.email)) {
      this.errorMsg.set('Geçerli bir e-posta adresi giriniz.');
      return;
    }
    if (!this.isPasswordAccepted) {
      this.errorMsg.set('Lütfen en az orta güçte bir şifre seçin.');
      return;
    }

    this.loading.set(true);
    this.errorMsg.set('');

    try {
      await this.auth.register({ 
        name: this.name.trim(), 
        email: this.email.trim(), 
        password: this.password.trim(), 
        role: this.role 
      });
      this.router.navigate(['/']);
    } catch (err: any) {
      this.errorMsg.set(err?.message || 'Kayıt sırasında bir hata oluştu.');
    } finally {
      this.loading.set(false);
    }
  }
}
