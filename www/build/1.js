webpackJsonp([1],{

/***/ 802:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login__ = __webpack_require__(815);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__login__["a" /* LoginPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__login__["a" /* LoginPage */]
            ]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 811:
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

/***/ 812:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PATTERNS; });
var PATTERNS = {
    PATTERN_PASSWORD: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/,
    PATTERN_EMAIL: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
};
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ 815:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_user__ = __webpack_require__(811);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_constants__ = __webpack_require__(812);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_utils__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_auth_auth__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








// var encrypter = require('object-encrypter');
// var engine = encrypter('your secret', {ttl: true});
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, toastCtrl, auth, formBuilder, translate, utils) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.auth = auth;
        this.formBuilder = formBuilder;
        this.translate = translate;
        this.utils = utils;
        this.user = new __WEBPACK_IMPORTED_MODULE_3__models_user__["a" /* User */]();
        this.rememberMeCheckbox = false;
        this.myForm = this.formBuilder.group({
            email: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].email, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_5__shared_constants__["a" /* PATTERNS */].PATTERN_EMAIL)]),
            password: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_5__shared_constants__["a" /* PATTERNS */].PATTERN_PASSWORD)])
        });
    }
    LoginPage.prototype.ngOnInit = function () {
        //CHECK PLATFORM TO CHANGE HTML VIEW
        this.isCordova = this.utils.isCordova();
    };
    LoginPage.prototype.doLogin = function () {
        var _this = this;
        if (this.myForm.valid) {
            this.auth.login(this.user).subscribe(function (user) {
                _this.userStorage = user;
                if (_this.userStorage) {
                    _this.navCtrl.setRoot('HomePage');
                }
            }, function (error) {
                _this.translator(error);
            });
        }
        else {
            this.translator('FORBIDDEN');
        }
    };
    LoginPage.prototype.rememberMe = function () {
        this.user.rememberMe = !this.user.rememberMe;
    };
    LoginPage.prototype.translator = function (messageToTranslate) {
        var _this = this;
        this.translate.get(messageToTranslate).subscribe(function (data) {
            _this.showToast(data);
        });
    };
    LoginPage.prototype.showToast = function (data) {
        this.toastCtrl.create({
            message: data,
            duration: 2000,
            position: 'top',
        }).present();
    };
    // forgotPassword(){
    //   console.log('forgot password');
    // }
    LoginPage.prototype.redirectToRegister = function () {
        this.navCtrl.setRoot('RegisterPage');
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/franciscomanriquedelara/Desktop/front/src/pages/login/login.html"*/'\n<!-- HTML FOR WEB -->\n<ion-content *ngIf="!isCordova">\n  <form [formGroup]="myForm" class="form" (ngSubmit)="doLogin()">\n    <ion-list>\n      <!-- EMAIL ITEM-->\n      <ion-item>\n        <ion-label floating>{{\'EMAIL\' | translate}} </ion-label>\n        <ion-input formControlName="email" name="email" type="email" required [(ngModel)]="user.email" class="item-form-control" [ngClass]="{\'has-error\': myForm.controls.email.invalid && !myForm.controls.email.pristine, \'has-success\': !myForm.controls.email.pristine}"></ion-input>\n      </ion-item>\n      <!-- Email item - validation errors -->\n      <div class="error-container" *ngIf="myForm.controls.email.invalid && !myForm.controls.password.pristine">\n        <div class="error-item" [hidden]="!myForm.controls[\'email\'].errors.required">{{ \'ERROR_EMAIL_REQUIRED\' | translate }}</div>\n        <div class="error-item" [hidden]="!myForm.controls[\'email\'].errors.pattern">{{ \'ERROR_EMAIL_PATTERN\' | translate }}</div>\n      </div>\n      \n      <!-- PASSWORD ITEM-->\n      <ion-item>\n        <ion-label floating>{{\'PASSWORD\' | translate}} </ion-label>\n        <ion-input formControlName="password" name="password" type="password" required [(ngModel)]="user.password" class="item-form-control" [ngClass]="{\'has-error\': myForm.controls.password.invalid && !myForm.controls.password.pristine, \'has-success\': !myForm.controls.password.pristine}"></ion-input>\n      </ion-item>\n      <!-- Password item - validation errors -->\n      <div class="error-container" *ngIf="myForm.controls.password.invalid && !myForm.controls.password.pristine">\n        <div class="error-item" [hidden]="!myForm.controls[\'password\'].errors.required">{{ \'ERROR_PASSWORD_REQUIRED\' | translate }}</div>\n        <div class="error-item" [hidden]="!myForm.controls[\'password\'].errors.pattern">{{ \'ERROR_PASSWORD_PATTERN\' | translate }}</div>\n      </div>\n    </ion-list>\n    \n    \n    <ion-item class="container-checkbox">\n      <ion-label>{{ \'REMEMBER_ME\' | translate }}</ion-label>\n      <ion-checkbox [(ngModel)]="rememberMeCheckbox" [ngModelOptions]="{standalone: true}"></ion-checkbox>\n    </ion-item>\n    \n    <button class="button" ion-button outline color="white">{{\'LOGIN\' | translate}}</button>\n    <span class="center" (click)="forgotPassword()">{{\'FORGOT_PASSWORD?\' | translate}}</span>\n  </form>\n  <div class="wrapper">\n    <span class="center">{{\'DONT_HAVE_ACCOUNT?\' | translate}}</span>\n    <button class="button" ion-button outline color="white" (click)="redirectToRegister()">{{\'REGISTER_NOW\' | translate}}</button>\n  </div>\n</ion-content>\n\n\n\n\n<!-- HTML FOR PHONE -->\n<ion-content *ngIf="!isCordova">\n  s\n  <div class="lock">\n    <ion-icon name="unlock-outline"></ion-icon>\n  </div>\n  \n  <form [formGroup]="myForm" class="form" (ngSubmit)="doLogin()">\n    <ion-list>\n      <!-- EMAIL ITEM-->\n      <ion-item>\n        <ion-label floating>{{\'EMAIL\' | translate}} </ion-label>\n        <ion-input formControlName="email" name="email" type="email" required [(ngModel)]="user.email" class="item-form-control" [ngClass]="{\'has-error\': myForm.controls.email.invalid && !myForm.controls.email.pristine, \'has-success\': !myForm.controls.email.pristine}"></ion-input>\n      </ion-item>\n      <!-- Email item - validation errors -->\n      <div class="error-container" *ngIf="myForm.controls.email.invalid && !myForm.controls.password.pristine">\n        <div class="error-item" [hidden]="!myForm.controls[\'email\'].errors.required">{{ \'ERROR_EMAIL_REQUIRED\' | translate }}</div>\n        <div class="error-item" [hidden]="!myForm.controls[\'email\'].errors.pattern">{{ \'ERROR_EMAIL_PATTERN\' | translate }}</div>\n      </div>\n      \n      <!-- PASSWORD ITEM-->\n      <ion-item>\n        <ion-label floating>{{\'PASSWORD\' | translate}} </ion-label>\n        <ion-input formControlName="password" name="password" type="password" required [(ngModel)]="user.password" class="item-form-control" [ngClass]="{\'has-error\': myForm.controls.password.invalid && !myForm.controls.password.pristine, \'has-success\': !myForm.controls.password.pristine}"></ion-input>\n      </ion-item>\n      <!-- Password item - validation errors -->\n      <div class="error-container" *ngIf="myForm.controls.password.invalid && !myForm.controls.password.pristine">\n        <div class="error-item" [hidden]="!myForm.controls[\'password\'].errors.required">{{ \'ERROR_PASSWORD_REQUIRED\' | translate }}</div>\n        <div class="error-item" [hidden]="!myForm.controls[\'password\'].errors.pattern">{{ \'ERROR_PASSWORD_PATTERN\' | translate }}</div>\n      </div>\n    </ion-list>\n    \n    <ion-item class="container-checkbox">\n      <ion-label>{{ \'REMEMBER_ME\' | translate }}</ion-label>\n      <ion-checkbox (ionChange)="rememberMe()" [(ngModel)]="rememberMeCheckbox" [ngModelOptions]="{standalone: true}"></ion-checkbox>\n    </ion-item>\n    \n    \n    <button class="button" ion-button outline color="white">{{\'LOGIN\' | translate}}</button>\n    <span class="center" (click)="forgotPassword()">{{\'FORGOT_PASSWORD?\' | translate}}</span>\n  </form>\n  <div class="wrapper">\n    <span class="center">{{\'DONT_HAVE_ACCOUNT?\' | translate}}</span>\n    <button class="button" ion-button outline color="white" (click)="redirectToRegister()">{{\'REGISTER_NOW\' | translate}}</button>\n  </div>\n</ion-content>\n\n'/*ion-inline-end:"/Users/franciscomanriquedelara/Desktop/front/src/pages/login/login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_7__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_6__providers_utils__["a" /* Utils */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=1.js.map