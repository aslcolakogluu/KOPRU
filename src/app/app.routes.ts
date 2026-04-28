import { Routes } from '@angular/router';
import { authGuard } from './services/auth.guard';
import { roleGuard } from './services/role.guard';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
    },
    {
        path: 'ilanlar',
        canActivate: [authGuard],
        loadComponent: () => import('./pages/listings/listings.component').then(m => m.ListingsComponent)
    },
    {
        path: 'ilan-ver',
        canActivate: [roleGuard],
        data: { role: 'donor' },
        loadComponent: () => import('./pages/create-listing/create-listing.component').then(m => m.CreateListingComponent)
    },
    {
        path: 'nasil-calisir',
        loadComponent: () => import('./pages/how-it-works/how-it-works.component').then(m => m.HowItWorksComponent)
    },
    {
        path: 'hakkimizda',
        loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent)
    },
    {
        path: 'dashboard',
        canActivate: [roleGuard],
        data: { role: 'donor' },
        loadComponent: () => import('./pages/dashboard/dashboard.component').then(m => m.DashboardComponent)
    },
    {
        path: 'cart',
        canActivate: [roleGuard],
        data: { role: 'receiver' },
        loadComponent: () => import('./pages/cart/cart.component').then(m => m.CartComponent)
    },
    {
        path: 'payment/:id',
        canActivate: [roleGuard],
        data: { role: 'receiver' },
        loadComponent: () => import('./pages/payment/payment.component').then(m => m.PaymentComponent)
    },
    {
        path: 'talepler',
        canActivate: [authGuard],
        loadComponent: () => import('./pages/demands/demands.component').then(m => m.DemandsComponent)
    },
    {
        path: 'leaderboard',
        loadComponent: () => import('./pages/leaderboard/leaderboard.component').then(m => m.LeaderboardComponent)
    },
    {
        path: 'login',
        loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent)
    },
    {
        path: 'register',
        loadComponent: () => import('./pages/register/register.component').then(m => m.RegisterComponent)
    },
    {
        path: 'profil',
        canActivate: [authGuard],
        loadComponent: () => import('./pages/profile/profile.component').then(m => m.ProfileComponent)
    },
    {
        path: 'iletisim',
        loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent)
    },
    {
        path: '**',
        redirectTo: ''
    }
];
