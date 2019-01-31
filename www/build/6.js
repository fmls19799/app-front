webpackJsonp([6],{

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailPageModule", function() { return ProductDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_detail__ = __webpack_require__(340);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__product_detail__["a" /* ProductDetailPage */]),
            ],
        })
    ], ProductDetailPageModule);
    return ProductDetailPageModule;
}());

//# sourceMappingURL=product-detail.module.js.map

/***/ }),

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_product__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_products_products__ = __webpack_require__(117);
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
    function ProductDetailPage(navCtrl, navParams, productsProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.productsProvider = productsProvider;
        this.productToShow = new __WEBPACK_IMPORTED_MODULE_2__models_product__["a" /* Product */]();
        this.productCounterLikes = 0; // QUE SEA DINAMICO PONER EN SU MODELO???
    }
    ProductDetailPage.prototype.ngOnInit = function () {
        this.productToShow = this.navParams.data;
        this.isLiking();
    };
    ProductDetailPage.prototype.isLiking = function () {
        if (!this.liking) {
            this.likingIcon = 'heart-outline';
            this.liking = false;
            console.log(1, this.likingIcon);
            console.log(2.1, this.liking);
        }
        else {
            this.likingIcon = 'heart';
            this.liking = true;
            console.log(2, this.likingIcon);
            console.log(2.1, this.liking);
        }
    };
    // PONER ESTO CON SUBJECT ASI APRENDO??? SI FUESE ENTRAR MAS ADETRO SI HARIA FALTA SUBJECT???
    ProductDetailPage.prototype.ionViewDidLoad = function () {
        this.productToShow = this.navParams.data;
        console.log(this.productToShow);
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
            selector: 'page-product-detail',template:/*ion-inline-start:"/Users/franciscomanriquedelara/Desktop/front/src/pages/product-detail/product-detail.html"*/'\n<ion-header>\n  \n  <ion-navbar>\n    <div class="flex" right>\n      <ion-icon class="like" (click)="addOrRemoveLikeToThisProduct()" [name]="likingIcon"></ion-icon>\n      <ion-icon class="share" name="share-outline"></ion-icon>\n    </div>\n  </ion-navbar>\n  \n</ion-header>\n\n\n<ion-content padding>\n  <!-- <div class="wrapper" *ngIf="productToShow">\n    <div class="imgWrapper">\n      <img [src]="productToShow.photos[0]" alt="image">\n      <div class="counterWrapper">\n        <ion-icon class="likeSmall" name="heart-outline">\n          <span class="counter">{{productCounterLikes}}</span>\n        </ion-icon>\n      </div>\n    </div>\n    <div class="info">\n      <h2 class="price">\n        {{productToShow.price}}\n      </h2>\n      <h4 class="title">\n        {{productToShow.name}}\n      </h4>\n      <p class="summary">\n        {{productToShow.description}}\n      </p>\n    </div>\n  </div> -->\n</ion-content>\n'/*ion-inline-end:"/Users/franciscomanriquedelara/Desktop/front/src/pages/product-detail/product-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_products_products__["a" /* ProductsProvider */]])
    ], ProductDetailPage);
    return ProductDetailPage;
}());

//# sourceMappingURL=product-detail.js.map

/***/ })

});
//# sourceMappingURL=6.js.map