import { Component, signal, inject } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { BadgeModule } from 'primeng/badge';
import { AuthService } from '../../services/auth.service';
import { CartService } from '../../services/cart.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "primeng/button";
const _c0 = () => ({ exact: true });
function NavbarComponent_Conditional_10_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 14);
    i0.ɵɵlistener("click", function NavbarComponent_Conditional_10_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.closeMobile()); });
    i0.ɵɵtext(1, "\u0130lanlar");
    i0.ɵɵelementEnd();
} }
function NavbarComponent_Conditional_16_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 15);
    i0.ɵɵlistener("click", function NavbarComponent_Conditional_16_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.closeMobile()); });
    i0.ɵɵtext(1, "Giri\u015F Yap");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "p-button", 16);
    i0.ɵɵlistener("onClick", function NavbarComponent_Conditional_16_Template_p_button_onClick_2_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.closeMobile()); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("rounded", true);
} }
function NavbarComponent_Conditional_17_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 21);
    i0.ɵɵlistener("click", function NavbarComponent_Conditional_17_Conditional_0_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.closeMobile()); });
    i0.ɵɵelement(1, "i", 22);
    i0.ɵɵtext(2, " \u0130lanlar\u0131m ");
    i0.ɵɵelementEnd();
} }
function NavbarComponent_Conditional_17_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "p-button", 23);
    i0.ɵɵlistener("onClick", function NavbarComponent_Conditional_17_Conditional_1_Template_p_button_onClick_0_listener() { i0.ɵɵrestoreView(_r6); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.closeMobile()); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("rounded", true);
} }
function NavbarComponent_Conditional_17_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "p-button", 24);
    i0.ɵɵlistener("onClick", function NavbarComponent_Conditional_17_Conditional_2_Template_p_button_onClick_0_listener() { i0.ɵɵrestoreView(_r7); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.closeMobile()); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("rounded", true)("text", true)("badge", ctx_r1.cart.cartCount().toString());
} }
function NavbarComponent_Conditional_17_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵtemplate(0, NavbarComponent_Conditional_17_Conditional_0_Template, 3, 0, "a", 17)(1, NavbarComponent_Conditional_17_Conditional_1_Template, 1, 1, "p-button", 18)(2, NavbarComponent_Conditional_17_Conditional_2_Template, 1, 3, "p-button", 19);
    i0.ɵɵelementStart(3, "p-button", 20);
    i0.ɵɵlistener("onClick", function NavbarComponent_Conditional_17_Template_p_button_onClick_3_listener() { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.logout()); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵconditional(ctx_r1.auth.isDonor() ? 0 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.auth.isDonor() ? 1 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.auth.isReceiver() ? 2 : -1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("rounded", true)("text", true);
} }
export class NavbarComponent {
    auth = inject(AuthService);
    cart = inject(CartService);
    router = inject(Router);
    isScrolled = signal(false);
    mobileMenuOpen = signal(false);
    constructor() {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', () => {
                this.isScrolled.set(window.scrollY > 50);
            });
        }
    }
    toggleMobile() {
        this.mobileMenuOpen.update(v => !v);
    }
    closeMobile() {
        this.mobileMenuOpen.set(false);
    }
    logout() {
        this.auth.logout();
        this.closeMobile();
        this.router.navigate(['/']);
    }
    static ɵfac = function NavbarComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || NavbarComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: NavbarComponent, selectors: [["app-navbar"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 20, vars: 11, consts: [[1, "navbar"], [1, "nav-inner", "section-container"], ["routerLink", "/", 1, "nav-brand"], [1, "brand-icon"], [1, "pi", "pi-arrows-h"], [1, "brand-text"], [1, "nav-links"], ["routerLink", "/", "routerLinkActive", "active", 3, "click", "routerLinkActiveOptions"], ["routerLink", "/ilanlar", "routerLinkActive", "active"], ["routerLink", "/nasil-calisir", "routerLinkActive", "active", 3, "click"], ["routerLink", "/hakkimizda", "routerLinkActive", "active", 3, "click"], [1, "nav-actions"], ["icon", "pi pi-sign-out", "pTooltip", "\u00C7\u0131k\u0131\u015F Yap", "tooltipPosition", "bottom", "styleClass", "p-button-sm text-color-secondary", 3, "rounded", "text"], [1, "mobile-toggle", 3, "click"], ["routerLink", "/ilanlar", "routerLinkActive", "active", 3, "click"], ["routerLink", "/login", 1, "nav-auth-link", 3, "click"], ["label", "Kay\u0131t Ol", "routerLink", "/register", "styleClass", "p-button-sm nav-cta", 3, "onClick", "rounded"], ["routerLink", "/dashboard", 1, "nav-auth-link"], ["label", "\u0130lan Ver", "icon", "pi pi-plus", "routerLink", "/ilan-ver", "styleClass", "p-button-sm nav-cta", 3, "rounded"], ["icon", "pi pi-shopping-cart", "routerLink", "/cart", "badgeClass", "p-badge-danger", "pTooltip", "Sepetim", "tooltipPosition", "bottom", "styleClass", "p-button-sm", 3, "rounded", "text", "badge"], ["icon", "pi pi-sign-out", "pTooltip", "\u00C7\u0131k\u0131\u015F Yap", "tooltipPosition", "bottom", "styleClass", "p-button-sm text-color-secondary", 3, "onClick", "rounded", "text"], ["routerLink", "/dashboard", 1, "nav-auth-link", 3, "click"], [1, "pi", "pi-list", "mr-1"], ["label", "\u0130lan Ver", "icon", "pi pi-plus", "routerLink", "/ilan-ver", "styleClass", "p-button-sm nav-cta", 3, "onClick", "rounded"], ["icon", "pi pi-shopping-cart", "routerLink", "/cart", "badgeClass", "p-badge-danger", "pTooltip", "Sepetim", "tooltipPosition", "bottom", "styleClass", "p-button-sm", 3, "onClick", "rounded", "text", "badge"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "nav", 0)(1, "div", 1)(2, "a", 2)(3, "div", 3);
            i0.ɵɵelement(4, "i", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "span", 5);
            i0.ɵɵtext(6, "K\u00D6PR\u00DC");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(7, "div", 6)(8, "a", 7);
            i0.ɵɵlistener("click", function NavbarComponent_Template_a_click_8_listener() { return ctx.closeMobile(); });
            i0.ɵɵtext(9, "Ana Sayfa");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(10, NavbarComponent_Conditional_10_Template, 2, 0, "a", 8);
            i0.ɵɵelementStart(11, "a", 9);
            i0.ɵɵlistener("click", function NavbarComponent_Template_a_click_11_listener() { return ctx.closeMobile(); });
            i0.ɵɵtext(12, "Nas\u0131l \u00C7al\u0131\u015F\u0131r");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(13, "a", 10);
            i0.ɵɵlistener("click", function NavbarComponent_Template_a_click_13_listener() { return ctx.closeMobile(); });
            i0.ɵɵtext(14, "Hakk\u0131m\u0131zda");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(15, "div", 11);
            i0.ɵɵtemplate(16, NavbarComponent_Conditional_16_Template, 3, 1)(17, NavbarComponent_Conditional_17_Template, 4, 5, "p-button", 12);
            i0.ɵɵelementStart(18, "button", 13);
            i0.ɵɵlistener("click", function NavbarComponent_Template_button_click_18_listener() { return ctx.toggleMobile(); });
            i0.ɵɵelement(19, "i");
            i0.ɵɵelementEnd()()()();
        } if (rf & 2) {
            i0.ɵɵclassProp("scrolled", ctx.isScrolled());
            i0.ɵɵadvance(7);
            i0.ɵɵclassProp("mobile-open", ctx.mobileMenuOpen());
            i0.ɵɵadvance();
            i0.ɵɵproperty("routerLinkActiveOptions", i0.ɵɵpureFunction0(10, _c0));
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.auth.isReceiver() ? 10 : -1);
            i0.ɵɵadvance(6);
            i0.ɵɵconditional(!ctx.auth.isLoggedIn() ? 16 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.auth.isLoggedIn() ? 17 : -1);
            i0.ɵɵadvance(2);
            i0.ɵɵclassMap(ctx.mobileMenuOpen() ? "pi pi-times" : "pi pi-bars");
        } }, dependencies: [RouterModule, i1.RouterLink, i1.RouterLinkActive, ButtonModule, i2.Button, RippleModule, BadgeModule], styles: [".navbar[_ngcontent-%COMP%] {\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    z-index: 1000;\n    padding: 0.85rem 0;\n    transition: all 0.3s ease;\n    background: rgba(248, 250, 251, 0.85);\n    backdrop-filter: blur(16px);\n    border-bottom: 1px solid transparent;\n}\n\n.navbar.scrolled[_ngcontent-%COMP%] {\n    background: rgba(255, 255, 255, 0.95);\n    backdrop-filter: blur(20px);\n    padding: 0.6rem 0;\n    border-bottom: 1px solid var(--kopru-border);\n    box-shadow: var(--kopru-shadow-sm);\n}\n\n.nav-inner[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n}\n\n.nav-brand[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    gap: 0.75rem;\n    text-decoration: none;\n}\n\n.brand-icon[_ngcontent-%COMP%] {\n    width: 40px;\n    height: 40px;\n    border-radius: 12px;\n    background: var(--kopru-primary);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color: #fff;\n    font-size: 1.1rem;\n}\n\n.brand-text[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n    font-weight: 800;\n    letter-spacing: 2px;\n    color: var(--kopru-text);\n}\n\n.nav-links[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    gap: 2.5rem;\n\n    a {\n        color: var(--kopru-text-secondary);\n        text-decoration: none;\n        font-weight: 500;\n        font-size: 0.9rem;\n        transition: color 0.2s ease;\n        position: relative;\n\n        &::after {\n            content: '';\n            position: absolute;\n            bottom: -4px;\n            left: 0;\n            width: 0;\n            height: 2px;\n            background: var(--kopru-primary);\n            transition: width 0.25s ease;\n            border-radius: 1px;\n        }\n\n        &:hover,\n        &.active {\n            color: var(--kopru-primary);\n\n            &::after {\n                width: 100%;\n            }\n        }\n    }\n}\n\n.nav-actions[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    gap: 1rem;\n}\n\n.nav-auth-link[_ngcontent-%COMP%] {\n    color: var(--kopru-text);\n    text-decoration: none;\n    font-weight: 600;\n    font-size: 0.9rem;\n    transition: color 0.2s ease;\n\n    &:hover {\n        color: var(--kopru-primary);\n    }\n}\n\n[_nghost-%COMP%]     .nav-cta {\n    background: var(--kopru-primary) !important;\n    border: none !important;\n    font-size: 0.85rem !important;\n    padding: 0.6rem 1.5rem !important;\n}\n\n.mobile-toggle[_ngcontent-%COMP%] {\n    display: none;\n    background: none;\n    border: none;\n    color: var(--kopru-text);\n    font-size: 1.4rem;\n    cursor: pointer;\n    padding: 0.5rem;\n}\n\n@media (max-width: 768px) {\n    .nav-links[_ngcontent-%COMP%] {\n        position: fixed;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        background: rgba(255, 255, 255, 0.98);\n        flex-direction: column;\n        justify-content: center;\n        gap: 2.5rem;\n        transform: translateX(100%);\n        transition: transform 0.3s ease;\n        z-index: 999;\n\n        &.mobile-open {\n            transform: translateX(0);\n        }\n\n        a {\n            font-size: 1.5rem;\n        }\n    }\n\n    .mobile-toggle[_ngcontent-%COMP%] {\n        display: block;\n        z-index: 1001;\n    }\n\n    [_nghost-%COMP%]     .nav-cta {\n        display: none !important;\n    }\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NavbarComponent, [{
        type: Component,
        args: [{ selector: 'app-navbar', standalone: true, imports: [RouterModule, ButtonModule, RippleModule, BadgeModule], template: "<nav class=\"navbar\" [class.scrolled]=\"isScrolled()\">\n  <div class=\"nav-inner section-container\">\n    <a routerLink=\"/\" class=\"nav-brand\">\n      <div class=\"brand-icon\">\n        <i class=\"pi pi-arrows-h\"></i>\n      </div>\n      <span class=\"brand-text\">K\u00D6PR\u00DC</span>\n    </a>\n\n    <div class=\"nav-links\" [class.mobile-open]=\"mobileMenuOpen()\">\n      <a routerLink=\"/\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\"\n      (click)=\"closeMobile()\">Ana Sayfa</a>\n      @if (auth.isReceiver()) {\n        <a routerLink=\"/ilanlar\" routerLinkActive=\"active\"\n        (click)=\"closeMobile()\">\u0130lanlar</a>\n      }\n      <a routerLink=\"/nasil-calisir\" routerLinkActive=\"active\" (click)=\"closeMobile()\">Nas\u0131l \u00C7al\u0131\u015F\u0131r</a>\n      <a routerLink=\"/hakkimizda\" routerLinkActive=\"active\" (click)=\"closeMobile()\">Hakk\u0131m\u0131zda</a>\n    </div>\n\n    <div class=\"nav-actions\">\n      <!-- For Guests -->\n      @if (!auth.isLoggedIn()) {\n        <a routerLink=\"/login\" class=\"nav-auth-link\" (click)=\"closeMobile()\">Giri\u015F Yap</a>\n        <p-button label=\"Kay\u0131t Ol\" [rounded]=\"true\" routerLink=\"/register\" styleClass=\"p-button-sm nav-cta\"\n          (onClick)=\"closeMobile()\">\n        </p-button>\n      }\n\n      <!-- For Logged in Users -->\n      @if (auth.isLoggedIn()) {\n        @if (auth.isDonor()) {\n          <a routerLink=\"/dashboard\" class=\"nav-auth-link\" (click)=\"closeMobile()\">\n            <i class=\"pi pi-list mr-1\"></i> \u0130lanlar\u0131m\n          </a>\n        }\n        @if (auth.isDonor()) {\n          <p-button label=\"\u0130lan Ver\" icon=\"pi pi-plus\" [rounded]=\"true\"\n            routerLink=\"/ilan-ver\" styleClass=\"p-button-sm nav-cta\" (onClick)=\"closeMobile()\">\n          </p-button>\n        }\n        @if (auth.isReceiver()) {\n          <p-button icon=\"pi pi-shopping-cart\" [rounded]=\"true\" [text]=\"true\"\n            routerLink=\"/cart\" [badge]=\"cart.cartCount().toString()\" badgeClass=\"p-badge-danger\"\n            pTooltip=\"Sepetim\" tooltipPosition=\"bottom\" styleClass=\"p-button-sm\" (onClick)=\"closeMobile()\">\n          </p-button>\n        }\n        <p-button icon=\"pi pi-sign-out\" [rounded]=\"true\" [text]=\"true\" (onClick)=\"logout()\" pTooltip=\"\u00C7\u0131k\u0131\u015F Yap\"\n          tooltipPosition=\"bottom\" styleClass=\"p-button-sm text-color-secondary\">\n        </p-button>\n      }\n\n      <button class=\"mobile-toggle\" (click)=\"toggleMobile()\">\n        <i [class]=\"mobileMenuOpen() ? 'pi pi-times' : 'pi pi-bars'\"></i>\n      </button>\n    </div>\n  </div>\n</nav>", styles: [".navbar {\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    z-index: 1000;\n    padding: 0.85rem 0;\n    transition: all 0.3s ease;\n    background: rgba(248, 250, 251, 0.85);\n    backdrop-filter: blur(16px);\n    border-bottom: 1px solid transparent;\n}\n\n.navbar.scrolled {\n    background: rgba(255, 255, 255, 0.95);\n    backdrop-filter: blur(20px);\n    padding: 0.6rem 0;\n    border-bottom: 1px solid var(--kopru-border);\n    box-shadow: var(--kopru-shadow-sm);\n}\n\n.nav-inner {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n}\n\n.nav-brand {\n    display: flex;\n    align-items: center;\n    gap: 0.75rem;\n    text-decoration: none;\n}\n\n.brand-icon {\n    width: 40px;\n    height: 40px;\n    border-radius: 12px;\n    background: var(--kopru-primary);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color: #fff;\n    font-size: 1.1rem;\n}\n\n.brand-text {\n    font-size: 1.2rem;\n    font-weight: 800;\n    letter-spacing: 2px;\n    color: var(--kopru-text);\n}\n\n.nav-links {\n    display: flex;\n    align-items: center;\n    gap: 2.5rem;\n\n    a {\n        color: var(--kopru-text-secondary);\n        text-decoration: none;\n        font-weight: 500;\n        font-size: 0.9rem;\n        transition: color 0.2s ease;\n        position: relative;\n\n        &::after {\n            content: '';\n            position: absolute;\n            bottom: -4px;\n            left: 0;\n            width: 0;\n            height: 2px;\n            background: var(--kopru-primary);\n            transition: width 0.25s ease;\n            border-radius: 1px;\n        }\n\n        &:hover,\n        &.active {\n            color: var(--kopru-primary);\n\n            &::after {\n                width: 100%;\n            }\n        }\n    }\n}\n\n.nav-actions {\n    display: flex;\n    align-items: center;\n    gap: 1rem;\n}\n\n.nav-auth-link {\n    color: var(--kopru-text);\n    text-decoration: none;\n    font-weight: 600;\n    font-size: 0.9rem;\n    transition: color 0.2s ease;\n\n    &:hover {\n        color: var(--kopru-primary);\n    }\n}\n\n:host ::ng-deep .nav-cta {\n    background: var(--kopru-primary) !important;\n    border: none !important;\n    font-size: 0.85rem !important;\n    padding: 0.6rem 1.5rem !important;\n}\n\n.mobile-toggle {\n    display: none;\n    background: none;\n    border: none;\n    color: var(--kopru-text);\n    font-size: 1.4rem;\n    cursor: pointer;\n    padding: 0.5rem;\n}\n\n@media (max-width: 768px) {\n    .nav-links {\n        position: fixed;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        background: rgba(255, 255, 255, 0.98);\n        flex-direction: column;\n        justify-content: center;\n        gap: 2.5rem;\n        transform: translateX(100%);\n        transition: transform 0.3s ease;\n        z-index: 999;\n\n        &.mobile-open {\n            transform: translateX(0);\n        }\n\n        a {\n            font-size: 1.5rem;\n        }\n    }\n\n    .mobile-toggle {\n        display: block;\n        z-index: 1001;\n    }\n\n    :host ::ng-deep .nav-cta {\n        display: none !important;\n    }\n}"] }]
    }], () => [], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(NavbarComponent, { className: "NavbarComponent" }); })();
//# sourceMappingURL=navbar.component.js.map