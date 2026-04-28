import { Component, inject, signal, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CalendarModule } from 'primeng/calendar';
import { FoodListingService } from '../../services/food-listing.service';
import { BUSINESS_TYPE_LABELS, FOOD_CATEGORY_LABELS } from '../../models/food-listing.model';
import * as L from 'leaflet';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/router";
import * as i3 from "primeng/button";
import * as i4 from "primeng/inputtext";
import * as i5 from "primeng/dropdown";
import * as i6 from "primeng/inputtextarea";
import * as i7 from "primeng/calendar";
function CreateListingComponent_Conditional_11_Conditional_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 23);
    i0.ɵɵelement(1, "i", 34);
    i0.ɵɵtext(2, " Konumu i\u015Faretlemek i\u00E7in haritaya t\u0131klay\u0131n. ");
    i0.ɵɵelementEnd();
} }
function CreateListingComponent_Conditional_11_Conditional_26_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 24);
    i0.ɵɵelement(1, "i", 35);
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3, "Se\u00E7ilen Konum: ");
    i0.ɵɵelementStart(4, "strong");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r1.form.location);
} }
function CreateListingComponent_Conditional_11_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 5)(1, "div", 7)(2, "div", 8)(3, "h2", 9);
    i0.ɵɵelement(4, "i", 10);
    i0.ɵɵtext(5, " \u0130\u015Fletme Bilgileri ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 11)(7, "div", 12)(8, "label");
    i0.ɵɵtext(9, "\u0130\u015Fletme Ad\u0131 *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "input", 13);
    i0.ɵɵtwoWayListener("ngModelChange", function CreateListingComponent_Conditional_11_Template_input_ngModelChange_10_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.form.businessName, $event) || (ctx_r1.form.businessName = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "div", 12)(12, "label");
    i0.ɵɵtext(13, "\u0130\u015Fletme T\u00FCr\u00FC *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "p-dropdown", 14);
    i0.ɵɵtwoWayListener("ngModelChange", function CreateListingComponent_Conditional_11_Template_p_dropdown_ngModelChange_14_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.form.businessType, $event) || (ctx_r1.form.businessType = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(15, "div", 15)(16, "label");
    i0.ɵɵtext(17, "Konum (Haritadan Se\u00E7in)");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "div", 16)(19, "span", 17);
    i0.ɵɵelement(20, "i", 18);
    i0.ɵɵelementStart(21, "input", 19);
    i0.ɵɵtwoWayListener("ngModelChange", function CreateListingComponent_Conditional_11_Template_input_ngModelChange_21_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.searchAddressText, $event) || (ctx_r1.searchAddressText = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("keydown.enter", function CreateListingComponent_Conditional_11_Template_input_keydown_enter_21_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); ctx_r1.searchMapAction(); return i0.ɵɵresetView($event.preventDefault()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(22, "p-button", 20);
    i0.ɵɵlistener("onClick", function CreateListingComponent_Conditional_11_Template_p_button_onClick_22_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.searchMapAction()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(23, "div", 21);
    i0.ɵɵelement(24, "div", 22);
    i0.ɵɵtemplate(25, CreateListingComponent_Conditional_11_Conditional_25_Template, 3, 0, "div", 23);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(26, CreateListingComponent_Conditional_11_Conditional_26_Template, 6, 1, "div", 24);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelement(27, "div", 25);
    i0.ɵɵelementStart(28, "div", 8)(29, "h2", 9);
    i0.ɵɵelement(30, "i", 26);
    i0.ɵɵtext(31, " \u00DCr\u00FCn Bilgileri ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(32, "div", 11)(33, "div", 15)(34, "label");
    i0.ɵɵtext(35, "\u0130lan Ba\u015Fl\u0131\u011F\u0131 *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(36, "input", 27);
    i0.ɵɵtwoWayListener("ngModelChange", function CreateListingComponent_Conditional_11_Template_input_ngModelChange_36_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.form.title, $event) || (ctx_r1.form.title = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(37, "div", 15)(38, "label");
    i0.ɵɵtext(39, "A\u00E7\u0131klama");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(40, "textarea", 28);
    i0.ɵɵtwoWayListener("ngModelChange", function CreateListingComponent_Conditional_11_Template_textarea_ngModelChange_40_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.form.description, $event) || (ctx_r1.form.description = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(41, "div", 12)(42, "label");
    i0.ɵɵtext(43, "Kategori *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(44, "p-dropdown", 29);
    i0.ɵɵtwoWayListener("ngModelChange", function CreateListingComponent_Conditional_11_Template_p_dropdown_ngModelChange_44_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.form.category, $event) || (ctx_r1.form.category = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(45, "div", 12)(46, "label");
    i0.ɵɵtext(47, "Miktar");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(48, "input", 30);
    i0.ɵɵtwoWayListener("ngModelChange", function CreateListingComponent_Conditional_11_Template_input_ngModelChange_48_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.form.quantity, $event) || (ctx_r1.form.quantity = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(49, "div", 15)(50, "label");
    i0.ɵɵtext(51, "Son Kullanma Tarihi");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(52, "p-calendar", 31);
    i0.ɵɵtwoWayListener("ngModelChange", function CreateListingComponent_Conditional_11_Template_p_calendar_ngModelChange_52_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.form.expiresAt, $event) || (ctx_r1.form.expiresAt = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(53, "div", 32)(54, "p-button", 33);
    i0.ɵɵlistener("onClick", function CreateListingComponent_Conditional_11_Template_p_button_onClick_54_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.submitForm()); });
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(10);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.form.businessName);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("options", ctx_r1.businessTypeOptions);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.form.businessType);
    i0.ɵɵadvance(7);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.searchAddressText);
    i0.ɵɵadvance();
    i0.ɵɵproperty("loading", ctx_r1.isSearchingMap);
    i0.ɵɵadvance(3);
    i0.ɵɵconditional(!ctx_r1.form.lat ? 25 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.form.location ? 26 : -1);
    i0.ɵɵadvance(10);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.form.title);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.form.description);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("options", ctx_r1.categoryOptions);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.form.category);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.form.quantity);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.form.expiresAt);
    i0.ɵɵproperty("showIcon", true);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("rounded", true);
} }
function CreateListingComponent_Conditional_12_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 6)(1, "div", 36)(2, "div", 37);
    i0.ɵɵelement(3, "i", 38);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "h2");
    i0.ɵɵtext(5, "\u0130lan\u0131n\u0131z Olu\u015Fturuldu!");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p");
    i0.ɵɵtext(7, "\u0130lan\u0131n\u0131z ba\u015Far\u0131yla yay\u0131nland\u0131. \u0130htiya\u00E7 sahibi kurumlar en k\u0131sa s\u00FCrede talebini iletecektir.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "div", 39)(9, "p-button", 40);
    i0.ɵɵlistener("onClick", function CreateListingComponent_Conditional_12_Template_p_button_onClick_9_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.resetForm()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelement(10, "p-button", 41);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    i0.ɵɵadvance(9);
    i0.ɵɵproperty("rounded", true);
    i0.ɵɵadvance();
    i0.ɵɵproperty("rounded", true)("outlined", true);
} }
export class CreateListingComponent {
    listingService = inject(FoodListingService);
    http = inject(HttpClient);
    platformId = inject(PLATFORM_ID);
    submitted = signal(false);
    businessTypeOptions = Object.entries(BUSINESS_TYPE_LABELS).map(([value, label]) => ({ label, value }));
    categoryOptions = Object.entries(FOOD_CATEGORY_LABELS).map(([value, label]) => ({ label, value }));
    form = {
        title: '',
        description: '',
        businessType: null,
        businessName: '',
        category: null,
        quantity: '',
        location: '',
        expiresAt: null,
        lat: null,
        lng: null
    };
    map;
    marker;
    searchAddressText = '';
    isSearchingMap = false;
    ngOnInit() { }
    ngAfterViewInit() {
        if (isPlatformBrowser(this.platformId)) {
            setTimeout(() => this.initMap(), 100);
        }
    }
    ngOnDestroy() {
        if (this.map) {
            this.map.remove();
        }
    }
    initMap() {
        if (!isPlatformBrowser(this.platformId))
            return;
        // Default center (Istanbul)
        const initialLat = 41.0082;
        const initialLng = 28.9784;
        this.map = L.map('create-listing-map').setView([initialLat, initialLng], 11);
        L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="https://carto.com/">CARTO</a>'
        }).addTo(this.map);
        // Handle map clicks
        this.map.on('click', (e) => {
            this.setMarker(e.latlng.lat, e.latlng.lng);
            this.reverseGeocode(e.latlng.lat, e.latlng.lng);
        });
    }
    setMarker(lat, lng) {
        if (!this.map)
            return;
        const icon = L.icon({
            iconUrl: 'assets/marker-icon.png',
            shadowUrl: 'assets/marker-shadow.png',
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
        });
        if (this.marker) {
            this.marker.setLatLng([lat, lng]);
        }
        else {
            this.marker = L.marker([lat, lng], { icon }).addTo(this.map);
        }
        this.form.lat = lat;
        this.form.lng = lng;
    }
    // Reverse Geocoding: Lat/Lng -> Address using Nominatim
    reverseGeocode(lat, lng) {
        const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}`;
        this.http.get(url).subscribe({
            next: (res) => {
                if (res && res.display_name) {
                    // Simplify address for UX (e.g., take first couple of parts)
                    const parts = res.display_name.split(', ');
                    const shortAddress = parts.slice(0, 3).join(', ');
                    this.form.location = shortAddress;
                    this.searchAddressText = shortAddress;
                }
            },
            error: (err) => console.error('Geocoding error:', err)
        });
    }
    // Forward Geocoding: Address -> Lat/Lng
    searchMapAction() {
        if (!this.searchAddressText.trim() || !this.map)
            return;
        this.isSearchingMap = true;
        const url = `https://nominatim.openstreetmap.org/search?format=jsonv2&q=${encodeURIComponent(this.searchAddressText)}`;
        this.http.get(url).subscribe({
            next: (res) => {
                if (res && res.length > 0) {
                    const firstResult = res[0];
                    const lat = parseFloat(firstResult.lat);
                    const lng = parseFloat(firstResult.lon);
                    this.map.setView([lat, lng], 15);
                    this.setMarker(lat, lng);
                    this.form.location = firstResult.display_name.split(', ').slice(0, 3).join(', ');
                }
                this.isSearchingMap = false;
            },
            error: (err) => {
                console.error('Search error:', err);
                this.isSearchingMap = false;
            }
        });
    }
    async submitForm() {
        if (!this.form.title || !this.form.businessType || !this.form.businessName || !this.form.category)
            return;
        await this.listingService.addListing({
            title: this.form.title,
            description: this.form.description,
            businessType: this.form.businessType,
            businessName: this.form.businessName,
            category: this.form.category,
            quantity: this.form.quantity,
            location: this.form.location,
            expiresAt: this.form.expiresAt ? this.form.expiresAt.toISOString().split('T')[0] : ''
        });
        this.submitted.set(true);
    }
    resetForm() {
        this.form = {
            title: '', description: '', businessType: null, businessName: '',
            category: null, quantity: '', location: '', expiresAt: null, lat: null, lng: null
        };
        this.searchAddressText = '';
        if (this.marker && this.map) {
            this.marker.remove();
            this.marker = undefined;
            this.map.setView([41.0082, 28.9784], 11);
        }
        this.submitted.set(false);
        // re-init map if it was destroyed 
        if (!this.map && isPlatformBrowser(this.platformId)) {
            setTimeout(() => this.initMap(), 100);
        }
    }
    static ɵfac = function CreateListingComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || CreateListingComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CreateListingComponent, selectors: [["app-create-listing"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 13, vars: 2, consts: [[1, "create-page"], [1, "section-container"], [1, "page-header"], [1, "section-tag"], [1, "gradient-text"], [1, "form-wrapper"], [1, "success-state"], [1, "form-card"], [1, "form-section"], [1, "form-section-title"], [1, "pi", "pi-building"], [1, "form-grid"], [1, "form-field"], ["type", "text", "pInputText", "", "placeholder", "\u0130\u015Fletmenizin ad\u0131", 3, "ngModelChange", "ngModel"], ["placeholder", "T\u00FCr se\u00E7in", "styleClass", "w-full", 3, "ngModelChange", "options", "ngModel"], [1, "form-field", "full-width"], [1, "map-search-container"], [1, "p-input-icon-left", "w-full"], [1, "pi", "pi-search"], ["type", "text", "pInputText", "", "placeholder", "Adres, il\u00E7e veya \u015Fehir ara...", 1, "w-full", 3, "ngModelChange", "keydown.enter", "ngModel"], ["icon", "pi pi-map-marker", "styleClass", "p-button-secondary", "pTooltip", "Haritada Bul", "tooltipPosition", "top", 3, "onClick", "loading"], [1, "create-map-container", "mt-3"], ["id", "create-listing-map", 1, "create-map"], [1, "map-overlay-text"], [1, "selected-location", "mt-2"], [1, "form-divider"], [1, "pi", "pi-box"], ["type", "text", "pInputText", "", "placeholder", "K\u0131sa ve a\u00E7\u0131klay\u0131c\u0131 bir ba\u015Fl\u0131k", 3, "ngModelChange", "ngModel"], ["pInputTextarea", "", "rows", "3", "placeholder", "\u00DCr\u00FCnler hakk\u0131nda detayl\u0131 bilgi", 3, "ngModelChange", "ngModel"], ["placeholder", "Kategori se\u00E7in", "styleClass", "w-full", 3, "ngModelChange", "options", "ngModel"], ["type", "text", "pInputText", "", "placeholder", "\u00D6rnek: ~30 porsiyon", 3, "ngModelChange", "ngModel"], ["dateFormat", "yy-mm-dd", "placeholder", "Tarih se\u00E7in", "styleClass", "w-full", 3, "ngModelChange", "ngModel", "showIcon"], [1, "form-actions"], ["label", "\u0130lan Olu\u015Ftur", "icon", "pi pi-check", "styleClass", "submit-btn", 3, "onClick", "rounded"], [1, "pi", "pi-info-circle", "mr-2"], [1, "pi", "pi-check-circle", "text-green-600", "mr-2"], [1, "success-card"], [1, "success-icon"], [1, "pi", "pi-check-circle"], [1, "success-actions"], ["label", "Yeni \u0130lan Olu\u015Ftur", "icon", "pi pi-plus", "styleClass", "submit-btn", 3, "onClick", "rounded"], ["label", "\u0130lanlar\u0131 G\u00F6r", "icon", "pi pi-list", "routerLink", "/ilanlar", 3, "rounded", "outlined"]], template: function CreateListingComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
            i0.ɵɵtext(4, "Yeni \u0130lan");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "h1");
            i0.ɵɵtext(6, "\u0130lan ");
            i0.ɵɵelementStart(7, "span", 4);
            i0.ɵɵtext(8, "Olu\u015Ftur");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(9, "p");
            i0.ɵɵtext(10, "\u0130\u015Fletmenizden kalan g\u0131da \u00FCr\u00FCnlerini platforma ekleyin");
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(11, CreateListingComponent_Conditional_11_Template, 55, 15, "div", 5)(12, CreateListingComponent_Conditional_12_Template, 11, 3, "div", 6);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(11);
            i0.ɵɵconditional(!ctx.submitted() ? 11 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.submitted() ? 12 : -1);
        } }, dependencies: [FormsModule, i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgModel, RouterModule, i2.RouterLink, ButtonModule, i3.Button, InputTextModule, i4.InputText, DropdownModule, i5.Dropdown, InputTextareaModule, i6.InputTextarea, CalendarModule, i7.Calendar, HttpClientModule], styles: [".create-page[_ngcontent-%COMP%] {\n    padding-top: 80px;\n    min-height: 100vh;\n    background: var(--kopru-bg);\n}\n\n.page-header[_ngcontent-%COMP%] {\n    text-align: center;\n    padding: 3rem 0 2rem;\n\n    h1 {\n        font-size: 2.5rem;\n        font-weight: 800;\n        margin-bottom: 0.5rem;\n    }\n\n    p {\n        color: var(--kopru-text-muted);\n        font-size: 1.05rem;\n    }\n}\n\n.form-wrapper[_ngcontent-%COMP%] {\n    max-width: 700px;\n    margin: 0 auto;\n    padding-bottom: 4rem;\n}\n\n.form-card[_ngcontent-%COMP%] {\n    background: #fff;\n    border: 1px solid var(--kopru-border);\n    border-radius: 24px;\n    padding: 2.5rem;\n    box-shadow: var(--kopru-shadow-md);\n}\n\n.form-section-title[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    gap: 0.75rem;\n    font-size: 1.1rem;\n    font-weight: 700;\n    color: var(--kopru-text);\n    margin-bottom: 1.5rem;\n\n    i {\n        color: var(--kopru-primary);\n        font-size: 1.2rem;\n    }\n}\n\n.form-grid[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 1.25rem;\n}\n\n.form-field[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    gap: 0.5rem;\n\n    &.full-width {\n        grid-column: 1 / -1;\n    }\n\n    label {\n        font-size: 0.85rem;\n        font-weight: 600;\n        color: var(--kopru-text-secondary);\n    }\n\n    input,\n    textarea {\n        width: 100%;\n    }\n}\n\n.form-divider[_ngcontent-%COMP%] {\n    height: 1px;\n    background: var(--kopru-border-light);\n    margin: 2rem 0;\n}\n\n.form-actions[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: flex-end;\n    margin-top: 2rem;\n}\n\n[_nghost-%COMP%]     .submit-btn {\n    background: var(--kopru-primary) !important;\n    border: none !important;\n    padding: 0.85rem 2.5rem !important;\n    font-size: 1rem !important;\n}\n\n[_nghost-%COMP%]     .w-full {\n    width: 100%;\n}\n\n\n\n.success-state[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    padding: 4rem 0;\n}\n\n.success-card[_ngcontent-%COMP%] {\n    text-align: center;\n    background: #fff;\n    border: 1px solid var(--kopru-border);\n    border-radius: 24px;\n    padding: 3rem;\n    max-width: 500px;\n    box-shadow: var(--kopru-shadow-md);\n\n    .success-icon {\n        width: 80px;\n        height: 80px;\n        border-radius: 50%;\n        background: var(--kopru-primary-50);\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        margin: 0 auto 1.5rem;\n\n        i {\n            font-size: 2.5rem;\n            color: var(--kopru-primary);\n        }\n    }\n\n    h2 {\n        font-size: 1.5rem;\n        margin-bottom: 0.75rem;\n    }\n\n    p {\n        color: var(--kopru-text-muted);\n        font-size: 0.95rem;\n        line-height: 1.7;\n        margin-bottom: 2rem;\n    }\n}\n\n.success-actions[_ngcontent-%COMP%] {\n    display: flex;\n    gap: 1rem;\n    justify-content: center;\n}\n\n//[_ngcontent-%COMP%]   Map[_ngcontent-%COMP%]   Styles[_ngcontent-%COMP%]   for[_ngcontent-%COMP%]   Create[_ngcontent-%COMP%]   Listing\n.map-search-container[_ngcontent-%COMP%] {\n    display: flex;\n    gap: 0.5rem;\n    width: 100%;\n}\n\n.create-map-container[_ngcontent-%COMP%] {\n    height: 300px;\n    width: 100%;\n    border-radius: var(--kopru-radius-md);\n    overflow: hidden;\n    border: 1px solid var(--kopru-border);\n    position: relative;\n    z-index: 1;\n}\n\n.create-map[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n}\n\n.map-overlay-text[_ngcontent-%COMP%] {\n    position: absolute;\n    bottom: 15px;\n    left: 50%;\n    transform: translateX(-50%);\n    background: rgba(255, 255, 255, 0.9);\n    padding: 8px 16px;\n    border-radius: 20px;\n    font-size: 0.85rem;\n    font-weight: 500;\n    color: var(--kopru-text);\n    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);\n    z-index: 1000;\n    \n\n    display: flex;\n    align-items: center;\n    pointer-events: none;\n}\n\n.selected-location[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n    color: var(--kopru-text);\n    display: flex;\n    align-items: center;\n    background: var(--kopru-bg);\n    padding: 0.5rem 1rem;\n    border-radius: var(--kopru-radius-md);\n    border: 1px solid var(--kopru-border);\n}\n\n.mt-2[_ngcontent-%COMP%] {\n    margin-top: 0.5rem;\n}\n\n.mt-3[_ngcontent-%COMP%] {\n    margin-top: 1rem;\n}\n\n.mr-2[_ngcontent-%COMP%] {\n    margin-right: 0.5rem;\n}\n\n.w-full[_ngcontent-%COMP%] {\n    width: 100%;\n}\n\n@media (max-width: 768px) {\n    .form-card[_ngcontent-%COMP%] {\n        padding: 1.5rem;\n    }\n\n    .form-grid[_ngcontent-%COMP%] {\n        grid-template-columns: 1fr;\n    }\n\n    .page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n        font-size: 2rem;\n    }\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CreateListingComponent, [{
        type: Component,
        args: [{ selector: 'app-create-listing', standalone: true, imports: [
                    FormsModule,
                    RouterModule,
                    ButtonModule,
                    InputTextModule,
                    DropdownModule,
                    InputTextareaModule,
                    CalendarModule,
                    HttpClientModule
                ], template: "<section class=\"create-page\">\n  <div class=\"section-container\">\n    <!-- Header -->\n    <div class=\"page-header\">\n      <span class=\"section-tag\">Yeni \u0130lan</span>\n      <h1>\u0130lan <span class=\"gradient-text\">Olu\u015Ftur</span></h1>\n      <p>\u0130\u015Fletmenizden kalan g\u0131da \u00FCr\u00FCnlerini platforma ekleyin</p>\n    </div>\n\n    <!-- Form -->\n    @if (!submitted()) {\n      <div class=\"form-wrapper\">\n        <div class=\"form-card\">\n          <div class=\"form-section\">\n            <h2 class=\"form-section-title\">\n              <i class=\"pi pi-building\"></i>\n              \u0130\u015Fletme Bilgileri\n            </h2>\n            <div class=\"form-grid\">\n              <div class=\"form-field\">\n                <label>\u0130\u015Fletme Ad\u0131 *</label>\n                <input type=\"text\" pInputText [(ngModel)]=\"form.businessName\"\n                  placeholder=\"\u0130\u015Fletmenizin ad\u0131\" />\n              </div>\n              <div class=\"form-field\">\n                <label>\u0130\u015Fletme T\u00FCr\u00FC *</label>\n                <p-dropdown [options]=\"businessTypeOptions\" [(ngModel)]=\"form.businessType\"\n                placeholder=\"T\u00FCr se\u00E7in\" styleClass=\"w-full\"></p-dropdown>\n              </div>\n              <div class=\"form-field full-width\">\n                <label>Konum (Haritadan Se\u00E7in)</label>\n                <div class=\"map-search-container\">\n                  <span class=\"p-input-icon-left w-full\">\n                    <i class=\"pi pi-search\"></i>\n                    <input type=\"text\" pInputText [(ngModel)]=\"searchAddressText\"\n                      placeholder=\"Adres, il\u00E7e veya \u015Fehir ara...\"\n                      (keydown.enter)=\"searchMapAction(); $event.preventDefault();\" class=\"w-full\" />\n                  </span>\n                  <p-button icon=\"pi pi-map-marker\" (onClick)=\"searchMapAction()\"\n                    [loading]=\"isSearchingMap\" styleClass=\"p-button-secondary\" pTooltip=\"Haritada Bul\"\n                  tooltipPosition=\"top\"></p-button>\n                </div>\n                <div class=\"create-map-container mt-3\">\n                  <div id=\"create-listing-map\" class=\"create-map\"></div>\n                  @if (!form.lat) {\n                    <div class=\"map-overlay-text\">\n                      <i class=\"pi pi-info-circle mr-2\"></i> Konumu i\u015Faretlemek i\u00E7in haritaya t\u0131klay\u0131n.\n                    </div>\n                  }\n                </div>\n                @if (form.location) {\n                  <div class=\"selected-location mt-2\">\n                    <i class=\"pi pi-check-circle text-green-600 mr-2\"></i>\n                    <span>Se\u00E7ilen Konum: <strong>{{ form.location }}</strong></span>\n                  </div>\n                }\n              </div>\n            </div>\n          </div>\n          <div class=\"form-divider\"></div>\n          <div class=\"form-section\">\n            <h2 class=\"form-section-title\">\n              <i class=\"pi pi-box\"></i>\n              \u00DCr\u00FCn Bilgileri\n            </h2>\n            <div class=\"form-grid\">\n              <div class=\"form-field full-width\">\n                <label>\u0130lan Ba\u015Fl\u0131\u011F\u0131 *</label>\n                <input type=\"text\" pInputText [(ngModel)]=\"form.title\"\n                  placeholder=\"K\u0131sa ve a\u00E7\u0131klay\u0131c\u0131 bir ba\u015Fl\u0131k\" />\n              </div>\n              <div class=\"form-field full-width\">\n                <label>A\u00E7\u0131klama</label>\n                <textarea pInputTextarea [(ngModel)]=\"form.description\" rows=\"3\"\n                placeholder=\"\u00DCr\u00FCnler hakk\u0131nda detayl\u0131 bilgi\"></textarea>\n              </div>\n              <div class=\"form-field\">\n                <label>Kategori *</label>\n                <p-dropdown [options]=\"categoryOptions\" [(ngModel)]=\"form.category\"\n                placeholder=\"Kategori se\u00E7in\" styleClass=\"w-full\"></p-dropdown>\n              </div>\n              <div class=\"form-field\">\n                <label>Miktar</label>\n                <input type=\"text\" pInputText [(ngModel)]=\"form.quantity\"\n                  placeholder=\"\u00D6rnek: ~30 porsiyon\" />\n              </div>\n              <div class=\"form-field full-width\">\n                <label>Son Kullanma Tarihi</label>\n                <p-calendar [(ngModel)]=\"form.expiresAt\" [showIcon]=\"true\" dateFormat=\"yy-mm-dd\"\n                placeholder=\"Tarih se\u00E7in\" styleClass=\"w-full\"></p-calendar>\n              </div>\n            </div>\n          </div>\n          <div class=\"form-actions\">\n            <p-button label=\"\u0130lan Olu\u015Ftur\" icon=\"pi pi-check\" [rounded]=\"true\" (onClick)=\"submitForm()\"\n            styleClass=\"submit-btn\"></p-button>\n          </div>\n        </div>\n      </div>\n    }\n\n    <!-- Success State -->\n    @if (submitted()) {\n      <div class=\"success-state\">\n        <div class=\"success-card\">\n          <div class=\"success-icon\">\n            <i class=\"pi pi-check-circle\"></i>\n          </div>\n          <h2>\u0130lan\u0131n\u0131z Olu\u015Fturuldu!</h2>\n          <p>\u0130lan\u0131n\u0131z ba\u015Far\u0131yla yay\u0131nland\u0131. \u0130htiya\u00E7 sahibi kurumlar en k\u0131sa s\u00FCrede talebini iletecektir.</p>\n          <div class=\"success-actions\">\n            <p-button label=\"Yeni \u0130lan Olu\u015Ftur\" icon=\"pi pi-plus\" [rounded]=\"true\" (onClick)=\"resetForm()\"\n            styleClass=\"submit-btn\"></p-button>\n            <p-button label=\"\u0130lanlar\u0131 G\u00F6r\" icon=\"pi pi-list\" [rounded]=\"true\" [outlined]=\"true\"\n            routerLink=\"/ilanlar\"></p-button>\n          </div>\n        </div>\n      </div>\n    }\n  </div>\n</section>", styles: [".create-page {\n    padding-top: 80px;\n    min-height: 100vh;\n    background: var(--kopru-bg);\n}\n\n.page-header {\n    text-align: center;\n    padding: 3rem 0 2rem;\n\n    h1 {\n        font-size: 2.5rem;\n        font-weight: 800;\n        margin-bottom: 0.5rem;\n    }\n\n    p {\n        color: var(--kopru-text-muted);\n        font-size: 1.05rem;\n    }\n}\n\n.form-wrapper {\n    max-width: 700px;\n    margin: 0 auto;\n    padding-bottom: 4rem;\n}\n\n.form-card {\n    background: #fff;\n    border: 1px solid var(--kopru-border);\n    border-radius: 24px;\n    padding: 2.5rem;\n    box-shadow: var(--kopru-shadow-md);\n}\n\n.form-section-title {\n    display: flex;\n    align-items: center;\n    gap: 0.75rem;\n    font-size: 1.1rem;\n    font-weight: 700;\n    color: var(--kopru-text);\n    margin-bottom: 1.5rem;\n\n    i {\n        color: var(--kopru-primary);\n        font-size: 1.2rem;\n    }\n}\n\n.form-grid {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 1.25rem;\n}\n\n.form-field {\n    display: flex;\n    flex-direction: column;\n    gap: 0.5rem;\n\n    &.full-width {\n        grid-column: 1 / -1;\n    }\n\n    label {\n        font-size: 0.85rem;\n        font-weight: 600;\n        color: var(--kopru-text-secondary);\n    }\n\n    input,\n    textarea {\n        width: 100%;\n    }\n}\n\n.form-divider {\n    height: 1px;\n    background: var(--kopru-border-light);\n    margin: 2rem 0;\n}\n\n.form-actions {\n    display: flex;\n    justify-content: flex-end;\n    margin-top: 2rem;\n}\n\n:host ::ng-deep .submit-btn {\n    background: var(--kopru-primary) !important;\n    border: none !important;\n    padding: 0.85rem 2.5rem !important;\n    font-size: 1rem !important;\n}\n\n:host ::ng-deep .w-full {\n    width: 100%;\n}\n\n/* Success */\n.success-state {\n    display: flex;\n    justify-content: center;\n    padding: 4rem 0;\n}\n\n.success-card {\n    text-align: center;\n    background: #fff;\n    border: 1px solid var(--kopru-border);\n    border-radius: 24px;\n    padding: 3rem;\n    max-width: 500px;\n    box-shadow: var(--kopru-shadow-md);\n\n    .success-icon {\n        width: 80px;\n        height: 80px;\n        border-radius: 50%;\n        background: var(--kopru-primary-50);\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        margin: 0 auto 1.5rem;\n\n        i {\n            font-size: 2.5rem;\n            color: var(--kopru-primary);\n        }\n    }\n\n    h2 {\n        font-size: 1.5rem;\n        margin-bottom: 0.75rem;\n    }\n\n    p {\n        color: var(--kopru-text-muted);\n        font-size: 0.95rem;\n        line-height: 1.7;\n        margin-bottom: 2rem;\n    }\n}\n\n.success-actions {\n    display: flex;\n    gap: 1rem;\n    justify-content: center;\n}\n\n// Map Styles for Create Listing\n.map-search-container {\n    display: flex;\n    gap: 0.5rem;\n    width: 100%;\n}\n\n.create-map-container {\n    height: 300px;\n    width: 100%;\n    border-radius: var(--kopru-radius-md);\n    overflow: hidden;\n    border: 1px solid var(--kopru-border);\n    position: relative;\n    z-index: 1;\n}\n\n.create-map {\n    width: 100%;\n    height: 100%;\n}\n\n.map-overlay-text {\n    position: absolute;\n    bottom: 15px;\n    left: 50%;\n    transform: translateX(-50%);\n    background: rgba(255, 255, 255, 0.9);\n    padding: 8px 16px;\n    border-radius: 20px;\n    font-size: 0.85rem;\n    font-weight: 500;\n    color: var(--kopru-text);\n    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);\n    z-index: 1000;\n    /* Above leaflet tiles */\n    display: flex;\n    align-items: center;\n    pointer-events: none;\n}\n\n.selected-location {\n    font-size: 0.9rem;\n    color: var(--kopru-text);\n    display: flex;\n    align-items: center;\n    background: var(--kopru-bg);\n    padding: 0.5rem 1rem;\n    border-radius: var(--kopru-radius-md);\n    border: 1px solid var(--kopru-border);\n}\n\n.mt-2 {\n    margin-top: 0.5rem;\n}\n\n.mt-3 {\n    margin-top: 1rem;\n}\n\n.mr-2 {\n    margin-right: 0.5rem;\n}\n\n.w-full {\n    width: 100%;\n}\n\n@media (max-width: 768px) {\n    .form-card {\n        padding: 1.5rem;\n    }\n\n    .form-grid {\n        grid-template-columns: 1fr;\n    }\n\n    .page-header h1 {\n        font-size: 2rem;\n    }\n}"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CreateListingComponent, { className: "CreateListingComponent" }); })();
//# sourceMappingURL=create-listing.component.js.map