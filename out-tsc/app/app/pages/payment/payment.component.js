import { Component, inject, signal } from '@angular/core';
import { Location } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { FoodListingService } from '../../services/food-listing.service';
import { CartService } from '../../services/cart.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "primeng/button";
import * as i3 from "primeng/inputtext";
import * as i4 from "primeng/inputmask";
function PaymentComponent_Conditional_2_Conditional_13_For_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "div", 14)(2, "span", 36);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 14)(5, "span", 37);
    i0.ɵɵtext(6, "\u0130\u015Fletme");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "span", 19);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "div", 14)(10, "span", 37);
    i0.ɵɵtext(11, "\u00DCr\u00FCn");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "span", 19);
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(14, "div", 38)(15, "span", 37);
    i0.ɵɵtext(16, "Miktar");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "span", 19);
    i0.ɵɵtext(18);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ɵ$index_37_r5 = ctx.$index;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", ɵ$index_37_r5 + 1, ". \u0130lan");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(item_r4.businessName);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(item_r4.title);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(item_r4.quantity);
} }
function PaymentComponent_Conditional_2_Conditional_13_Conditional_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 14)(1, "span", 17);
    i0.ɵɵtext(2, "Teslimat Adresi");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span", 39);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r1.deliveryAddress());
} }
function PaymentComponent_Conditional_2_Conditional_13_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 10)(1, "div", 11)(2, "h3", 12);
    i0.ɵɵelement(3, "i", 13);
    i0.ɵɵtext(4, " Sipari\u015F \u00D6zeti");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(5, PaymentComponent_Conditional_2_Conditional_13_For_6_Template, 19, 4, "div", null, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵtemplate(7, PaymentComponent_Conditional_2_Conditional_13_Conditional_7_Template, 5, 1, "div", 14);
    i0.ɵɵelement(8, "div", 15);
    i0.ɵɵelementStart(9, "div", 16)(10, "span", 17);
    i0.ɵɵtext(11, "\u00DCr\u00FCn Bedeli");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "span", 18);
    i0.ɵɵtext(13, "\u00DCcretsiz");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(14, "div", 16)(15, "span", 17);
    i0.ɵɵtext(16, "Kurye Hizmet Bedeli");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "span", 19);
    i0.ɵɵtext(18);
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(19, "div", 15);
    i0.ɵɵelementStart(20, "div", 20)(21, "span", 17);
    i0.ɵɵtext(22, "Toplam \u00D6denecek");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "span", 21);
    i0.ɵɵtext(24);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(25, "div", 22)(26, "h3", 23);
    i0.ɵɵelement(27, "i", 24);
    i0.ɵɵtext(28, " \u00D6deme Bilgileri");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(29, "form", 25, 0);
    i0.ɵɵlistener("ngSubmit", function PaymentComponent_Conditional_2_Conditional_13_Template_form_ngSubmit_29_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.processPayment()); });
    i0.ɵɵelementStart(31, "div", 26)(32, "label");
    i0.ɵɵtext(33, "Kart \u00DCzerindeki \u0130sim");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(34, "input", 27);
    i0.ɵɵtwoWayListener("ngModelChange", function PaymentComponent_Conditional_2_Conditional_13_Template_input_ngModelChange_34_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r1.cardName, $event) || (ctx_r1.cardName = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(35, "div", 26)(36, "label");
    i0.ɵɵtext(37, "Kart Numaras\u0131");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(38, "p-inputMask", 28);
    i0.ɵɵtwoWayListener("ngModelChange", function PaymentComponent_Conditional_2_Conditional_13_Template_p_inputMask_ngModelChange_38_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r1.cardNumber, $event) || (ctx_r1.cardNumber = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(39, "div", 29)(40, "div", 30)(41, "label");
    i0.ɵɵtext(42, "Son Kullanma");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(43, "p-inputMask", 31);
    i0.ɵɵtwoWayListener("ngModelChange", function PaymentComponent_Conditional_2_Conditional_13_Template_p_inputMask_ngModelChange_43_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r1.expiryDate, $event) || (ctx_r1.expiryDate = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(44, "div", 30)(45, "label");
    i0.ɵɵtext(46, "CVV");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(47, "p-inputMask", 32);
    i0.ɵɵtwoWayListener("ngModelChange", function PaymentComponent_Conditional_2_Conditional_13_Template_p_inputMask_ngModelChange_47_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r1.cvv, $event) || (ctx_r1.cvv = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(48, "div", 33);
    i0.ɵɵelement(49, "i", 34);
    i0.ɵɵelementStart(50, "span");
    i0.ɵɵtext(51, "256-bit SSL G\u00FCvencesiyle \u00D6deme");
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(52, "p-button", 35);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const paymentForm_r6 = i0.ɵɵreference(30);
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(5);
    i0.ɵɵrepeater(ctx_r1.cartItems());
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r1.deliveryAddress() ? 7 : -1);
    i0.ɵɵadvance(11);
    i0.ɵɵtextInterpolate1("", ctx_r1.serviceFee, " TL");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate1("", ctx_r1.serviceFee, " TL");
    i0.ɵɵadvance(10);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.cardName);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.cardNumber);
    i0.ɵɵadvance(5);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.expiryDate);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.cvv);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("loading", ctx_r1.isProcessing())("disabled", paymentForm_r6.invalid);
} }
function PaymentComponent_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 3)(1, "div", 5);
    i0.ɵɵlistener("click", function PaymentComponent_Conditional_2_Template_div_click_1_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.goBack()); });
    i0.ɵɵelement(2, "i", 6);
    i0.ɵɵtext(3, " Geri D\u00F6n ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 7)(5, "span", 8);
    i0.ɵɵtext(6, "\u00D6deme Ad\u0131m\u0131");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "h1");
    i0.ɵɵtext(8, "Sipari\u015Fi ");
    i0.ɵɵelementStart(9, "span", 9);
    i0.ɵɵtext(10, "Tamamla");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "p");
    i0.ɵɵtext(12, "G\u00FCvenli \u00F6deme ad\u0131m\u0131n\u0131 tamamlayarak g\u0131dalar\u0131n teslimat\u0131n\u0131 ba\u015Flat\u0131n.");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(13, PaymentComponent_Conditional_2_Conditional_13_Template, 53, 9, "div", 10);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(13);
    i0.ɵɵconditional(ctx_r1.cartItems().length > 0 ? 13 : -1);
} }
function PaymentComponent_Conditional_3_Conditional_8_For_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2("", item_r7.title, " (", item_r7.businessName, ")");
} }
function PaymentComponent_Conditional_3_Conditional_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 43)(1, "div", 47)(2, "strong");
    i0.ɵɵtext(3, "Toplam \u0130lan:");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 48)(6, "strong");
    i0.ɵɵtext(7, "Talep Edilen \u0130lanlar:");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "ul", 49);
    i0.ɵɵrepeaterCreate(9, PaymentComponent_Conditional_3_Conditional_8_For_10_Template, 2, 2, "li", null, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "div", 50)(12, "strong");
    i0.ɵɵtext(13, "Teslimat Adresi:");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.cartItems().length, " adet");
    i0.ɵɵadvance(5);
    i0.ɵɵrepeater(ctx_r1.cartItems());
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.deliveryAddress(), "");
} }
function PaymentComponent_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4)(1, "div", 40)(2, "div", 41);
    i0.ɵɵelement(3, "i", 42);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "h2");
    i0.ɵɵtext(5, "\u00D6deme Ba\u015Far\u0131l\u0131!");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p");
    i0.ɵɵtext(7, "Talebiniz i\u015Fletmeye iletildi ve kurye atamas\u0131 yap\u0131ld\u0131. \u0130\u015Fletme paneli \u00FCzerinden veya takip linki ile s\u00FCreci izleyebilirsiniz.");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(8, PaymentComponent_Conditional_3_Conditional_8_Template, 15, 2, "div", 43);
    i0.ɵɵelementStart(9, "div", 44);
    i0.ɵɵelement(10, "p-button", 45)(11, "p-button", 46);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(8);
    i0.ɵɵconditional(ctx_r1.cartItems().length > 0 ? 8 : -1);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("rounded", true);
    i0.ɵɵadvance();
    i0.ɵɵproperty("rounded", true)("outlined", true);
} }
export class PaymentComponent {
    route = inject(ActivatedRoute);
    router = inject(Router);
    location = inject(Location);
    listingService = inject(FoodListingService);
    cartService = inject(CartService);
    cartItems = signal([]);
    deliveryAddress = signal('');
    // Payment Form Model
    cardName = '';
    cardNumber = '';
    expiryDate = '';
    cvv = '';
    isProcessing = signal(false);
    isSuccess = signal(false);
    // Example fee
    serviceFee = 24.99;
    ngOnInit() {
        const idParam = this.route.snapshot.paramMap.get('id');
        if (idParam === 'cart') {
            const items = this.cartService.cartItems();
            if (items.length > 0) {
                this.cartItems.set([...items]);
            }
            else {
                this.router.navigate(['/ilanlar']);
            }
        }
        else if (idParam) {
            const listingObj = this.listingService.allListings().find(l => l.id === Number(idParam));
            if (listingObj) {
                this.cartItems.set([listingObj]);
            }
            else {
                this.router.navigate(['/ilanlar']);
            }
        }
        else {
            this.router.navigate(['/ilanlar']);
        }
        // Attempt to get delivery address from router state
        const state = this.location.getState();
        if (state && state.deliveryAddress) {
            this.deliveryAddress.set(state.deliveryAddress);
        }
    }
    processPayment() {
        if (!this.cardName || !this.cardNumber || !this.expiryDate || !this.cvv)
            return;
        this.isProcessing.set(true);
        // Simulate payment process delay
        setTimeout(async () => {
            this.isProcessing.set(false);
            const items = this.cartItems();
            for (const item of items) {
                await this.listingService.reserveListing(item.id, this.deliveryAddress() || 'Adres Belirtilmedi');
            }
            // Clear the cart if paying from cart
            if (this.route.snapshot.paramMap.get('id') === 'cart') {
                this.cartService.clearCart();
            }
            this.isSuccess.set(true);
        }, 1500);
    }
    goBack() {
        this.location.back();
    }
    static ɵfac = function PaymentComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || PaymentComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PaymentComponent, selectors: [["app-payment"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 4, vars: 2, consts: [["paymentForm", "ngForm"], [1, "payment-page", "page-enter"], [1, "section-container"], [1, "payment-wrapper"], [1, "success-state", "page-enter"], [1, "back-btn", 3, "click"], [1, "pi", "pi-arrow-left"], [1, "page-header"], [1, "section-tag"], [1, "gradient-text"], [1, "payment-grid"], [1, "order-summary-card"], [1, "summary-title"], [1, "pi", "pi-shopping-bag"], [1, "summary-item"], [1, "summary-divider"], [1, "summary-item", "price-item"], [1, "item-label"], [1, "item-value", "free-text"], [1, "item-value"], [1, "summary-item", "total-item"], [1, "item-value", "highlight"], [1, "payment-form-card"], [1, "form-title"], [1, "pi", "pi-credit-card"], [3, "ngSubmit"], [1, "form-field", "full-width"], ["pInputText", "", "type", "text", "name", "cardName", "required", "", "placeholder", "Ad Soyad", 3, "ngModelChange", "ngModel"], ["name", "cardNumber", "mask", "9999-9999-9999-9999", "placeholder", "0000-0000-0000-0000", "required", "", "styleClass", "w-full", 3, "ngModelChange", "ngModel"], [1, "form-row"], [1, "form-field"], ["name", "expiryDate", "mask", "99/99", "placeholder", "AA/YY", "required", "", "styleClass", "w-full", 3, "ngModelChange", "ngModel"], ["name", "cvv", "mask", "999", "placeholder", "123", "required", "", "styleClass", "w-full", 3, "ngModelChange", "ngModel"], [1, "secure-badge"], [1, "pi", "pi-lock"], ["type", "submit", "label", "\u00D6demeyi Tamamla ve Talep Et", "icon", "pi pi-check", "styleClass", "submit-payment-btn w-full mt-4", 3, "loading", "disabled"], [1, "item-label", 2, "font-weight", "600"], [1, "item-label", 2, "padding-left", "1rem"], [1, "summary-item", 2, "margin-bottom", "0.5rem"], [1, "item-value", "address-text"], [1, "success-card"], [1, "success-icon"], [1, "pi", "pi-check-circle"], [1, "success-details"], [1, "success-actions"], ["label", "Ana Sayfaya D\u00F6n", "icon", "pi pi-home", "styleClass", "action-btn", "routerLink", "/", 3, "rounded"], ["label", "\u0130lanlar\u0131 \u0130ncele", "icon", "pi pi-list", "routerLink", "/ilanlar", 3, "rounded", "outlined"], [1, "detail-item"], [1, "detail-item", 2, "margin-top", "0.5rem"], [2, "margin", "0.25rem 0 0 1rem", "padding", "0"], [1, "detail-item", 2, "margin-top", "1rem"]], template: function PaymentComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "section", 1)(1, "div", 2);
            i0.ɵɵtemplate(2, PaymentComponent_Conditional_2_Template, 14, 1, "div", 3)(3, PaymentComponent_Conditional_3_Template, 12, 4, "div", 4);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(!ctx.isSuccess() ? 2 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.isSuccess() ? 3 : -1);
        } }, dependencies: [FormsModule, i1.ɵNgNoValidate, i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.RequiredValidator, i1.NgModel, i1.NgForm, ButtonModule, i2.Button, InputTextModule, i3.InputText, InputMaskModule, i4.InputMask, RouterLink], styles: [".payment-page[_ngcontent-%COMP%] {\n    padding: 4rem 1rem;\n    min-height: calc(100vh - 140px);\n    background: var(--kopru-bg);\n    color: var(--kopru-text);\n\n    .section-container {\n        max-width: 1000px;\n        margin: 0 auto;\n    }\n\n    .back-btn {\n        display: inline-flex;\n        align-items: center;\n        gap: 0.5rem;\n        color: var(--kopru-text-secondary);\n        cursor: pointer;\n        font-weight: 500;\n        margin-bottom: 2rem;\n        transition: color 0.3s ease;\n\n        &:hover {\n            color: var(--kopru-primary);\n        }\n    }\n\n    .page-header {\n        text-align: center;\n        margin-bottom: 3rem;\n\n        .section-tag {\n            display: inline-block;\n            padding: 0.25rem 1rem;\n            background: var(--kopru-primary-light);\n            color: var(--kopru-primary);\n            border-radius: var(--kopru-radius-full);\n            font-size: 0.85rem;\n            font-weight: 600;\n            margin-bottom: 1rem;\n        }\n\n        h1 {\n            font-size: 2.5rem;\n            font-weight: 800;\n            color: var(--kopru-text);\n            margin-bottom: 1rem;\n\n            .gradient-text {\n                background: linear-gradient(135deg, var(--kopru-primary) 0%, var(--kopru-secondary) 100%);\n                -webkit-background-clip: text;\n                -webkit-text-fill-color: transparent;\n                background-clip: text;\n            }\n        }\n\n        p {\n            color: var(--kopru-text-secondary);\n            font-size: 1.1rem;\n            max-width: 600px;\n            margin: 0 auto;\n        }\n    }\n\n    .payment-grid {\n        display: grid;\n        grid-template-columns: 1fr;\n        gap: 2rem;\n\n        @media(min-width: 768px) {\n            grid-template-columns: 1fr 1.5fr;\n            align-items: start;\n        }\n    }\n\n    // Cards\n    .order-summary-card,\n    .payment-form-card,\n    .success-card {\n        background: #fff;\n        border-radius: var(--kopru-radius-lg);\n        border: 1px solid var(--kopru-border);\n        padding: 2rem;\n        box-shadow: var(--kopru-shadow-sm);\n    }\n\n    .summary-title,\n    .form-title {\n        display: flex;\n        align-items: center;\n        gap: 0.75rem;\n        font-size: 1.25rem;\n        font-weight: 700;\n        margin-bottom: 1.5rem;\n        color: var(--kopru-text);\n\n        i {\n            color: var(--kopru-primary);\n        }\n    }\n\n    .summary-item {\n        display: flex;\n        justify-content: space-between;\n        margin-bottom: 1rem;\n        font-size: 0.95rem;\n\n        .item-label {\n            color: var(--kopru-text-secondary);\n        }\n\n        .item-value {\n            font-weight: 600;\n            color: var(--kopru-text);\n            text-align: right;\n\n            &.address-text {\n                max-width: 60%;\n                line-height: 1.4;\n            }\n\n            &.free-text {\n                color: #10b981; // green\n            }\n\n            &.highlight {\n                font-size: 1.25rem;\n                color: var(--kopru-primary);\n                font-weight: 800;\n            }\n        }\n    }\n\n    .summary-divider {\n        height: 1px;\n        background: var(--kopru-border);\n        margin: 1.5rem 0;\n    }\n\n    // Form Fields\n    .form-row {\n        display: flex;\n        gap: 1rem;\n\n        .form-field {\n            flex: 1;\n        }\n    }\n\n    .form-field {\n        margin-bottom: 1.5rem;\n\n        label {\n            display: block;\n            margin-bottom: 0.5rem;\n            font-size: 0.9rem;\n            font-weight: 600;\n            color: var(--kopru-text);\n        }\n\n        -shadowcsshost-no-combinator ::ng-deep .p-inputtext {\n            width: 100%;\n            padding: 0.75rem;\n            border-radius: var(--kopru-radius-md);\n            border-color: var(--kopru-border);\n            font-family: inherit;\n\n            &:enabled:focus {\n                border-color: var(--kopru-primary);\n                box-shadow: 0 0 0 0.1rem rgba(92, 122, 107, 0.2);\n            }\n        }\n    }\n\n    .secure-badge {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        gap: 0.5rem;\n        font-size: 0.85rem;\n        color: #10b981;\n        background: rgba(16, 185, 129, 0.1);\n        padding: 0.75rem;\n        border-radius: var(--kopru-radius-md);\n        margin-top: 1rem;\n        font-weight: 600;\n    }\n\n    // Success State\n    .success-card {\n        text-align: center;\n        max-width: 600px;\n        margin: 0 auto;\n\n        .success-icon {\n            width: 80px;\n            height: 80px;\n            margin: 0 auto 1.5rem;\n            background: rgba(16, 185, 129, 0.1);\n            color: #10b981;\n            border-radius: 50%;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            font-size: 3rem;\n        }\n\n        h2 {\n            font-size: 2rem;\n            color: var(--kopru-text);\n            margin-bottom: 1rem;\n        }\n\n        p {\n            color: var(--kopru-text-secondary);\n            line-height: 1.6;\n            margin-bottom: 2rem;\n        }\n\n        .success-details {\n            background: var(--kopru-bg);\n            border-radius: var(--kopru-radius-md);\n            padding: 1.5rem;\n            text-align: left;\n            margin-bottom: 2rem;\n\n            .detail-item {\n                margin-bottom: 0.75rem;\n                font-size: 0.95rem;\n                color: var(--kopru-text);\n                line-height: 1.4;\n\n                strong {\n                    color: var(--kopru-text-secondary);\n                    margin-right: 0.5rem;\n                    display: inline-block;\n                    width: 70px;\n                }\n\n                &:last-child {\n                    margin-bottom: 0;\n                }\n            }\n        }\n\n        .success-actions {\n            display: flex;\n            gap: 1rem;\n            justify-content: center;\n\n            -shadowcsshost-no-combinator ::ng-deep .p-button {\n                padding: 0.75rem 1.5rem;\n            }\n        }\n    }\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PaymentComponent, [{
        type: Component,
        args: [{ selector: 'app-payment', standalone: true, imports: [FormsModule, ButtonModule, InputTextModule, InputMaskModule, RouterLink], template: "<section class=\"payment-page page-enter\">\n  <div class=\"section-container\">\n\n    @if (!isSuccess()) {\n      <div class=\"payment-wrapper\">\n        <div class=\"back-btn\" (click)=\"goBack()\">\n          <i class=\"pi pi-arrow-left\"></i> Geri D\u00F6n\n        </div>\n        <div class=\"page-header\">\n          <span class=\"section-tag\">\u00D6deme Ad\u0131m\u0131</span>\n          <h1>Sipari\u015Fi <span class=\"gradient-text\">Tamamla</span></h1>\n          <p>G\u00FCvenli \u00F6deme ad\u0131m\u0131n\u0131 tamamlayarak g\u0131dalar\u0131n teslimat\u0131n\u0131 ba\u015Flat\u0131n.</p>\n        </div>\n        @if (cartItems().length > 0) {\n          <div class=\"payment-grid\">\n            <!-- Order Summary -->\n            <div class=\"order-summary-card\">\n              <h3 class=\"summary-title\"><i class=\"pi pi-shopping-bag\"></i> Sipari\u015F \u00D6zeti</h3>\n              @for (item of cartItems(); track item; let i = $index) {\n                <div>\n                  <div class=\"summary-item\">\n                    <span class=\"item-label\" style=\"font-weight: 600;\">{{ i + 1 }}. \u0130lan</span>\n                  </div>\n                  <div class=\"summary-item\">\n                    <span class=\"item-label\" style=\"padding-left: 1rem;\">\u0130\u015Fletme</span>\n                    <span class=\"item-value\">{{ item.businessName }}</span>\n                  </div>\n                  <div class=\"summary-item\">\n                    <span class=\"item-label\" style=\"padding-left: 1rem;\">\u00DCr\u00FCn</span>\n                    <span class=\"item-value\">{{ item.title }}</span>\n                  </div>\n                  <div class=\"summary-item\" style=\"margin-bottom: 0.5rem;\">\n                    <span class=\"item-label\" style=\"padding-left: 1rem;\">Miktar</span>\n                    <span class=\"item-value\">{{ item.quantity }}</span>\n                  </div>\n                </div>\n              }\n              @if (deliveryAddress()) {\n                <div class=\"summary-item\">\n                  <span class=\"item-label\">Teslimat Adresi</span>\n                  <span class=\"item-value address-text\">{{ deliveryAddress() }}</span>\n                </div>\n              }\n              <div class=\"summary-divider\"></div>\n              <div class=\"summary-item price-item\">\n                <span class=\"item-label\">\u00DCr\u00FCn Bedeli</span>\n                <span class=\"item-value free-text\">\u00DCcretsiz</span>\n              </div>\n              <div class=\"summary-item price-item\">\n                <span class=\"item-label\">Kurye Hizmet Bedeli</span>\n                <span class=\"item-value\">{{ serviceFee }} TL</span>\n              </div>\n              <div class=\"summary-divider\"></div>\n              <div class=\"summary-item total-item\">\n                <span class=\"item-label\">Toplam \u00D6denecek</span>\n                <span class=\"item-value highlight\">{{ serviceFee }} TL</span>\n              </div>\n            </div>\n            <!-- Payment Form -->\n            <div class=\"payment-form-card\">\n              <h3 class=\"form-title\"><i class=\"pi pi-credit-card\"></i> \u00D6deme Bilgileri</h3>\n              <form (ngSubmit)=\"processPayment()\" #paymentForm=\"ngForm\">\n                <div class=\"form-field full-width\">\n                  <label>Kart \u00DCzerindeki \u0130sim</label>\n                  <input pInputText type=\"text\" [(ngModel)]=\"cardName\" name=\"cardName\" required\n                    placeholder=\"Ad Soyad\" />\n                </div>\n                <div class=\"form-field full-width\">\n                  <label>Kart Numaras\u0131</label>\n                  <p-inputMask [(ngModel)]=\"cardNumber\" name=\"cardNumber\" mask=\"9999-9999-9999-9999\"\n                  placeholder=\"0000-0000-0000-0000\" required styleClass=\"w-full\"></p-inputMask>\n                </div>\n                <div class=\"form-row\">\n                  <div class=\"form-field\">\n                    <label>Son Kullanma</label>\n                    <p-inputMask [(ngModel)]=\"expiryDate\" name=\"expiryDate\" mask=\"99/99\" placeholder=\"AA/YY\"\n                    required styleClass=\"w-full\"></p-inputMask>\n                  </div>\n                  <div class=\"form-field\">\n                    <label>CVV</label>\n                    <p-inputMask [(ngModel)]=\"cvv\" name=\"cvv\" mask=\"999\" placeholder=\"123\" required\n                    styleClass=\"w-full\"></p-inputMask>\n                  </div>\n                </div>\n                <div class=\"secure-badge\">\n                  <i class=\"pi pi-lock\"></i>\n                  <span>256-bit SSL G\u00FCvencesiyle \u00D6deme</span>\n                </div>\n                <p-button type=\"submit\" label=\"\u00D6demeyi Tamamla ve Talep Et\" icon=\"pi pi-check\"\n                  [loading]=\"isProcessing()\" [disabled]=\"paymentForm.invalid\"\n                styleClass=\"submit-payment-btn w-full mt-4\"></p-button>\n              </form>\n            </div>\n          </div>\n        }\n      </div>\n    }\n\n    <!-- Success State -->\n    @if (isSuccess()) {\n      <div class=\"success-state page-enter\">\n        <div class=\"success-card\">\n          <div class=\"success-icon\">\n            <i class=\"pi pi-check-circle\"></i>\n          </div>\n          <h2>\u00D6deme Ba\u015Far\u0131l\u0131!</h2>\n          <p>Talebiniz i\u015Fletmeye iletildi ve kurye atamas\u0131 yap\u0131ld\u0131. \u0130\u015Fletme paneli \u00FCzerinden veya takip linki ile\n          s\u00FCreci izleyebilirsiniz.</p>\n          @if (cartItems().length > 0) {\n            <div class=\"success-details\">\n              <div class=\"detail-item\"><strong>Toplam \u0130lan:</strong> {{ cartItems().length }} adet</div>\n              <div class=\"detail-item\" style=\"margin-top: 0.5rem;\">\n                <strong>Talep Edilen \u0130lanlar:</strong>\n                <ul style=\"margin: 0.25rem 0 0 1rem; padding: 0;\">\n                  @for (item of cartItems(); track item) {\n                    <li>{{ item.title }} ({{ item.businessName }})</li>\n                  }\n                </ul>\n              </div>\n              <div class=\"detail-item\" style=\"margin-top: 1rem;\"><strong>Teslimat Adresi:</strong> {{\n            deliveryAddress() }}</div>\n          </div>\n        }\n        <div class=\"success-actions\">\n          <p-button label=\"Ana Sayfaya D\u00F6n\" icon=\"pi pi-home\" [rounded]=\"true\" styleClass=\"action-btn\"\n          routerLink=\"/\"></p-button>\n          <p-button label=\"\u0130lanlar\u0131 \u0130ncele\" icon=\"pi pi-list\" [rounded]=\"true\" [outlined]=\"true\"\n          routerLink=\"/ilanlar\"></p-button>\n        </div>\n      </div>\n    </div>\n  }\n\n</div>\n</section>", styles: [".payment-page {\n    padding: 4rem 1rem;\n    min-height: calc(100vh - 140px);\n    background: var(--kopru-bg);\n    color: var(--kopru-text);\n\n    .section-container {\n        max-width: 1000px;\n        margin: 0 auto;\n    }\n\n    .back-btn {\n        display: inline-flex;\n        align-items: center;\n        gap: 0.5rem;\n        color: var(--kopru-text-secondary);\n        cursor: pointer;\n        font-weight: 500;\n        margin-bottom: 2rem;\n        transition: color 0.3s ease;\n\n        &:hover {\n            color: var(--kopru-primary);\n        }\n    }\n\n    .page-header {\n        text-align: center;\n        margin-bottom: 3rem;\n\n        .section-tag {\n            display: inline-block;\n            padding: 0.25rem 1rem;\n            background: var(--kopru-primary-light);\n            color: var(--kopru-primary);\n            border-radius: var(--kopru-radius-full);\n            font-size: 0.85rem;\n            font-weight: 600;\n            margin-bottom: 1rem;\n        }\n\n        h1 {\n            font-size: 2.5rem;\n            font-weight: 800;\n            color: var(--kopru-text);\n            margin-bottom: 1rem;\n\n            .gradient-text {\n                background: linear-gradient(135deg, var(--kopru-primary) 0%, var(--kopru-secondary) 100%);\n                -webkit-background-clip: text;\n                -webkit-text-fill-color: transparent;\n                background-clip: text;\n            }\n        }\n\n        p {\n            color: var(--kopru-text-secondary);\n            font-size: 1.1rem;\n            max-width: 600px;\n            margin: 0 auto;\n        }\n    }\n\n    .payment-grid {\n        display: grid;\n        grid-template-columns: 1fr;\n        gap: 2rem;\n\n        @media(min-width: 768px) {\n            grid-template-columns: 1fr 1.5fr;\n            align-items: start;\n        }\n    }\n\n    // Cards\n    .order-summary-card,\n    .payment-form-card,\n    .success-card {\n        background: #fff;\n        border-radius: var(--kopru-radius-lg);\n        border: 1px solid var(--kopru-border);\n        padding: 2rem;\n        box-shadow: var(--kopru-shadow-sm);\n    }\n\n    .summary-title,\n    .form-title {\n        display: flex;\n        align-items: center;\n        gap: 0.75rem;\n        font-size: 1.25rem;\n        font-weight: 700;\n        margin-bottom: 1.5rem;\n        color: var(--kopru-text);\n\n        i {\n            color: var(--kopru-primary);\n        }\n    }\n\n    .summary-item {\n        display: flex;\n        justify-content: space-between;\n        margin-bottom: 1rem;\n        font-size: 0.95rem;\n\n        .item-label {\n            color: var(--kopru-text-secondary);\n        }\n\n        .item-value {\n            font-weight: 600;\n            color: var(--kopru-text);\n            text-align: right;\n\n            &.address-text {\n                max-width: 60%;\n                line-height: 1.4;\n            }\n\n            &.free-text {\n                color: #10b981; // green\n            }\n\n            &.highlight {\n                font-size: 1.25rem;\n                color: var(--kopru-primary);\n                font-weight: 800;\n            }\n        }\n    }\n\n    .summary-divider {\n        height: 1px;\n        background: var(--kopru-border);\n        margin: 1.5rem 0;\n    }\n\n    // Form Fields\n    .form-row {\n        display: flex;\n        gap: 1rem;\n\n        .form-field {\n            flex: 1;\n        }\n    }\n\n    .form-field {\n        margin-bottom: 1.5rem;\n\n        label {\n            display: block;\n            margin-bottom: 0.5rem;\n            font-size: 0.9rem;\n            font-weight: 600;\n            color: var(--kopru-text);\n        }\n\n        :host ::ng-deep .p-inputtext {\n            width: 100%;\n            padding: 0.75rem;\n            border-radius: var(--kopru-radius-md);\n            border-color: var(--kopru-border);\n            font-family: inherit;\n\n            &:enabled:focus {\n                border-color: var(--kopru-primary);\n                box-shadow: 0 0 0 0.1rem rgba(92, 122, 107, 0.2);\n            }\n        }\n    }\n\n    .secure-badge {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        gap: 0.5rem;\n        font-size: 0.85rem;\n        color: #10b981;\n        background: rgba(16, 185, 129, 0.1);\n        padding: 0.75rem;\n        border-radius: var(--kopru-radius-md);\n        margin-top: 1rem;\n        font-weight: 600;\n    }\n\n    // Success State\n    .success-card {\n        text-align: center;\n        max-width: 600px;\n        margin: 0 auto;\n\n        .success-icon {\n            width: 80px;\n            height: 80px;\n            margin: 0 auto 1.5rem;\n            background: rgba(16, 185, 129, 0.1);\n            color: #10b981;\n            border-radius: 50%;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            font-size: 3rem;\n        }\n\n        h2 {\n            font-size: 2rem;\n            color: var(--kopru-text);\n            margin-bottom: 1rem;\n        }\n\n        p {\n            color: var(--kopru-text-secondary);\n            line-height: 1.6;\n            margin-bottom: 2rem;\n        }\n\n        .success-details {\n            background: var(--kopru-bg);\n            border-radius: var(--kopru-radius-md);\n            padding: 1.5rem;\n            text-align: left;\n            margin-bottom: 2rem;\n\n            .detail-item {\n                margin-bottom: 0.75rem;\n                font-size: 0.95rem;\n                color: var(--kopru-text);\n                line-height: 1.4;\n\n                strong {\n                    color: var(--kopru-text-secondary);\n                    margin-right: 0.5rem;\n                    display: inline-block;\n                    width: 70px;\n                }\n\n                &:last-child {\n                    margin-bottom: 0;\n                }\n            }\n        }\n\n        .success-actions {\n            display: flex;\n            gap: 1rem;\n            justify-content: center;\n\n            :host ::ng-deep .p-button {\n                padding: 0.75rem 1.5rem;\n            }\n        }\n    }\n}"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(PaymentComponent, { className: "PaymentComponent" }); })();
//# sourceMappingURL=payment.component.js.map