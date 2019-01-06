webpackJsonp([0],{

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(115);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var RegisterPageModule = /** @class */ (function () {
    function RegisterPageModule() {
    }
    RegisterPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__register__["a" /* RegisterPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__register__["a" /* RegisterPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__register__["a" /* RegisterPage */]
            ]
        })
    ], RegisterPageModule);
    return RegisterPageModule;
}());

//# sourceMappingURL=register.module.js.map

/***/ }),

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PATTERNS; });
var PATTERNS = {
    PATTERN_PASSWORD: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/,
    PATTERN_EMAIL: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
};
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_user__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_session_session__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_constants__ = __webpack_require__(321);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, toastCtrl, translateService, sessionProvider, platform, formBuilder, alertCtrl, translate, toast) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.translateService = translateService;
        this.sessionProvider = sessionProvider;
        this.platform = platform;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.translate = translate;
        this.toast = toast;
        this.user = new __WEBPACK_IMPORTED_MODULE_2__models_user__["a" /* User */]();
        this.myForm = this.formBuilder.group({
            name: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required]),
            email: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].email, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_6__shared_constants__["a" /* PATTERNS */].PATTERN_EMAIL)]),
            password: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_6__shared_constants__["a" /* PATTERNS */].PATTERN_PASSWORD)])
        });
    }
    RegisterPage.prototype.redirectToLogin = function () {
        this.navCtrl.setRoot('LoginPage');
    };
    RegisterPage.prototype.doRegister = function () {
        this.sessionProvider.register(this.user).subscribe(function (res) {
        });
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"/Users/franciscomanriquedelara/FRAN/DEVELOPMENT/0_APP/front/src/pages/register/register.html"*/'<ion-content>\n  <form [formGroup]="myForm" class="form" (ngSubmit)="doRegister()">\n    <ion-list>\n      <!-- NAME ITEM-->\n      <ion-item>\n        <ion-label floating>{{\'NAME\' | translate}} </ion-label>\n        <ion-input formControlName="name" name="name" type="text" required [(ngModel)]="user.name" class="item-form-control" [ngClass]="{\'has-error\': myForm.controls.name.invalid && !myForm.controls.name.pristine, \'has-success\': !myForm.controls.name.pristine}"></ion-input>\n      </ion-item>\n      <!-- Name item - validation errors -->\n      <div class="error-container" *ngIf="myForm.controls.name.invalid && !myForm.controls.password.pristine">\n        <div class="error-item" [hidden]="!myForm.controls[\'name\'].errors.required">{{ \'ERROR_NAME_REQUIRED\' | translate }}</div>\n      </div>\n      \n      <!-- EMAIL ITEM-->\n      <ion-item>\n        <ion-label floating>{{\'EMAIL\' | translate}} </ion-label>\n        <ion-input formControlName="email" name="email" type="email" required [(ngModel)]="user.email" class="item-form-control" [ngClass]="{\'has-error\': myForm.controls.email.invalid && !myForm.controls.email.pristine, \'has-success\': !myForm.controls.email.pristine}"></ion-input>\n      </ion-item>\n      <!-- Email item - validation errors -->\n      <div class="error-container" *ngIf="myForm.controls.email.invalid && !myForm.controls.password.pristine">\n        <div class="error-item" [hidden]="!myForm.controls[\'email\'].errors.required">{{ \'ERROR_EMAIL_REQUIRED\' | translate }}</div>\n        <div class="error-item" [hidden]="!myForm.controls[\'email\'].errors.pattern">{{ \'ERROR_EMAIL_PATTERN\' | translate }}</div>\n      </div>\n      \n      <!-- PASSWORD ITEM-->\n      <ion-item>\n        <ion-label floating>{{\'PASSWORD\' | translate}} </ion-label>\n        <ion-input formControlName="password" name="password" type="password" required [(ngModel)]="user.password" class="item-form-control" [ngClass]="{\'has-error\': myForm.controls.password.invalid && !myForm.controls.password.pristine, \'has-success\': !myForm.controls.password.pristine}"></ion-input>\n      </ion-item>\n      <!-- Password item - validation errors -->\n      <div class="error-container" *ngIf="myForm.controls.password.invalid && !myForm.controls.password.pristine">\n        <div class="error-item" [hidden]="!myForm.controls[\'password\'].errors.required">{{ \'ERROR_PASSWORD_REQUIRED\' | translate }}</div>\n        <div class="error-item" [hidden]="!myForm.controls[\'password\'].errors.pattern">{{ \'ERROR_PASSWORD_PATTERN\' | translate }}</div>\n      </div>\n    </ion-list>\n    <button class="button" ion-button outline color="white" [disabled]="!myForm.valid">{{\'REGISTER\' | translate}}</button>\n    <span class="center" (cpplick)="forgotPassword()">{{\'FORGOT_PASSWORD?\' | translate}}</span>\n  </form>\n  <div class="wrapper">\n    <span class="center">{{\'HAVE_ACCOUNT?\' | translate}}</span>\n    <button class="button" ion-button outline color="white" (click)="redirectToLogin()">{{\'LOGIN\' | translate}}</button>\n  </div>\n</ion-content>\n\n\n'/*ion-inline-end:"/Users/franciscomanriquedelara/FRAN/DEVELOPMENT/0_APP/front/src/pages/register/register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_5__providers_session_session__["a" /* SessionProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ })

});
//# sourceMappingURL=0.js.map