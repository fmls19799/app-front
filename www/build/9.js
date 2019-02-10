webpackJsonp([9],{

/***/ 801:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritesPageModule", function() { return FavoritesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__favorites__ = __webpack_require__(814);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(81);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var FavoritesPageModule = /** @class */ (function () {
    function FavoritesPageModule() {
    }
    FavoritesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__favorites__["a" /* FavoritesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__favorites__["a" /* FavoritesPage */]),
                __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* CustomComponentsModule */],
            ],
        })
    ], FavoritesPageModule);
    return FavoritesPageModule;
}());

//# sourceMappingURL=favorites.module.js.map

/***/ }),

/***/ 814:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoritesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_favorites_favorites__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FavoritesPage = /** @class */ (function () {
    function FavoritesPage(navCtrl, navParams, favoritesProvider, toastCtrl, translate) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.favoritesProvider = favoritesProvider;
        this.toastCtrl = toastCtrl;
        this.translate = translate;
        this.wishList = [];
        this.rentOrBuyOptions = [];
        this.tabSelected = '';
        this.subscriptions = new __WEBPACK_IMPORTED_MODULE_4_rxjs__["Subscription"]();
    }
    FavoritesPage.prototype.ngOnInit = function () {
        this.rentOrBuyOptions = ['All', 'Rent', 'Sell', 'Exchange', 'Gift'];
        this.getAllFavs();
        this.getSuscription();
    };
    FavoritesPage.prototype.goToProduct = function (product) {
        this.navCtrl.push('ProductDetailPage', product);
    };
    FavoritesPage.prototype.getSuscription = function () {
        var _this = this;
        var subscription = this.favoritesProvider.favsByUserChanges().subscribe(function (wishList) {
            _this.wishList = wishList;
            console.log(11, _this.wishList);
            _this.wishProductRemailAllTheTime = wishList; // ya que cuando doy al tab va cambiando el  array original, hago que el array completo se mantenga para poder mantener los tabs en el html???              
            console.log(22, _this.wishProductRemailAllTheTime);
        });
        this.subscriptions.add(subscription);
    };
    FavoritesPage.prototype.segmentSelected = function (event) {
        this.tabSelected = event.target.innerHTML;
        this.goToSelectedTab(this.tabSelected);
    };
    FavoritesPage.prototype.goToSelectedTab = function (selectedTab) {
        this.getSuscription(); // si no pongo esto hace un filtro sobre lo ya filtrado previamente y no existe nada???            
        if (selectedTab !== 'All') {
            this.wishList = this.wishList.filter(function (wishProduct) { return wishProduct.product.rentOrBuy === selectedTab; });
        }
    };
    FavoritesPage.prototype.getAllFavs = function () {
        var _this = this;
        this.favoritesProvider.getFavoritesProductsOfUser().subscribe(function (wishList) {
            _this.wishList = wishList;
        }, function (error) {
            console.log(error);
            // this.translator(error);
        });
    };
    FavoritesPage.prototype.translator = function (message) {
        var _this = this;
        this.translate.get(message).subscribe(function (data) {
            _this.showToast(data);
        });
    };
    FavoritesPage.prototype.showToast = function (data) {
        this.toastCtrl.create({
            message: data,
            duration: 2000,
            position: 'top',
        }).present();
    };
    FavoritesPage.prototype.ngOnDestroy = function () {
        this.subscriptions.unsubscribe();
    };
    FavoritesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-favorites',template:/*ion-inline-start:"/Users/franciscomanriquedelara/Desktop/front/src/pages/favorites/favorites.html"*/'\n<ion-header>\n  \n  <ion-navbar>\n    <ion-title>favorites</ion-title>\n  </ion-navbar>\n  \n</ion-header>\n\n\n<ion-content padding>\n  <!-- SI NO HAY PRODUCTOS -->\n  <div class="no-products" *ngIf="wishList?.length === 0">\n    <h6 class="text-no-products">{{\'NO_FAVS_YET\' | translate}}</h6>\n  </div>\n  <!-- PONERLO EN ION-SEGMENT??? -->\n  <!-- * ngIf="wishProductRemailAllTheTime?.length > 0" -->\n  <ion-segment (click)="segmentSelected($event)" *ngIf="wishProductRemailAllTheTime?.length > 0"> \n    <ion-segment-button *ngFor="let option of rentOrBuyOptions" value="a">\n      <ion-label>{{option}}</ion-label>\n    </ion-segment-button>\n  </ion-segment>\n  \n  <ion-list>\n    <ion-item *ngFor="let fav of wishList">\n      <div class="relative" (click)="goToProduct(fav.product)">\n        <img [src]="fav.product.photos[0]" alt="photo">\n        <!-- <div class="absolute right">\n          <p>{{fav.product.rentOrBuy}}</p>\n        </div> -->\n        <div class="absolute left">\n          <ion-icon name="heart"></ion-icon>\n        </div>\n      </div>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/franciscomanriquedelara/Desktop/front/src/pages/favorites/favorites.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_favorites_favorites__["a" /* FavoritesProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */]])
    ], FavoritesPage);
    return FavoritesPage;
}());

//# sourceMappingURL=favorites.js.map

/***/ })

});
//# sourceMappingURL=9.js.map