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
function LoginComponent_Conditional_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "p-message", 9);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("text", ctx_r0.errorMsg());
} }
export class LoginComponent {
    auth = inject(AuthService);
    router = inject(Router);
    email = '';
    password = '';
    loading = signal(false);
    errorMsg = signal('');
    async onLogin() {
        if (!this.email || !this.password) {
            this.errorMsg.set('Lütfen tüm alanları doldurun.');
            return;
        }
        this.loading.set(true);
        this.errorMsg.set('');
        try {
            await this.auth.login(this.email, this.password);
            this.router.navigate(['/']);
        }
        catch (err) {
            this.errorMsg.set(err);
        }
        finally {
            this.loading.set(false);
        }
    }
    static ɵfac = function LoginComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || LoginComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: LoginComponent, selectors: [["app-login"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 23, vars: 7, consts: [[1, "auth-page", "page-enter"], [1, "auth-card"], [1, "auth-header"], [1, "auth-form", 3, "ngSubmit"], [1, "form-field"], ["for", "email"], ["pInputText", "", "id", "email", "type", "email", "name", "email", "required", "", "placeholder", "ornek@sirket.com", 3, "ngModelChange", "ngModel"], ["for", "password"], ["name", "password", "placeholder", "\u015Eifreniz", "styleClass", "w-full", "inputStyleClass", "w-full", 3, "ngModelChange", "ngModel", "toggleMask", "feedback"], ["severity", "error", "styleClass", "w-full mb-3", 3, "text"], ["type", "submit", "label", "Giri\u015F Yap", "styleClass", "auth-submit-btn w-full", 3, "loading", "disabled"], [1, "auth-footer"], ["routerLink", "/register"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2");
            i0.ɵɵtext(4, "Giri\u015F Yap");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "p");
            i0.ɵɵtext(6, "K\u00F6pr\u00FC hesab\u0131na giri\u015F yap ve g\u0131da israf\u0131n\u0131 \u00F6nlemeye devam et.");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(7, "form", 3);
            i0.ɵɵlistener("ngSubmit", function LoginComponent_Template_form_ngSubmit_7_listener() { return ctx.onLogin(); });
            i0.ɵɵelementStart(8, "div", 4)(9, "label", 5);
            i0.ɵɵtext(10, "E-posta Adresi");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "input", 6);
            i0.ɵɵtwoWayListener("ngModelChange", function LoginComponent_Template_input_ngModelChange_11_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.email, $event) || (ctx.email = $event); return $event; });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(12, "div", 4)(13, "label", 7);
            i0.ɵɵtext(14, "\u015Eifre");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(15, "p-password", 8);
            i0.ɵɵtwoWayListener("ngModelChange", function LoginComponent_Template_p_password_ngModelChange_15_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.password, $event) || (ctx.password = $event); return $event; });
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(16, LoginComponent_Conditional_16_Template, 1, 1, "p-message", 9);
            i0.ɵɵelement(17, "p-button", 10);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(18, "div", 11)(19, "p");
            i0.ɵɵtext(20, "Hesab\u0131n yok mu? ");
            i0.ɵɵelementStart(21, "a", 12);
            i0.ɵɵtext(22, "Hemen Kay\u0131t Ol");
            i0.ɵɵelementEnd()()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(11);
            i0.ɵɵtwoWayProperty("ngModel", ctx.email);
            i0.ɵɵadvance(4);
            i0.ɵɵtwoWayProperty("ngModel", ctx.password);
            i0.ɵɵproperty("toggleMask", true)("feedback", false);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.errorMsg() ? 16 : -1);
            i0.ɵɵadvance();
            i0.ɵɵproperty("loading", ctx.loading())("disabled", !ctx.email || !ctx.password);
        } }, dependencies: [FormsModule, i1.ɵNgNoValidate, i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.RequiredValidator, i1.NgModel, i1.NgForm, RouterModule, i2.RouterLink, ButtonModule, i3.Button, InputTextModule, i4.InputText, PasswordModule, i5.Password, MessageModule, i6.UIMessage] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LoginComponent, [{
        type: Component,
        args: [{ selector: 'app-login', standalone: true, imports: [
                    FormsModule,
                    RouterModule,
                    ButtonModule,
                    InputTextModule,
                    PasswordModule,
                    MessageModule
                ], template: "<div class=\"auth-page page-enter\">\n  <div class=\"auth-card\">\n    <div class=\"auth-header\">\n      <h2>Giri\u015F Yap</h2>\n      <p>K\u00F6pr\u00FC hesab\u0131na giri\u015F yap ve g\u0131da israf\u0131n\u0131 \u00F6nlemeye devam et.</p>\n    </div>\n\n    <form (ngSubmit)=\"onLogin()\" class=\"auth-form\">\n      <div class=\"form-field\">\n        <label for=\"email\">E-posta Adresi</label>\n        <input pInputText id=\"email\" type=\"email\" [(ngModel)]=\"email\" name=\"email\" required\n          placeholder=\"ornek@sirket.com\" />\n      </div>\n\n      <div class=\"form-field\">\n        <label for=\"password\">\u015Eifre</label>\n        <p-password [(ngModel)]=\"password\" name=\"password\" [toggleMask]=\"true\" [feedback]=\"false\"\n        placeholder=\"\u015Eifreniz\" styleClass=\"w-full\" inputStyleClass=\"w-full\"></p-password>\n      </div>\n\n      @if (errorMsg()) {\n        <p-message severity=\"error\" [text]=\"errorMsg()\" styleClass=\"w-full mb-3\"></p-message>\n      }\n\n      <p-button type=\"submit\" label=\"Giri\u015F Yap\" [loading]=\"loading()\" styleClass=\"auth-submit-btn w-full\"\n      [disabled]=\"!email || !password\"></p-button>\n    </form>\n\n    <div class=\"auth-footer\">\n      <p>Hesab\u0131n yok mu? <a routerLink=\"/register\">Hemen Kay\u0131t Ol</a></p>\n    </div>\n  </div>\n</div>" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(LoginComponent, { className: "LoginComponent" }); })();
//# sourceMappingURL=login.component.js.map