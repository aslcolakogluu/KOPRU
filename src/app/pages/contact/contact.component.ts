import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonModule, InputTextModule, InputTextareaModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  private notif = inject(NotificationService);

  name = signal('');
  email = signal('');
  subject = signal('');
  message = signal('');
  isSubmitting = signal(false);

  onSubmit() {
    if (!this.name() || !this.email() || !this.message()) {
      this.notif.add('Hata', 'Lütfen gerekli alanları doldurun.', 'error');
      return;
    }

    this.isSubmitting.set(true);

    // Mock API call
    setTimeout(() => {
      this.isSubmitting.set(false);
      this.notif.add('Mesajınız İletildi', 'En kısa sürede size dönüş yapacağız. Teşekkürler!', 'success');
      
      // Reset form
      this.name.set('');
      this.email.set('');
      this.subject.set('');
      this.message.set('');
    }, 1200);
  }
}
