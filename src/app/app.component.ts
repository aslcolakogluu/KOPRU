import { Component, inject } from '@angular/core';
import { RouterOutlet, ChildrenOutletContexts, Router, NavigationEnd } from '@angular/router';
import { trigger, transition, style, animate, query, group } from '@angular/animations';
import { filter } from 'rxjs/operators';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ToastModule } from 'primeng/toast';

import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, ToastModule],
  template: `
    <p-toast></p-toast>
    <app-navbar></app-navbar>
    <main class="page-container">
      <router-outlet></router-outlet>
    </main>
    @if (shouldShowFooter()) {
      <app-footer></app-footer>
    }
  `,
  styles: [`
    main {
      min-height: 100vh;
      padding-top: 80px;
      box-sizing: border-box;
    }

    /* Global css animation for all routed pages */
    ::ng-deep .page-container > * {
      display: block;
      animation: pageFadeIn 0.35s cubic-bezier(0.22, 1, 0.36, 1) forwards;
    }

    @keyframes pageFadeIn {
      from {
        opacity: 0;
        transform: translateY(10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `]
})
export class AppComponent {
  private router = inject(Router);
  contexts = inject(ChildrenOutletContexts);
  auth = inject(AuthService);

  constructor() {
    // Her sayfa geçişinde sayfayı en üste kaydır
    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe(() => {
        if (typeof window !== 'undefined') {
          window.scrollTo({ top: 0, behavior: 'instant' });
        }
      });
  }

  shouldShowFooter(): boolean {
    // Giriş yapmadan önce anasayfada (/) footer görünmesin, tek sayfa hissi korunsun.
    if (this.router.url === '/' && !this.auth.isLoggedIn()) {
      return false;
    }
    return true;
  }

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'] || 
           this.contexts.getContext('primary')?.route?.snapshot?.url.toString();
  }
}
