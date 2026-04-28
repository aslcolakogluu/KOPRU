import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "primeng/button";
function AboutComponent_For_32_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 11)(1, "div", 21);
    i0.ɵɵelement(2, "i");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "h3");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const v_r1 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵclassMap(v_r1.icon);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(v_r1.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(v_r1.desc);
} }
function AboutComponent_For_46_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 15)(1, "span", 22);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span", 23);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const s_r2 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(s_r2.value);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(s_r2.label);
} }
export class AboutComponent {
    values = [
        { icon: 'pi pi-heart', title: 'Sosyal Sorumluluk', desc: 'Her gun tonlarca gida israf olurken, ihtiyac sahiplerine ulastirilmayi bekliyor. Biz bu kopruyu kuruyoruz.' },
        { icon: 'pi pi-globe', title: 'Surdurulebilirlik', desc: 'Gida israfini azaltarak karbon ayak izimizi kucultuyoruz ve daha yasanabilir bir gelecek icin calisiyoruz.' },
        { icon: 'pi pi-users', title: 'Topluluk', desc: 'Isletmeler, kurumlar ve gonullulerden olusan guclu bir topluluk ile birlikte hareket ediyoruz.' },
        { icon: 'pi pi-shield', title: 'Guvenilirlik', desc: 'Hijyen standartlarina uygun, guvenli ve seffaf bir surec ile gida guvenligi saglanir.' }
    ];
    stats = [
        { value: '1,247+', label: 'Porsiyon Kurtarildi' },
        { value: '186', label: 'Partner Isletme' },
        { value: '42', label: 'Alici Kurum' },
        { value: '34', label: 'Aktif Kurye' }
    ];
    team = [
        { name: 'Proje Ekibi', role: 'Kurucu Takim', desc: 'Gida israfini onleme vizyonuyla yola cikan, teknolojiyi sosyal fayda icin kullanan bir ekip.' }
    ];
    static ɵfac = function AboutComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AboutComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AboutComponent, selectors: [["app-about"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 57, vars: 3, consts: [[1, "about-page"], [1, "page-header"], [1, "section-container"], [1, "section-tag"], [1, "gradient-text"], [1, "mission-section"], [1, "mission-card"], [1, "pi", "pi-flag"], [1, "values-section"], [1, "values-header"], [1, "values-grid"], [1, "value-card"], [1, "impact-section"], [1, "impact-header"], [1, "impact-grid"], [1, "impact-card"], [1, "cta-section"], [1, "cta-card"], [2, "display", "flex", "gap", "1rem", "justify-content", "center"], ["label", "\u0130lan Olu\u015Ftur", "icon", "pi pi-plus", "routerLink", "/ilan-ver", "styleClass", "cta-btn", 3, "rounded"], ["label", "\u0130leti\u015Fime Ge\u00E7", "icon", "pi pi-envelope", 3, "rounded", "outlined"], [1, "value-icon"], [1, "impact-num"], [1, "impact-label"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
            i0.ɵɵtext(4, "Hakk\u0131m\u0131zda");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "h1");
            i0.ɵɵtext(6, "K\u00F6pr\u00FC ");
            i0.ɵɵelementStart(7, "span", 4);
            i0.ɵɵtext(8, "Nedir?");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(9, "p");
            i0.ɵɵtext(10, "K\u00F6pr\u00FC, i\u015Fletmelerden kalan g\u0131day\u0131 ihtiya\u00E7 sahiplerine ula\u015Ft\u0131ran bir sosyal sorumluluk platformudur.");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(11, "div", 5)(12, "div", 2)(13, "div", 6)(14, "h2");
            i0.ɵɵelement(15, "i", 7);
            i0.ɵɵtext(16, " Misyonumuz");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(17, "p");
            i0.ɵɵtext(18, " T\u00FCrkiye'de her y\u0131l milyonlarca ton g\u0131da israf ediliyor. Marketlerden son kullanma tarihi yakla\u015Fan \u00FCr\u00FCnler, restoranlardan kapan\u0131\u015F saatinde kalan yemekler, otellerden kullan\u0131lmayan b\u00FCfe yemekleri, pastanelerden kalan tatl\u0131lar ve yurt yemekhanelerinden artan porsiyonlar... ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(19, "p");
            i0.ɵɵtext(20, " T\u00FCm bu g\u0131dalar, a\u015Fevlerine, hayvan bar\u0131naklar\u0131na, kent lokantalar\u0131na ve halk ekmek b\u00FCfelerine kuryelerimiz arac\u0131l\u0131\u011F\u0131 ile ula\u015Ft\u0131r\u0131l\u0131r. ");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(21, "div", 8)(22, "div", 2)(23, "div", 9)(24, "span", 3);
            i0.ɵɵtext(25, "De\u011Ferlerimiz");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(26, "h2");
            i0.ɵɵtext(27, "Temel ");
            i0.ɵɵelementStart(28, "span", 4);
            i0.ɵɵtext(29, "De\u011Ferler");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(30, "div", 10);
            i0.ɵɵrepeaterCreate(31, AboutComponent_For_32_Template, 7, 4, "div", 11, i0.ɵɵrepeaterTrackByIdentity);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(33, "div", 12)(34, "div", 2)(35, "div", 13)(36, "span", 3);
            i0.ɵɵtext(37, "Etkimiz");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(38, "h2");
            i0.ɵɵtext(39, "Rakamlarla ");
            i0.ɵɵelementStart(40, "span", 4);
            i0.ɵɵtext(41, "K\u00F6pr\u00FC");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(42, "p");
            i0.ɵɵtext(43, "Platformumuzun \u015Fimdiye kadarki etkisi");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(44, "div", 14);
            i0.ɵɵrepeaterCreate(45, AboutComponent_For_46_Template, 5, 2, "div", 15, i0.ɵɵrepeaterTrackByIdentity);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(47, "div", 16)(48, "div", 2)(49, "div", 17)(50, "h2");
            i0.ɵɵtext(51, "Siz de Bu K\u00F6pr\u00FCn\u00FCn Par\u00E7as\u0131 Olun");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(52, "p");
            i0.ɵɵtext(53, "\u0130\u015Fletmeniz veya kurumunuzla platforma kat\u0131larak g\u0131da israf\u0131na birlikte dur diyelim.");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(54, "div", 18);
            i0.ɵɵelement(55, "p-button", 19)(56, "p-button", 20);
            i0.ɵɵelementEnd()()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(31);
            i0.ɵɵrepeater(ctx.values);
            i0.ɵɵadvance(14);
            i0.ɵɵrepeater(ctx.stats);
            i0.ɵɵadvance(10);
            i0.ɵɵproperty("rounded", true);
            i0.ɵɵadvance();
            i0.ɵɵproperty("rounded", true)("outlined", true);
        } }, dependencies: [RouterModule, i1.RouterLink, ButtonModule, i2.Button], styles: [".about-page[_ngcontent-%COMP%] {\n    padding-top: 80px;\n    min-height: 100vh;\n    background: var(--kopru-bg);\n}\n\n.page-header[_ngcontent-%COMP%] {\n    text-align: center;\n    padding: 3rem 0;\n    background: linear-gradient(180deg, var(--kopru-primary-50) 0%, var(--kopru-bg) 100%);\n\n    h1 {\n        font-size: 2.5rem;\n        font-weight: 800;\n        margin-bottom: 0.5rem;\n    }\n\n    p {\n        color: var(--kopru-text-muted);\n        font-size: 1.05rem;\n    }\n}\n\n\n\n.mission-section[_ngcontent-%COMP%] {\n    padding: 4rem 0;\n}\n\n.mission-card[_ngcontent-%COMP%] {\n    max-width: 800px;\n    margin: 0 auto;\n    background: #fff;\n    border: 1px solid var(--kopru-border);\n    border-radius: 24px;\n    padding: 3rem;\n    box-shadow: var(--kopru-shadow-md);\n\n    h2 {\n        font-size: 1.5rem;\n        font-weight: 800;\n        margin-bottom: 1rem;\n        display: flex;\n        align-items: center;\n        gap: 0.75rem;\n\n        i {\n            color: var(--kopru-primary);\n        }\n    }\n\n    p {\n        color: var(--kopru-text-secondary);\n        font-size: 1rem;\n        line-height: 1.8;\n\n        +p {\n            margin-top: 1rem;\n        }\n    }\n}\n\n\n\n.values-section[_ngcontent-%COMP%] {\n    padding: 4rem 0;\n    background: var(--kopru-bg-section);\n}\n\n.values-header[_ngcontent-%COMP%] {\n    text-align: center;\n    margin-bottom: 3rem;\n\n    h2 {\n        font-size: 2rem;\n        font-weight: 800;\n        margin-bottom: 0.5rem;\n    }\n}\n\n.values-grid[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    gap: 1.5rem;\n    max-width: 900px;\n    margin: 0 auto;\n}\n\n.value-card[_ngcontent-%COMP%] {\n    background: #fff;\n    border: 1px solid var(--kopru-border);\n    border-radius: 20px;\n    padding: 2rem;\n    text-align: center;\n    transition: all 0.3s ease;\n    box-shadow: var(--kopru-shadow-sm);\n\n    &:hover {\n        border-color: var(--kopru-primary-100);\n        transform: translateY(-4px);\n        box-shadow: var(--kopru-shadow-lg);\n    }\n\n    .value-icon {\n        width: 56px;\n        height: 56px;\n        border-radius: 16px;\n        background: var(--kopru-primary-50);\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        margin: 0 auto 1.25rem;\n        font-size: 1.3rem;\n        color: var(--kopru-primary);\n    }\n\n    h3 {\n        font-size: 1.05rem;\n        font-weight: 700;\n        color: var(--kopru-text);\n        margin-bottom: 0.75rem;\n    }\n\n    p {\n        color: var(--kopru-text-muted);\n        font-size: 0.85rem;\n        line-height: 1.7;\n    }\n}\n\n\n\n.impact-section[_ngcontent-%COMP%] {\n    padding: 4rem 0;\n}\n\n.impact-header[_ngcontent-%COMP%] {\n    text-align: center;\n    margin-bottom: 3rem;\n\n    h2 {\n        font-size: 2rem;\n        font-weight: 800;\n        margin-bottom: 0.5rem;\n    }\n\n    p {\n        color: var(--kopru-text-muted);\n    }\n}\n\n.impact-grid[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    gap: 1.5rem;\n    max-width: 800px;\n    margin: 0 auto;\n}\n\n.impact-card[_ngcontent-%COMP%] {\n    text-align: center;\n    background: #fff;\n    border: 1px solid var(--kopru-border);\n    border-radius: 20px;\n    padding: 1.75rem;\n    box-shadow: var(--kopru-shadow-sm);\n    transition: all 0.3s ease;\n\n    &:hover {\n        border-color: var(--kopru-primary-100);\n        transform: translateY(-2px);\n        box-shadow: var(--kopru-shadow-md);\n    }\n\n    .impact-num {\n        font-size: 2rem;\n        font-weight: 800;\n        color: var(--kopru-primary);\n        display: block;\n        margin-bottom: 0.25rem;\n    }\n\n    .impact-label {\n        font-size: 0.8rem;\n        color: var(--kopru-text-muted);\n        font-weight: 500;\n    }\n}\n\n\n\n.cta-section[_ngcontent-%COMP%] {\n    padding: 0 0 6rem;\n\n    .section-container {\n        max-width: 1200px;\n        margin: 0 auto;\n        padding: 0 1.5rem;\n    }\n}\n\n.cta-card[_ngcontent-%COMP%] {\n    background: var(--kopru-primary-50);\n    border: 1px solid var(--kopru-primary-100);\n    border-radius: 24px;\n    padding: 3rem;\n    text-align: center;\n\n    h2 {\n        font-size: 2rem;\n        font-weight: 800;\n        margin-bottom: 0.75rem;\n    }\n\n    p {\n        color: var(--kopru-text-secondary);\n        margin-bottom: 1.5rem;\n    }\n}\n\n[_nghost-%COMP%]     .cta-btn {\n    background: var(--kopru-primary) !important;\n    border: none !important;\n    padding: 0.85rem 2rem !important;\n}\n\n@media (max-width: 768px) {\n    .page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n        font-size: 2rem;\n    }\n\n    .values-grid[_ngcontent-%COMP%] {\n        grid-template-columns: 1fr;\n    }\n\n    .impact-grid[_ngcontent-%COMP%] {\n        grid-template-columns: repeat(2, 1fr);\n    }\n\n    .mission-card[_ngcontent-%COMP%] {\n        padding: 2rem 1.5rem;\n    }\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AboutComponent, [{
        type: Component,
        args: [{ selector: 'app-about', standalone: true, imports: [RouterModule, ButtonModule], template: "<section class=\"about-page\">\n  <div class=\"page-header\">\n    <div class=\"section-container\">\n      <span class=\"section-tag\">Hakk\u0131m\u0131zda</span>\n      <h1>K\u00F6pr\u00FC <span class=\"gradient-text\">Nedir?</span></h1>\n      <p>K\u00F6pr\u00FC, i\u015Fletmelerden kalan g\u0131day\u0131 ihtiya\u00E7 sahiplerine ula\u015Ft\u0131ran bir sosyal sorumluluk platformudur.</p>\n    </div>\n  </div>\n\n  <div class=\"mission-section\">\n    <div class=\"section-container\">\n      <div class=\"mission-card\">\n        <h2><i class=\"pi pi-flag\"></i> Misyonumuz</h2>\n        <p>\n          T\u00FCrkiye'de her y\u0131l milyonlarca ton g\u0131da israf ediliyor. Marketlerden son kullanma tarihi yakla\u015Fan\n          \u00FCr\u00FCnler, restoranlardan kapan\u0131\u015F saatinde kalan yemekler, otellerden kullan\u0131lmayan b\u00FCfe yemekleri,\n          pastanelerden kalan tatl\u0131lar ve yurt yemekhanelerinden artan porsiyonlar...\n        </p>\n        <p>\n          T\u00FCm bu g\u0131dalar, a\u015Fevlerine, hayvan bar\u0131naklar\u0131na, kent lokantalar\u0131na ve halk ekmek b\u00FCfelerine\n          kuryelerimiz arac\u0131l\u0131\u011F\u0131 ile ula\u015Ft\u0131r\u0131l\u0131r.\n        </p>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"values-section\">\n    <div class=\"section-container\">\n      <div class=\"values-header\">\n        <span class=\"section-tag\">De\u011Ferlerimiz</span>\n        <h2>Temel <span class=\"gradient-text\">De\u011Ferler</span></h2>\n      </div>\n      <div class=\"values-grid\">\n        @for (v of values; track v) {\n          <div class=\"value-card\">\n            <div class=\"value-icon\"><i [class]=\"v.icon\"></i></div>\n            <h3>{{ v.title }}</h3>\n            <p>{{ v.desc }}</p>\n          </div>\n        }\n      </div>\n    </div>\n  </div>\n\n  <div class=\"impact-section\">\n    <div class=\"section-container\">\n      <div class=\"impact-header\">\n        <span class=\"section-tag\">Etkimiz</span>\n        <h2>Rakamlarla <span class=\"gradient-text\">K\u00F6pr\u00FC</span></h2>\n        <p>Platformumuzun \u015Fimdiye kadarki etkisi</p>\n      </div>\n      <div class=\"impact-grid\">\n        @for (s of stats; track s) {\n          <div class=\"impact-card\">\n            <span class=\"impact-num\">{{ s.value }}</span>\n            <span class=\"impact-label\">{{ s.label }}</span>\n          </div>\n        }\n      </div>\n    </div>\n  </div>\n\n  <div class=\"cta-section\">\n    <div class=\"section-container\">\n      <div class=\"cta-card\">\n        <h2>Siz de Bu K\u00F6pr\u00FCn\u00FCn Par\u00E7as\u0131 Olun</h2>\n        <p>\u0130\u015Fletmeniz veya kurumunuzla platforma kat\u0131larak g\u0131da israf\u0131na birlikte dur diyelim.</p>\n        <div style=\"display: flex; gap: 1rem; justify-content: center\">\n          <p-button label=\"\u0130lan Olu\u015Ftur\" icon=\"pi pi-plus\" [rounded]=\"true\" routerLink=\"/ilan-ver\"\n          styleClass=\"cta-btn\"></p-button>\n          <p-button label=\"\u0130leti\u015Fime Ge\u00E7\" icon=\"pi pi-envelope\" [rounded]=\"true\" [outlined]=\"true\"></p-button>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>", styles: [".about-page {\n    padding-top: 80px;\n    min-height: 100vh;\n    background: var(--kopru-bg);\n}\n\n.page-header {\n    text-align: center;\n    padding: 3rem 0;\n    background: linear-gradient(180deg, var(--kopru-primary-50) 0%, var(--kopru-bg) 100%);\n\n    h1 {\n        font-size: 2.5rem;\n        font-weight: 800;\n        margin-bottom: 0.5rem;\n    }\n\n    p {\n        color: var(--kopru-text-muted);\n        font-size: 1.05rem;\n    }\n}\n\n/* Mission */\n.mission-section {\n    padding: 4rem 0;\n}\n\n.mission-card {\n    max-width: 800px;\n    margin: 0 auto;\n    background: #fff;\n    border: 1px solid var(--kopru-border);\n    border-radius: 24px;\n    padding: 3rem;\n    box-shadow: var(--kopru-shadow-md);\n\n    h2 {\n        font-size: 1.5rem;\n        font-weight: 800;\n        margin-bottom: 1rem;\n        display: flex;\n        align-items: center;\n        gap: 0.75rem;\n\n        i {\n            color: var(--kopru-primary);\n        }\n    }\n\n    p {\n        color: var(--kopru-text-secondary);\n        font-size: 1rem;\n        line-height: 1.8;\n\n        +p {\n            margin-top: 1rem;\n        }\n    }\n}\n\n/* Values */\n.values-section {\n    padding: 4rem 0;\n    background: var(--kopru-bg-section);\n}\n\n.values-header {\n    text-align: center;\n    margin-bottom: 3rem;\n\n    h2 {\n        font-size: 2rem;\n        font-weight: 800;\n        margin-bottom: 0.5rem;\n    }\n}\n\n.values-grid {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    gap: 1.5rem;\n    max-width: 900px;\n    margin: 0 auto;\n}\n\n.value-card {\n    background: #fff;\n    border: 1px solid var(--kopru-border);\n    border-radius: 20px;\n    padding: 2rem;\n    text-align: center;\n    transition: all 0.3s ease;\n    box-shadow: var(--kopru-shadow-sm);\n\n    &:hover {\n        border-color: var(--kopru-primary-100);\n        transform: translateY(-4px);\n        box-shadow: var(--kopru-shadow-lg);\n    }\n\n    .value-icon {\n        width: 56px;\n        height: 56px;\n        border-radius: 16px;\n        background: var(--kopru-primary-50);\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        margin: 0 auto 1.25rem;\n        font-size: 1.3rem;\n        color: var(--kopru-primary);\n    }\n\n    h3 {\n        font-size: 1.05rem;\n        font-weight: 700;\n        color: var(--kopru-text);\n        margin-bottom: 0.75rem;\n    }\n\n    p {\n        color: var(--kopru-text-muted);\n        font-size: 0.85rem;\n        line-height: 1.7;\n    }\n}\n\n/* Impact */\n.impact-section {\n    padding: 4rem 0;\n}\n\n.impact-header {\n    text-align: center;\n    margin-bottom: 3rem;\n\n    h2 {\n        font-size: 2rem;\n        font-weight: 800;\n        margin-bottom: 0.5rem;\n    }\n\n    p {\n        color: var(--kopru-text-muted);\n    }\n}\n\n.impact-grid {\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    gap: 1.5rem;\n    max-width: 800px;\n    margin: 0 auto;\n}\n\n.impact-card {\n    text-align: center;\n    background: #fff;\n    border: 1px solid var(--kopru-border);\n    border-radius: 20px;\n    padding: 1.75rem;\n    box-shadow: var(--kopru-shadow-sm);\n    transition: all 0.3s ease;\n\n    &:hover {\n        border-color: var(--kopru-primary-100);\n        transform: translateY(-2px);\n        box-shadow: var(--kopru-shadow-md);\n    }\n\n    .impact-num {\n        font-size: 2rem;\n        font-weight: 800;\n        color: var(--kopru-primary);\n        display: block;\n        margin-bottom: 0.25rem;\n    }\n\n    .impact-label {\n        font-size: 0.8rem;\n        color: var(--kopru-text-muted);\n        font-weight: 500;\n    }\n}\n\n/* CTA */\n.cta-section {\n    padding: 0 0 6rem;\n\n    .section-container {\n        max-width: 1200px;\n        margin: 0 auto;\n        padding: 0 1.5rem;\n    }\n}\n\n.cta-card {\n    background: var(--kopru-primary-50);\n    border: 1px solid var(--kopru-primary-100);\n    border-radius: 24px;\n    padding: 3rem;\n    text-align: center;\n\n    h2 {\n        font-size: 2rem;\n        font-weight: 800;\n        margin-bottom: 0.75rem;\n    }\n\n    p {\n        color: var(--kopru-text-secondary);\n        margin-bottom: 1.5rem;\n    }\n}\n\n:host ::ng-deep .cta-btn {\n    background: var(--kopru-primary) !important;\n    border: none !important;\n    padding: 0.85rem 2rem !important;\n}\n\n@media (max-width: 768px) {\n    .page-header h1 {\n        font-size: 2rem;\n    }\n\n    .values-grid {\n        grid-template-columns: 1fr;\n    }\n\n    .impact-grid {\n        grid-template-columns: repeat(2, 1fr);\n    }\n\n    .mission-card {\n        padding: 2rem 1.5rem;\n    }\n}"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AboutComponent, { className: "AboutComponent" }); })();
//# sourceMappingURL=about.component.js.map