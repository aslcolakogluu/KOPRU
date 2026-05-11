import { Component, inject, signal, OnInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';
import { DialogModule } from 'primeng/dialog';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    RouterModule,
    ButtonModule,
    InputTextModule,
    MessageModule,
    DialogModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  private auth = inject(AuthService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  private returnUrl = '/';

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  ngOnDestroy() {
  }

  email = '';
  password = '';
  showPassword = false;
  loading = signal(false);
  errorMsg = signal('');

  isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  isFormValid(): boolean {
    return this.isValidEmail(this.email) && this.password.length >= 6;
  }

  async onLogin() {
    if (!this.isValidEmail(this.email)) {
      this.errorMsg.set('Geçerli bir e-posta adresi giriniz.');
      return;
    }

    if (this.password.length < 6) {
      this.errorMsg.set('Şifre en az 6 karakter olmalıdır.');
      return;
    }

    this.loading.set(true);
    this.errorMsg.set('');

    try {
      await this.auth.login(this.email, this.password);
      this.router.navigateByUrl(this.returnUrl);
    } catch (err: any) {
      this.errorMsg.set(err?.message || 'Giriş sırasında bir hata oluştu.');
    } finally {
      this.loading.set(false);
    }
  }

  // ── Şifremi unuttum ──
  forgotVisible = false;
  forgotEmail = signal('');
  forgotSending = signal(false);
  forgotSent = signal(false);
  dialogError = signal('');

  openForgot(e: Event): void {
    e.preventDefault();
    this.forgotEmail.set(this.email.toLowerCase());
    this.forgotSent.set(false);
    this.resetCode.set('');
    this.newPasswordReset.set('');
    this.dialogError.set('');
    this.forgotVisible = true;
  }

  async sendReset() {
    const email = this.forgotEmail().trim().toLowerCase();
    if (!email) return;

    this.forgotSending.set(true);
    this.dialogError.set('');
    this.resetCode.set('');
    this.newPasswordReset.set('');

    try {
      await this.auth.requestPasswordReset(email);
      this.forgotSent.set(true);
    } catch (err: any) {
      this.dialogError.set(err.message);
    } finally {
      this.forgotSending.set(false);
    }
  }

  // ── Şifre Sıfırlama (2. Adım: Kod ve Yeni Şifre) ──
  resetCode = signal('');
  newPasswordReset = signal('');
  resetLoading = signal(false);

  async confirmReset() {
    if (!this.resetCode() || !this.newPasswordReset()) return;
    
    this.resetLoading.set(true);
    this.dialogError.set('');

    try {
      await this.auth.resetPassword({
        email: this.forgotEmail().toLowerCase(),
        token: this.resetCode(),
        newPassword: this.newPasswordReset()
      });
      // Başarılıysa dialogu kapat
      this.forgotSent.set(false);
      this.forgotVisible = false;
      // Ana ekranda başarı mesajı göster
      this.errorMsg.set('Şifreniz başarıyla güncellendi. Yeni şifrenizle giriş yapabilirsiniz.');
    } catch (err: any) {
      this.dialogError.set(err.message);
    } finally {
      this.resetLoading.set(false);
    }
  }
}
