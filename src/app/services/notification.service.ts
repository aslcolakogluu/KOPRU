import { Injectable, signal, computed, inject } from '@angular/core';
import { MessageService } from 'primeng/api';

export type NotifType = 'success' | 'info' | 'warning' | 'error';

export interface AppNotification {
  id: string;
  title: string;
  message: string;
  type: NotifType;
  read: boolean;
  createdAt: Date;
}

@Injectable({ providedIn: 'root' })
export class NotificationService {
  private messageService = inject(MessageService);
  private _notifications = signal<AppNotification[]>(this.loadFromStorage());

  readonly notifications = this._notifications.asReadonly();
  readonly unreadCount = computed(() => this._notifications().filter(n => !n.read).length);

  add(title: string, message: string, type: NotifType = 'info'): void {
    const notif: AppNotification = {
      id: Date.now().toString(),
      title,
      message,
      type,
      read: false,
      createdAt: new Date()
    };
    this._notifications.update(list => [notif, ...list].slice(0, 30)); // max 30
    this.saveToStorage();

    // Trigger Toast
    this.messageService.add({
      severity: type,
      summary: title,
      detail: message,
      life: 3000
    });
  }

  markRead(id: string): void {
    this._notifications.update(list =>
      list.map(n => n.id === id ? { ...n, read: true } : n)
    );
    this.saveToStorage();
  }

  markAllRead(): void {
    this._notifications.update(list => list.map(n => ({ ...n, read: true })));
    this.saveToStorage();
  }

  clear(): void {
    this._notifications.set([]);
    this.saveToStorage();
  }

  private saveToStorage(): void {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('kopru_notifications', JSON.stringify(this._notifications()));
    }
  }

  private loadFromStorage(): AppNotification[] {
    if (typeof window === 'undefined') return [];
    try {
      const raw = sessionStorage.getItem('kopru_notifications');
      if (!raw) return [];
      const parsed = JSON.parse(raw) as AppNotification[];
      return parsed.map(n => ({ ...n, createdAt: new Date(n.createdAt) }));
    } catch { return []; }
  }
}
