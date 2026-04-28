import { Component, inject, signal, OnInit, OnDestroy } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { MessageModule } from 'primeng/message';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    FormsModule,
    RouterModule,
    ButtonModule,
    InputTextModule,
    PasswordModule,
    MessageModule
  ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, OnDestroy {
  private auth = inject(AuthService);
  private router = inject(Router);

  ngOnInit() {
  }

  ngOnDestroy() {
  }

  name = '';
  email = '';
  password = '';
  role: 'donor' | 'receiver' = 'donor';
  loading = signal(false);
  errorMsg = signal('');

  isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  isFormValid(): boolean {
    return !!this.name && this.isValidEmail(this.email) && this.password.length > 6;
  }

  async onRegister() {
    if (!this.name) {
      this.errorMsg.set('Lütfen isminizi giriniz.');
      return;
    }

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
      await this.auth.register({ name: this.name, email: this.email, role: this.role });
      this.router.navigate(['/']);
    } catch (err: any) {
      this.errorMsg.set(err);
    } finally {
      this.loading.set(false);
    }
  }
}
