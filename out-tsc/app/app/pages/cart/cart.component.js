import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CartService } from '../../services/cart.service';
import { BUSINESS_TYPE_LABELS } from '../../models/food-listing.model';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/router";
import * as i3 from "primeng/button";
import * as i4 from "primeng/inputtextarea";
function CartComponent_Conditional_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵelement(1, "i", 8);
    i0.ɵɵelementStart(2, "h3");
    i0.ɵɵtext(3, "Sepetiniz Bo\u015F");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p");
    i0.ɵɵtext(5, "Hen\u00FCz sepetinize hi\u00E7bir ilan eklemediniz.");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(6, "p-button", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("rounded", true);
} }
function CartComponent_Conditional_13_For_3_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 11)(1, "div", 17)(2, "h4");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 18)(5, "span");
    i0.ɵɵelement(6, "i");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "span");
    i0.ɵɵelement(9, "i", 19);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(11, "p-button", 20);
    i0.ɵɵlistener("onClick", function CartComponent_Conditional_13_For_3_Template_p_button_onClick_11_listener() { const item_r3 = i0.ɵɵrestoreView(_r2).$implicit; const ctx_r3 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r3.removeItem(item_r3.id)); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(item_r3.title);
    i0.ɵɵadvance(3);
    i0.ɵɵclassMap(ctx_r3.getBusinessIcon(item_r3.businessType));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", item_r3.businessName, "");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", item_r3.quantity, "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("rounded", true)("text", true);
} }
function CartComponent_Conditional_13_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 7)(1, "div", 10);
    i0.ɵɵrepeaterCreate(2, CartComponent_Conditional_13_For_3_Template, 12, 7, "div", 11, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 12)(5, "h3");
    i0.ɵɵelement(6, "i", 13);
    i0.ɵɵtext(7, " Teslimat Adresi");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "div", 14)(9, "label");
    i0.ɵɵtext(10, "Yemeklerin teslim edilece\u011Fi kurumu ve tam adresini yaz\u0131n:");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "textarea", 15);
    i0.ɵɵtwoWayListener("ngModelChange", function CartComponent_Conditional_13_Template_textarea_ngModelChange_11_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r3 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r3.deliveryAddress, $event) || (ctx_r3.deliveryAddress = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵtext(12, "            ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "p-button", 16);
    i0.ɵɵlistener("onClick", function CartComponent_Conditional_13_Template_p_button_onClick_13_listener() { i0.ɵɵrestoreView(_r1); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.proceedToPayment()); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵrepeater(ctx_r3.items());
    i0.ɵɵadvance(9);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r3.deliveryAddress);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("rounded", true)("disabled", ctx_r3.items().length === 0 || !ctx_r3.deliveryAddress.trim());
} }
export class CartComponent {
    cart = inject(CartService);
    router = inject(Router);
    deliveryAddress = '';
    items = this.cart.cartItems;
    getBusinessLabel(type) {
        return BUSINESS_TYPE_LABELS[type] || 'İşletme';
    }
    getBusinessIcon(type) {
        const map = {
            'restaurant': 'pi pi-shop',
            'hotel': 'pi pi-building',
            'market': 'pi pi-shopping-bag',
            'bakery': 'pi pi-shopping-cart',
            'dormitory': 'pi pi-home'
        };
        return map[type] || 'pi pi-building';
    }
    removeItem(id) {
        this.cart.removeFromCart(id);
    }
    proceedToPayment() {
        if (this.items().length === 0 || !this.deliveryAddress.trim())
            return;
        // Pass delivery address via router state and navigate to global cart payment
        this.router.navigate(['/payment/cart'], { state: { deliveryAddress: this.deliveryAddress } });
    }
    static ɵfac = function CartComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || CartComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CartComponent, selectors: [["app-cart"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 14, vars: 2, consts: [[1, "cart-page", "page-enter"], [1, "section-container"], [1, "cart-wrapper"], [1, "page-header"], [1, "section-tag"], [1, "gradient-text"], [1, "empty-cart", "animate-fade-in-up"], [1, "cart-content", "animate-fade-in-up"], [1, "pi", "pi-shopping-cart"], ["label", "\u0130lanlar\u0131 \u0130ncele", "icon", "pi pi-arrow-right", "iconPos", "right", "routerLink", "/ilanlar", "styleClass", "continue-btn", 3, "rounded"], [1, "cart-items"], [1, "cart-item"], [1, "checkout-card"], [1, "pi", "pi-map-marker"], [1, "delivery-area"], ["pInputTextarea", "", "rows", "3", "placeholder", "Kurum Ad\u0131, Mahalle, Sokak, \u0130l\u00E7e, \u0130l...", 2, "width", "100%", "border-color", "var(--kopru-border)", "border-radius", "var(--kopru-radius-md)", "padding", "0.75rem", "font-family", "inherit", "resize", "none", 3, "ngModelChange", "ngModel"], ["label", "\u00D6demeye Ge\u00E7", "icon", "pi pi-credit-card", "styleClass", "checkout-btn p-button-lg", 3, "onClick", "rounded", "disabled"], [1, "item-info"], [1, "item-meta"], [1, "pi", "pi-box"], ["icon", "pi pi-trash", "pTooltip", "Sepetten \u00C7\u0131kar", "tooltipPosition", "left", "styleClass", "remove-btn", 3, "onClick", "rounded", "text"]], template: function CartComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "span", 4);
            i0.ɵɵtext(5, "Sepetim");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "h1");
            i0.ɵɵtext(7, "Talep ");
            i0.ɵɵelementStart(8, "span", 5);
            i0.ɵɵtext(9, "Sepeti");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(10, "p");
            i0.ɵɵtext(11, "\u0130htiya\u00E7 sahiplerine ula\u015Ft\u0131r\u0131lmak \u00FCzere se\u00E7ti\u011Finiz ilanlar.");
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(12, CartComponent_Conditional_12_Template, 7, 1, "div", 6)(13, CartComponent_Conditional_13_Template, 14, 3, "div", 7);
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵadvance(12);
            i0.ɵɵconditional(ctx.items().length === 0 ? 12 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.items().length > 0 ? 13 : -1);
        } }, dependencies: [FormsModule, i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgModel, RouterModule, i2.RouterLink, ButtonModule, i3.Button, InputTextareaModule, i4.InputTextarea], styles: [".cart-page[_ngcontent-%COMP%] {\n    padding: 6rem 1rem 4rem;\n    min-height: calc(100vh - 80px);\n    \n\n    background: var(--kopru-surface);\n}\n\n.cart-wrapper[_ngcontent-%COMP%] {\n    max-width: 800px;\n    margin: 0 auto;\n}\n\n.page-header[_ngcontent-%COMP%] {\n    margin-bottom: 2rem;\n\n    .section-tag {\n        display: inline-flex;\n        padding: 0.25rem 0.75rem;\n        background: rgba(var(--kopru-teal-rgb), 0.1);\n        color: var(--kopru-teal);\n        border-radius: 20px;\n        font-size: 0.85rem;\n        font-weight: 600;\n        margin-bottom: 0.5rem;\n        letter-spacing: 0.5px;\n        text-transform: uppercase;\n    }\n\n    h1 {\n        font-size: 2.5rem;\n        font-weight: 700;\n        margin-bottom: 0.5rem;\n    }\n\n    p {\n        color: var(--kopru-text-secondary);\n        font-size: 1.1rem;\n        max-width: 600px;\n    }\n}\n\n.empty-cart[_ngcontent-%COMP%] {\n    text-align: center;\n    padding: 4rem 2rem;\n    background: white;\n    border-radius: var(--kopru-radius-lg);\n    box-shadow: var(--kopru-shadow-sm);\n\n    i {\n        font-size: 4rem;\n        color: var(--kopru-text-muted);\n        margin-bottom: 1rem;\n    }\n\n    h3 {\n        font-size: 1.5rem;\n        margin-bottom: 0.5rem;\n        color: var(--kopru-text);\n    }\n\n    p {\n        color: var(--kopru-text-secondary);\n        margin-bottom: 1.5rem;\n    }\n\n    .continue-btn {\n        background: transparent;\n        color: var(--kopru-teal);\n        border: 2px solid var(--kopru-teal);\n        transition: all 0.3s ease;\n\n        &:hover {\n            background: var(--kopru-teal);\n            color: white;\n        }\n    }\n}\n\n.cart-items[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n    margin-bottom: 2rem;\n}\n\n.cart-item[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background: white;\n    padding: 1.5rem;\n    border-radius: var(--kopru-radius-md);\n    box-shadow: var(--kopru-shadow-sm);\n    transition: transform 0.2s ease, box-shadow 0.2s ease;\n\n    &:hover {\n        transform: translateY(-2px);\n        box-shadow: var(--kopru-shadow-md);\n    }\n\n    .item-info {\n        flex: 1;\n\n        h4 {\n            margin-bottom: 0.25rem;\n            font-size: 1.1rem;\n            color: var(--kopru-text);\n        }\n\n        .item-meta {\n            font-size: 0.9rem;\n            color: var(--kopru-text-secondary);\n            display: flex;\n            gap: 1rem;\n            align-items: center;\n\n            i {\n                margin-right: 0.25rem;\n            }\n        }\n    }\n\n    .remove-btn {\n        color: var(--kopru-danger);\n        background: rgba(239, 68, 68, 0.1);\n\n        &:hover {\n            background: var(--kopru-danger);\n            color: white;\n        }\n    }\n}\n\n.checkout-card[_ngcontent-%COMP%] {\n    background: white;\n    padding: 2rem;\n    border-radius: var(--kopru-radius-lg);\n    box-shadow: var(--kopru-shadow-md);\n\n    h3 {\n        font-size: 1.25rem;\n        margin-bottom: 1rem;\n        display: flex;\n        align-items: center;\n        gap: 0.5rem;\n        color: var(--kopru-text);\n    }\n\n    .delivery-area {\n        margin-bottom: 1.5rem;\n\n        label {\n            display: block;\n            margin-bottom: 0.5rem;\n            font-weight: 500;\n            color: var(--kopru-text);\n        }\n    }\n\n    .checkout-btn {\n        width: 100%;\n        background: linear-gradient(135deg, var(--kopru-teal), var(--kopru-blue));\n        border: none;\n        transition: all 0.3s ease;\n\n        &:hover:not(:disabled) {\n            transform: translateY(-2px);\n            box-shadow: 0 4px 12px rgba(45, 212, 191, 0.3);\n        }\n    }\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CartComponent, [{
        type: Component,
        args: [{ selector: 'app-cart', standalone: true, imports: [FormsModule, RouterModule, ButtonModule, InputTextareaModule], template: "<section class=\"cart-page page-enter\">\n  <div class=\"section-container\">\n    <div class=\"cart-wrapper\">\n\n      <div class=\"page-header\">\n        <span class=\"section-tag\">Sepetim</span>\n        <h1>Talep <span class=\"gradient-text\">Sepeti</span></h1>\n        <p>\u0130htiya\u00E7 sahiplerine ula\u015Ft\u0131r\u0131lmak \u00FCzere se\u00E7ti\u011Finiz ilanlar.</p>\n      </div>\n\n      @if (items().length === 0) {\n        <div class=\"empty-cart animate-fade-in-up\">\n          <i class=\"pi pi-shopping-cart\"></i>\n          <h3>Sepetiniz Bo\u015F</h3>\n          <p>Hen\u00FCz sepetinize hi\u00E7bir ilan eklemediniz.</p>\n          <p-button label=\"\u0130lanlar\u0131 \u0130ncele\" icon=\"pi pi-arrow-right\" iconPos=\"right\" [rounded]=\"true\"\n            routerLink=\"/ilanlar\" styleClass=\"continue-btn\">\n          </p-button>\n        </div>\n      }\n\n      @if (items().length > 0) {\n        <div class=\"cart-content animate-fade-in-up\">\n          <div class=\"cart-items\">\n            @for (item of items(); track item) {\n              <div class=\"cart-item\">\n                <div class=\"item-info\">\n                  <h4>{{ item.title }}</h4>\n                  <div class=\"item-meta\">\n                    <span><i [class]=\"getBusinessIcon(item.businessType)\"></i> {{ item.businessName\n                  }}</span>\n                  <span><i class=\"pi pi-box\"></i> {{ item.quantity }}</span>\n                </div>\n              </div>\n              <p-button icon=\"pi pi-trash\" [rounded]=\"true\" [text]=\"true\" (onClick)=\"removeItem(item.id)\"\n                pTooltip=\"Sepetten \u00C7\u0131kar\" tooltipPosition=\"left\" styleClass=\"remove-btn\">\n              </p-button>\n            </div>\n          }\n        </div>\n        <div class=\"checkout-card\">\n          <h3><i class=\"pi pi-map-marker\"></i> Teslimat Adresi</h3>\n          <div class=\"delivery-area\">\n            <label>Yemeklerin teslim edilece\u011Fi kurumu ve tam adresini yaz\u0131n:</label>\n            <textarea pInputTextarea [(ngModel)]=\"deliveryAddress\" rows=\"3\"\n              placeholder=\"Kurum Ad\u0131, Mahalle, Sokak, \u0130l\u00E7e, \u0130l...\"\n              style=\"width: 100%; border-color: var(--kopru-border); border-radius: var(--kopru-radius-md); padding: 0.75rem; font-family: inherit; resize: none;\">\n            </textarea>\n          </div>\n          <p-button label=\"\u00D6demeye Ge\u00E7\" icon=\"pi pi-credit-card\" [rounded]=\"true\"\n            [disabled]=\"items().length === 0 || !deliveryAddress.trim()\" (onClick)=\"proceedToPayment()\"\n            styleClass=\"checkout-btn p-button-lg\">\n          </p-button>\n        </div>\n      </div>\n    }\n\n  </div>\n</div>\n</section>", styles: [".cart-page {\n    padding: 6rem 1rem 4rem;\n    min-height: calc(100vh - 80px);\n    /* header height */\n    background: var(--kopru-surface);\n}\n\n.cart-wrapper {\n    max-width: 800px;\n    margin: 0 auto;\n}\n\n.page-header {\n    margin-bottom: 2rem;\n\n    .section-tag {\n        display: inline-flex;\n        padding: 0.25rem 0.75rem;\n        background: rgba(var(--kopru-teal-rgb), 0.1);\n        color: var(--kopru-teal);\n        border-radius: 20px;\n        font-size: 0.85rem;\n        font-weight: 600;\n        margin-bottom: 0.5rem;\n        letter-spacing: 0.5px;\n        text-transform: uppercase;\n    }\n\n    h1 {\n        font-size: 2.5rem;\n        font-weight: 700;\n        margin-bottom: 0.5rem;\n    }\n\n    p {\n        color: var(--kopru-text-secondary);\n        font-size: 1.1rem;\n        max-width: 600px;\n    }\n}\n\n.empty-cart {\n    text-align: center;\n    padding: 4rem 2rem;\n    background: white;\n    border-radius: var(--kopru-radius-lg);\n    box-shadow: var(--kopru-shadow-sm);\n\n    i {\n        font-size: 4rem;\n        color: var(--kopru-text-muted);\n        margin-bottom: 1rem;\n    }\n\n    h3 {\n        font-size: 1.5rem;\n        margin-bottom: 0.5rem;\n        color: var(--kopru-text);\n    }\n\n    p {\n        color: var(--kopru-text-secondary);\n        margin-bottom: 1.5rem;\n    }\n\n    .continue-btn {\n        background: transparent;\n        color: var(--kopru-teal);\n        border: 2px solid var(--kopru-teal);\n        transition: all 0.3s ease;\n\n        &:hover {\n            background: var(--kopru-teal);\n            color: white;\n        }\n    }\n}\n\n.cart-items {\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n    margin-bottom: 2rem;\n}\n\n.cart-item {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background: white;\n    padding: 1.5rem;\n    border-radius: var(--kopru-radius-md);\n    box-shadow: var(--kopru-shadow-sm);\n    transition: transform 0.2s ease, box-shadow 0.2s ease;\n\n    &:hover {\n        transform: translateY(-2px);\n        box-shadow: var(--kopru-shadow-md);\n    }\n\n    .item-info {\n        flex: 1;\n\n        h4 {\n            margin-bottom: 0.25rem;\n            font-size: 1.1rem;\n            color: var(--kopru-text);\n        }\n\n        .item-meta {\n            font-size: 0.9rem;\n            color: var(--kopru-text-secondary);\n            display: flex;\n            gap: 1rem;\n            align-items: center;\n\n            i {\n                margin-right: 0.25rem;\n            }\n        }\n    }\n\n    .remove-btn {\n        color: var(--kopru-danger);\n        background: rgba(239, 68, 68, 0.1);\n\n        &:hover {\n            background: var(--kopru-danger);\n            color: white;\n        }\n    }\n}\n\n.checkout-card {\n    background: white;\n    padding: 2rem;\n    border-radius: var(--kopru-radius-lg);\n    box-shadow: var(--kopru-shadow-md);\n\n    h3 {\n        font-size: 1.25rem;\n        margin-bottom: 1rem;\n        display: flex;\n        align-items: center;\n        gap: 0.5rem;\n        color: var(--kopru-text);\n    }\n\n    .delivery-area {\n        margin-bottom: 1.5rem;\n\n        label {\n            display: block;\n            margin-bottom: 0.5rem;\n            font-weight: 500;\n            color: var(--kopru-text);\n        }\n    }\n\n    .checkout-btn {\n        width: 100%;\n        background: linear-gradient(135deg, var(--kopru-teal), var(--kopru-blue));\n        border: none;\n        transition: all 0.3s ease;\n\n        &:hover:not(:disabled) {\n            transform: translateY(-2px);\n            box-shadow: 0 4px 12px rgba(45, 212, 191, 0.3);\n        }\n    }\n}"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CartComponent, { className: "CartComponent" }); })();
//# sourceMappingURL=cart.component.js.map