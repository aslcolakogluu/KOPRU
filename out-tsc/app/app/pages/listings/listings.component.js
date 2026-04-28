import { Component, inject, signal, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { FoodListingService } from '../../services/food-listing.service';
import { CartService } from '../../services/cart.service';
import { BUSINESS_TYPE_LABELS, FOOD_CATEGORY_LABELS, BUSINESS_TYPE_ICONS } from '../../models/food-listing.model';
import * as L from 'leaflet';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "primeng/button";
import * as i3 from "primeng/tag";
import * as i4 from "primeng/dropdown";
import * as i5 from "primeng/inputtext";
import * as i6 from "primeng/dialog";
const _c0 = () => ({ width: "500px" });
const _c1 = () => ({ "768px": "95vw" });
const _c2 = () => ({ width: "100%", marginTop: "1.5rem" });
function ListingsComponent_Conditional_31_For_2_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 27)(1, "div", 28)(2, "div", 29);
    i0.ɵɵelement(3, "i");
    i0.ɵɵelementStart(4, "span");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(6, "p-tag", 30);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "h3", 31);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "p", 32);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "div", 33)(12, "div", 34);
    i0.ɵɵelement(13, "i", 35);
    i0.ɵɵelementStart(14, "span");
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(16, "div", 34);
    i0.ɵɵelement(17, "i", 36);
    i0.ɵɵelementStart(18, "span");
    i0.ɵɵtext(19);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(20, "div", 34);
    i0.ɵɵelement(21, "i", 37);
    i0.ɵɵelementStart(22, "span");
    i0.ɵɵtext(23);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(24, "div", 34);
    i0.ɵɵelement(25, "i", 38);
    i0.ɵɵelementStart(26, "span");
    i0.ɵɵtext(27);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(28, "div", 39)(29, "span", 40);
    i0.ɵɵtext(30);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(31, "p-button", 41);
    i0.ɵɵlistener("onClick", function ListingsComponent_Conditional_31_For_2_Template_p_button_onClick_31_listener() { const listing_r2 = i0.ɵɵrestoreView(_r1).$implicit; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.openDetail(listing_r2)); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const listing_r2 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵclassMap(ctx_r2.getBusinessIcon(listing_r2.businessType));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r2.getBusinessLabel(listing_r2.businessType));
    i0.ɵɵadvance();
    i0.ɵɵproperty("value", listing_r2.status === "active" ? "Aktif" : listing_r2.status === "reserved" ? "Rezerve" : "Tamamland\u0131")("severity", listing_r2.status === "active" ? "success" : listing_r2.status === "reserved" ? "warning" : "info")("rounded", true);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(listing_r2.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(listing_r2.description);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(listing_r2.businessName);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(listing_r2.location);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(listing_r2.quantity);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1("SKT: ", listing_r2.expiresAt, "");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r2.getCategoryLabel(listing_r2.category));
    i0.ɵɵadvance();
    i0.ɵɵproperty("rounded", true)("disabled", listing_r2.status !== "active");
} }
function ListingsComponent_Conditional_31_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 21);
    i0.ɵɵrepeaterCreate(1, ListingsComponent_Conditional_31_For_2_Template, 32, 15, "div", 27, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r2.filteredListings());
} }
function ListingsComponent_Conditional_32_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 22);
    i0.ɵɵelement(1, "i", 42);
    i0.ɵɵelementStart(2, "h3");
    i0.ɵɵtext(3, "\u0130lan Bulunamad\u0131");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p");
    i0.ɵɵtext(5, "Filtreleri de\u011Fi\u015Ftirerek tekrar deneyin.");
    i0.ɵɵelementEnd()();
} }
function ListingsComponent_Conditional_36_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 26)(1, "div", 43)(2, "span", 44);
    i0.ɵɵtext(3, "\u0130\u015Fletme");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span", 45);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div", 43)(7, "span", 44);
    i0.ɵɵtext(8, "\u00DCr\u00FCn");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "span", 45);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "div", 43)(12, "span", 44);
    i0.ɵɵtext(13, "A\u00E7\u0131klama");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "span", 45);
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(16, "div", 43)(17, "span", 44);
    i0.ɵɵtext(18, "Miktar");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "span", 45);
    i0.ɵɵtext(20);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(21, "div", 43)(22, "span", 44);
    i0.ɵɵtext(23, "Konum");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "span", 45);
    i0.ɵɵtext(25);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(26, "div", 43)(27, "span", 44);
    i0.ɵɵtext(28, "Son Kullanma");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(29, "span", 45);
    i0.ɵɵtext(30);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(31, "p-button", 46);
    i0.ɵɵlistener("onClick", function ListingsComponent_Conditional_36_Template_p_button_onClick_31_listener() { i0.ɵɵrestoreView(_r4); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.addToCart()); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r2.selectedListing().businessName);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r2.selectedListing().title);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r2.selectedListing().description);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r2.selectedListing().quantity);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r2.selectedListing().location);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r2.selectedListing().expiresAt);
    i0.ɵɵadvance();
    i0.ɵɵstyleMap(i0.ɵɵpureFunction0(10, _c2));
    i0.ɵɵproperty("rounded", true)("disabled", ctx_r2.selectedListing().status !== "active");
} }
export class ListingsComponent {
    listingService = inject(FoodListingService);
    cartService = inject(CartService);
    searchQuery = '';
    selectedBusinessType = null;
    selectedCategory = null;
    detailVisible = false;
    selectedListing = signal(null);
    // Map feature
    viewMode = 'list';
    map;
    markersLayer;
    platformId = inject(PLATFORM_ID);
    allListings = this.listingService.allListings;
    filteredListings = signal([]);
    businessTypeOptions = Object.entries(BUSINESS_TYPE_LABELS).map(([value, label]) => ({ label, value }));
    categoryOptions = Object.entries(FOOD_CATEGORY_LABELS).map(([value, label]) => ({ label, value }));
    constructor() {
        this.filteredListings.set(this.allListings());
    }
    ngOnDestroy() {
        if (this.map) {
            this.map.remove();
            this.map = undefined;
        }
    }
    toggleViewMode(mode) {
        if (this.viewMode === mode)
            return;
        this.viewMode = mode;
        if (mode === 'map' && isPlatformBrowser(this.platformId)) {
            // Small timeout to ensure DOM is ready for the map container
            setTimeout(() => this.initMap(), 50);
        }
    }
    initMap() {
        if (!isPlatformBrowser(this.platformId))
            return;
        if (this.map) {
            this.map.remove();
        }
        // Default center (Istanbul)
        this.map = L.map('listings-map').setView([41.0082, 28.9784], 11);
        L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="https://carto.com/">CARTO</a>'
        }).addTo(this.map);
        this.markersLayer = L.layerGroup().addTo(this.map);
        this.updateMapMarkers();
    }
    updateMapMarkers() {
        if (!this.map || !this.markersLayer)
            return;
        this.markersLayer.clearLayers();
        const icon = L.icon({
            iconUrl: 'assets/marker-icon.png',
            shadowUrl: 'assets/marker-shadow.png',
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
        });
        // Mock coordinates generator based on district names for demo
        const getCoords = (location) => {
            const coords = {
                'Kadikoy, Istanbul': [40.9818, 29.0232],
                'Sisli, Istanbul': [41.0610, 28.9877],
                'Besiktas, Istanbul': [41.0428, 29.0076],
                'Sariyer, Istanbul': [41.1685, 29.0573],
                'Atasehir, Istanbul': [40.9840, 29.1066],
                'Etiler, Istanbul': [41.0825, 29.0340],
                'Beyoglu, Istanbul': [41.0369, 28.9774],
                'Uskudar, Istanbul': [41.0269, 29.0152],
            };
            // fallback
            return coords[location] || [41.0082 + (Math.random() - 0.5) * 0.1, 28.9784 + (Math.random() - 0.5) * 0.1];
        };
        this.filteredListings().forEach(listing => {
            const coords = getCoords(listing.location);
            const marker = L.marker(coords);
            const popupContent = `
        <div class="map-popup">
          <strong style="font-size: 1rem; color: #1e293b;">${listing.businessName}</strong>
          <div style="font-size: 0.85rem; color: #475569; margin: 4px 0 8px;">${listing.title}</div>
          <p style="margin:0; font-size: 0.8rem;">📦 ${listing.quantity}</p>
        </div>
      `;
            marker.bindPopup(popupContent);
            // Keep track of clicking marker to open details if needed or just show popup
            // marker.on('click', () => { /* optional map click handler */ });
            this.markersLayer.addLayer(marker);
        });
    }
    applyFilters() {
        let results = this.allListings();
        if (this.searchQuery) {
            const q = this.searchQuery.toLowerCase();
            results = results.filter(l => l.title.toLowerCase().includes(q) ||
                l.businessName.toLowerCase().includes(q) ||
                l.description.toLowerCase().includes(q) ||
                l.location.toLowerCase().includes(q));
        }
        if (this.selectedBusinessType) {
            results = results.filter(l => l.businessType === this.selectedBusinessType);
        }
        if (this.selectedCategory) {
            results = results.filter(l => l.category === this.selectedCategory);
        }
        this.filteredListings.set(results);
        if (this.viewMode === 'map') {
            this.updateMapMarkers();
        }
    }
    getBusinessLabel(type) { return BUSINESS_TYPE_LABELS[type]; }
    getBusinessIcon(type) { return BUSINESS_TYPE_ICONS[type]; }
    getCategoryLabel(category) { return FOOD_CATEGORY_LABELS[category]; }
    openDetail(listing) {
        this.selectedListing.set(listing);
        this.detailVisible = true;
    }
    addToCart() {
        const listing = this.selectedListing();
        if (listing) {
            this.cartService.addToCart(listing);
            this.detailVisible = false;
        }
    }
    static ɵfac = function ListingsComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ListingsComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ListingsComponent, selectors: [["app-listings"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 37, vars: 24, consts: [[1, "listings-page"], [1, "page-header"], [1, "section-container"], [1, "header-content"], [1, "section-tag"], [1, "gradient-text"], [1, "header-desc"], [1, "header-stats"], [1, "mini-stat"], [1, "mini-stat-num"], [1, "mini-stat-label"], [1, "filters-bar"], [1, "filter-group"], [1, "p-input-icon-left"], [1, "pi", "pi-search"], ["type", "text", "pInputText", "", "placeholder", "\u0130lan ara...", 1, "search-input", 3, "ngModelChange", "ngModel"], ["placeholder", "\u0130\u015Fletme T\u00FCr\u00FC", "styleClass", "filter-dropdown", 3, "ngModelChange", "options", "ngModel", "showClear"], ["placeholder", "Kategori", "styleClass", "filter-dropdown", 3, "ngModelChange", "options", "ngModel", "showClear"], [1, "view-toggle"], ["icon", "pi pi-list", "pTooltip", "Liste G\u00F6r\u00FCn\u00FCm\u00FC", "tooltipPosition", "top", 3, "onClick", "rounded", "text"], ["icon", "pi pi-map", "pTooltip", "Harita G\u00F6r\u00FCn\u00FCm\u00FC", "tooltipPosition", "top", 3, "onClick", "rounded", "text"], [1, "listings-grid"], [1, "empty-state"], [1, "map-view-container"], ["id", "listings-map", 1, "listings-map"], ["header", "\u0130lan Detay\u0131", 3, "visibleChange", "visible", "modal", "breakpoints"], [1, "detail-content"], [1, "listing-card"], [1, "listing-header"], [1, "listing-type-badge"], [3, "value", "severity", "rounded"], [1, "listing-title"], [1, "listing-desc"], [1, "listing-meta"], [1, "meta-item"], [1, "pi", "pi-building"], [1, "pi", "pi-map-marker"], [1, "pi", "pi-box"], [1, "pi", "pi-clock"], [1, "listing-footer"], [1, "listing-category"], ["label", "\u0130ncele & Ekle", "icon", "pi pi-search", "styleClass", "p-button-sm listing-action-btn", 3, "onClick", "rounded", "disabled"], [1, "pi", "pi-inbox"], [1, "detail-row"], [1, "detail-label"], [1, "detail-value"], ["label", "Sepete Ekle", "icon", "pi pi-shopping-cart", "styleClass", "detail-action-btn", 3, "onClick", "rounded", "disabled"]], template: function ListingsComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div")(5, "span", 4);
            i0.ɵɵtext(6, "Aktif \u0130lanlar");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "h1");
            i0.ɵɵtext(8, "G\u0131da ");
            i0.ɵɵelementStart(9, "span", 5);
            i0.ɵɵtext(10, "\u0130lanlar\u0131");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(11, "p", 6);
            i0.ɵɵtext(12, "\u0130\u015Fletmelerden kalan g\u0131da \u00FCr\u00FCnlerini inceleyin ve ihtiyac\u0131n\u0131z olan ilanlar\u0131 talep edin.");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(13, "div", 7)(14, "div", 8)(15, "span", 9);
            i0.ɵɵtext(16);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(17, "span", 10);
            i0.ɵɵtext(18, "\u0130lan");
            i0.ɵɵelementEnd()()()()()();
            i0.ɵɵelementStart(19, "div", 2)(20, "div", 11)(21, "div", 12)(22, "span", 13);
            i0.ɵɵelement(23, "i", 14);
            i0.ɵɵelementStart(24, "input", 15);
            i0.ɵɵtwoWayListener("ngModelChange", function ListingsComponent_Template_input_ngModelChange_24_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.searchQuery, $event) || (ctx.searchQuery = $event); return $event; });
            i0.ɵɵlistener("ngModelChange", function ListingsComponent_Template_input_ngModelChange_24_listener() { return ctx.applyFilters(); });
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(25, "div", 12)(26, "p-dropdown", 16);
            i0.ɵɵtwoWayListener("ngModelChange", function ListingsComponent_Template_p_dropdown_ngModelChange_26_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.selectedBusinessType, $event) || (ctx.selectedBusinessType = $event); return $event; });
            i0.ɵɵlistener("ngModelChange", function ListingsComponent_Template_p_dropdown_ngModelChange_26_listener() { return ctx.applyFilters(); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(27, "p-dropdown", 17);
            i0.ɵɵtwoWayListener("ngModelChange", function ListingsComponent_Template_p_dropdown_ngModelChange_27_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.selectedCategory, $event) || (ctx.selectedCategory = $event); return $event; });
            i0.ɵɵlistener("ngModelChange", function ListingsComponent_Template_p_dropdown_ngModelChange_27_listener() { return ctx.applyFilters(); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(28, "div", 18)(29, "p-button", 19);
            i0.ɵɵlistener("onClick", function ListingsComponent_Template_p_button_onClick_29_listener() { return ctx.toggleViewMode("list"); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(30, "p-button", 20);
            i0.ɵɵlistener("onClick", function ListingsComponent_Template_p_button_onClick_30_listener() { return ctx.toggleViewMode("map"); });
            i0.ɵɵelementEnd()()();
            i0.ɵɵtemplate(31, ListingsComponent_Conditional_31_Template, 3, 0, "div", 21)(32, ListingsComponent_Conditional_32_Template, 6, 0, "div", 22);
            i0.ɵɵelementStart(33, "div", 23);
            i0.ɵɵelement(34, "div", 24);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(35, "p-dialog", 25);
            i0.ɵɵtwoWayListener("visibleChange", function ListingsComponent_Template_p_dialog_visibleChange_35_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.detailVisible, $event) || (ctx.detailVisible = $event); return $event; });
            i0.ɵɵtemplate(36, ListingsComponent_Conditional_36_Template, 32, 11, "div", 26);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(16);
            i0.ɵɵtextInterpolate(ctx.filteredListings().length);
            i0.ɵɵadvance(8);
            i0.ɵɵtwoWayProperty("ngModel", ctx.searchQuery);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("options", ctx.businessTypeOptions);
            i0.ɵɵtwoWayProperty("ngModel", ctx.selectedBusinessType);
            i0.ɵɵproperty("showClear", true);
            i0.ɵɵadvance();
            i0.ɵɵproperty("options", ctx.categoryOptions);
            i0.ɵɵtwoWayProperty("ngModel", ctx.selectedCategory);
            i0.ɵɵproperty("showClear", true);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("rounded", true)("text", ctx.viewMode === "map");
            i0.ɵɵadvance();
            i0.ɵɵproperty("rounded", true)("text", ctx.viewMode === "list");
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.filteredListings().length > 0 && ctx.viewMode === "list" ? 31 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.filteredListings().length === 0 ? 32 : -1);
            i0.ɵɵadvance();
            i0.ɵɵclassProp("d-none", ctx.viewMode !== "map");
            i0.ɵɵadvance(2);
            i0.ɵɵstyleMap(i0.ɵɵpureFunction0(22, _c0));
            i0.ɵɵtwoWayProperty("visible", ctx.detailVisible);
            i0.ɵɵproperty("modal", true)("breakpoints", i0.ɵɵpureFunction0(23, _c1));
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.selectedListing() ? 36 : -1);
        } }, dependencies: [FormsModule, i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgModel, ButtonModule, i2.Button, TagModule, i3.Tag, DropdownModule, i4.Dropdown, InputTextModule, i5.InputText, DialogModule, i6.Dialog], styles: [".listings-page[_ngcontent-%COMP%] {\n    padding-top: 80px;\n    min-height: 100vh;\n    background: var(--kopru-bg);\n}\n\n.page-header[_ngcontent-%COMP%] {\n    padding: 3rem 0;\n    background: linear-gradient(180deg, var(--kopru-primary-50) 0%, var(--kopru-bg) 100%);\n    border-bottom: 1px solid var(--kopru-border-light);\n}\n\n.header-content[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-end;\n\n    h1 {\n        font-size: 2.5rem;\n        font-weight: 800;\n        margin-bottom: 0.5rem;\n    }\n\n    .header-desc {\n        color: var(--kopru-text-muted);\n        font-size: 1rem;\n        max-width: 500px;\n    }\n}\n\n.mini-stat[_ngcontent-%COMP%] {\n    text-align: center;\n    background: #fff;\n    border: 1px solid var(--kopru-border);\n    border-radius: 16px;\n    padding: 1.5rem 2rem;\n    box-shadow: var(--kopru-shadow-sm);\n\n    .mini-stat-num {\n        display: block;\n        font-size: 2.5rem;\n        font-weight: 800;\n        color: var(--kopru-primary);\n    }\n\n    .mini-stat-label {\n        color: var(--kopru-text-muted);\n        font-size: 0.8rem;\n        font-weight: 600;\n        text-transform: uppercase;\n        letter-spacing: 1px;\n    }\n}\n\n.filters-bar[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    gap: 1rem;\n    padding: 2rem 0;\n    flex-wrap: wrap;\n}\n\n.filter-group[_ngcontent-%COMP%] {\n    display: flex;\n    gap: 0.75rem;\n    align-items: center;\n}\n\n.search-input[_ngcontent-%COMP%] {\n    width: 320px;\n    padding-left: 2.5rem !important;\n}\n\n[_nghost-%COMP%]     .filter-dropdown {\n    min-width: 180px;\n}\n\n.view-toggle[_ngcontent-%COMP%] {\n    display: flex;\n    gap: 0.5rem;\n}\n\n\n\n.map-view-container[_ngcontent-%COMP%] {\n    height: 600px;\n    border-radius: var(--kopru-radius-xl);\n    overflow: hidden;\n    border: 1px solid var(--kopru-border);\n    box-shadow: var(--kopru-shadow-md);\n    margin-bottom: 4rem;\n    position: relative;\n    z-index: 1;\n    \n\n}\n\n.listings-map[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n}\n\n.d-none[_ngcontent-%COMP%] {\n    display: none !important;\n}\n\n.listings-grid[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    gap: 1.5rem;\n    padding-bottom: 4rem;\n}\n\n.listing-card[_ngcontent-%COMP%] {\n    background: #fff;\n    border: 1px solid var(--kopru-border);\n    border-radius: 20px;\n    padding: 1.75rem;\n    transition: all 0.3s ease;\n    display: flex;\n    flex-direction: column;\n    gap: 0.85rem;\n    box-shadow: var(--kopru-shadow-sm);\n\n    &:hover {\n        border-color: var(--kopru-primary-100);\n        transform: translateY(-4px);\n        box-shadow: var(--kopru-shadow-lg);\n    }\n}\n\n.listing-header[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.listing-type-badge[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    gap: 0.5rem;\n    background: var(--kopru-primary-50);\n    padding: 0.35rem 0.75rem;\n    border-radius: 8px;\n\n    i {\n        color: var(--kopru-primary);\n        font-size: 0.8rem;\n    }\n\n    span {\n        color: var(--kopru-primary);\n        font-size: 0.75rem;\n        font-weight: 600;\n    }\n}\n\n.listing-title[_ngcontent-%COMP%] {\n    font-size: 1rem;\n    font-weight: 700;\n    color: var(--kopru-text);\n    line-height: 1.3;\n}\n\n.listing-desc[_ngcontent-%COMP%] {\n    color: var(--kopru-text-muted);\n    font-size: 0.85rem;\n    line-height: 1.6;\n    flex: 1;\n}\n\n.listing-meta[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 0.4rem;\n}\n\n.meta-item[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    gap: 0.4rem;\n\n    i {\n        color: var(--kopru-text-muted);\n        font-size: 0.75rem;\n    }\n\n    span {\n        color: var(--kopru-text-secondary);\n        font-size: 0.75rem;\n    }\n}\n\n.listing-footer[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding-top: 0.5rem;\n    border-top: 1px solid var(--kopru-border-light);\n}\n\n.listing-category[_ngcontent-%COMP%] {\n    font-size: 0.75rem;\n    color: var(--kopru-text-muted);\n    font-weight: 500;\n}\n\n[_nghost-%COMP%]     .listing-action-btn {\n    background: var(--kopru-primary) !important;\n    border: none !important;\n}\n\n.empty-state[_ngcontent-%COMP%] {\n    text-align: center;\n    padding: 6rem 2rem;\n    color: var(--kopru-text-muted);\n\n    i {\n        font-size: 3rem;\n        margin-bottom: 1rem;\n        display: block;\n    }\n\n    h3 {\n        color: var(--kopru-text-secondary);\n        margin-bottom: 0.5rem;\n    }\n\n    p {\n        font-size: 0.9rem;\n    }\n}\n\n.detail-content[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n}\n\n.detail-row[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    gap: 0.25rem;\n}\n\n.detail-label[_ngcontent-%COMP%] {\n    font-size: 0.75rem;\n    color: var(--kopru-text-muted);\n    text-transform: uppercase;\n    letter-spacing: 0.5px;\n    font-weight: 600;\n}\n\n.detail-value[_ngcontent-%COMP%] {\n    color: var(--kopru-text);\n    font-size: 0.95rem;\n}\n\n[_nghost-%COMP%]     .detail-action-btn {\n    background: var(--kopru-primary) !important;\n    border: none !important;\n}\n\n@media (max-width: 1024px) {\n    .listings-grid[_ngcontent-%COMP%] {\n        grid-template-columns: repeat(2, 1fr);\n    }\n}\n\n@media (max-width: 768px) {\n    .header-content[_ngcontent-%COMP%] {\n        flex-direction: column;\n        align-items: flex-start;\n        gap: 1.5rem;\n\n        h1 {\n            font-size: 2rem;\n        }\n    }\n\n    .filters-bar[_ngcontent-%COMP%] {\n        flex-direction: column;\n        align-items: stretch;\n    }\n\n    .search-input[_ngcontent-%COMP%] {\n        width: 100%;\n    }\n\n    .listings-grid[_ngcontent-%COMP%] {\n        grid-template-columns: 1fr;\n    }\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ListingsComponent, [{
        type: Component,
        args: [{ selector: 'app-listings', standalone: true, imports: [
                    FormsModule,
                    ButtonModule,
                    TagModule,
                    DropdownModule,
                    InputTextModule,
                    DialogModule
                ], template: "<section class=\"listings-page\">\n  <div class=\"page-header\">\n    <div class=\"section-container\">\n      <div class=\"header-content\">\n        <div>\n          <span class=\"section-tag\">Aktif \u0130lanlar</span>\n          <h1>G\u0131da <span class=\"gradient-text\">\u0130lanlar\u0131</span></h1>\n          <p class=\"header-desc\">\u0130\u015Fletmelerden kalan g\u0131da \u00FCr\u00FCnlerini inceleyin ve ihtiyac\u0131n\u0131z olan ilanlar\u0131\n          talep edin.</p>\n        </div>\n        <div class=\"header-stats\">\n          <div class=\"mini-stat\">\n            <span class=\"mini-stat-num\">{{ filteredListings().length }}</span>\n            <span class=\"mini-stat-label\">\u0130lan</span>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"section-container\">\n    <div class=\"filters-bar\">\n      <div class=\"filter-group\">\n        <span class=\"p-input-icon-left\">\n          <i class=\"pi pi-search\"></i>\n          <input type=\"text\" pInputText placeholder=\"\u0130lan ara...\" [(ngModel)]=\"searchQuery\"\n            (ngModelChange)=\"applyFilters()\" class=\"search-input\" />\n        </span>\n      </div>\n      <div class=\"filter-group\">\n        <p-dropdown [options]=\"businessTypeOptions\" [(ngModel)]=\"selectedBusinessType\"\n          (ngModelChange)=\"applyFilters()\" placeholder=\"\u0130\u015Fletme T\u00FCr\u00FC\" [showClear]=\"true\"\n        styleClass=\"filter-dropdown\"></p-dropdown>\n        <p-dropdown [options]=\"categoryOptions\" [(ngModel)]=\"selectedCategory\" (ngModelChange)=\"applyFilters()\"\n        placeholder=\"Kategori\" [showClear]=\"true\" styleClass=\"filter-dropdown\"></p-dropdown>\n      </div>\n\n      <div class=\"view-toggle\">\n        <p-button icon=\"pi pi-list\" [rounded]=\"true\" [text]=\"viewMode === 'map'\"\n        (onClick)=\"toggleViewMode('list')\" pTooltip=\"Liste G\u00F6r\u00FCn\u00FCm\u00FC\" tooltipPosition=\"top\"></p-button>\n        <p-button icon=\"pi pi-map\" [rounded]=\"true\" [text]=\"viewMode === 'list'\"\n        (onClick)=\"toggleViewMode('map')\" pTooltip=\"Harita G\u00F6r\u00FCn\u00FCm\u00FC\" tooltipPosition=\"top\"></p-button>\n      </div>\n    </div>\n\n    <!-- LIST VIEW -->\n    @if (filteredListings().length > 0 && viewMode === 'list') {\n      <div class=\"listings-grid\">\n        @for (listing of filteredListings(); track listing) {\n          <div class=\"listing-card\">\n            <div class=\"listing-header\">\n              <div class=\"listing-type-badge\">\n                <i [class]=\"getBusinessIcon(listing.businessType)\"></i>\n                <span>{{ getBusinessLabel(listing.businessType) }}</span>\n              </div>\n              <p-tag\n                [value]=\"listing.status === 'active' ? 'Aktif' : listing.status === 'reserved' ? 'Rezerve' : 'Tamamland\u0131'\"\n                [severity]=\"listing.status === 'active' ? 'success' : listing.status === 'reserved' ? 'warning' : 'info'\"\n              [rounded]=\"true\"></p-tag>\n            </div>\n            <h3 class=\"listing-title\">{{ listing.title }}</h3>\n            <p class=\"listing-desc\">{{ listing.description }}</p>\n            <div class=\"listing-meta\">\n              <div class=\"meta-item\"><i class=\"pi pi-building\"></i><span>{{ listing.businessName }}</span></div>\n              <div class=\"meta-item\"><i class=\"pi pi-map-marker\"></i><span>{{ listing.location }}</span></div>\n              <div class=\"meta-item\"><i class=\"pi pi-box\"></i><span>{{ listing.quantity }}</span></div>\n              <div class=\"meta-item\"><i class=\"pi pi-clock\"></i><span>SKT: {{ listing.expiresAt }}</span></div>\n            </div>\n            <div class=\"listing-footer\">\n              <span class=\"listing-category\">{{ getCategoryLabel(listing.category) }}</span>\n              <p-button label=\"\u0130ncele & Ekle\" icon=\"pi pi-search\" [rounded]=\"true\"\n                [disabled]=\"listing.status !== 'active'\" (onClick)=\"openDetail(listing)\"\n              styleClass=\"p-button-sm listing-action-btn\"></p-button>\n            </div>\n          </div>\n        }\n      </div>\n    }\n\n    @if (filteredListings().length === 0) {\n      <div class=\"empty-state\">\n        <i class=\"pi pi-inbox\"></i>\n        <h3>\u0130lan Bulunamad\u0131</h3>\n        <p>Filtreleri de\u011Fi\u015Ftirerek tekrar deneyin.</p>\n      </div>\n    }\n\n    <!-- MAP VIEW -->\n    <div class=\"map-view-container\" [class.d-none]=\"viewMode !== 'map'\">\n      <div id=\"listings-map\" class=\"listings-map\"></div>\n    </div>\n  </div>\n\n  <p-dialog header=\"\u0130lan Detay\u0131\" [(visible)]=\"detailVisible\" [modal]=\"true\" [style]=\"{ width: '500px' }\"\n    [breakpoints]=\"{ '768px': '95vw' }\">\n    @if (selectedListing()) {\n      <div class=\"detail-content\">\n        <div class=\"detail-row\"><span class=\"detail-label\">\u0130\u015Fletme</span><span class=\"detail-value\">{{\n      selectedListing()!.businessName }}</span></div>\n      <div class=\"detail-row\"><span class=\"detail-label\">\u00DCr\u00FCn</span><span class=\"detail-value\">{{\n    selectedListing()!.title }}</span></div>\n    <div class=\"detail-row\"><span class=\"detail-label\">A\u00E7\u0131klama</span><span class=\"detail-value\">{{\n  selectedListing()!.description }}</span></div>\n  <div class=\"detail-row\"><span class=\"detail-label\">Miktar</span><span class=\"detail-value\">{{\nselectedListing()!.quantity }}</span></div>\n<div class=\"detail-row\"><span class=\"detail-label\">Konum</span><span class=\"detail-value\">{{\nselectedListing()!.location }}</span></div>\n<div class=\"detail-row\"><span class=\"detail-label\">Son Kullanma</span><span class=\"detail-value\">{{\nselectedListing()!.expiresAt }}</span></div>\n<p-button label=\"Sepete Ekle\" icon=\"pi pi-shopping-cart\" [rounded]=\"true\"\n  [disabled]=\"selectedListing()!.status !== 'active'\" (onClick)=\"addToCart()\"\nstyleClass=\"detail-action-btn\" [style]=\"{ width: '100%', marginTop: '1.5rem' }\"></p-button>\n</div>\n}\n</p-dialog>\n</section>", styles: [".listings-page {\n    padding-top: 80px;\n    min-height: 100vh;\n    background: var(--kopru-bg);\n}\n\n.page-header {\n    padding: 3rem 0;\n    background: linear-gradient(180deg, var(--kopru-primary-50) 0%, var(--kopru-bg) 100%);\n    border-bottom: 1px solid var(--kopru-border-light);\n}\n\n.header-content {\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-end;\n\n    h1 {\n        font-size: 2.5rem;\n        font-weight: 800;\n        margin-bottom: 0.5rem;\n    }\n\n    .header-desc {\n        color: var(--kopru-text-muted);\n        font-size: 1rem;\n        max-width: 500px;\n    }\n}\n\n.mini-stat {\n    text-align: center;\n    background: #fff;\n    border: 1px solid var(--kopru-border);\n    border-radius: 16px;\n    padding: 1.5rem 2rem;\n    box-shadow: var(--kopru-shadow-sm);\n\n    .mini-stat-num {\n        display: block;\n        font-size: 2.5rem;\n        font-weight: 800;\n        color: var(--kopru-primary);\n    }\n\n    .mini-stat-label {\n        color: var(--kopru-text-muted);\n        font-size: 0.8rem;\n        font-weight: 600;\n        text-transform: uppercase;\n        letter-spacing: 1px;\n    }\n}\n\n.filters-bar {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    gap: 1rem;\n    padding: 2rem 0;\n    flex-wrap: wrap;\n}\n\n.filter-group {\n    display: flex;\n    gap: 0.75rem;\n    align-items: center;\n}\n\n.search-input {\n    width: 320px;\n    padding-left: 2.5rem !important;\n}\n\n:host ::ng-deep .filter-dropdown {\n    min-width: 180px;\n}\n\n.view-toggle {\n    display: flex;\n    gap: 0.5rem;\n}\n\n/* Map View */\n.map-view-container {\n    height: 600px;\n    border-radius: var(--kopru-radius-xl);\n    overflow: hidden;\n    border: 1px solid var(--kopru-border);\n    box-shadow: var(--kopru-shadow-md);\n    margin-bottom: 4rem;\n    position: relative;\n    z-index: 1;\n    /* Keep map below navbar */\n}\n\n.listings-map {\n    width: 100%;\n    height: 100%;\n}\n\n.d-none {\n    display: none !important;\n}\n\n.listings-grid {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    gap: 1.5rem;\n    padding-bottom: 4rem;\n}\n\n.listing-card {\n    background: #fff;\n    border: 1px solid var(--kopru-border);\n    border-radius: 20px;\n    padding: 1.75rem;\n    transition: all 0.3s ease;\n    display: flex;\n    flex-direction: column;\n    gap: 0.85rem;\n    box-shadow: var(--kopru-shadow-sm);\n\n    &:hover {\n        border-color: var(--kopru-primary-100);\n        transform: translateY(-4px);\n        box-shadow: var(--kopru-shadow-lg);\n    }\n}\n\n.listing-header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.listing-type-badge {\n    display: flex;\n    align-items: center;\n    gap: 0.5rem;\n    background: var(--kopru-primary-50);\n    padding: 0.35rem 0.75rem;\n    border-radius: 8px;\n\n    i {\n        color: var(--kopru-primary);\n        font-size: 0.8rem;\n    }\n\n    span {\n        color: var(--kopru-primary);\n        font-size: 0.75rem;\n        font-weight: 600;\n    }\n}\n\n.listing-title {\n    font-size: 1rem;\n    font-weight: 700;\n    color: var(--kopru-text);\n    line-height: 1.3;\n}\n\n.listing-desc {\n    color: var(--kopru-text-muted);\n    font-size: 0.85rem;\n    line-height: 1.6;\n    flex: 1;\n}\n\n.listing-meta {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 0.4rem;\n}\n\n.meta-item {\n    display: flex;\n    align-items: center;\n    gap: 0.4rem;\n\n    i {\n        color: var(--kopru-text-muted);\n        font-size: 0.75rem;\n    }\n\n    span {\n        color: var(--kopru-text-secondary);\n        font-size: 0.75rem;\n    }\n}\n\n.listing-footer {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding-top: 0.5rem;\n    border-top: 1px solid var(--kopru-border-light);\n}\n\n.listing-category {\n    font-size: 0.75rem;\n    color: var(--kopru-text-muted);\n    font-weight: 500;\n}\n\n:host ::ng-deep .listing-action-btn {\n    background: var(--kopru-primary) !important;\n    border: none !important;\n}\n\n.empty-state {\n    text-align: center;\n    padding: 6rem 2rem;\n    color: var(--kopru-text-muted);\n\n    i {\n        font-size: 3rem;\n        margin-bottom: 1rem;\n        display: block;\n    }\n\n    h3 {\n        color: var(--kopru-text-secondary);\n        margin-bottom: 0.5rem;\n    }\n\n    p {\n        font-size: 0.9rem;\n    }\n}\n\n.detail-content {\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n}\n\n.detail-row {\n    display: flex;\n    flex-direction: column;\n    gap: 0.25rem;\n}\n\n.detail-label {\n    font-size: 0.75rem;\n    color: var(--kopru-text-muted);\n    text-transform: uppercase;\n    letter-spacing: 0.5px;\n    font-weight: 600;\n}\n\n.detail-value {\n    color: var(--kopru-text);\n    font-size: 0.95rem;\n}\n\n:host ::ng-deep .detail-action-btn {\n    background: var(--kopru-primary) !important;\n    border: none !important;\n}\n\n@media (max-width: 1024px) {\n    .listings-grid {\n        grid-template-columns: repeat(2, 1fr);\n    }\n}\n\n@media (max-width: 768px) {\n    .header-content {\n        flex-direction: column;\n        align-items: flex-start;\n        gap: 1.5rem;\n\n        h1 {\n            font-size: 2rem;\n        }\n    }\n\n    .filters-bar {\n        flex-direction: column;\n        align-items: stretch;\n    }\n\n    .search-input {\n        width: 100%;\n    }\n\n    .listings-grid {\n        grid-template-columns: 1fr;\n    }\n}"] }]
    }], () => [], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ListingsComponent, { className: "ListingsComponent" }); })();
//# sourceMappingURL=listings.component.js.map