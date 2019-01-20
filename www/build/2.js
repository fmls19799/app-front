webpackJsonp([2],{

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(114);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
                __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* CustomComponentsModule */]
            ],
        })
    ], HomePageModule);
    return HomePageModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 333:
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

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_user__ = __webpack_require__(333);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, navParams, loadingCtrl, auth, modal) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.auth = auth;
        this.modal = modal;
        this.loader = null;
        this.user = new __WEBPACK_IMPORTED_MODULE_3__models_user__["a" /* User */]();
    }
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomePage');
    };
    HomePage.prototype.ngOnInit = function () { };
    HomePage.prototype.searchingProduct = function (pattern) {
        // this.modal.create('SearchProductPage').present();
        this.navCtrl.push('SearchProductPage');
    };
    HomePage.prototype.doRefresh = function (refresher) {
        var user = {
            name: 'francisco',
            email: 'fmls1989@gmail.com',
            password: 'Berna123'
        };
        this.auth.login(user).subscribe(function (user) {
            if (user) {
                console.log('good');
                refresher.complete();
            }
        }, function (error) {
            console.log('error', error);
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/franciscomanriquedelara/Desktop/front/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <div class="flex">\n      <ion-searchbar (click)="searchingProduct(pattern)" [(ngModel)]="pattern"></ion-searchbar>\n    </div>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="Pull to refresh" refreshingSpinner="circles" refreshingText="Refreshing..."></ion-refresher-content>\n  </ion-refresher>    \n  \n  <!-- QUE ESTO SE PONGA DINAMICO A MEDIDA QUE LOS USUARIOS VAN CREANDO COSAS -->\n  <div class="showAllProducts">\n    <div>\n      <h4>Buscar en</h4>\n    </div>\n    <div>\n      <span>ver todo <ion-icon name="arrow-forward"></ion-icon></span>\n    </div>\n  </div>\n  <div class="listOfProductsToChooseFrom">\n    <div>\n      <ion-icon name="ios-home-outline"></ion-icon>\n      <span>{{\'REAL_STATE\' | translate }}</span>\n    </div>\n    <div>\n      <ion-icon name="ios-car-outline"></ion-icon>\n      <span>{{\'CARS\' | translate }}</span>\n    </div>\n    <div>\n      <ion-icon name="ios-game-controller-b-outline"></ion-icon>\n      <span>{{\'GAMING\' | translate }}</span>\n    </div>\n    <div>\n      <ion-icon name="bicycle"></ion-icon>\n      <span>{{\'CYCLING\' | translate }}</span>\n    </div>\n    <div>\n      <ion-icon name="ios-american-football-outline"></ion-icon>\n      <span>{{\'SPORTS\' | translate }}</span>\n    </div>\n    <div>\n      <ion-icon name="ios-phone-portrait-outline"></ion-icon>\n      <span>{{\'PHONES\' | translate }}</span>\n    </div>\n    <div>\n      <ion-icon name="ios-shirt-outline"></ion-icon>\n      <span>{{\'CLOTHING\' | translate }}</span>\n    </div>\n    <div>\n      <ion-icon name="ios-boat-outline"></ion-icon>\n      <span>{{\'BOATS\' | translate }}</span>\n    </div>\n  </div>\n  \n</ion-content>'/*ion-inline-end:"/Users/franciscomanriquedelara/Desktop/front/src/pages/home/home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=2.js.map