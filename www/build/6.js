webpackJsonp([6],{

/***/ 805:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailPageModule", function() { return ProductDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_detail__ = __webpack_require__(818);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(83);
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
                __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* CustomComponentsModule */],
            ],
        })
    ], ProductDetailPageModule);
    return ProductDetailPageModule;
}());

//# sourceMappingURL=product-detail.module.js.map

/***/ }),

/***/ 818:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_product__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_products_products__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs__);
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
        this.liking = false;
        this.productToShow = new __WEBPACK_IMPORTED_MODULE_2__models_product__["a" /* Product */]();
        this.subscriptions = new __WEBPACK_IMPORTED_MODULE_6_rxjs__["Subscription"]();
    }
    ProductDetailPage.prototype.ngOnInit = function () {
        this.getProductById(this.navParams.data._id); // NO HACE FALTA PUEDO CARGA EL PRODUCT AL PASAR DEL HOME Y SOLO LLAMAR PARA QUE ME DE LOS LIKES???
        this.getSuscription();
        this.liking = false;
        this.user = this.auth.user;
    };
    ProductDetailPage.prototype.getSuscription = function () {
        var _this = this;
        var subscription = this.productsProvider.productDetailChanges().subscribe(function (product) {
            _this.productToShow = product;
        });
        this.subscriptions.add(subscription);
    };
    ProductDetailPage.prototype.getProductById = function (id) {
        var _this = this;
        this.productsProvider.getProductById(id).subscribe(function (data) {
            _this.liking = data.liking;
            _this.productToShow = data.product;
            console.log(_this.productToShow);
            console.log('liking:', _this.liking);
        }, function (error) {
            _this.translator(error);
        });
    };
    ProductDetailPage.prototype.like = function () {
        // this.likeOrUnlike();
        if (this.productToShow.owner.id !== this.user.id) {
            this.liking = !this.liking;
            this.likeOrUnlike();
        }
        else {
            this.translator('YOU_CANNOT_LIKE_YOUR_OWN_PRODUCT');
        }
    };
    // AUNQUE SI SE CAMBNIE EL ICONO DE FORMA LOCAL DEBO NITIFICAR CAMBIOS PARA QUE EL PRODUCT SE VEA LOS LIKES EN TIEMPO REAL???
    ProductDetailPage.prototype.likeOrUnlike = function () {
        var _this = this;
        if (this.liking) {
            console.log('like');
            this.productsProvider.likeProduct(this.productToShow).subscribe(function (product) {
                _this.productToShow = product;
            }, function (error) {
                // this.translator(error);
            });
        }
        else {
            console.log('unlike');
            this.productsProvider.unlikeProduct(this.productToShow).subscribe(function (product) {
                _this.productToShow = product;
            }, function (error) {
                // this.translator(error);
            });
        }
    };
    ProductDetailPage.prototype.translator = function (message) {
        var _this = this;
        this.translate.get(message).subscribe(function (data) {
            _this.showToast(data);
        });
    };
    ProductDetailPage.prototype.showToast = function (data) {
        this.toastCtrl.create({
            message: data,
            duration: 2000,
            position: 'top',
        }).present();
    };
    ProductDetailPage.prototype.ngOnDestroy = function () {
        this.subscriptions.unsubscribe();
    };
    ProductDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-product-detail',template:/*ion-inline-start:"/Users/franciscomanriquedelara/Desktop/front/src/pages/product-detail/product-detail.html"*/'\n<ion-header>\n  \n  <ion-navbar>\n    <div class="flex" right>\n      <!-- PETA ESTO??? -->\n      <!-- *ngIf="productToShow.owner?.id && productToShow.owner?.id !== this.user.id" -->\n      <ion-icon class="like" (click)="like()" [name]="(liking)? \'heart\' : \'heart-outline\'"></ion-icon>\n      <ion-icon class="share" name="share-outline"></ion-icon>\n    </div>\n  </ion-navbar>\n  \n</ion-header>\n\n<ion-content padding>\n  <div class="wrapper" *ngIf="productToShow">\n    <div class="imgWrapper">\n      <ion-slides [pager]="productToShow.photos?.length > 1" options="{efect: \'flip\'}">\n        <ion-slide *ngFor="let photo of productToShow.photos">\n          <img [src]="photo" alt="image">\n        </ion-slide>\n      </ion-slides>\n      \n      <div class="rentOrBuyTag">\n        <p>{{productToShow.rentOrBuy}}</p>\n      </div>\n      <div class="imgUser">\n        <img [src]="productToShow.owner.image" alt="photo">\n      </div>\n    </div>\n    <div class="info">\n      \n      <div class="priceAndLikesWrapper">\n        <h2 class="price">{{productToShow.price}} €</h2>\n        <ion-icon class="likeSmall" name="heart-outline">\n          <span class="counter">{{productToShow.numberOfLikes}}</span>\n        </ion-icon>\n      </div>\n      <h4 class="title">\n        {{productToShow.name | titlecase}}\n      </h4>\n      <p class="summary">\n        {{productToShow.description | titlecase}}\n      </p>\n    </div>\n  </div>\n</ion-content>\n<div class="chat">\n  <h4>{{\'CHAT\' | translate}}</h4>\n</div>\n'/*ion-inline-end:"/Users/franciscomanriquedelara/Desktop/front/src/pages/product-detail/product-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_products_products__["a" /* ProductsProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */]])
    ], ProductDetailPage);
    return ProductDetailPage;
}());

//# sourceMappingURL=product-detail.js.map

/***/ })

});
//# sourceMappingURL=6.js.map