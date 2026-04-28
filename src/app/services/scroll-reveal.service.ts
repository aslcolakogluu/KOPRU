import { Injectable, NgZone } from '@angular/core';

/**
 * ScrollRevealService
 * Sayfa kaydırıldıkça `.reveal` sınıflı elementlere `.revealed` sınıfı ekler,
 * böylece CSS transition animasyonları tetiklenir.
 */
@Injectable({ providedIn: 'root' })
export class ScrollRevealService {
  private observer: IntersectionObserver | null = null;

  constructor(private zone: NgZone) {}

  /**
   * Verilen root element içindeki tüm .reveal elementlerini izlemeye başla.
   * Bağımsız çalışır; her sayfa/component ngAfterViewInit'te çağırabilir.
   */
  observe(root: HTMLElement | Document = document): void {
    this.zone.runOutsideAngular(() => {
      // Önceki observer'ı temizle
      this.observer?.disconnect();

      this.observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('revealed');
              this.observer?.unobserve(entry.target); // Bir kez tetikle
            }
          });
        },
        { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
      );

      const targets =
        root instanceof Document
          ? document.querySelectorAll('.reveal')
          : root.querySelectorAll('.reveal');

      targets.forEach((el) => this.observer!.observe(el));
    });
  }

  /** Tüm sayfayı yeniden tara (route değişimlerinde kullanılır) */
  refresh(): void {
    this.observe(document);
  }

  destroy(): void {
    this.observer?.disconnect();
    this.observer = null;
  }
}
