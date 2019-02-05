webpackJsonp([6],{

/***/ 804:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailPageModule", function() { return ProductDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_detail__ = __webpack_require__(816);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProductDetailPageModule = /** @class */ (function () {
    function ProductDetailPageModule() {
    }
    ProductDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__product_detail__["a" /* ProductDetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__product_detail__["a" /* ProductDetailPage */]),
            ],
        })
    ], ProductDetailPageModule);
    return ProductDetailPageModule;
}());

//# sourceMappingURL=product-detail.module.js.map

/***/ }),

/***/ 816:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_product__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_products_products__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProductDetailPage = /** @class */ (function () {
    function ProductDetailPage(navCtrl, navParams, productsProvider, auth, toastCtrl, translate) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.productsProvider = productsProvider;
        this.auth = auth;
        this.toastCtrl = toastCtrl;
        this.translate = translate;
        this.productToShow = new __WEBPACK_IMPORTED_MODULE_2__models_product__["a" /* Product */]();
        this.productCounterLikes = 0; // QUE SEA DINAMICO PONER EN SU MODELO???
    }
    ProductDetailPage.prototype.ngOnInit = function () {
        console.log(this.navParams);
        this.user = this.auth.user;
        this.productToShow = this.navParams.data;
        console.log(this.productToShow.owner.id);
        console.log(this.user.id);
        this.isLiking();
    };
    ProductDetailPage.prototype.isLiking = function () {
        if (!this.liking) {
            this.likingIcon = 'heart-outline';
            this.liking = false;
        }
        else {
            this.likingIcon = 'heart';
            this.liking = true;
        }
    };
    ProductDetailPage.prototype.addOrRemoveLikeToThisProduct = function () {
        // this.liking = !this.liking;
        this.likingIcon = 'heart-outline';
        this.isLiking();
        // if (condition) {
        //   this.productsProvider.likeProduct(this.productToShow).subscribe((product: Product)=>{
        //     console.log(product);
        //   })
        // } else{
        //   this.productsProvider.unlikeProduct(this.productToShow).subscribe((product: Product)=>{
        //     console.log(product);
        //   })
        // }
    };
    ProductDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-product-detail',template:/*ion-inline-start:"/Users/franciscomanriquedelara/Desktop/front/src/pages/product-detail/product-detail.html"*/'\n<ion-header>\n  \n  <ion-navbar>\n    <div class="flex" right>\n      <ion-icon *ngIf="productToShow.owner?.id !== this.user?.id" class="like" (click)="addOrRemoveLikeToThisProduct()" [name]="likingIcon"></ion-icon>\n      <ion-icon class="share" name="share-outline"></ion-icon>\n    </div>\n  </ion-navbar>\n  \n</ion-header>\n\n<ion-content padding>\n  <div class="wrapper" *ngIf="productToShow">\n    <div class="imgWrapper">\n      <ion-slides pager="true" options="{efect: \'flip\'}">\n        <ion-slide *ngFor="let photo of productToShow.photos">\n          <img [src]="photo" alt="image">\n        </ion-slide>\n      </ion-slides>\n      <div class="counterWrapper">\n        <ion-icon class="likeSmall" name="heart-outline" *ngIf="productToShow.owner?.id === this.user?.id">\n          <span class="counter">{{productCounterLikes}}</span>\n        </ion-icon>\n      </div>\n    </div>\n    <div class="info">\n      <h2 class="price">\n        {{productToShow.price}} €\n      </h2>\n      <h4 class="title">\n        {{productToShow.name | titlecase}}\n      </h4>\n      <p class="summary">\n        {{productToShow.description | titlecase}}\n      </p>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/franciscomanriquedelara/Desktop/front/src/pages/product-detail/product-detail.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__providers_products_products__["a" /* ProductsProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_products_products__["a" /* ProductsProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthProvider */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */]) === "function" && _f || Object])
    ], ProductDetailPage);
    return ProductDetailPage;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=product-detail.js.map

/***/ })

});
//# sourceMappingURL=6.js.map