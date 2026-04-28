import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { MessageModule } from 'primeng/message';
import { AuthService } from '../../services/auth.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/router";
import * as i3 from "primeng/button";
import * as i4 from "primeng/inputtext";
import * as i5 from "primeng/password";
import * as i6 from "primeng/message";
function RegisterComponent_Conditional_30_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "p-message", 16);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("text", ctx_r0.errorMsg());
} }
export class RegisterComponent {
    auth = inject(AuthService);
    router = inject(Router);
    name = '';
    email = '';
    password = '';
    role = 'donor';
    loading = signal(false);
    errorMsg = signal('');
    async onRegister() {
        if (!this.name || !this.email || !this.password) {
            this.errorMsg.set('Lütfen tüm alanları doldurun.');
            return;
        }
        this.loading.set(true);
        this.errorMsg.set('');
        try {
            await this.auth.register({ name: this.name, email: this.email, role: this.role });
            this.router.navigate(['/']);
        }
        catch (err) {
            this.errorMsg.set(err);
        }
        finally {
            this.loading.set(false);
        }
    }
    static ɵfac = function RegisterComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || RegisterComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RegisterComponent, selectors: [["app-register"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 37, vars: 9, consts: [[1, "auth-page", "page-enter"], [1, "auth-card"], [1, "auth-header"], [1, "auth-form", 3, "ngSubmit"], [1, "form-field"], ["for", "name"], ["pInputText", "", "id", "name", "type", "text", "name", "name", "required", "", "placeholder", "\u0130sim veya Kurum", 3, "ngModelChange", "ngModel"], ["for", "email"], ["pInputText", "", "id", "email", "type", "email", "name", "email", "required", "", "placeholder", "ornek@sirket.com", 3, "ngModelChange", "ngModel"], ["for", "role"], ["id", "role", "name", "role", 1, "kopru-select", 3, "ngModelChange", "ngModel"], ["value", "donor"], ["value", "receiver"], ["value", "courier"], ["for", "password"], ["name", "password", "placeholder", "G\u00FC\u00E7l\u00FC bir \u015Fifre se\u00E7in", "styleClass", "w-full", "inputStyleClass", "w-full", 3, "ngModelChange", "ngModel", "toggleMask", "feedback"], ["severity", "error", "styleClass", "w-full mb-3", 3, "text"], ["type", "submit", "label", "Kay\u0131t Ol", "styleClass", "auth-submit-btn w-full", 3, "loading", "disabled"], [1, "auth-footer"], ["routerLink", "/login"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2");
            i0.ɵɵtext(4, "Kay\u0131t Ol");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "p");
            i0.ɵɵtext(6, "A\u011F\u0131m\u0131za kat\u0131l\u0131n ve israf\u0131 \u00F6nleyen k\u00F6pr\u00FCn\u00FCn bir par\u00E7as\u0131 olun.");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(7, "form", 3);
            i0.ɵɵlistener("ngSubmit", function RegisterComponent_Template_form_ngSubmit_7_listener() { return ctx.onRegister(); });
            i0.ɵɵelementStart(8, "div", 4)(9, "label", 5);
            i0.ɵɵtext(10, "Ad Soyad / Kurum Ad\u0131");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "input", 6);
            i0.ɵɵtwoWayListener("ngModelChange", function RegisterComponent_Template_input_ngModelChange_11_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.name, $event) || (ctx.name = $event); return $event; });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(12, "div", 4)(13, "label", 7);
            i0.ɵɵtext(14, "E-posta Adresi");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(15, "input", 8);
            i0.ɵɵtwoWayListener("ngModelChange", function RegisterComponent_Template_input_ngModelChange_15_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.email, $event) || (ctx.email = $event); return $event; });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(16, "div", 4)(17, "label", 9);
            i0.ɵɵtext(18, "Hesap T\u00FCr\u00FC");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(19, "select", 10);
            i0.ɵɵtwoWayListener("ngModelChange", function RegisterComponent_Template_select_ngModelChange_19_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.role, $event) || (ctx.role = $event); return $event; });
            i0.ɵɵelementStart(20, "option", 11);
            i0.ɵɵtext(21, "G\u0131da Veren (Ba\u011F\u0131\u015F\u00E7\u0131)");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(22, "option", 12);
            i0.ɵɵtext(23, "G\u0131da Alan (Kurum)");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(24, "option", 13);
            i0.ɵɵtext(25, "Kurye");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(26, "div", 4)(27, "label", 14);
            i0.ɵɵtext(28, "\u015Eifre");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(29, "p-password", 15);
            i0.ɵɵtwoWayListener("ngModelChange", function RegisterComponent_Template_p_password_ngModelChange_29_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.password, $event) || (ctx.password = $event); return $event; });
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(30, RegisterComponent_Conditional_30_Template, 1, 1, "p-message", 16);
            i0.ɵɵelement(31, "p-button", 17);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(32, "div", 18)(33, "p");
            i0.ɵɵtext(34, "Zaten hesab\u0131n\u0131z var m\u0131? ");
            i0.ɵɵelementStart(35, "a", 19);
            i0.ɵɵtext(36, "Giri\u015F Yap");
            i0.ɵɵelementEnd()()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(11);
            i0.ɵɵtwoWayProperty("ngModel", ctx.name);
            i0.ɵɵadvance(4);
            i0.ɵɵtwoWayProperty("ngModel", ctx.email);
            i0.ɵɵadvance(4);
            i0.ɵɵtwoWayProperty("ngModel", ctx.role);
            i0.ɵɵadvance(10);
            i0.ɵɵtwoWayProperty("ngModel", ctx.password);
            i0.ɵɵproperty("toggleMask", true)("feedback", true);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.errorMsg() ? 30 : -1);
            i0.ɵɵadvance();
            i0.ɵɵproperty("loading", ctx.loading())("disabled", !ctx.name || !ctx.email || !ctx.password);
        } }, dependencies: [FormsModule, i1.ɵNgNoValidate, i1.NgSelectOption, i1.ɵNgSelectMultipleOption, i1.DefaultValueAccessor, i1.SelectControlValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.RequiredValidator, i1.NgModel, i1.NgForm, RouterModule, i2.RouterLink, ButtonModule, i3.Button, InputTextModule, i4.InputText, PasswordModule, i5.Password, MessageModule, i6.UIMessage] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RegisterComponent, [{
        type: Component,
        args: [{ selector: 'app-register', standalone: true, imports: [
                    FormsModule,
                    RouterModule,
                    ButtonModule,
                    InputTextModule,
                    PasswordModule,
                    MessageModule
                ], template: "<div class=\"auth-page page-enter\">\n  <div class=\"auth-card\">\n    <div class=\"auth-header\">\n      <h2>Kay\u0131t Ol</h2>\n      <p>A\u011F\u0131m\u0131za kat\u0131l\u0131n ve israf\u0131 \u00F6nleyen k\u00F6pr\u00FCn\u00FCn bir par\u00E7as\u0131 olun.</p>\n    </div>\n\n    <form (ngSubmit)=\"onRegister()\" class=\"auth-form\">\n      <div class=\"form-field\">\n        <label for=\"name\">Ad Soyad / Kurum Ad\u0131</label>\n        <input pInputText id=\"name\" type=\"text\" [(ngModel)]=\"name\" name=\"name\" required\n          placeholder=\"\u0130sim veya Kurum\" />\n      </div>\n\n      <div class=\"form-field\">\n        <label for=\"email\">E-posta Adresi</label>\n        <input pInputText id=\"email\" type=\"email\" [(ngModel)]=\"email\" name=\"email\" required\n          placeholder=\"ornek@sirket.com\" />\n      </div>\n\n      <div class=\"form-field\">\n        <label for=\"role\">Hesap T\u00FCr\u00FC</label>\n        <select id=\"role\" [(ngModel)]=\"role\" name=\"role\" class=\"kopru-select\">\n          <option value=\"donor\">G\u0131da Veren (Ba\u011F\u0131\u015F\u00E7\u0131)</option>\n          <option value=\"receiver\">G\u0131da Alan (Kurum)</option>\n          <option value=\"courier\">Kurye</option>\n        </select>\n      </div>\n\n      <div class=\"form-field\">\n        <label for=\"password\">\u015Eifre</label>\n        <p-password [(ngModel)]=\"password\" name=\"password\" [toggleMask]=\"true\" [feedback]=\"true\"\n        placeholder=\"G\u00FC\u00E7l\u00FC bir \u015Fifre se\u00E7in\" styleClass=\"w-full\" inputStyleClass=\"w-full\"></p-password>\n      </div>\n\n      @if (errorMsg()) {\n        <p-message severity=\"error\" [text]=\"errorMsg()\" styleClass=\"w-full mb-3\"></p-message>\n      }\n\n      <p-button type=\"submit\" label=\"Kay\u0131t Ol\" [loading]=\"loading()\" styleClass=\"auth-submit-btn w-full\"\n      [disabled]=\"!name || !email || !password\"></p-button>\n    </form>\n\n    <div class=\"auth-footer\">\n      <p>Zaten hesab\u0131n\u0131z var m\u0131? <a routerLink=\"/login\">Giri\u015F Yap</a></p>\n    </div>\n  </div>\n</div>" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(RegisterComponent, { className: "RegisterComponent" }); })();
//# sourceMappingURL=register.component.js.map