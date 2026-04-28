import { Component, inject } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';
import { FoodListingService } from '../../services/food-listing.service';
import { AuthService } from '../../services/auth.service';
import { BUSINESS_TYPE_LABELS, BUSINESS_TYPE_ICONS } from '../../models/food-listing.model';
import { DialogModule } from 'primeng/dialog';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FormsModule } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/router";
import * as i3 from "primeng/button";
import * as i4 from "primeng/tag";
import * as i5 from "primeng/dialog";
import * as i6 from "primeng/inputtextarea";
const _c0 = () => ({ width: "500px" });
const _c1 = () => ({ "768px": "95vw" });
const _c2 = () => ({ width: "100%", marginTop: "1.5rem" });
const _c3 = () => ({ width: "100%" });
function HomeComponent_Conditional_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "p-button", 12);
} if (rf & 2) {
    i0.ɵɵproperty("rounded", true);
} }
function HomeComponent_Conditional_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "p-button", 13);
} if (rf & 2) {
    i0.ɵɵproperty("rounded", true);
} }
function HomeComponent_Conditional_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "p-button", 14);
} if (rf & 2) {
    i0.ɵɵproperty("rounded", true);
} }
function HomeComponent_Conditional_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "p-button", 15);
} if (rf & 2) {
    i0.ɵɵproperty("rounded", true)("outlined", true);
} }
function HomeComponent_For_60_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 36);
    i0.ɵɵelement(1, "i");
    i0.ɵɵelementStart(2, "div")(3, "span", 64);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span", 65);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const stat_r1 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵclassMap(stat_r1.icon);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(stat_r1.value);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(stat_r1.name);
} }
function HomeComponent_For_74_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 41)(1, "div", 66);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 67);
    i0.ɵɵelement(4, "i");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "h3");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "p");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const step_r2 = ctx.$implicit;
    const ɵ$index_143_r3 = ctx.$index;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ɵ$index_143_r3 + 1);
    i0.ɵɵadvance(2);
    i0.ɵɵclassMap(step_r2.icon);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(step_r2.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(step_r2.description);
} }
function HomeComponent_For_93_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 48);
    i0.ɵɵelement(1, "i");
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const type_r4 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵclassMap(type_r4.icon);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(type_r4.label);
} }
function HomeComponent_For_105_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 48);
    i0.ɵɵelement(1, "i");
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const type_r5 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵclassMap(type_r5.icon);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(type_r5.label);
} }
function HomeComponent_Conditional_106_For_13_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 71)(1, "div", 72)(2, "div", 73);
    i0.ɵɵelement(3, "i");
    i0.ɵɵelementStart(4, "span");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(6, "p-tag", 74);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "h3", 75);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "p", 76);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "div", 77)(12, "div", 78);
    i0.ɵɵelement(13, "i", 26);
    i0.ɵɵelementStart(14, "span");
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(16, "div", 78);
    i0.ɵɵelement(17, "i", 79);
    i0.ɵɵelementStart(18, "span");
    i0.ɵɵtext(19);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(20, "div", 78);
    i0.ɵɵelement(21, "i", 20);
    i0.ɵɵelementStart(22, "span");
    i0.ɵɵtext(23);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(24, "div", 78);
    i0.ɵɵelement(25, "i", 80);
    i0.ɵɵelementStart(26, "span");
    i0.ɵɵtext(27);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(28, "p-button", 81);
    i0.ɵɵlistener("onClick", function HomeComponent_Conditional_106_For_13_Template_p_button_onClick_28_listener() { const listing_r7 = i0.ɵɵrestoreView(_r6).$implicit; const ctx_r7 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r7.openReserveDialog(listing_r7.id)); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const listing_r7 = ctx.$implicit;
    const ctx_r7 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵclassMap(ctx_r7.getBusinessIcon(listing_r7.businessType));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r7.getBusinessLabel(listing_r7.businessType));
    i0.ɵɵadvance();
    i0.ɵɵproperty("value", listing_r7.status === "active" ? "Aktif" : "Rezerve")("severity", listing_r7.status === "active" ? "success" : "warning")("rounded", true);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(listing_r7.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(listing_r7.description);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(listing_r7.businessName);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(listing_r7.location);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(listing_r7.quantity);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1("SKT: ", listing_r7.expiresAt, "");
    i0.ɵɵadvance();
    i0.ɵɵstyleMap(i0.ɵɵpureFunction0(16, _c3));
    i0.ɵɵproperty("rounded", true)("disabled", listing_r7.status !== "active");
} }
function HomeComponent_Conditional_106_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 54)(1, "div", 34)(2, "div", 68)(3, "div")(4, "span", 39);
    i0.ɵɵtext(5, "Son \u0130lanlar");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "h2");
    i0.ɵɵtext(7, "Aktif ");
    i0.ɵɵelementStart(8, "span", 9);
    i0.ɵɵtext(9, "\u0130lanlar");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelement(10, "p-button", 69);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "div", 70);
    i0.ɵɵrepeaterCreate(12, HomeComponent_Conditional_106_For_13_Template, 29, 17, "div", 71, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext();
    i0.ɵɵadvance(10);
    i0.ɵɵproperty("rounded", true)("outlined", true);
    i0.ɵɵadvance(2);
    i0.ɵɵrepeater(ctx_r7.recentListings());
} }
function HomeComponent_Conditional_107_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 55)(1, "div", 34)(2, "div", 82)(3, "h2");
    i0.ɵɵtext(4, "Siz de K\u00F6pr\u00FC Olun");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p");
    i0.ɵɵtext(6, "\u0130\u015Fletmenizden kalan g\u0131day\u0131 payla\u015Farak israf\u0131n \u00F6n\u00FCne ge\u00E7in. Birlikte daha g\u00FCzel bir d\u00FCnya kural\u0131m.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 83);
    i0.ɵɵelement(8, "p-button", 84)(9, "p-button", 85);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("rounded", true);
    i0.ɵɵadvance();
    i0.ɵɵproperty("rounded", true);
} }
export class HomeComponent {
    listingService = inject(FoodListingService);
    auth = inject(AuthService);
    router = inject(Router);
    stats = this.listingService.stats;
    recentListings = this.listingService.activeListings;
    statItems = [
        { icon: 'pi pi-box', value: '1,247+', name: 'Porsiyon Kurtarildi' },
        { icon: 'pi pi-building', value: '186', name: 'Partner Isletme' },
        { icon: 'pi pi-truck', value: '34', name: 'Aktif Kurye' },
        { icon: 'pi pi-heart', value: '42', name: 'Alici Kurum' }
    ];
    steps = [
        { icon: 'pi pi-upload', title: 'Ilan Olusturun', description: 'Isletmenizden kalan gida urunlerini platforma ekleyin. Miktar, tur ve son kullanma tarihini belirtin.' },
        { icon: 'pi pi-search', title: 'Eslesme Saglansin', description: 'Ihtiyac sahibi kurumlar ilanlari inceler ve talep olusturur. Sistem otomatik eslesme yapar.' },
        { icon: 'pi pi-truck', title: 'Kurye ile Teslimat', description: 'Kuryelerimiz gidayi hijyenik kosullarda alir ve ihtiyac sahibi kuruma teslim eder.' }
    ];
    donorTypes = [
        { icon: 'pi pi-shopping-cart', label: 'Marketler' },
        { icon: 'pi pi-star', label: 'Restoranlar' },
        { icon: 'pi pi-building', label: 'Oteller' },
        { icon: 'pi pi-heart', label: 'Pastaneler & Firinlar' },
        { icon: 'pi pi-home', label: 'Yurt Yemekhaneleri' }
    ];
    receiverTypes = [
        { icon: 'pi pi-users', label: 'Hayvan Barinaklari' },
        { icon: 'pi pi-users', label: 'Asevleri' },
        { icon: 'pi pi-building', label: 'Kent Lokantlari' },
        { icon: 'pi pi-shopping-bag', label: 'Halk Ekmek Bufeleri' }
    ];
    detailVisible = false;
    selectedListingId = null;
    deliveryAddress = '';
    getBusinessLabel(type) {
        return BUSINESS_TYPE_LABELS[type];
    }
    getBusinessIcon(type) {
        return BUSINESS_TYPE_ICONS[type];
    }
    openReserveDialog(id) {
        this.selectedListingId = id;
        this.deliveryAddress = '';
        this.detailVisible = true;
    }
    confirmReserve() {
        if (this.selectedListingId !== null && this.deliveryAddress.trim().length > 0) {
            this.detailVisible = false;
            this.router.navigate(['/payment', this.selectedListingId], {
                state: { deliveryAddress: this.deliveryAddress }
            });
            this.selectedListingId = null;
            this.deliveryAddress = '';
        }
    }
    handleListingAction() {
        if (this.auth.isLoggedIn()) {
            this.router.navigate(['/ilan-ver']);
        }
        else {
            this.router.navigate(['/login']);
        }
    }
    static ɵfac = function HomeComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || HomeComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: HomeComponent, selectors: [["app-home"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 118, vars: 23, consts: [[1, "hero"], [1, "hero-bg"], [1, "hero-shape", "shape-1"], [1, "hero-shape", "shape-2"], [1, "hero-content", "section-container"], [1, "hero-text"], [1, "hero-badge", "animate-fade-in-up"], [1, "pi", "pi-verified"], [1, "animate-fade-in-up", "stagger-1"], [1, "gradient-text"], [1, "hero-desc", "animate-fade-in-up", "stagger-2"], [1, "hero-actions", "animate-fade-in-up", "stagger-3"], ["label", "\u0130lanlar\u0131 \u0130ncele", "icon", "pi pi-arrow-right", "iconPos", "right", "routerLink", "/ilanlar", "styleClass", "hero-btn-primary", 3, "rounded"], ["label", "Paneline Git", "icon", "pi pi-arrow-right", "iconPos", "right", "routerLink", "/dashboard", "styleClass", "hero-btn-primary", 3, "rounded"], ["label", "Hemen Kay\u0131t Ol", "icon", "pi pi-user-plus", "routerLink", "/register", "styleClass", "hero-btn-primary", 3, "rounded"], ["label", "Giri\u015F Yap", "icon", "pi pi-sign-in", "routerLink", "/login", "styleClass", "hero-btn-secondary", 3, "rounded", "outlined"], [1, "hero-visual", "animate-fade-in-up", "stagger-4"], [1, "hero-card-stack"], [1, "floating-stat", "stat-1"], [1, "stat-icon", "teal"], [1, "pi", "pi-box"], [1, "stat-info"], [1, "stat-num"], [1, "stat-label"], [1, "floating-stat", "stat-2"], [1, "stat-icon", "green"], [1, "pi", "pi-building"], [1, "floating-stat", "stat-3"], [1, "stat-icon", "amber"], [1, "pi", "pi-truck"], [1, "floating-stat", "stat-4"], [1, "stat-icon", "blue"], [1, "pi", "pi-heart"], [1, "stats-bar"], [1, "section-container"], [1, "stats-grid"], [1, "stat-item"], [1, "how-it-works"], [1, "section-header"], [1, "section-tag"], [1, "steps-grid"], [1, "step-card"], [1, "business-types"], [1, "types-grid"], [1, "type-group"], [1, "group-title"], [1, "pi", "pi-upload"], [1, "type-cards"], [1, "type-card"], [1, "bridge-arrow"], [1, "arrow-line"], [1, "arrow-icon"], [1, "pi", "pi-arrows-h"], [1, "pi", "pi-download"], [1, "recent-listings"], [1, "cta-section"], ["header", "\u0130lan Detay\u0131", 3, "visibleChange", "visible", "modal", "breakpoints"], [1, "detail-content"], [1, "detail-request-form"], [2, "margin-bottom", "0.5rem", "color", "var(--kopru-text)", "font-weight", "600"], [1, "form-field", "full-width"], [2, "display", "block", "margin-bottom", "0.25rem", "font-size", "0.85rem", "color", "var(--kopru-text-secondary)"], ["pInputTextarea", "", "rows", "3", "placeholder", "Yemeklerin teslim edilece\u011Fi kurumu ve tam adresini yaz\u0131n...", 2, "width", "100%", "border-color", "var(--kopru-border)", "border-radius", "var(--kopru-radius-md)", "padding", "0.75rem", "font-family", "inherit", "resize", "none", 3, "ngModelChange", "ngModel"], ["label", "Talep Olu\u015Ftur", "icon", "pi pi-check", "styleClass", "detail-action-btn", 3, "onClick", "rounded", "disabled"], [1, "stat-value"], [1, "stat-name"], [1, "step-number"], [1, "step-icon-wrap"], [1, "section-header-row"], ["label", "T\u00FCm \u0130lanlar", "icon", "pi pi-arrow-right", "iconPos", "right", "routerLink", "/ilanlar", "styleClass", "see-all-btn", 3, "rounded", "outlined"], [1, "listings-grid"], [1, "listing-card"], [1, "listing-header"], [1, "listing-type-badge"], [3, "value", "severity", "rounded"], [1, "listing-title"], [1, "listing-desc"], [1, "listing-meta"], [1, "meta-item"], [1, "pi", "pi-map-marker"], [1, "pi", "pi-clock"], ["label", "Talep Et", "icon", "pi pi-check", "styleClass", "listing-action-btn p-button-sm", 3, "onClick", "rounded", "disabled"], [1, "cta-card"], [1, "cta-actions"], ["label", "Hemen Kay\u0131t Ol", "icon", "pi pi-user-plus", "iconPos", "right", "routerLink", "/register", "styleClass", "cta-primary-btn", 3, "rounded"], ["label", "Giri\u015F Yap", "icon", "pi pi-sign-in", "styleClass", "cta-secondary-btn", "routerLink", "/login", 3, "rounded"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "section", 0)(1, "div", 1);
            i0.ɵɵelement(2, "div", 2)(3, "div", 3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "div", 4)(5, "div", 5)(6, "div", 6);
            i0.ɵɵelement(7, "i", 7);
            i0.ɵɵelementStart(8, "span");
            i0.ɵɵtext(9, "Sosyal Sorumluluk Platformu");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(10, "h1", 8);
            i0.ɵɵtext(11, " G\u0131da \u0130sraf\u0131na ");
            i0.ɵɵelementStart(12, "span", 9);
            i0.ɵɵtext(13, "K\u00F6pr\u00FC");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(14, " Olun ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(15, "p", 10);
            i0.ɵɵtext(16, " \u0130\u015Fletmelerden kalan g\u0131day\u0131, ihtiya\u00E7 sahiplerine ula\u015Ft\u0131ran dijital platform. Marketler, restoranlar, oteller ve pastanelerden a\u015Fevlerine, bar\u0131naklara ve halk ekmek b\u00FCfelerine. ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(17, "div", 11);
            i0.ɵɵtemplate(18, HomeComponent_Conditional_18_Template, 1, 1, "p-button", 12)(19, HomeComponent_Conditional_19_Template, 1, 1, "p-button", 13)(20, HomeComponent_Conditional_20_Template, 1, 1, "p-button", 14)(21, HomeComponent_Conditional_21_Template, 1, 2, "p-button", 15);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(22, "div", 16)(23, "div", 17)(24, "div", 18)(25, "div", 19);
            i0.ɵɵelement(26, "i", 20);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(27, "div", 21)(28, "span", 22);
            i0.ɵɵtext(29);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(30, "span", 23);
            i0.ɵɵtext(31, "Porsiyon Kurtar\u0131ld\u0131");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(32, "div", 24)(33, "div", 25);
            i0.ɵɵelement(34, "i", 26);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(35, "div", 21)(36, "span", 22);
            i0.ɵɵtext(37);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(38, "span", 23);
            i0.ɵɵtext(39, "Partner \u0130\u015Fletme");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(40, "div", 27)(41, "div", 28);
            i0.ɵɵelement(42, "i", 29);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(43, "div", 21)(44, "span", 22);
            i0.ɵɵtext(45);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(46, "span", 23);
            i0.ɵɵtext(47, "Aktif Kurye");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(48, "div", 30)(49, "div", 31);
            i0.ɵɵelement(50, "i", 32);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(51, "div", 21)(52, "span", 22);
            i0.ɵɵtext(53);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(54, "span", 23);
            i0.ɵɵtext(55, "Al\u0131c\u0131 Kurum");
            i0.ɵɵelementEnd()()()()()()();
            i0.ɵɵelementStart(56, "section", 33)(57, "div", 34)(58, "div", 35);
            i0.ɵɵrepeaterCreate(59, HomeComponent_For_60_Template, 7, 4, "div", 36, i0.ɵɵrepeaterTrackByIdentity);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(61, "section", 37)(62, "div", 34)(63, "div", 38)(64, "span", 39);
            i0.ɵɵtext(65, "S\u00FCrecimiz");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(66, "h2");
            i0.ɵɵtext(67, "Nas\u0131l ");
            i0.ɵɵelementStart(68, "span", 9);
            i0.ɵɵtext(69, "\u00C7al\u0131\u015F\u0131r");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(70, "p");
            i0.ɵɵtext(71, "\u00DC\u00E7 basit ad\u0131mda g\u0131da israf\u0131n\u0131 \u00F6nleyin");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(72, "div", 40);
            i0.ɵɵrepeaterCreate(73, HomeComponent_For_74_Template, 9, 5, "div", 41, i0.ɵɵrepeaterTrackByIdentity);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(75, "section", 42)(76, "div", 34)(77, "div", 38)(78, "span", 39);
            i0.ɵɵtext(79, "Kat\u0131l\u0131mc\u0131lar");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(80, "h2");
            i0.ɵɵtext(81, "Kimler ");
            i0.ɵɵelementStart(82, "span", 9);
            i0.ɵɵtext(83, "Kat\u0131labilir");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(84, "p");
            i0.ɵɵtext(85, "Her \u00F6l\u00E7ekten i\u015Fletme ve kurum platformumuza kat\u0131labilir");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(86, "div", 43)(87, "div", 44)(88, "h3", 45);
            i0.ɵɵelement(89, "i", 46);
            i0.ɵɵtext(90, " G\u0131da Veren \u0130\u015Fletmeler ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(91, "div", 47);
            i0.ɵɵrepeaterCreate(92, HomeComponent_For_93_Template, 4, 3, "div", 48, i0.ɵɵrepeaterTrackByIdentity);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(94, "div", 49);
            i0.ɵɵelement(95, "div", 50);
            i0.ɵɵelementStart(96, "div", 51);
            i0.ɵɵelement(97, "i", 52);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(98, "div", 50);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(99, "div", 44)(100, "h3", 45);
            i0.ɵɵelement(101, "i", 53);
            i0.ɵɵtext(102, " G\u0131da Alan Kurumlar ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(103, "div", 47);
            i0.ɵɵrepeaterCreate(104, HomeComponent_For_105_Template, 4, 3, "div", 48, i0.ɵɵrepeaterTrackByIdentity);
            i0.ɵɵelementEnd()()()()();
            i0.ɵɵtemplate(106, HomeComponent_Conditional_106_Template, 14, 2, "section", 54)(107, HomeComponent_Conditional_107_Template, 10, 2, "section", 55);
            i0.ɵɵelementStart(108, "p-dialog", 56);
            i0.ɵɵtwoWayListener("visibleChange", function HomeComponent_Template_p_dialog_visibleChange_108_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.detailVisible, $event) || (ctx.detailVisible = $event); return $event; });
            i0.ɵɵelementStart(109, "div", 57)(110, "div", 58)(111, "h4", 59);
            i0.ɵɵtext(112, "Teslimat Bilgileri");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(113, "div", 60)(114, "label", 61);
            i0.ɵɵtext(115, "Teslimat Adresi *");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(116, "textarea", 62);
            i0.ɵɵtwoWayListener("ngModelChange", function HomeComponent_Template_textarea_ngModelChange_116_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.deliveryAddress, $event) || (ctx.deliveryAddress = $event); return $event; });
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(117, "p-button", 63);
            i0.ɵɵlistener("onClick", function HomeComponent_Template_p_button_onClick_117_listener() { return ctx.confirmReserve(); });
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵadvance(18);
            i0.ɵɵconditional(ctx.auth.isReceiver() ? 18 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.auth.isDonor() ? 19 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(!ctx.auth.isLoggedIn() ? 20 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(!ctx.auth.isLoggedIn() ? 21 : -1);
            i0.ɵɵadvance(8);
            i0.ɵɵtextInterpolate1("", ctx.stats().totalSaved, "+");
            i0.ɵɵadvance(8);
            i0.ɵɵtextInterpolate(ctx.stats().partnerBusinesses);
            i0.ɵɵadvance(8);
            i0.ɵɵtextInterpolate(ctx.stats().activeCouriers);
            i0.ɵɵadvance(8);
            i0.ɵɵtextInterpolate(ctx.stats().receiverOrgs);
            i0.ɵɵadvance(6);
            i0.ɵɵrepeater(ctx.statItems);
            i0.ɵɵadvance(14);
            i0.ɵɵrepeater(ctx.steps);
            i0.ɵɵadvance(19);
            i0.ɵɵrepeater(ctx.donorTypes);
            i0.ɵɵadvance(12);
            i0.ɵɵrepeater(ctx.receiverTypes);
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.auth.isReceiver() ? 106 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(!ctx.auth.isLoggedIn() ? 107 : -1);
            i0.ɵɵadvance();
            i0.ɵɵstyleMap(i0.ɵɵpureFunction0(20, _c0));
            i0.ɵɵtwoWayProperty("visible", ctx.detailVisible);
            i0.ɵɵproperty("modal", true)("breakpoints", i0.ɵɵpureFunction0(21, _c1));
            i0.ɵɵadvance(8);
            i0.ɵɵtwoWayProperty("ngModel", ctx.deliveryAddress);
            i0.ɵɵadvance();
            i0.ɵɵstyleMap(i0.ɵɵpureFunction0(22, _c2));
            i0.ɵɵproperty("rounded", true)("disabled", ctx.deliveryAddress.trim().length === 0);
        } }, dependencies: [FormsModule, i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgModel, RouterModule, i2.RouterLink, ButtonModule, i3.Button, RippleModule, CardModule, TagModule, i4.Tag, DialogModule, i5.Dialog, InputTextareaModule, i6.InputTextarea], styles: ["\n\n\n\n.hero[_ngcontent-%COMP%] {\n    position: relative;\n    min-height: 100vh;\n    display: flex;\n    align-items: center;\n    overflow: hidden;\n    padding: 7rem 0 5rem;\n    background: linear-gradient(180deg, var(--kopru-primary-50) 0%, var(--kopru-bg) 60%);\n}\n\n.hero-bg[_ngcontent-%COMP%] {\n    position: absolute;\n    inset: 0;\n    pointer-events: none;\n    overflow: hidden;\n}\n\n.hero-shape[_ngcontent-%COMP%] {\n    position: absolute;\n    border-radius: 50%;\n    opacity: 0.4;\n    filter: blur(80px);\n}\n\n.shape-1[_ngcontent-%COMP%] {\n    width: 500px;\n    height: 500px;\n    background: var(--kopru-primary-100);\n    top: -150px;\n    right: -100px;\n}\n\n.shape-2[_ngcontent-%COMP%] {\n    width: 350px;\n    height: 350px;\n    background: var(--kopru-primary-100);\n    bottom: -50px;\n    left: -80px;\n}\n\n.hero-content[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 4rem;\n    align-items: center;\n    position: relative;\n    z-index: 2;\n}\n\n.hero-badge[_ngcontent-%COMP%] {\n    display: inline-flex;\n    align-items: center;\n    gap: 0.5rem;\n    background: var(--kopru-primary-50);\n    border: 1px solid var(--kopru-primary-100);\n    padding: 0.5rem 1.25rem;\n    border-radius: 100px;\n    color: var(--kopru-primary);\n    font-size: 0.8rem;\n    font-weight: 600;\n    margin-bottom: 1.5rem;\n}\n\n.hero-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 3.5rem;\n    font-weight: 900;\n    line-height: 1.1;\n    margin-bottom: 1.5rem;\n    letter-spacing: -0.02em;\n    color: var(--kopru-text);\n}\n\n.hero-desc[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n    color: var(--kopru-text-secondary);\n    line-height: 1.8;\n    margin-bottom: 2.5rem;\n    max-width: 480px;\n}\n\n.hero-actions[_ngcontent-%COMP%] {\n    display: flex;\n    gap: 1rem;\n    flex-wrap: wrap;\n}\n\n[_nghost-%COMP%]     .hero-btn-primary {\n    background: var(--kopru-primary) !important;\n    border: none !important;\n    padding: 0.85rem 2rem !important;\n    font-size: 1rem !important;\n}\n\n[_nghost-%COMP%]     .hero-btn-secondary {\n    color: var(--kopru-text-secondary) !important;\n    border-color: var(--kopru-border) !important;\n    padding: 0.85rem 2rem !important;\n    font-size: 1rem !important;\n\n    &:hover {\n        border-color: var(--kopru-primary) !important;\n        color: var(--kopru-primary) !important;\n    }\n}\n\n\n\n.hero-visual[_ngcontent-%COMP%] {\n    position: relative;\n    height: 420px;\n}\n\n.hero-card-stack[_ngcontent-%COMP%] {\n    position: relative;\n    width: 100%;\n    height: 100%;\n}\n\n.floating-stat[_ngcontent-%COMP%] {\n    position: absolute;\n    display: flex;\n    align-items: center;\n    gap: 1rem;\n    background: #fff;\n    border: 1px solid var(--kopru-border);\n    border-radius: 16px;\n    padding: 1.25rem 1.5rem;\n    animation: float 6s ease-in-out infinite;\n    box-shadow: var(--kopru-shadow-lg);\n\n    .stat-icon {\n        width: 48px;\n        height: 48px;\n        border-radius: 14px;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        font-size: 1.2rem;\n\n        &.teal {\n            background: var(--kopru-primary-50);\n            color: var(--kopru-primary);\n        }\n\n        &.green {\n            background: var(--kopru-primary-50);\n            color: var(--kopru-primary);\n        }\n\n        &.amber {\n            background: var(--kopru-bg-elevated);\n            color: var(--kopru-text-secondary);\n        }\n\n        &.blue {\n            background: var(--kopru-bg-elevated);\n            color: var(--kopru-text-secondary);\n        }\n    }\n\n    .stat-info {\n        display: flex;\n        flex-direction: column;\n    }\n\n    .stat-num {\n        font-size: 1.5rem;\n        font-weight: 800;\n        color: var(--kopru-text);\n    }\n\n    .stat-label {\n        font-size: 0.75rem;\n        color: var(--kopru-text-muted);\n        font-weight: 500;\n    }\n}\n\n.stat-1[_ngcontent-%COMP%] {\n    top: 10%;\n    left: 0;\n    animation-delay: 0s;\n}\n\n.stat-2[_ngcontent-%COMP%] {\n    top: 5%;\n    right: 0;\n    animation-delay: 1.5s;\n}\n\n.stat-3[_ngcontent-%COMP%] {\n    bottom: 25%;\n    left: 5%;\n    animation-delay: 3s;\n}\n\n.stat-4[_ngcontent-%COMP%] {\n    bottom: 10%;\n    right: 5%;\n    animation-delay: 4.5s;\n}\n\n\n\n\n\n.stats-bar[_ngcontent-%COMP%] {\n    padding: 2.5rem 0;\n    background: #fff;\n    border-top: 1px solid var(--kopru-border-light);\n    border-bottom: 1px solid var(--kopru-border-light);\n}\n\n.stats-grid[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    gap: 2rem;\n}\n\n.stat-item[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    gap: 1rem;\n    justify-content: center;\n\n    i {\n        font-size: 1.5rem;\n        color: var(--kopru-primary);\n    }\n\n    .stat-value {\n        display: block;\n        font-size: 1.5rem;\n        font-weight: 800;\n        color: var(--kopru-text);\n    }\n\n    .stat-name {\n        display: block;\n        font-size: 0.8rem;\n        color: var(--kopru-text-muted);\n    }\n}\n\n\n\n\n\n.section-header[_ngcontent-%COMP%] {\n    text-align: center;\n    margin-bottom: 4rem;\n\n    h2 {\n        font-size: 2.5rem;\n        font-weight: 800;\n        margin-bottom: 0.75rem;\n    }\n\n    p {\n        color: var(--kopru-text-muted);\n        font-size: 1.05rem;\n    }\n}\n\n\n\n\n\n.how-it-works[_ngcontent-%COMP%] {\n    padding: 6rem 0;\n}\n\n.steps-grid[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    gap: 2rem;\n}\n\n.step-card[_ngcontent-%COMP%] {\n    position: relative;\n    background: #fff;\n    border: 1px solid var(--kopru-border);\n    border-radius: 20px;\n    padding: 2.5rem 2rem;\n    text-align: center;\n    transition: all 0.3s ease;\n    box-shadow: var(--kopru-shadow-sm);\n\n    &:hover {\n        border-color: var(--kopru-primary-100);\n        transform: translateY(-6px);\n        box-shadow: var(--kopru-shadow-lg);\n    }\n\n    .step-number {\n        position: absolute;\n        top: -14px;\n        left: 50%;\n        transform: translateX(-50%);\n        width: 28px;\n        height: 28px;\n        border-radius: 8px;\n        background: var(--kopru-primary);\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        color: #fff;\n        font-weight: 800;\n        font-size: 0.8rem;\n    }\n\n    .step-icon-wrap {\n        width: 64px;\n        height: 64px;\n        border-radius: 18px;\n        background: var(--kopru-primary-50);\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        margin: 0 auto 1.25rem;\n        font-size: 1.5rem;\n        color: var(--kopru-primary);\n    }\n\n    h3 {\n        font-size: 1.1rem;\n        font-weight: 700;\n        margin-bottom: 0.75rem;\n        color: var(--kopru-text);\n    }\n\n    p {\n        color: var(--kopru-text-muted);\n        font-size: 0.9rem;\n        line-height: 1.7;\n    }\n}\n\n\n\n\n\n.business-types[_ngcontent-%COMP%] {\n    padding: 6rem 0;\n    background: var(--kopru-bg-section);\n}\n\n.types-grid[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    gap: 2rem;\n}\n\n.type-group[_ngcontent-%COMP%] {\n    flex: 1;\n}\n\n.group-title[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    gap: 0.75rem;\n    font-size: 1.05rem;\n    font-weight: 700;\n    color: var(--kopru-text);\n    margin-bottom: 1.5rem;\n    padding-bottom: 1rem;\n    border-bottom: 1px solid var(--kopru-border);\n\n    i {\n        color: var(--kopru-primary);\n        font-size: 1.1rem;\n    }\n}\n\n.type-cards[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    gap: 0.6rem;\n}\n\n.type-card[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    gap: 0.75rem;\n    padding: 0.9rem 1.25rem;\n    background: #fff;\n    border: 1px solid var(--kopru-border);\n    border-radius: 14px;\n    transition: all 0.2s ease;\n    cursor: default;\n    box-shadow: var(--kopru-shadow-sm);\n\n    &:hover {\n        border-color: var(--kopru-primary-100);\n        background: var(--kopru-primary-50);\n        transform: translateX(4px);\n    }\n\n    i {\n        font-size: 1rem;\n        color: var(--kopru-primary);\n        width: 20px;\n        text-align: center;\n    }\n\n    span {\n        font-size: 0.9rem;\n        color: var(--kopru-text);\n        font-weight: 500;\n    }\n}\n\n.bridge-arrow[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 0.75rem;\n    padding: 2rem 0;\n\n    .arrow-line {\n        width: 2px;\n        height: 50px;\n        background: linear-gradient(180deg, transparent, var(--kopru-primary), transparent);\n    }\n\n    .arrow-icon {\n        width: 52px;\n        height: 52px;\n        border-radius: 50%;\n        background: var(--kopru-primary);\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        color: #fff;\n        font-size: 1.1rem;\n        box-shadow: 0 4px 20px rgba(92, 122, 107, 0.2);\n    }\n}\n\n\n\n\n\n.recent-listings[_ngcontent-%COMP%] {\n    padding: 6rem 0;\n}\n\n.section-header-row[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-end;\n    margin-bottom: 3rem;\n\n    h2 {\n        font-size: 2.5rem;\n        font-weight: 800;\n    }\n}\n\n[_nghost-%COMP%]     .see-all-btn {\n    color: var(--kopru-text-secondary) !important;\n    border-color: var(--kopru-border) !important;\n\n    &:hover {\n        border-color: var(--kopru-primary) !important;\n        color: var(--kopru-primary) !important;\n    }\n}\n\n.listings-grid[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    gap: 1.5rem;\n}\n\n.listing-card[_ngcontent-%COMP%] {\n    background: #fff;\n    border: 1px solid var(--kopru-border);\n    border-radius: 20px;\n    padding: 1.75rem;\n    transition: all 0.3s ease;\n    display: flex;\n    flex-direction: column;\n    gap: 0.85rem;\n    box-shadow: var(--kopru-shadow-sm);\n\n    &:hover {\n        border-color: var(--kopru-primary-100);\n        transform: translateY(-4px);\n        box-shadow: var(--kopru-shadow-lg);\n    }\n}\n\n.listing-header[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.listing-type-badge[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    gap: 0.5rem;\n    background: var(--kopru-primary-50);\n    padding: 0.35rem 0.75rem;\n    border-radius: 8px;\n\n    i {\n        color: var(--kopru-primary);\n        font-size: 0.8rem;\n    }\n\n    span {\n        color: var(--kopru-primary);\n        font-size: 0.75rem;\n        font-weight: 600;\n    }\n}\n\n.listing-title[_ngcontent-%COMP%] {\n    font-size: 1rem;\n    font-weight: 700;\n    color: var(--kopru-text);\n    line-height: 1.3;\n}\n\n.listing-desc[_ngcontent-%COMP%] {\n    color: var(--kopru-text-muted);\n    font-size: 0.85rem;\n    line-height: 1.6;\n    flex: 1;\n}\n\n.listing-meta[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 0.4rem;\n}\n\n.meta-item[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    gap: 0.4rem;\n\n    i {\n        color: var(--kopru-text-muted);\n        font-size: 0.75rem;\n    }\n\n    span {\n        color: var(--kopru-text-secondary);\n        font-size: 0.75rem;\n    }\n}\n\n[_nghost-%COMP%]     .listing-action-btn {\n    background: var(--kopru-primary) !important;\n    border: none !important;\n    margin-top: 0.25rem;\n}\n\n\n\n\n\n.cta-section[_ngcontent-%COMP%] {\n    padding: 3rem 0 6rem;\n}\n\n.cta-card[_ngcontent-%COMP%] {\n    position: relative;\n    overflow: hidden;\n    background: var(--kopru-primary-50);\n    border: 1px solid var(--kopru-primary-100);\n    border-radius: 24px;\n    padding: 4rem;\n    text-align: center;\n\n    h2 {\n        font-size: 2.25rem;\n        font-weight: 800;\n        margin-bottom: 1rem;\n    }\n\n    p {\n        color: var(--kopru-text-secondary);\n        font-size: 1.05rem;\n        line-height: 1.8;\n        max-width: 520px;\n        margin: 0 auto 2rem;\n    }\n}\n\n.cta-actions[_ngcontent-%COMP%] {\n    display: flex;\n    gap: 1rem;\n    justify-content: center;\n}\n\n[_nghost-%COMP%]     .cta-primary-btn {\n    background: var(--kopru-primary) !important;\n    border: none !important;\n    padding: 0.85rem 2rem !important;\n    font-size: 1rem !important;\n}\n\n[_nghost-%COMP%]     .cta-text-btn {\n    color: var(--kopru-text-secondary) !important;\n\n    &:hover {\n        color: var(--kopru-primary) !important;\n    }\n}\n\n\n\n\n\n@media (max-width: 1024px) {\n    .hero-content[_ngcontent-%COMP%] {\n        grid-template-columns: 1fr;\n        text-align: center;\n    }\n\n    .hero-desc[_ngcontent-%COMP%] {\n        margin: 0 auto 2.5rem;\n    }\n\n    .hero-actions[_ngcontent-%COMP%] {\n        justify-content: center;\n    }\n\n    .hero-visual[_ngcontent-%COMP%] {\n        display: none;\n    }\n\n    .hero-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n        font-size: 2.8rem;\n    }\n\n    .listings-grid[_ngcontent-%COMP%] {\n        grid-template-columns: repeat(2, 1fr);\n    }\n}\n\n@media (max-width: 768px) {\n    .hero-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n        font-size: 2.2rem;\n    }\n\n    .stats-grid[_ngcontent-%COMP%] {\n        grid-template-columns: repeat(2, 1fr);\n    }\n\n    .steps-grid[_ngcontent-%COMP%] {\n        grid-template-columns: 1fr;\n    }\n\n    .types-grid[_ngcontent-%COMP%] {\n        flex-direction: column;\n\n        .bridge-arrow {\n            flex-direction: row;\n\n            .arrow-line {\n                width: 50px;\n                height: 2px;\n            }\n        }\n    }\n\n    .section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n        font-size: 2rem;\n    }\n\n    .section-header-row[_ngcontent-%COMP%] {\n        flex-direction: column;\n        align-items: flex-start;\n        gap: 1rem;\n\n        h2 {\n            font-size: 2rem;\n        }\n    }\n\n    .listings-grid[_ngcontent-%COMP%] {\n        grid-template-columns: 1fr;\n    }\n\n    .cta-card[_ngcontent-%COMP%] {\n        padding: 3rem 1.5rem;\n\n        h2 {\n            font-size: 1.8rem;\n        }\n    }\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HomeComponent, [{
        type: Component,
        args: [{ selector: 'app-home', standalone: true, imports: [FormsModule, RouterModule, ButtonModule, RippleModule, CardModule, TagModule, DialogModule, InputTextareaModule], template: "<!-- HERO -->\n<section class=\"hero\">\n  <div class=\"hero-bg\">\n    <div class=\"hero-shape shape-1\"></div>\n    <div class=\"hero-shape shape-2\"></div>\n  </div>\n  <div class=\"hero-content section-container\">\n    <div class=\"hero-text\">\n      <div class=\"hero-badge animate-fade-in-up\">\n        <i class=\"pi pi-verified\"></i>\n        <span>Sosyal Sorumluluk Platformu</span>\n      </div>\n      <h1 class=\"animate-fade-in-up stagger-1\">\n        G\u0131da \u0130sraf\u0131na\n        <span class=\"gradient-text\">K\u00F6pr\u00FC</span>\n        Olun\n      </h1>\n      <p class=\"hero-desc animate-fade-in-up stagger-2\">\n        \u0130\u015Fletmelerden kalan g\u0131day\u0131, ihtiya\u00E7 sahiplerine ula\u015Ft\u0131ran dijital platform.\n        Marketler, restoranlar, oteller ve pastanelerden a\u015Fevlerine,\n        bar\u0131naklara ve halk ekmek b\u00FCfelerine.\n      </p>\n      <div class=\"hero-actions animate-fade-in-up stagger-3\">\n        @if (auth.isReceiver()) {\n          <p-button label=\"\u0130lanlar\u0131 \u0130ncele\" icon=\"pi pi-arrow-right\" iconPos=\"right\"\n            [rounded]=\"true\" routerLink=\"/ilanlar\" styleClass=\"hero-btn-primary\">\n          </p-button>\n        }\n        @if (auth.isDonor()) {\n          <p-button label=\"Paneline Git\" icon=\"pi pi-arrow-right\" iconPos=\"right\"\n            [rounded]=\"true\" routerLink=\"/dashboard\" styleClass=\"hero-btn-primary\">\n          </p-button>\n        }\n\n        @if (!auth.isLoggedIn()) {\n          <p-button label=\"Hemen Kay\u0131t Ol\" icon=\"pi pi-user-plus\" [rounded]=\"true\"\n            routerLink=\"/register\" styleClass=\"hero-btn-primary\">\n          </p-button>\n        }\n        @if (!auth.isLoggedIn()) {\n          <p-button label=\"Giri\u015F Yap\" icon=\"pi pi-sign-in\" [rounded]=\"true\"\n            [outlined]=\"true\" routerLink=\"/login\" styleClass=\"hero-btn-secondary\">\n          </p-button>\n        }\n      </div>\n    </div>\n\n    <div class=\"hero-visual animate-fade-in-up stagger-4\">\n      <div class=\"hero-card-stack\">\n        <div class=\"floating-stat stat-1\">\n          <div class=\"stat-icon teal\"><i class=\"pi pi-box\"></i></div>\n          <div class=\"stat-info\">\n            <span class=\"stat-num\">{{ stats().totalSaved }}+</span>\n            <span class=\"stat-label\">Porsiyon Kurtar\u0131ld\u0131</span>\n          </div>\n        </div>\n        <div class=\"floating-stat stat-2\">\n          <div class=\"stat-icon green\"><i class=\"pi pi-building\"></i></div>\n          <div class=\"stat-info\">\n            <span class=\"stat-num\">{{ stats().partnerBusinesses }}</span>\n            <span class=\"stat-label\">Partner \u0130\u015Fletme</span>\n          </div>\n        </div>\n        <div class=\"floating-stat stat-3\">\n          <div class=\"stat-icon amber\"><i class=\"pi pi-truck\"></i></div>\n          <div class=\"stat-info\">\n            <span class=\"stat-num\">{{ stats().activeCouriers }}</span>\n            <span class=\"stat-label\">Aktif Kurye</span>\n          </div>\n        </div>\n        <div class=\"floating-stat stat-4\">\n          <div class=\"stat-icon blue\"><i class=\"pi pi-heart\"></i></div>\n          <div class=\"stat-info\">\n            <span class=\"stat-num\">{{ stats().receiverOrgs }}</span>\n            <span class=\"stat-label\">Al\u0131c\u0131 Kurum</span>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<!-- STATS BAR -->\n<section class=\"stats-bar\">\n  <div class=\"section-container\">\n    <div class=\"stats-grid\">\n      @for (stat of statItems; track stat) {\n        <div class=\"stat-item\">\n          <i [class]=\"stat.icon\"></i>\n          <div>\n            <span class=\"stat-value\">{{ stat.value }}</span>\n            <span class=\"stat-name\">{{ stat.name }}</span>\n          </div>\n        </div>\n      }\n    </div>\n  </div>\n</section>\n\n<!-- HOW IT WORKS -->\n<section class=\"how-it-works\">\n  <div class=\"section-container\">\n    <div class=\"section-header\">\n      <span class=\"section-tag\">S\u00FCrecimiz</span>\n      <h2>Nas\u0131l <span class=\"gradient-text\">\u00C7al\u0131\u015F\u0131r</span></h2>\n      <p>\u00DC\u00E7 basit ad\u0131mda g\u0131da israf\u0131n\u0131 \u00F6nleyin</p>\n    </div>\n    <div class=\"steps-grid\">\n      @for (step of steps; track step; let i = $index) {\n        <div class=\"step-card\">\n          <div class=\"step-number\">{{ i + 1 }}</div>\n          <div class=\"step-icon-wrap\">\n            <i [class]=\"step.icon\"></i>\n          </div>\n          <h3>{{ step.title }}</h3>\n          <p>{{ step.description }}</p>\n        </div>\n      }\n    </div>\n  </div>\n</section>\n\n<!-- BUSINESS TYPES -->\n<section class=\"business-types\">\n  <div class=\"section-container\">\n    <div class=\"section-header\">\n      <span class=\"section-tag\">Kat\u0131l\u0131mc\u0131lar</span>\n      <h2>Kimler <span class=\"gradient-text\">Kat\u0131labilir</span></h2>\n      <p>Her \u00F6l\u00E7ekten i\u015Fletme ve kurum platformumuza kat\u0131labilir</p>\n    </div>\n    <div class=\"types-grid\">\n      <div class=\"type-group\">\n        <h3 class=\"group-title\">\n          <i class=\"pi pi-upload\"></i>\n          G\u0131da Veren \u0130\u015Fletmeler\n        </h3>\n        <div class=\"type-cards\">\n          @for (type of donorTypes; track type) {\n            <div class=\"type-card\">\n              <i [class]=\"type.icon\"></i>\n              <span>{{ type.label }}</span>\n            </div>\n          }\n        </div>\n      </div>\n\n      <div class=\"bridge-arrow\">\n        <div class=\"arrow-line\"></div>\n        <div class=\"arrow-icon\">\n          <i class=\"pi pi-arrows-h\"></i>\n        </div>\n        <div class=\"arrow-line\"></div>\n      </div>\n\n      <div class=\"type-group\">\n        <h3 class=\"group-title\">\n          <i class=\"pi pi-download\"></i>\n          G\u0131da Alan Kurumlar\n        </h3>\n        <div class=\"type-cards\">\n          @for (type of receiverTypes; track type) {\n            <div class=\"type-card\">\n              <i [class]=\"type.icon\"></i>\n              <span>{{ type.label }}</span>\n            </div>\n          }\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<!-- RECENT LISTINGS -->\n@if (auth.isReceiver()) {\n  <section class=\"recent-listings\">\n    <div class=\"section-container\">\n      <div class=\"section-header-row\">\n        <div>\n          <span class=\"section-tag\">Son \u0130lanlar</span>\n          <h2>Aktif <span class=\"gradient-text\">\u0130lanlar</span></h2>\n        </div>\n        <p-button label=\"T\u00FCm \u0130lanlar\" icon=\"pi pi-arrow-right\" iconPos=\"right\" [rounded]=\"true\" [outlined]=\"true\"\n          routerLink=\"/ilanlar\" styleClass=\"see-all-btn\">\n        </p-button>\n      </div>\n      <div class=\"listings-grid\">\n        @for (listing of recentListings(); track listing; let i = $index) {\n          <div class=\"listing-card\">\n            <div class=\"listing-header\">\n              <div class=\"listing-type-badge\">\n                <i [class]=\"getBusinessIcon(listing.businessType)\"></i>\n                <span>{{ getBusinessLabel(listing.businessType) }}</span>\n              </div>\n              <p-tag [value]=\"listing.status === 'active' ? 'Aktif' : 'Rezerve'\"\n                [severity]=\"listing.status === 'active' ? 'success' : 'warning'\" [rounded]=\"true\">\n              </p-tag>\n            </div>\n            <h3 class=\"listing-title\">{{ listing.title }}</h3>\n            <p class=\"listing-desc\">{{ listing.description }}</p>\n            <div class=\"listing-meta\">\n              <div class=\"meta-item\">\n                <i class=\"pi pi-building\"></i>\n                <span>{{ listing.businessName }}</span>\n              </div>\n              <div class=\"meta-item\">\n                <i class=\"pi pi-map-marker\"></i>\n                <span>{{ listing.location }}</span>\n              </div>\n              <div class=\"meta-item\">\n                <i class=\"pi pi-box\"></i>\n                <span>{{ listing.quantity }}</span>\n              </div>\n              <div class=\"meta-item\">\n                <i class=\"pi pi-clock\"></i>\n                <span>SKT: {{ listing.expiresAt }}</span>\n              </div>\n            </div>\n            <p-button label=\"Talep Et\" icon=\"pi pi-check\" [rounded]=\"true\" [disabled]=\"listing.status !== 'active'\"\n              (onClick)=\"openReserveDialog(listing.id)\" styleClass=\"listing-action-btn p-button-sm\"\n              [style]=\"{ width: '100%' }\">\n            </p-button>\n          </div>\n        }\n      </div>\n    </div>\n  </section>\n}\n\n<!-- Call to action -->\n@if (!auth.isLoggedIn()) {\n  <section class=\"cta-section\">\n    <div class=\"section-container\">\n      <div class=\"cta-card\">\n        <h2>Siz de K\u00F6pr\u00FC Olun</h2>\n        <p>\u0130\u015Fletmenizden kalan g\u0131day\u0131 payla\u015Farak israf\u0131n \u00F6n\u00FCne ge\u00E7in.\n        Birlikte daha g\u00FCzel bir d\u00FCnya kural\u0131m.</p>\n        <div class=\"cta-actions\">\n          <p-button label=\"Hemen Kay\u0131t Ol\" icon=\"pi pi-user-plus\" iconPos=\"right\" [rounded]=\"true\"\n            routerLink=\"/register\" styleClass=\"cta-primary-btn\">\n          </p-button>\n          <p-button label=\"Giri\u015F Yap\" icon=\"pi pi-sign-in\" [rounded]=\"true\" styleClass=\"cta-secondary-btn\"\n            routerLink=\"/login\">\n          </p-button>\n        </div>\n      </div>\n    </div>\n  </section>\n}\n\n<!-- Reservation Dialog -->\n<p-dialog header=\"\u0130lan Detay\u0131\" [(visible)]=\"detailVisible\" [modal]=\"true\" [style]=\"{ width: '500px' }\"\n  [breakpoints]=\"{ '768px': '95vw' }\">\n  <div class=\"detail-content\">\n    <div class=\"detail-request-form\">\n      <h4 style=\"margin-bottom: 0.5rem; color: var(--kopru-text); font-weight: 600;\">Teslimat Bilgileri</h4>\n      <div class=\"form-field full-width\">\n        <label\n          style=\"display:block; margin-bottom: 0.25rem; font-size: 0.85rem; color: var(--kopru-text-secondary);\">Teslimat\n        Adresi *</label>\n        <textarea pInputTextarea [(ngModel)]=\"deliveryAddress\" rows=\"3\"\n          placeholder=\"Yemeklerin teslim edilece\u011Fi kurumu ve tam adresini yaz\u0131n...\"\n        style=\"width: 100%; border-color: var(--kopru-border); border-radius: var(--kopru-radius-md); padding: 0.75rem; font-family: inherit; resize: none;\"></textarea>\n      </div>\n    </div>\n    <p-button label=\"Talep Olu\u015Ftur\" icon=\"pi pi-check\" [rounded]=\"true\"\n      [disabled]=\"deliveryAddress.trim().length === 0\" (onClick)=\"confirmReserve()\" styleClass=\"detail-action-btn\"\n    [style]=\"{ width: '100%', marginTop: '1.5rem' }\"></p-button>\n  </div>\n</p-dialog>", styles: ["/* ============================================\n   HERO\n============================================ */\n.hero {\n    position: relative;\n    min-height: 100vh;\n    display: flex;\n    align-items: center;\n    overflow: hidden;\n    padding: 7rem 0 5rem;\n    background: linear-gradient(180deg, var(--kopru-primary-50) 0%, var(--kopru-bg) 60%);\n}\n\n.hero-bg {\n    position: absolute;\n    inset: 0;\n    pointer-events: none;\n    overflow: hidden;\n}\n\n.hero-shape {\n    position: absolute;\n    border-radius: 50%;\n    opacity: 0.4;\n    filter: blur(80px);\n}\n\n.shape-1 {\n    width: 500px;\n    height: 500px;\n    background: var(--kopru-primary-100);\n    top: -150px;\n    right: -100px;\n}\n\n.shape-2 {\n    width: 350px;\n    height: 350px;\n    background: var(--kopru-primary-100);\n    bottom: -50px;\n    left: -80px;\n}\n\n.hero-content {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 4rem;\n    align-items: center;\n    position: relative;\n    z-index: 2;\n}\n\n.hero-badge {\n    display: inline-flex;\n    align-items: center;\n    gap: 0.5rem;\n    background: var(--kopru-primary-50);\n    border: 1px solid var(--kopru-primary-100);\n    padding: 0.5rem 1.25rem;\n    border-radius: 100px;\n    color: var(--kopru-primary);\n    font-size: 0.8rem;\n    font-weight: 600;\n    margin-bottom: 1.5rem;\n}\n\n.hero-text h1 {\n    font-size: 3.5rem;\n    font-weight: 900;\n    line-height: 1.1;\n    margin-bottom: 1.5rem;\n    letter-spacing: -0.02em;\n    color: var(--kopru-text);\n}\n\n.hero-desc {\n    font-size: 1.1rem;\n    color: var(--kopru-text-secondary);\n    line-height: 1.8;\n    margin-bottom: 2.5rem;\n    max-width: 480px;\n}\n\n.hero-actions {\n    display: flex;\n    gap: 1rem;\n    flex-wrap: wrap;\n}\n\n:host ::ng-deep .hero-btn-primary {\n    background: var(--kopru-primary) !important;\n    border: none !important;\n    padding: 0.85rem 2rem !important;\n    font-size: 1rem !important;\n}\n\n:host ::ng-deep .hero-btn-secondary {\n    color: var(--kopru-text-secondary) !important;\n    border-color: var(--kopru-border) !important;\n    padding: 0.85rem 2rem !important;\n    font-size: 1rem !important;\n\n    &:hover {\n        border-color: var(--kopru-primary) !important;\n        color: var(--kopru-primary) !important;\n    }\n}\n\n/* Hero Visual */\n.hero-visual {\n    position: relative;\n    height: 420px;\n}\n\n.hero-card-stack {\n    position: relative;\n    width: 100%;\n    height: 100%;\n}\n\n.floating-stat {\n    position: absolute;\n    display: flex;\n    align-items: center;\n    gap: 1rem;\n    background: #fff;\n    border: 1px solid var(--kopru-border);\n    border-radius: 16px;\n    padding: 1.25rem 1.5rem;\n    animation: float 6s ease-in-out infinite;\n    box-shadow: var(--kopru-shadow-lg);\n\n    .stat-icon {\n        width: 48px;\n        height: 48px;\n        border-radius: 14px;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        font-size: 1.2rem;\n\n        &.teal {\n            background: var(--kopru-primary-50);\n            color: var(--kopru-primary);\n        }\n\n        &.green {\n            background: var(--kopru-primary-50);\n            color: var(--kopru-primary);\n        }\n\n        &.amber {\n            background: var(--kopru-bg-elevated);\n            color: var(--kopru-text-secondary);\n        }\n\n        &.blue {\n            background: var(--kopru-bg-elevated);\n            color: var(--kopru-text-secondary);\n        }\n    }\n\n    .stat-info {\n        display: flex;\n        flex-direction: column;\n    }\n\n    .stat-num {\n        font-size: 1.5rem;\n        font-weight: 800;\n        color: var(--kopru-text);\n    }\n\n    .stat-label {\n        font-size: 0.75rem;\n        color: var(--kopru-text-muted);\n        font-weight: 500;\n    }\n}\n\n.stat-1 {\n    top: 10%;\n    left: 0;\n    animation-delay: 0s;\n}\n\n.stat-2 {\n    top: 5%;\n    right: 0;\n    animation-delay: 1.5s;\n}\n\n.stat-3 {\n    bottom: 25%;\n    left: 5%;\n    animation-delay: 3s;\n}\n\n.stat-4 {\n    bottom: 10%;\n    right: 5%;\n    animation-delay: 4.5s;\n}\n\n/* ============================================\n   STATS BAR\n============================================ */\n.stats-bar {\n    padding: 2.5rem 0;\n    background: #fff;\n    border-top: 1px solid var(--kopru-border-light);\n    border-bottom: 1px solid var(--kopru-border-light);\n}\n\n.stats-grid {\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    gap: 2rem;\n}\n\n.stat-item {\n    display: flex;\n    align-items: center;\n    gap: 1rem;\n    justify-content: center;\n\n    i {\n        font-size: 1.5rem;\n        color: var(--kopru-primary);\n    }\n\n    .stat-value {\n        display: block;\n        font-size: 1.5rem;\n        font-weight: 800;\n        color: var(--kopru-text);\n    }\n\n    .stat-name {\n        display: block;\n        font-size: 0.8rem;\n        color: var(--kopru-text-muted);\n    }\n}\n\n/* ============================================\n   SECTION COMMON\n============================================ */\n.section-header {\n    text-align: center;\n    margin-bottom: 4rem;\n\n    h2 {\n        font-size: 2.5rem;\n        font-weight: 800;\n        margin-bottom: 0.75rem;\n    }\n\n    p {\n        color: var(--kopru-text-muted);\n        font-size: 1.05rem;\n    }\n}\n\n/* ============================================\n   HOW IT WORKS\n============================================ */\n.how-it-works {\n    padding: 6rem 0;\n}\n\n.steps-grid {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    gap: 2rem;\n}\n\n.step-card {\n    position: relative;\n    background: #fff;\n    border: 1px solid var(--kopru-border);\n    border-radius: 20px;\n    padding: 2.5rem 2rem;\n    text-align: center;\n    transition: all 0.3s ease;\n    box-shadow: var(--kopru-shadow-sm);\n\n    &:hover {\n        border-color: var(--kopru-primary-100);\n        transform: translateY(-6px);\n        box-shadow: var(--kopru-shadow-lg);\n    }\n\n    .step-number {\n        position: absolute;\n        top: -14px;\n        left: 50%;\n        transform: translateX(-50%);\n        width: 28px;\n        height: 28px;\n        border-radius: 8px;\n        background: var(--kopru-primary);\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        color: #fff;\n        font-weight: 800;\n        font-size: 0.8rem;\n    }\n\n    .step-icon-wrap {\n        width: 64px;\n        height: 64px;\n        border-radius: 18px;\n        background: var(--kopru-primary-50);\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        margin: 0 auto 1.25rem;\n        font-size: 1.5rem;\n        color: var(--kopru-primary);\n    }\n\n    h3 {\n        font-size: 1.1rem;\n        font-weight: 700;\n        margin-bottom: 0.75rem;\n        color: var(--kopru-text);\n    }\n\n    p {\n        color: var(--kopru-text-muted);\n        font-size: 0.9rem;\n        line-height: 1.7;\n    }\n}\n\n/* ============================================\n   BUSINESS TYPES\n============================================ */\n.business-types {\n    padding: 6rem 0;\n    background: var(--kopru-bg-section);\n}\n\n.types-grid {\n    display: flex;\n    align-items: center;\n    gap: 2rem;\n}\n\n.type-group {\n    flex: 1;\n}\n\n.group-title {\n    display: flex;\n    align-items: center;\n    gap: 0.75rem;\n    font-size: 1.05rem;\n    font-weight: 700;\n    color: var(--kopru-text);\n    margin-bottom: 1.5rem;\n    padding-bottom: 1rem;\n    border-bottom: 1px solid var(--kopru-border);\n\n    i {\n        color: var(--kopru-primary);\n        font-size: 1.1rem;\n    }\n}\n\n.type-cards {\n    display: flex;\n    flex-direction: column;\n    gap: 0.6rem;\n}\n\n.type-card {\n    display: flex;\n    align-items: center;\n    gap: 0.75rem;\n    padding: 0.9rem 1.25rem;\n    background: #fff;\n    border: 1px solid var(--kopru-border);\n    border-radius: 14px;\n    transition: all 0.2s ease;\n    cursor: default;\n    box-shadow: var(--kopru-shadow-sm);\n\n    &:hover {\n        border-color: var(--kopru-primary-100);\n        background: var(--kopru-primary-50);\n        transform: translateX(4px);\n    }\n\n    i {\n        font-size: 1rem;\n        color: var(--kopru-primary);\n        width: 20px;\n        text-align: center;\n    }\n\n    span {\n        font-size: 0.9rem;\n        color: var(--kopru-text);\n        font-weight: 500;\n    }\n}\n\n.bridge-arrow {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 0.75rem;\n    padding: 2rem 0;\n\n    .arrow-line {\n        width: 2px;\n        height: 50px;\n        background: linear-gradient(180deg, transparent, var(--kopru-primary), transparent);\n    }\n\n    .arrow-icon {\n        width: 52px;\n        height: 52px;\n        border-radius: 50%;\n        background: var(--kopru-primary);\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        color: #fff;\n        font-size: 1.1rem;\n        box-shadow: 0 4px 20px rgba(92, 122, 107, 0.2);\n    }\n}\n\n/* ============================================\n   RECENT LISTINGS\n============================================ */\n.recent-listings {\n    padding: 6rem 0;\n}\n\n.section-header-row {\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-end;\n    margin-bottom: 3rem;\n\n    h2 {\n        font-size: 2.5rem;\n        font-weight: 800;\n    }\n}\n\n:host ::ng-deep .see-all-btn {\n    color: var(--kopru-text-secondary) !important;\n    border-color: var(--kopru-border) !important;\n\n    &:hover {\n        border-color: var(--kopru-primary) !important;\n        color: var(--kopru-primary) !important;\n    }\n}\n\n.listings-grid {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    gap: 1.5rem;\n}\n\n.listing-card {\n    background: #fff;\n    border: 1px solid var(--kopru-border);\n    border-radius: 20px;\n    padding: 1.75rem;\n    transition: all 0.3s ease;\n    display: flex;\n    flex-direction: column;\n    gap: 0.85rem;\n    box-shadow: var(--kopru-shadow-sm);\n\n    &:hover {\n        border-color: var(--kopru-primary-100);\n        transform: translateY(-4px);\n        box-shadow: var(--kopru-shadow-lg);\n    }\n}\n\n.listing-header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.listing-type-badge {\n    display: flex;\n    align-items: center;\n    gap: 0.5rem;\n    background: var(--kopru-primary-50);\n    padding: 0.35rem 0.75rem;\n    border-radius: 8px;\n\n    i {\n        color: var(--kopru-primary);\n        font-size: 0.8rem;\n    }\n\n    span {\n        color: var(--kopru-primary);\n        font-size: 0.75rem;\n        font-weight: 600;\n    }\n}\n\n.listing-title {\n    font-size: 1rem;\n    font-weight: 700;\n    color: var(--kopru-text);\n    line-height: 1.3;\n}\n\n.listing-desc {\n    color: var(--kopru-text-muted);\n    font-size: 0.85rem;\n    line-height: 1.6;\n    flex: 1;\n}\n\n.listing-meta {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 0.4rem;\n}\n\n.meta-item {\n    display: flex;\n    align-items: center;\n    gap: 0.4rem;\n\n    i {\n        color: var(--kopru-text-muted);\n        font-size: 0.75rem;\n    }\n\n    span {\n        color: var(--kopru-text-secondary);\n        font-size: 0.75rem;\n    }\n}\n\n:host ::ng-deep .listing-action-btn {\n    background: var(--kopru-primary) !important;\n    border: none !important;\n    margin-top: 0.25rem;\n}\n\n/* ============================================\n   CTA\n============================================ */\n.cta-section {\n    padding: 3rem 0 6rem;\n}\n\n.cta-card {\n    position: relative;\n    overflow: hidden;\n    background: var(--kopru-primary-50);\n    border: 1px solid var(--kopru-primary-100);\n    border-radius: 24px;\n    padding: 4rem;\n    text-align: center;\n\n    h2 {\n        font-size: 2.25rem;\n        font-weight: 800;\n        margin-bottom: 1rem;\n    }\n\n    p {\n        color: var(--kopru-text-secondary);\n        font-size: 1.05rem;\n        line-height: 1.8;\n        max-width: 520px;\n        margin: 0 auto 2rem;\n    }\n}\n\n.cta-actions {\n    display: flex;\n    gap: 1rem;\n    justify-content: center;\n}\n\n:host ::ng-deep .cta-primary-btn {\n    background: var(--kopru-primary) !important;\n    border: none !important;\n    padding: 0.85rem 2rem !important;\n    font-size: 1rem !important;\n}\n\n:host ::ng-deep .cta-text-btn {\n    color: var(--kopru-text-secondary) !important;\n\n    &:hover {\n        color: var(--kopru-primary) !important;\n    }\n}\n\n/* ============================================\n   RESPONSIVE\n============================================ */\n@media (max-width: 1024px) {\n    .hero-content {\n        grid-template-columns: 1fr;\n        text-align: center;\n    }\n\n    .hero-desc {\n        margin: 0 auto 2.5rem;\n    }\n\n    .hero-actions {\n        justify-content: center;\n    }\n\n    .hero-visual {\n        display: none;\n    }\n\n    .hero-text h1 {\n        font-size: 2.8rem;\n    }\n\n    .listings-grid {\n        grid-template-columns: repeat(2, 1fr);\n    }\n}\n\n@media (max-width: 768px) {\n    .hero-text h1 {\n        font-size: 2.2rem;\n    }\n\n    .stats-grid {\n        grid-template-columns: repeat(2, 1fr);\n    }\n\n    .steps-grid {\n        grid-template-columns: 1fr;\n    }\n\n    .types-grid {\n        flex-direction: column;\n\n        .bridge-arrow {\n            flex-direction: row;\n\n            .arrow-line {\n                width: 50px;\n                height: 2px;\n            }\n        }\n    }\n\n    .section-header h2 {\n        font-size: 2rem;\n    }\n\n    .section-header-row {\n        flex-direction: column;\n        align-items: flex-start;\n        gap: 1rem;\n\n        h2 {\n            font-size: 2rem;\n        }\n    }\n\n    .listings-grid {\n        grid-template-columns: 1fr;\n    }\n\n    .cta-card {\n        padding: 3rem 1.5rem;\n\n        h2 {\n            font-size: 1.8rem;\n        }\n    }\n}"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(HomeComponent, { className: "HomeComponent" }); })();
//# sourceMappingURL=home.component.js.map