import { Component, inject, signal, OnInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
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
    PasswordModule,
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
      this.errorMsg.set(err);
    } finally {
      this.loading.set(false);
    }
  }

  // ── Şifremi unuttum ──
  forgotVisible = signal(false);
  forgotEmail = signal('');
  forgotSending = signal(false);
  forgotSent = signal(false);

  openForgot(e: Event): void {
    e.preventDefault();
    this.forgotEmail.set(this.email);
    this.forgotSent.set(false);
    this.forgotVisible.set(true);
  }

  sendReset(): void {
    if (!this.forgotEmail().trim()) return;
    this.forgotSending.set(true);
    setTimeout(() => {
      this.forgotSending.set(false);
      this.forgotSent.set(true);
    }, 1000);
  }
}
