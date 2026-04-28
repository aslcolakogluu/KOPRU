import { Component, inject, signal, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';
import { InputSwitchModule } from 'primeng/inputswitch';
import { TagModule } from 'primeng/tag'; // YENİ: Geçmiş timeline tag'leri için
import { AuthService } from '../../services/auth.service';
import { NotificationService } from '../../services/notification.service';
import { ScrollRevealService } from '../../services/scroll-reveal.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, ButtonModule, InputTextModule, MessageModule, InputSwitchModule, TagModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements AfterViewInit {
  auth = inject(AuthService);
  private notif = inject(NotificationService);
  private scrollReveal = inject(ScrollRevealService);

  ngAfterViewInit() {
    this.scrollReveal.observe();
  }

  // Form alanları
  name = signal(this.auth.currentUser()?.name ?? '');
  businessName = signal(this.auth.currentUser()?.businessName ?? '');
  phone = signal(this.auth.currentUser()?.phone ?? '');

  // Bildirim Tercihleri (Kullanıcı etkileşimi için)
  notifyNewListings = signal(true);
  notifyExpiring = signal(true);
  notifySms = signal(false);

  saving = signal(false);



  save(): void {
    if (!this.name().trim()) return;
    this.saving.set(true);

    setTimeout(() => {
      this.auth.updateProfile({
        name: this.name().trim(),
        businessName: this.businessName().trim() || undefined,
        phone: this.phone().trim() || undefined,
      });
      this.saving.set(false);
      this.notif.add('Profil Güncellendi ✅', 'Bilgileriniz ve tercihleriniz kaydedildi.', 'success');
    }, 600);
  }

  getRoleLabel(): string {
    return this.auth.currentUser()?.role === 'donor' ? 'Bağışçı İşletme' : 'Alıcı Kurum';
  }

  getRoleIcon(): string {
    return this.auth.currentUser()?.role === 'donor' ? 'pi pi-building' : 'pi pi-heart';
  }

  // --- HESAP GÜVENLİĞİ ---
  changePassword(): void {
    this.notif.add('Bilgi', 'Şifre sıfırlama bağlantısı e-posta adresinize gönderildi.', 'info');
  }

  deleteAccount(): void {
    this.notif.add('Uyarı', 'Hesap silme yetkisi şu an sistem yöneticisi onayına bağlıdır.', 'error');
  }

  // --- KURUMSAL ÖZELLİKLER (MOCK DATA) ---
  transactionHistory = [
    { date: '12 Mart 2026', type: 'received', title: '50 Porsiyon Sıcak Yemek', source: 'Hilton İstanbul Bomonti', status: 'Teslim Alındı' },
    { date: '8 Mart 2026', type: 'received', title: '15 Kutu İsrafsız Sebze', source: 'CarrefourSA Kadıköy', status: 'Teslim Alındı' }
  ];

  teamMembers = [
    { name: 'Ahmet Yılmaz', role: 'Dağıtım / Kurye Şoförü', phone: '+90 555 111 22 33' },
    { name: 'Selin Demir', role: 'Depo Organizasyon Sorumlusu', phone: '+90 555 444 55 66' }
  ];
}
