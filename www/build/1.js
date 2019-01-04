webpackJsonp([1],{

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login__ = __webpack_require__(325);
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
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__login__["a" /* LoginPage */]),
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

/***/ 324:
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

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_user__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_session_session__ = __webpack_require__(220);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, toastCtrl, translateService, platform, sessionProvider, alertCtrl, translate, toast) {
        //  this.myForm = this.formBuilder.group({
        //   email: new FormControl('', Validators.compose([
        //     Validators.required,
        //     Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
        //   ])),
        //   password: new FormControl('', Validators.required)
        // });
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.translateService = translateService;
        this.platform = platform;
        this.sessionProvider = sessionProvider;
        this.alertCtrl = alertCtrl;
        this.translate = translate;
        this.toast = toast;
        this.user = new __WEBPACK_IMPORTED_MODULE_3__models_user__["a" /* User */]();
    }
    LoginPage.prototype.ngOnInit = function () {
        // console.log(this.platform.is('cordova'));
    };
    LoginPage.prototype.doLogin = function () {
        var _this = this;
        if (this.myForm.valid) {
            this.sessionProvider.login(this.user).subscribe(function (res) {
                console.log(res);
                // TO DO ===>>>
                // if (res.body === 'KO') {
                // } else{
                // }
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
    LoginPage.prototype.redirectToRegister = function () {
        this.navCtrl.setRoot('RegisterPage');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('myForm'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormGroup */])
    ], LoginPage.prototype, "myForm", void 0);
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/franciscomanriquedelara/Desktop/APP/front-end/src/pages/login/login.html"*/'<ion-content>\n  <form class="form" #myForm="ngForm" (ngSubmit)="doLogin()">\n    <ion-list>\n      <ion-item>\n        <ion-label><ion-icon name="ios-mail-outline"></ion-icon>{{\'EMAIL\' | translate}} </ion-label>\n        <ion-input name="email" type="email" required [(ngModel)]="user.email"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label><ion-icon name="lock-outline"></ion-icon>{{\'PASSWORD\' | translate}} </ion-label>\n        <ion-input name="password" type="password" required [(ngModel)]="user.password"></ion-input>\n      </ion-item>\n    </ion-list>\n    <button class="button" ion-button outline color="white" [disabled]="!myForm.valid">{{\'LOGIN\' | translate}}</button>\n    <span class="center" (click)="forgotPassword()">{{\'FORGOT_PASSWORD?\' | translate}}</span>\n  </form>\n  <div class="wrapper">\n    <span class="center">{{\'DONT_HAVE_ACCOUNT?\' | translate}}</span>\n    <button class="button" ion-button outline color="white" (click)="redirectToRegister()">{{\'REGISTER_NOW\' | translate}}</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/franciscomanriquedelara/Desktop/APP/front-end/src/pages/login/login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_5__providers_session_session__["a" /* SessionProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* ToastController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=1.js.map