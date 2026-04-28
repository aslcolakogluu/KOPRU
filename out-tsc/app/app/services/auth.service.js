import { Injectable, signal, computed } from '@angular/core';
import * as i0 from "@angular/core";
export class AuthService {
    userSignal = signal(null);
    currentUser = this.userSignal.asReadonly();
    isLoggedIn = computed(() => this.userSignal() !== null);
    isDonor = computed(() => this.userSignal()?.role === 'donor');
    isReceiver = computed(() => this.userSignal()?.role === 'receiver');
    constructor() {
        // Check local storage for mock persistent session if needed (optional)
        if (typeof window !== 'undefined') {
            const savedUser = localStorage.getItem('kopru_user');
            if (savedUser) {
                try {
                    this.userSignal.set(JSON.parse(savedUser));
                }
                catch { }
            }
        }
    }
    login(email, password) {
        return new Promise((resolve, reject) => {
            // Mock login delay
            setTimeout(() => {
                if (email && password) {
                    const mockUser = {
                        id: 1,
                        email,
                        name: email.split('@')[0] || 'Kullanıcı',
                        role: 'donor'
                    };
                    this.userSignal.set(mockUser);
                    if (typeof window !== 'undefined') {
                        localStorage.setItem('kopru_user', JSON.stringify(mockUser));
                    }
                    resolve(mockUser);
                }
                else {
                    reject('Geçersiz e-posta veya şifre');
                }
            }, 800);
        });
    }
    register(userData) {
        return new Promise((resolve) => {
            setTimeout(() => {
                const mockUser = {
                    id: Date.now(),
                    email: userData.email,
                    name: userData.name || 'Yeni Kullanıcı',
                    role: userData.role || 'donor'
                };
                this.userSignal.set(mockUser);
                if (typeof window !== 'undefined') {
                    localStorage.setItem('kopru_user', JSON.stringify(mockUser));
                }
                resolve(mockUser);
            }, 800);
        });
    }
    logout() {
        this.userSignal.set(null);
        if (typeof window !== 'undefined') {
            localStorage.removeItem('kopru_user');
        }
    }
    static ɵfac = function AuthService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AuthService)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AuthService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], () => [], null); })();
//# sourceMappingURL=auth.service.js.map