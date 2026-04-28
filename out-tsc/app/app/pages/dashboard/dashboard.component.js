import { Component, inject, computed } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { TabViewModule } from 'primeng/tabview';
import { FoodListingService } from '../../services/food-listing.service';
import { AuthService } from '../../services/auth.service';
import { STATUS_LABELS } from '../../models/food-listing.model';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "primeng/button";
import * as i3 from "primeng/tag";
import * as i4 from "primeng/tabview";
function DashboardComponent_Conditional_14_For_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9)(1, "div", 10)(2, "h3", 11);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "p-tag", 12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p", 13);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 14)(8, "div", 15);
    i0.ɵɵelement(9, "i", 16);
    i0.ɵɵelementStart(10, "span");
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "div", 15);
    i0.ɵɵelement(13, "i", 17);
    i0.ɵɵelementStart(14, "span");
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const listing_r1 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(listing_r1.title);
    i0.ɵɵadvance();
    i0.ɵɵproperty("value", ctx_r1.getStatusLabel(listing_r1.status))("severity", ctx_r1.getSeverity(listing_r1.status))("rounded", true);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(listing_r1.description);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(listing_r1.quantity);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1("SKT: ", listing_r1.expiresAt, "");
} }
function DashboardComponent_Conditional_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵrepeaterCreate(1, DashboardComponent_Conditional_14_For_2_Template, 16, 7, "div", 9, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r1.activeListings());
} }
function DashboardComponent_Conditional_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵelement(1, "i", 18);
    i0.ɵɵelementStart(2, "h3");
    i0.ɵɵtext(3, "Aktif \u0130lan Yok");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p");
    i0.ɵɵtext(5, "\u015Eu anda payla\u015Ft\u0131\u011F\u0131n\u0131z aktif bir ilan bulunmamaktad\u0131r.");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(6, "p-button", 19);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("rounded", true);
} }
function DashboardComponent_Conditional_17_For_2_Conditional_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 21)(1, "h4", 25);
    i0.ɵɵelement(2, "i", 26);
    i0.ɵɵtext(3, " Teslimat Adresi");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p", 27);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const listing_r4 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(listing_r4.deliveryAddress);
} }
function DashboardComponent_Conditional_17_For_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 20)(1, "div", 10)(2, "h3", 11);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "p-tag", 12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p", 13);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(7, DashboardComponent_Conditional_17_For_2_Conditional_7_Template, 6, 1, "div", 21);
    i0.ɵɵelementStart(8, "div", 22)(9, "p-button", 23);
    i0.ɵɵlistener("onClick", function DashboardComponent_Conditional_17_For_2_Template_p_button_onClick_9_listener() { const listing_r4 = i0.ɵɵrestoreView(_r3).$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.markAsCompleted(listing_r4.id)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "p-button", 24);
    i0.ɵɵlistener("onClick", function DashboardComponent_Conditional_17_For_2_Template_p_button_onClick_10_listener() { const listing_r4 = i0.ɵɵrestoreView(_r3).$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.cancelReservation(listing_r4.id)); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const listing_r4 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(listing_r4.title);
    i0.ɵɵadvance();
    i0.ɵɵproperty("value", ctx_r1.getStatusLabel(listing_r4.status))("severity", ctx_r1.getSeverity(listing_r4.status))("rounded", true);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(listing_r4.description);
    i0.ɵɵadvance();
    i0.ɵɵconditional(listing_r4.deliveryAddress ? 7 : -1);
} }
function DashboardComponent_Conditional_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵrepeaterCreate(1, DashboardComponent_Conditional_17_For_2_Template, 11, 6, "div", 20, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r1.reservedListings());
} }
function DashboardComponent_Conditional_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵelement(1, "i", 17);
    i0.ɵɵelementStart(2, "h3");
    i0.ɵɵtext(3, "Bekleyen Rezervasyon Yok");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p");
    i0.ɵɵtext(5, "Hen\u00FCz rezerve edilmi\u015F bir ilan\u0131n\u0131z bulunmuyor.");
    i0.ɵɵelementEnd()();
} }
function DashboardComponent_Conditional_20_For_2_Conditional_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 29)(1, "h4", 31);
    i0.ɵɵelement(2, "i", 26);
    i0.ɵɵtext(3, " Teslim Edilen Adres");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p", 27);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const listing_r5 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(listing_r5.deliveryAddress);
} }
function DashboardComponent_Conditional_20_For_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 28)(1, "div", 10)(2, "h3", 11);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "p-tag", 12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p", 13);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(7, DashboardComponent_Conditional_20_For_2_Conditional_7_Template, 6, 1, "div", 29);
    i0.ɵɵelementStart(8, "div", 14)(9, "div", 15);
    i0.ɵɵelement(10, "i", 30);
    i0.ɵɵelementStart(11, "span");
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const listing_r5 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(listing_r5.title);
    i0.ɵɵadvance();
    i0.ɵɵproperty("value", ctx_r1.getStatusLabel(listing_r5.status))("severity", ctx_r1.getSeverity(listing_r5.status))("rounded", true);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(listing_r5.description);
    i0.ɵɵadvance();
    i0.ɵɵconditional(listing_r5.deliveryAddress ? 7 : -1);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(listing_r5.expiresAt);
} }
function DashboardComponent_Conditional_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵrepeaterCreate(1, DashboardComponent_Conditional_20_For_2_Template, 13, 7, "div", 28, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r1.completedListings());
} }
function DashboardComponent_Conditional_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵelement(1, "i", 32);
    i0.ɵɵelementStart(2, "h3");
    i0.ɵɵtext(3, "Tamamlanan \u0130lan Yok");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p");
    i0.ɵɵtext(5, "Daha \u00F6nce ba\u015Far\u0131yla teslim edilmi\u015F ilan\u0131n\u0131z bulunmuyor.");
    i0.ɵɵelementEnd()();
} }
export class DashboardComponent {
    listingService = inject(FoodListingService);
    auth = inject(AuthService);
    // In a real app, this would fetch only listings belonging to auth.currentUser.id
    // For this mock, we'll just show all listings but pretend they belong to the user
    allListings = this.listingService.allListings;
    activeListings = computed(() => this.allListings().filter(l => l.status === 'active'));
    reservedListings = computed(() => this.allListings().filter(l => l.status === 'reserved'));
    completedListings = computed(() => this.allListings().filter(l => l.status === 'completed'));
    getStatusLabel(status) {
        return STATUS_LABELS[status];
    }
    getSeverity(status) {
        switch (status) {
            case 'active': return 'success';
            case 'reserved': return 'warning';
            case 'completed': return 'info';
            default: return 'info';
        }
    }
    markAsCompleted(id) {
        this.listingService.updateStatus(id, 'completed');
    }
    cancelReservation(id) {
        this.listingService.updateStatus(id, 'active');
    }
    static ɵfac = function DashboardComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || DashboardComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DashboardComponent, selectors: [["app-dashboard"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 22, vars: 10, consts: [[1, "dashboard-page", "page-enter"], [1, "section-container"], [1, "page-header"], [1, "section-tag"], [1, "gradient-text"], [1, "dashboard-content"], [3, "header"], [1, "listings-grid"], [1, "empty-state"], [1, "listing-card"], [1, "listing-header"], [1, "listing-title"], [3, "value", "severity", "rounded"], [1, "listing-desc"], [1, "listing-meta"], [1, "meta-item"], [1, "pi", "pi-box"], [1, "pi", "pi-clock"], [1, "pi", "pi-folder-open"], ["label", "Yeni \u0130lan Ver", "icon", "pi pi-plus", "routerLink", "/ilan-ver", "styleClass", "mt-3", 3, "rounded"], [1, "listing-card", "reserved-state"], [1, "listing-delivery", 2, "background", "rgba(245, 158, 11, 0.1)", "padding", "0.75rem", "border-radius", "var(--kopru-radius-md)", "margin-bottom", "1.5rem", "font-size", "0.85rem", "border", "1px dashed #f59e0b"], [1, "listing-actions"], ["label", "Teslim Edildi", "icon", "pi pi-check", "styleClass", "p-button-success p-button-sm w-full mb-2", 3, "onClick"], ["label", "\u0130ptal Et", "icon", "pi pi-times", "styleClass", "p-button-outlined p-button-danger p-button-sm w-full", 3, "onClick"], [2, "margin", "0 0 0.25rem 0", "color", "#b45309", "display", "flex", "align-items", "center", "gap", "0.25rem"], [1, "pi", "pi-map-marker", 2, "font-size", "0.9rem"], [2, "margin", "0", "color", "var(--kopru-text-secondary)", "line-height", "1.4"], [1, "listing-card", "completed-state"], [1, "listing-delivery", 2, "background", "rgba(34, 197, 94, 0.1)", "padding", "0.75rem", "border-radius", "var(--kopru-radius-md)", "margin-bottom", "1.5rem", "font-size", "0.85rem", "border", "1px dashed #22c55e"], [1, "pi", "pi-calendar-times"], [2, "margin", "0 0 0.25rem 0", "color", "#166534", "display", "flex", "align-items", "center", "gap", "0.25rem"], [1, "pi", "pi-check-circle"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
            i0.ɵɵtext(4, "\u0130\u015Fletme Paneli");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "h1");
            i0.ɵɵtext(6, "Merhaba, ");
            i0.ɵɵelementStart(7, "span", 4);
            i0.ɵɵtext(8);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(9, "p");
            i0.ɵɵtext(10, "\u0130lanlar\u0131n durumunu takip et ve g\u00FCncel tut.");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(11, "div", 5)(12, "p-tabView")(13, "p-tabPanel", 6);
            i0.ɵɵtemplate(14, DashboardComponent_Conditional_14_Template, 3, 0, "div", 7)(15, DashboardComponent_Conditional_15_Template, 7, 1, "div", 8);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(16, "p-tabPanel", 6);
            i0.ɵɵtemplate(17, DashboardComponent_Conditional_17_Template, 3, 0, "div", 7)(18, DashboardComponent_Conditional_18_Template, 6, 0, "div", 8);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(19, "p-tabPanel", 6);
            i0.ɵɵtemplate(20, DashboardComponent_Conditional_20_Template, 3, 0, "div", 7)(21, DashboardComponent_Conditional_21_Template, 6, 0, "div", 8);
            i0.ɵɵelementEnd()()()()();
        } if (rf & 2) {
            let tmp_0_0;
            i0.ɵɵadvance(8);
            i0.ɵɵtextInterpolate(((tmp_0_0 = ctx.auth.currentUser()) == null ? null : tmp_0_0.name) || "Kullan\u0131c\u0131");
            i0.ɵɵadvance(5);
            i0.ɵɵpropertyInterpolate1("header", "Aktif \u0130lanlar (", ctx.activeListings().length, ")");
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.activeListings().length > 0 ? 14 : 15);
            i0.ɵɵadvance(2);
            i0.ɵɵpropertyInterpolate1("header", "Rezerve Edilenler (", ctx.reservedListings().length, ")");
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.reservedListings().length > 0 ? 17 : 18);
            i0.ɵɵadvance(2);
            i0.ɵɵpropertyInterpolate1("header", "Tamamlananlar (", ctx.completedListings().length, ")");
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.completedListings().length > 0 ? 20 : 21);
        } }, dependencies: [RouterModule, i1.RouterLink, ButtonModule, i2.Button, TagModule, i3.Tag, TabViewModule, i4.TabView, i4.TabPanel], styles: [".dashboard-page[_ngcontent-%COMP%] {\n    padding-top: 100px;\n    padding-bottom: 4rem;\n    background-color: var(--kopru-bg);\n    min-height: 100vh;\n}\n\n.page-header[_ngcontent-%COMP%] {\n    text-align: center;\n    margin-bottom: 3rem;\n\n    h1 {\n        font-size: 2.5rem;\n        font-weight: 800;\n        color: var(--kopru-text);\n        margin: 0.5rem 0;\n    }\n\n    p {\n        color: var(--kopru-text-muted);\n        font-size: 1.1rem;\n        max-width: 600px;\n        margin: 0 auto;\n    }\n}\n\n.dashboard-content[_ngcontent-%COMP%] {\n    background: #fff;\n    border-radius: var(--kopru-radius-xl);\n    border: 1px solid var(--kopru-border);\n    padding: 2rem;\n    box-shadow: var(--kopru-shadow-sm);\n}\n\n[_nghost-%COMP%]     .p-tabview .p-tabview-nav li.p-highlight .p-tabview-nav-link {\n    color: var(--kopru-primary);\n    border-color: var(--kopru-primary);\n}\n\n.listings-grid[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n    gap: 1.5rem;\n    margin-top: 1.5rem;\n}\n\n.listing-card[_ngcontent-%COMP%] {\n    background: var(--kopru-bg);\n    border-radius: var(--kopru-radius-lg);\n    padding: 1.5rem;\n    border: 1px solid var(--kopru-border);\n    transition: all 0.3s ease;\n    display: flex;\n    flex-direction: column;\n\n    &:hover {\n        border-color: var(--kopru-primary);\n        transform: translateY(-2px);\n        box-shadow: var(--kopru-shadow-md);\n    }\n\n    &.reserved-state {\n        background: #fffbf0;\n        border-color: #f59e0b;\n    }\n\n    &.completed-state {\n        background: #f0fdf4;\n        border-color: #22c55e;\n        opacity: 0.8;\n    }\n}\n\n.listing-header[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-start;\n    margin-bottom: 1rem;\n\n    .listing-title {\n        font-size: 1.1rem;\n        font-weight: 700;\n        color: var(--kopru-text);\n        margin: 0;\n        flex: 1;\n        padding-right: 1rem;\n    }\n}\n\n.listing-desc[_ngcontent-%COMP%] {\n    color: var(--kopru-text-secondary);\n    font-size: 0.9rem;\n    line-height: 1.5;\n    margin-bottom: 1.5rem;\n    flex-grow: 1;\n}\n\n.listing-meta[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    gap: 0.5rem;\n    margin-bottom: 1.5rem;\n}\n\n.meta-item[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    gap: 0.5rem;\n    color: var(--kopru-text-secondary);\n    font-size: 0.85rem;\n\n    i {\n        color: var(--kopru-primary);\n    }\n}\n\n.listing-actions[_ngcontent-%COMP%] {\n    margin-top: auto;\n}\n\n.empty-state[_ngcontent-%COMP%] {\n    text-align: center;\n    padding: 4rem 2rem;\n    background: var(--kopru-bg);\n    border-radius: var(--kopru-radius-lg);\n    border: 1px dashed var(--kopru-border);\n    margin-top: 1.5rem;\n\n    i {\n        font-size: 3rem;\n        color: var(--kopru-text-muted);\n        margin-bottom: 1rem;\n    }\n\n    h3 {\n        font-size: 1.25rem;\n        color: var(--kopru-text);\n        margin-bottom: 0.5rem;\n    }\n\n    p {\n        color: var(--kopru-text-secondary);\n    }\n}\n\n.mt-3[_ngcontent-%COMP%] {\n    margin-top: 1rem;\n}\n\n.mb-2[_ngcontent-%COMP%] {\n    margin-bottom: 0.5rem;\n}\n\n.w-full[_ngcontent-%COMP%] {\n    width: 100%;\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DashboardComponent, [{
        type: Component,
        args: [{ selector: 'app-dashboard', standalone: true, imports: [RouterModule, ButtonModule, TagModule, TabViewModule], template: "<section class=\"dashboard-page page-enter\">\n  <div class=\"section-container\">\n    <div class=\"page-header\">\n      <span class=\"section-tag\">\u0130\u015Fletme Paneli</span>\n      <h1>Merhaba, <span class=\"gradient-text\">{{ auth.currentUser()?.name || 'Kullan\u0131c\u0131' }}</span></h1>\n      <p>\u0130lanlar\u0131n durumunu takip et ve g\u00FCncel tut.</p>\n    </div>\n\n    <div class=\"dashboard-content\">\n      <p-tabView>\n        <!-- TAB 1: AKT\u0130F B\u0130LANLAR -->\n        <p-tabPanel header=\"Aktif \u0130lanlar ({{ activeListings().length }})\">\n          @if (activeListings().length > 0) {\n            <div class=\"listings-grid\">\n              @for (listing of activeListings(); track listing) {\n                <div class=\"listing-card\">\n                  <div class=\"listing-header\">\n                    <h3 class=\"listing-title\">{{ listing.title }}</h3>\n                    <p-tag [value]=\"getStatusLabel(listing.status)\" [severity]=\"getSeverity(listing.status)\"\n                    [rounded]=\"true\"></p-tag>\n                  </div>\n                  <p class=\"listing-desc\">{{ listing.description }}</p>\n                  <div class=\"listing-meta\">\n                    <div class=\"meta-item\"><i class=\"pi pi-box\"></i><span>{{ listing.quantity }}</span>\n                  </div>\n                  <div class=\"meta-item\"><i class=\"pi pi-clock\"></i><span>SKT: {{ listing.expiresAt\n                }}</span></div>\n              </div>\n            </div>\n          }\n        </div>\n      } @else {\n        <div class=\"empty-state\">\n          <i class=\"pi pi-folder-open\"></i>\n          <h3>Aktif \u0130lan Yok</h3>\n          <p>\u015Eu anda payla\u015Ft\u0131\u011F\u0131n\u0131z aktif bir ilan bulunmamaktad\u0131r.</p>\n          <p-button label=\"Yeni \u0130lan Ver\" icon=\"pi pi-plus\" [rounded]=\"true\" routerLink=\"/ilan-ver\"\n          styleClass=\"mt-3\"></p-button>\n        </div>\n      }\n    </p-tabPanel>\n\n    <!-- TAB 2: REZERVE ED\u0130LENLER -->\n    <p-tabPanel header=\"Rezerve Edilenler ({{ reservedListings().length }})\">\n      @if (reservedListings().length > 0) {\n        <div class=\"listings-grid\">\n          @for (listing of reservedListings(); track listing) {\n            <div class=\"listing-card reserved-state\">\n              <div class=\"listing-header\">\n                <h3 class=\"listing-title\">{{ listing.title }}</h3>\n                <p-tag [value]=\"getStatusLabel(listing.status)\" [severity]=\"getSeverity(listing.status)\"\n                [rounded]=\"true\"></p-tag>\n              </div>\n              <p class=\"listing-desc\">{{ listing.description }}</p>\n              @if (listing.deliveryAddress) {\n                <div class=\"listing-delivery\"\n                  style=\"background: rgba(245, 158, 11, 0.1); padding: 0.75rem; border-radius: var(--kopru-radius-md); margin-bottom: 1.5rem; font-size: 0.85rem; border: 1px dashed #f59e0b;\">\n                  <h4\n                    style=\"margin: 0 0 0.25rem 0; color: #b45309; display: flex; align-items: center; gap: 0.25rem;\">\n                    <i class=\"pi pi-map-marker\" style=\"font-size: 0.9rem;\"></i> Teslimat Adresi</h4>\n                    <p style=\"margin: 0; color: var(--kopru-text-secondary); line-height: 1.4;\">{{\n                    listing.deliveryAddress }}</p>\n                  </div>\n                }\n                <div class=\"listing-actions\">\n                  <p-button label=\"Teslim Edildi\" icon=\"pi pi-check\"\n                    styleClass=\"p-button-success p-button-sm w-full mb-2\"\n                  (onClick)=\"markAsCompleted(listing.id)\"></p-button>\n                  <p-button label=\"\u0130ptal Et\" icon=\"pi pi-times\"\n                    styleClass=\"p-button-outlined p-button-danger p-button-sm w-full\"\n                  (onClick)=\"cancelReservation(listing.id)\"></p-button>\n                </div>\n              </div>\n            }\n          </div>\n        } @else {\n          <div class=\"empty-state\">\n            <i class=\"pi pi-clock\"></i>\n            <h3>Bekleyen Rezervasyon Yok</h3>\n            <p>Hen\u00FCz rezerve edilmi\u015F bir ilan\u0131n\u0131z bulunmuyor.</p>\n          </div>\n        }\n      </p-tabPanel>\n\n      <!-- TAB 3: TAMAMLANANLAR -->\n      <p-tabPanel header=\"Tamamlananlar ({{ completedListings().length }})\">\n        @if (completedListings().length > 0) {\n          <div class=\"listings-grid\">\n            @for (listing of completedListings(); track listing) {\n              <div class=\"listing-card completed-state\">\n                <div class=\"listing-header\">\n                  <h3 class=\"listing-title\">{{ listing.title }}</h3>\n                  <p-tag [value]=\"getStatusLabel(listing.status)\" [severity]=\"getSeverity(listing.status)\"\n                  [rounded]=\"true\"></p-tag>\n                </div>\n                <p class=\"listing-desc\">{{ listing.description }}</p>\n                @if (listing.deliveryAddress) {\n                  <div class=\"listing-delivery\"\n                    style=\"background: rgba(34, 197, 94, 0.1); padding: 0.75rem; border-radius: var(--kopru-radius-md); margin-bottom: 1.5rem; font-size: 0.85rem; border: 1px dashed #22c55e;\">\n                    <h4\n                      style=\"margin: 0 0 0.25rem 0; color: #166534; display: flex; align-items: center; gap: 0.25rem;\">\n                      <i class=\"pi pi-map-marker\" style=\"font-size: 0.9rem;\"></i> Teslim Edilen Adres</h4>\n                      <p style=\"margin: 0; color: var(--kopru-text-secondary); line-height: 1.4;\">{{\n                      listing.deliveryAddress }}</p>\n                    </div>\n                  }\n                  <div class=\"listing-meta\">\n                    <div class=\"meta-item\"><i class=\"pi pi-calendar-times\"></i><span>{{ listing.expiresAt\n                  }}</span></div>\n                </div>\n              </div>\n            }\n          </div>\n        } @else {\n          <div class=\"empty-state\">\n            <i class=\"pi pi-check-circle\"></i>\n            <h3>Tamamlanan \u0130lan Yok</h3>\n            <p>Daha \u00F6nce ba\u015Far\u0131yla teslim edilmi\u015F ilan\u0131n\u0131z bulunmuyor.</p>\n          </div>\n        }\n      </p-tabPanel>\n    </p-tabView>\n  </div>\n</div>\n</section>", styles: [".dashboard-page {\n    padding-top: 100px;\n    padding-bottom: 4rem;\n    background-color: var(--kopru-bg);\n    min-height: 100vh;\n}\n\n.page-header {\n    text-align: center;\n    margin-bottom: 3rem;\n\n    h1 {\n        font-size: 2.5rem;\n        font-weight: 800;\n        color: var(--kopru-text);\n        margin: 0.5rem 0;\n    }\n\n    p {\n        color: var(--kopru-text-muted);\n        font-size: 1.1rem;\n        max-width: 600px;\n        margin: 0 auto;\n    }\n}\n\n.dashboard-content {\n    background: #fff;\n    border-radius: var(--kopru-radius-xl);\n    border: 1px solid var(--kopru-border);\n    padding: 2rem;\n    box-shadow: var(--kopru-shadow-sm);\n}\n\n:host ::ng-deep .p-tabview .p-tabview-nav li.p-highlight .p-tabview-nav-link {\n    color: var(--kopru-primary);\n    border-color: var(--kopru-primary);\n}\n\n.listings-grid {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n    gap: 1.5rem;\n    margin-top: 1.5rem;\n}\n\n.listing-card {\n    background: var(--kopru-bg);\n    border-radius: var(--kopru-radius-lg);\n    padding: 1.5rem;\n    border: 1px solid var(--kopru-border);\n    transition: all 0.3s ease;\n    display: flex;\n    flex-direction: column;\n\n    &:hover {\n        border-color: var(--kopru-primary);\n        transform: translateY(-2px);\n        box-shadow: var(--kopru-shadow-md);\n    }\n\n    &.reserved-state {\n        background: #fffbf0;\n        border-color: #f59e0b;\n    }\n\n    &.completed-state {\n        background: #f0fdf4;\n        border-color: #22c55e;\n        opacity: 0.8;\n    }\n}\n\n.listing-header {\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-start;\n    margin-bottom: 1rem;\n\n    .listing-title {\n        font-size: 1.1rem;\n        font-weight: 700;\n        color: var(--kopru-text);\n        margin: 0;\n        flex: 1;\n        padding-right: 1rem;\n    }\n}\n\n.listing-desc {\n    color: var(--kopru-text-secondary);\n    font-size: 0.9rem;\n    line-height: 1.5;\n    margin-bottom: 1.5rem;\n    flex-grow: 1;\n}\n\n.listing-meta {\n    display: flex;\n    flex-direction: column;\n    gap: 0.5rem;\n    margin-bottom: 1.5rem;\n}\n\n.meta-item {\n    display: flex;\n    align-items: center;\n    gap: 0.5rem;\n    color: var(--kopru-text-secondary);\n    font-size: 0.85rem;\n\n    i {\n        color: var(--kopru-primary);\n    }\n}\n\n.listing-actions {\n    margin-top: auto;\n}\n\n.empty-state {\n    text-align: center;\n    padding: 4rem 2rem;\n    background: var(--kopru-bg);\n    border-radius: var(--kopru-radius-lg);\n    border: 1px dashed var(--kopru-border);\n    margin-top: 1.5rem;\n\n    i {\n        font-size: 3rem;\n        color: var(--kopru-text-muted);\n        margin-bottom: 1rem;\n    }\n\n    h3 {\n        font-size: 1.25rem;\n        color: var(--kopru-text);\n        margin-bottom: 0.5rem;\n    }\n\n    p {\n        color: var(--kopru-text-secondary);\n    }\n}\n\n.mt-3 {\n    margin-top: 1rem;\n}\n\n.mb-2 {\n    margin-bottom: 0.5rem;\n}\n\n.w-full {\n    width: 100%;\n}"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DashboardComponent, { className: "DashboardComponent" }); })();
//# sourceMappingURL=dashboard.component.js.map