webpackJsonp([1],{

<<<<<<< HEAD
/***/ 318:
=======
/***/ 326:
>>>>>>> fase01
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login__ = __webpack_require__(322);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login__ = __webpack_require__(330);
>>>>>>> fase01
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

/***/ 328:
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

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PATTERNS; });
var PATTERNS = {
    PATTERN_PASSWORD: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/,
    PATTERN_EMAIL: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
};
//# sourceMappingURL=constants.js.map

/***/ }),

<<<<<<< HEAD
/***/ 322:
=======
/***/ 330:
>>>>>>> fase01
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_user__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_session_session__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_constants__ = __webpack_require__(329);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// import { RegisterPage } from '../register/register';

var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, toastCtrl, translateService, sessionProvider, formBuilder, translate, platform, alertCtrl, toast) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.translateService = translateService;
        this.sessionProvider = sessionProvider;
        this.formBuilder = formBuilder;
        this.translate = translate;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.toast = toast;
        this.user = new __WEBPACK_IMPORTED_MODULE_3__models_user__["a" /* User */]();
        this.myForm = this.formBuilder.group({
            email: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].email, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_6__shared_constants__["a" /* PATTERNS */].PATTERN_EMAIL)]),
            password: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_6__shared_constants__["a" /* PATTERNS */].PATTERN_PASSWORD)])
        });
    }
    LoginPage.prototype.ngOnInit = function () {
<<<<<<< HEAD
        // console.log(this.platform.is('cordova'));
=======
        //  this.user = JSON.parse(localStorage.getItem('user'))     
>>>>>>> fase01
    };
    LoginPage.prototype.doLogin = function () {
        var _this = this;
        if (this.myForm.valid) {
            this.sessionProvider.login(this.user).subscribe(function (res) {
<<<<<<< HEAD
                // console.log(res);
=======
                console.log(res);
                // si es correcto ...
                _this.userStorage = res;
                if (_this.userStorage) {
                    _this.saveInLocalStorage(_this.userStorage);
                }
>>>>>>> fase01
            });
        }
        else {
            this.translate.get('FORBIDDEN').subscribe(function (data) {
                _this.showToast(data);
            });
        }
    };
    LoginPage.prototype.showToast = function (data) {
        this.toastCtrl.create({
            message: data,
            duration: 2000,
            position: 'top',
        }).present();
    };
    LoginPage.prototype.forgotPassword = function () {
        console.log('forgot password');
    };
    LoginPage.prototype.saveInLocalStorage = function (userStorage) {
        localStorage.setItem('user', JSON.stringify(userStorage));
    };
    LoginPage.prototype.redirectToRegister = function () {
        this.navCtrl.setRoot('RegisterPage');
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/franciscomanriquedelara/Desktop/front/src/pages/login/login.html"*/'<ion-content>\n  <form [formGroup]="myForm" class="form" (ngSubmit)="doLogin()">\n    <ion-list>\n      <!-- EMAIL ITEM-->\n      <ion-item>\n        <ion-label floating>{{\'EMAIL\' | translate}} </ion-label>\n        <ion-input formControlName="email" name="email" type="email" required [(ngModel)]="user.email" class="item-form-control" [ngClass]="{\'has-error\': myForm.controls.email.invalid && !myForm.controls.email.pristine, \'has-success\': !myForm.controls.email.pristine}"></ion-input>\n      </ion-item>\n      <!-- Email item - validation errors -->\n      <div class="error-container" *ngIf="myForm.controls.email.invalid && !myForm.controls.password.pristine">\n        <div class="error-item" [hidden]="!myForm.controls[\'email\'].errors.required">{{ \'ERROR_EMAIL_REQUIRED\' | translate }}</div>\n        <div class="error-item" [hidden]="!myForm.controls[\'email\'].errors.pattern">{{ \'ERROR_EMAIL_PATTERN\' | translate }}</div>\n      </div>\n      \n      <!-- PASSWORD ITEM-->\n      <ion-item>\n        <ion-label floating>{{\'PASSWORD\' | translate}} </ion-label>\n        <ion-input formControlName="password" name="password" type="password" required [(ngModel)]="user.password" class="item-form-control" [ngClass]="{\'has-error\': myForm.controls.password.invalid && !myForm.controls.password.pristine, \'has-success\': !myForm.controls.password.pristine}"></ion-input>\n      </ion-item>\n      <!-- Password item - validation errors -->\n      <div class="error-container" *ngIf="myForm.controls.password.invalid && !myForm.controls.password.pristine">\n        <div class="error-item" [hidden]="!myForm.controls[\'password\'].errors.required">{{ \'ERROR_PASSWORD_REQUIRED\' | translate }}</div>\n        <div class="error-item" [hidden]="!myForm.controls[\'password\'].errors.pattern">{{ \'ERROR_PASSWORD_PATTERN\' | translate }}</div>\n      </div>\n    </ion-list>\n    <button class="button" ion-button outline color="white" [disabled]="!myForm.valid">{{\'LOGIN\' | translate}}</button>\n    <span class="center" (cpplick)="forgotPassword()">{{\'FORGOT_PASSWORD?\' | translate}}</span>\n  </form>\n  <div class="wrapper">\n    <span class="center">{{\'DONT_HAVE_ACCOUNT?\' | translate}}</span>\n    <button class="button" ion-button outline color="white" (click)="redirectToRegister()">{{\'REGISTER_NOW\' | translate}}</button>\n  </div>\n</ion-content>\n\n'/*ion-inline-end:"/Users/franciscomanriquedelara/Desktop/front/src/pages/login/login.html"*/
        }),
<<<<<<< HEAD
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* ToastController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__providers_session_session__["a" /* SessionProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_session_session__["a" /* SessionProvider */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* Platform */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* ToastController */]) === "function" && _j || Object])
=======
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* ToastController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__providers_session_session__["a" /* SessionProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_session_session__["a" /* SessionProvider */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* Platform */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* ToastController */]) === "function" && _j || Object])
>>>>>>> fase01
    ], LoginPage);
    return LoginPage;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
}());

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=1.js.map