import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "primeng/button";
function HowItWorksComponent_For_15_Conditional_10_For_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 22);
    i0.ɵɵelement(1, "i", 23);
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const detail_r1 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(detail_r1);
} }
function HowItWorksComponent_For_15_Conditional_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 21);
    i0.ɵɵrepeaterCreate(1, HowItWorksComponent_For_15_Conditional_10_For_2_Template, 4, 1, "div", 22, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const step_r2 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵrepeater(step_r2.details);
} }
function HowItWorksComponent_For_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵelement(1, "div", 17);
    i0.ɵɵelementStart(2, "div", 18)(3, "span", 19);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "h3");
    i0.ɵɵelement(6, "i", 20);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "p");
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(10, HowItWorksComponent_For_15_Conditional_10_Template, 3, 0, "div", 21);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const step_r2 = ctx.$implicit;
    const ɵ$index_25_r3 = ctx.$index;
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1("Ad\u0131m ", ɵ$index_25_r3 + 1, "");
    i0.ɵɵadvance(2);
    i0.ɵɵclassMap(step_r2.icon);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(step_r2.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(step_r2.description);
    i0.ɵɵadvance();
    i0.ɵɵconditional(step_r2.details ? 10 : -1);
} }
function HowItWorksComponent_For_27_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 11)(1, "div", 24);
    i0.ɵɵelement(2, "i");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "h3");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const role_r4 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵclassMap(role_r4.icon);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(role_r4.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(role_r4.description);
} }
export class HowItWorksComponent {
    steps = [
        { icon: 'pi pi-upload', title: 'Isletme Ilan Olusturur', description: 'Elinde kalan gida urunlerini platforma kayit eder.', details: ['Urun turu ve miktari belirtilir', 'Son kullanma tarihi girilir', 'Konum bilgisi eklenir'] },
        { icon: 'pi pi-search', title: 'Alici Kurumlar Inceler', description: 'Asevleri, barinaklari ve diger kurumlar aktif ilanlari goruntuler.', details: ['Kategori ve konuma gore filtreleme', 'Detayli urun bilgisi goruntuleme', 'Talep olusturma'] },
        { icon: 'pi pi-check-circle', title: 'Eslesme Onaylanir', description: 'Talep onaylanan ilanlar icin kurye atanir.', details: ['Otomatik bildirim sistemi', 'Kurye atama sureci', 'Teslim zamani belirlenir'] },
        { icon: 'pi pi-truck', title: 'Kurye ile Teslimat', description: 'Kuryelerimiz gidayi hijyenik kosullarda teslim eder.', details: ['Soguk zincir uyumlulugu', 'Canli takip sistemi', 'Teslim onay mekanizmasi'] }
    ];
    roles = [
        { icon: 'pi pi-building', title: 'Gida Veren Isletme', description: 'Marketler, restoranlar, oteller, pastaneler ve yurt yemekhaneleri.', features: ['Hizli ilan olusturma', 'Stok takip paneli', 'Teslimat durumu izleme', 'Raporlama ve istatistik'] },
        { icon: 'pi pi-heart', title: 'Alici Kurum', description: 'Asevleri, hayvan barinaklari, kent lokantlari ve halk ekmek bufeleri.', features: ['Ilan arama ve filtreleme', 'Tek tikla talep olusturma', 'Teslimat takibi', 'Gecmis siparisler'] },
        { icon: 'pi pi-truck', title: 'Kurye', description: 'Gidayi isletmeden alici kuruma hijyenik kosullarda ulastiran tasimacilar.', features: ['Rota optimizasyonu', 'Canli konum paylasimi', 'Teslimat onaylama', 'Kazanc takibi'] }
    ];
    static ɵfac = function HowItWorksComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || HowItWorksComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: HowItWorksComponent, selectors: [["app-how-it-works"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 38, vars: 3, consts: [[1, "how-it-works-page"], [1, "page-header"], [1, "section-container"], [1, "section-tag"], [1, "gradient-text"], [1, "timeline-section"], [1, "timeline"], [1, "timeline-item"], [1, "roles-section"], [1, "roles-header"], [1, "roles-grid"], [1, "role-card"], [1, "cta-section"], [1, "cta-card"], [2, "display", "flex", "gap", "1rem", "justify-content", "center"], ["label", "\u0130lan Olu\u015Ftur", "icon", "pi pi-plus", "routerLink", "/ilan-ver", "styleClass", "cta-btn", 3, "rounded"], ["label", "\u0130lanlar\u0131 \u0130ncele", "icon", "pi pi-search", "routerLink", "/ilanlar", 3, "rounded", "outlined"], [1, "timeline-dot"], [1, "timeline-card"], [1, "step-num"], [2, "margin-right", "0.5rem", "color", "var(--kopru-primary)"], [1, "card-details"], [1, "detail-item"], [1, "pi", "pi-check", 2, "color", "var(--kopru-primary)", "font-size", "0.75rem"], [1, "role-icon"]], template: function HowItWorksComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
            i0.ɵɵtext(4, "S\u00FCrecimiz");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "h1");
            i0.ɵɵtext(6, "Nas\u0131l ");
            i0.ɵɵelementStart(7, "span", 4);
            i0.ɵɵtext(8, "\u00C7al\u0131\u015F\u0131r");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(9, "p");
            i0.ɵɵtext(10, "Platform \u00FCzerinden g\u0131da israf\u0131n\u0131 \u00F6nlemenin basit ve etkili yolu");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(11, "div", 5)(12, "div", 2)(13, "div", 6);
            i0.ɵɵrepeaterCreate(14, HowItWorksComponent_For_15_Template, 11, 6, "div", 7, i0.ɵɵrepeaterTrackByIdentity);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(16, "div", 8)(17, "div", 2)(18, "div", 9)(19, "span", 3);
            i0.ɵɵtext(20, "Roller");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(21, "h2");
            i0.ɵɵtext(22, "Platformdaki ");
            i0.ɵɵelementStart(23, "span", 4);
            i0.ɵɵtext(24, "Roller");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(25, "div", 10);
            i0.ɵɵrepeaterCreate(26, HowItWorksComponent_For_27_Template, 7, 4, "div", 11, i0.ɵɵrepeaterTrackByIdentity);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(28, "div", 12)(29, "div", 2)(30, "div", 13)(31, "h2");
            i0.ɵɵtext(32, "Haz\u0131r M\u0131s\u0131n\u0131z?");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(33, "p");
            i0.ɵɵtext(34, "Hemen platforma kat\u0131larak g\u0131da israf\u0131n\u0131 \u00F6nlemeye ba\u015Flay\u0131n.");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(35, "div", 14);
            i0.ɵɵelement(36, "p-button", 15)(37, "p-button", 16);
            i0.ɵɵelementEnd()()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(14);
            i0.ɵɵrepeater(ctx.steps);
            i0.ɵɵadvance(12);
            i0.ɵɵrepeater(ctx.roles);
            i0.ɵɵadvance(10);
            i0.ɵɵproperty("rounded", true);
            i0.ɵɵadvance();
            i0.ɵɵproperty("rounded", true)("outlined", true);
        } }, dependencies: [RouterModule, i1.RouterLink, ButtonModule, i2.Button], styles: [".how-it-works-page[_ngcontent-%COMP%] {\n    padding-top: 80px;\n    min-height: 100vh;\n    background: var(--kopru-bg);\n}\n\n.page-header[_ngcontent-%COMP%] {\n    text-align: center;\n    padding: 3rem 0;\n    background: linear-gradient(180deg, var(--kopru-primary-50) 0%, var(--kopru-bg) 100%);\n\n    h1 {\n        font-size: 2.5rem;\n        font-weight: 800;\n        margin-bottom: 0.5rem;\n    }\n\n    p {\n        color: var(--kopru-text-muted);\n        font-size: 1.05rem;\n    }\n}\n\n\n\n.timeline-section[_ngcontent-%COMP%] {\n    padding: 4rem 0;\n}\n\n.timeline[_ngcontent-%COMP%] {\n    position: relative;\n    max-width: 700px;\n    margin: 0 auto;\n    padding-left: 40px;\n}\n\n.timeline[_ngcontent-%COMP%]::before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 18px;\n    bottom: 0;\n    width: 2px;\n    background: var(--kopru-primary);\n    border-radius: 1px;\n}\n\n.timeline-item[_ngcontent-%COMP%] {\n    position: relative;\n    padding-bottom: 3rem;\n}\n\n.timeline-dot[_ngcontent-%COMP%] {\n    position: absolute;\n    left: -28px;\n    top: 4px;\n    width: 24px;\n    height: 24px;\n    border-radius: 50%;\n    background: var(--kopru-primary);\n    border: 3px solid #fff;\n    box-shadow: var(--kopru-shadow-md);\n}\n\n.timeline-card[_ngcontent-%COMP%] {\n    background: #fff;\n    border: 1px solid var(--kopru-border);\n    border-radius: 16px;\n    padding: 1.75rem;\n    box-shadow: var(--kopru-shadow-sm);\n    transition: all 0.3s ease;\n\n    &:hover {\n        border-color: var(--kopru-primary-100);\n        transform: translateX(8px);\n        box-shadow: var(--kopru-shadow-md);\n    }\n\n    .step-num {\n        display: inline-block;\n        font-size: 0.7rem;\n        font-weight: 700;\n        color: var(--kopru-primary);\n        background: var(--kopru-primary-50);\n        padding: 0.3rem 0.75rem;\n        border-radius: 6px;\n        margin-bottom: 0.75rem;\n        text-transform: uppercase;\n        letter-spacing: 1px;\n    }\n\n    h3 {\n        font-size: 1.15rem;\n        font-weight: 700;\n        color: var(--kopru-text);\n        margin-bottom: 0.5rem;\n    }\n\n    p {\n        color: var(--kopru-text-muted);\n        font-size: 0.9rem;\n        line-height: 1.7;\n    }\n}\n\n\n\n.roles-section[_ngcontent-%COMP%] {\n    padding: 4rem 0 6rem;\n}\n\n.roles-header[_ngcontent-%COMP%] {\n    text-align: center;\n    margin-bottom: 3rem;\n\n    h2 {\n        font-size: 2rem;\n        font-weight: 800;\n        margin-bottom: 0.5rem;\n    }\n\n    p {\n        color: var(--kopru-text-muted);\n        font-size: 1rem;\n    }\n}\n\n.roles-grid[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    gap: 1.5rem;\n    max-width: 900px;\n    margin: 0 auto;\n}\n\n.role-card[_ngcontent-%COMP%] {\n    background: #fff;\n    border: 1px solid var(--kopru-border);\n    border-radius: 20px;\n    padding: 2rem;\n    text-align: center;\n    transition: all 0.3s ease;\n    box-shadow: var(--kopru-shadow-sm);\n\n    &:hover {\n        border-color: var(--kopru-primary-100);\n        transform: translateY(-4px);\n        box-shadow: var(--kopru-shadow-lg);\n    }\n\n    .role-icon {\n        width: 56px;\n        height: 56px;\n        border-radius: 16px;\n        background: var(--kopru-primary-50);\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        margin: 0 auto 1.25rem;\n        font-size: 1.3rem;\n        color: var(--kopru-primary);\n    }\n\n    h3 {\n        font-size: 1.05rem;\n        font-weight: 700;\n        color: var(--kopru-text);\n        margin-bottom: 0.75rem;\n    }\n\n    p {\n        color: var(--kopru-text-muted);\n        font-size: 0.85rem;\n        line-height: 1.7;\n    }\n}\n\n\n\n.cta-section[_ngcontent-%COMP%] {\n    padding: 0 0 6rem;\n\n    .section-container {\n        max-width: 1200px;\n        margin: 0 auto;\n        padding: 0 1.5rem;\n    }\n}\n\n.cta-card[_ngcontent-%COMP%] {\n    background: var(--kopru-primary-50);\n    border: 1px solid var(--kopru-primary-100);\n    border-radius: 24px;\n    padding: 3rem;\n    text-align: center;\n\n    h2 {\n        font-size: 2rem;\n        font-weight: 800;\n        margin-bottom: 0.75rem;\n    }\n\n    p {\n        color: var(--kopru-text-secondary);\n        margin-bottom: 1.5rem;\n    }\n}\n\n[_nghost-%COMP%]     .cta-btn {\n    background: var(--kopru-primary) !important;\n    border: none !important;\n    padding: 0.85rem 2rem !important;\n}\n\n@media (max-width: 768px) {\n    .page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n        font-size: 2rem;\n    }\n\n    .roles-grid[_ngcontent-%COMP%] {\n        grid-template-columns: 1fr;\n    }\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HowItWorksComponent, [{
        type: Component,
        args: [{ selector: 'app-how-it-works', standalone: true, imports: [RouterModule, ButtonModule], template: "<section class=\"how-it-works-page\">\n  <div class=\"page-header\">\n    <div class=\"section-container\">\n      <span class=\"section-tag\">S\u00FCrecimiz</span>\n      <h1>Nas\u0131l <span class=\"gradient-text\">\u00C7al\u0131\u015F\u0131r</span></h1>\n      <p>Platform \u00FCzerinden g\u0131da israf\u0131n\u0131 \u00F6nlemenin basit ve etkili yolu</p>\n    </div>\n  </div>\n\n  <div class=\"timeline-section\">\n    <div class=\"section-container\">\n      <div class=\"timeline\">\n        @for (step of steps; track step; let i = $index) {\n          <div class=\"timeline-item\">\n            <div class=\"timeline-dot\"></div>\n            <div class=\"timeline-card\">\n              <span class=\"step-num\">Ad\u0131m {{ i + 1 }}</span>\n              <h3><i [class]=\"step.icon\" style=\"margin-right: 0.5rem; color: var(--kopru-primary)\"></i>{{\n            step.title }}</h3>\n            <p>{{ step.description }}</p>\n            @if (step.details) {\n              <div class=\"card-details\">\n                @for (detail of step.details; track detail) {\n                  <div class=\"detail-item\">\n                    <i class=\"pi pi-check\" style=\"color: var(--kopru-primary); font-size: 0.75rem\"></i>\n                    <span>{{ detail }}</span>\n                  </div>\n                }\n              </div>\n            }\n          </div>\n        </div>\n      }\n    </div>\n  </div>\n</div>\n\n<div class=\"roles-section\">\n  <div class=\"section-container\">\n    <div class=\"roles-header\">\n      <span class=\"section-tag\">Roller</span>\n      <h2>Platformdaki <span class=\"gradient-text\">Roller</span></h2>\n    </div>\n    <div class=\"roles-grid\">\n      @for (role of roles; track role) {\n        <div class=\"role-card\">\n          <div class=\"role-icon\"><i [class]=\"role.icon\"></i></div>\n          <h3>{{ role.title }}</h3>\n          <p>{{ role.description }}</p>\n        </div>\n      }\n    </div>\n  </div>\n</div>\n\n<div class=\"cta-section\">\n  <div class=\"section-container\">\n    <div class=\"cta-card\">\n      <h2>Haz\u0131r M\u0131s\u0131n\u0131z?</h2>\n      <p>Hemen platforma kat\u0131larak g\u0131da israf\u0131n\u0131 \u00F6nlemeye ba\u015Flay\u0131n.</p>\n      <div style=\"display: flex; gap: 1rem; justify-content: center\">\n        <p-button label=\"\u0130lan Olu\u015Ftur\" icon=\"pi pi-plus\" [rounded]=\"true\" routerLink=\"/ilan-ver\"\n        styleClass=\"cta-btn\"></p-button>\n        <p-button label=\"\u0130lanlar\u0131 \u0130ncele\" icon=\"pi pi-search\" [rounded]=\"true\" [outlined]=\"true\"\n        routerLink=\"/ilanlar\"></p-button>\n      </div>\n    </div>\n  </div>\n</div>\n</section>", styles: [".how-it-works-page {\n    padding-top: 80px;\n    min-height: 100vh;\n    background: var(--kopru-bg);\n}\n\n.page-header {\n    text-align: center;\n    padding: 3rem 0;\n    background: linear-gradient(180deg, var(--kopru-primary-50) 0%, var(--kopru-bg) 100%);\n\n    h1 {\n        font-size: 2.5rem;\n        font-weight: 800;\n        margin-bottom: 0.5rem;\n    }\n\n    p {\n        color: var(--kopru-text-muted);\n        font-size: 1.05rem;\n    }\n}\n\n/* Timeline */\n.timeline-section {\n    padding: 4rem 0;\n}\n\n.timeline {\n    position: relative;\n    max-width: 700px;\n    margin: 0 auto;\n    padding-left: 40px;\n}\n\n.timeline::before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 18px;\n    bottom: 0;\n    width: 2px;\n    background: var(--kopru-primary);\n    border-radius: 1px;\n}\n\n.timeline-item {\n    position: relative;\n    padding-bottom: 3rem;\n}\n\n.timeline-dot {\n    position: absolute;\n    left: -28px;\n    top: 4px;\n    width: 24px;\n    height: 24px;\n    border-radius: 50%;\n    background: var(--kopru-primary);\n    border: 3px solid #fff;\n    box-shadow: var(--kopru-shadow-md);\n}\n\n.timeline-card {\n    background: #fff;\n    border: 1px solid var(--kopru-border);\n    border-radius: 16px;\n    padding: 1.75rem;\n    box-shadow: var(--kopru-shadow-sm);\n    transition: all 0.3s ease;\n\n    &:hover {\n        border-color: var(--kopru-primary-100);\n        transform: translateX(8px);\n        box-shadow: var(--kopru-shadow-md);\n    }\n\n    .step-num {\n        display: inline-block;\n        font-size: 0.7rem;\n        font-weight: 700;\n        color: var(--kopru-primary);\n        background: var(--kopru-primary-50);\n        padding: 0.3rem 0.75rem;\n        border-radius: 6px;\n        margin-bottom: 0.75rem;\n        text-transform: uppercase;\n        letter-spacing: 1px;\n    }\n\n    h3 {\n        font-size: 1.15rem;\n        font-weight: 700;\n        color: var(--kopru-text);\n        margin-bottom: 0.5rem;\n    }\n\n    p {\n        color: var(--kopru-text-muted);\n        font-size: 0.9rem;\n        line-height: 1.7;\n    }\n}\n\n/* Roles */\n.roles-section {\n    padding: 4rem 0 6rem;\n}\n\n.roles-header {\n    text-align: center;\n    margin-bottom: 3rem;\n\n    h2 {\n        font-size: 2rem;\n        font-weight: 800;\n        margin-bottom: 0.5rem;\n    }\n\n    p {\n        color: var(--kopru-text-muted);\n        font-size: 1rem;\n    }\n}\n\n.roles-grid {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    gap: 1.5rem;\n    max-width: 900px;\n    margin: 0 auto;\n}\n\n.role-card {\n    background: #fff;\n    border: 1px solid var(--kopru-border);\n    border-radius: 20px;\n    padding: 2rem;\n    text-align: center;\n    transition: all 0.3s ease;\n    box-shadow: var(--kopru-shadow-sm);\n\n    &:hover {\n        border-color: var(--kopru-primary-100);\n        transform: translateY(-4px);\n        box-shadow: var(--kopru-shadow-lg);\n    }\n\n    .role-icon {\n        width: 56px;\n        height: 56px;\n        border-radius: 16px;\n        background: var(--kopru-primary-50);\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        margin: 0 auto 1.25rem;\n        font-size: 1.3rem;\n        color: var(--kopru-primary);\n    }\n\n    h3 {\n        font-size: 1.05rem;\n        font-weight: 700;\n        color: var(--kopru-text);\n        margin-bottom: 0.75rem;\n    }\n\n    p {\n        color: var(--kopru-text-muted);\n        font-size: 0.85rem;\n        line-height: 1.7;\n    }\n}\n\n/* CTA */\n.cta-section {\n    padding: 0 0 6rem;\n\n    .section-container {\n        max-width: 1200px;\n        margin: 0 auto;\n        padding: 0 1.5rem;\n    }\n}\n\n.cta-card {\n    background: var(--kopru-primary-50);\n    border: 1px solid var(--kopru-primary-100);\n    border-radius: 24px;\n    padding: 3rem;\n    text-align: center;\n\n    h2 {\n        font-size: 2rem;\n        font-weight: 800;\n        margin-bottom: 0.75rem;\n    }\n\n    p {\n        color: var(--kopru-text-secondary);\n        margin-bottom: 1.5rem;\n    }\n}\n\n:host ::ng-deep .cta-btn {\n    background: var(--kopru-primary) !important;\n    border: none !important;\n    padding: 0.85rem 2rem !important;\n}\n\n@media (max-width: 768px) {\n    .page-header h1 {\n        font-size: 2rem;\n    }\n\n    .roles-grid {\n        grid-template-columns: 1fr;\n    }\n}"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(HowItWorksComponent, { className: "HowItWorksComponent" }); })();
//# sourceMappingURL=how-it-works.component.js.map