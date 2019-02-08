webpackJsonp([6],{

/***/ 806:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailPageModule", function() { return ProductDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_detail__ = __webpack_require__(819);
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

/***/ 819:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_product__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_products_products__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_wish_list_wish_list__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs__);
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
    function ProductDetailPage(navCtrl, navParams, productsProvider, auth, toastCtrl, translate, wishListProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.productsProvider = productsProvider;
        this.auth = auth;
        this.toastCtrl = toastCtrl;
        this.translate = translate;
        this.wishListProvider = wishListProvider;
        this.liking = false;
        this.productToShow = new __WEBPACK_IMPORTED_MODULE_2__models_product__["a" /* Product */]();
        this.subscriptions = new __WEBPACK_IMPORTED_MODULE_7_rxjs__["Subscription"]();
    }
    ProductDetailPage.prototype.ngOnInit = function () {
        this.liking = false;
        this.user = this.auth.user;
        if (this.navParams.data) {
            this.comingAfterCreateProduct = true;
        }
        this.productToShow = this.navParams.data;
        this.isLiking(); //PARA PINTAR DE UNA MANERA U OTRA HABRA QUE COMPROBAR SI YA SE ESTA LIKE?? DEBE IR DEBAJO PARA TENER EL PRODUCTO QUE LE PASE DESDE HOME???
        // this.getSuscription();
    };
    ProductDetailPage.prototype.getSuscription = function () {
        var _this = this;
        var subscription = this.productsProvider.productByUserChanges().subscribe(function (product) {
            _this.productToShow = product;
        });
        this.subscriptions.add(subscription);
    };
    ProductDetailPage.prototype.isLiking = function () {
        var _this = this;
        this.productsProvider.isLiking(this.productToShow).subscribe(function (data) {
            _this.liking = data;
        }, function (error) {
            _this.translator(error);
        });
    };
    ProductDetailPage.prototype.like = function () {
        if (this.productToShow.owner.id !== this.user.id) {
            console.log('no es tu product y si puedes likear');
            this.liking = !this.liking;
            this.likeOrUnlike();
        }
    };
    ProductDetailPage.prototype.likeOrUnlike = function () {
        var _this = this;
        if (this.liking) {
            this.productsProvider.likeProduct(this.productToShow).subscribe(function (data) {
                console.log(data);
                // AUNQUE SI SE CAMBNIE EL ICONO DE FORMA LOCAL DEBO NITIFICAR CAMBIOS PARA QUE EL PRODUCT SE VEA LOS LIKES EN TIEMPO REAL???
            }, function (error) {
                _this.translator(error);
            });
        }
        else {
            this.productsProvider.unlikeProduct(this.productToShow).subscribe(function () { }, function (error) {
                _this.translator(error);
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
            selector: 'page-product-detail',template:/*ion-inline-start:"/Users/franciscomanriquedelara/Desktop/front/src/pages/product-detail/product-detail.html"*/'\n<ion-header>\n  \n  <ion-navbar>\n    <div class="flex" right>\n      <!-- PONGO QUE SEA IGUAL AL ID O AL USER YA QUE DESDE MODAL CHOSE \n        CATEGORY AL CREARLO Y ASIGNARLE LO RETORNADO AL THIS.PRODUCTCHOSEN, EL POPULATE NO SE LLEVA A CABO YA QUE SOLO SE HACE \n        EN EL FIND() DEL BACK, POR LO QUE NO HAY ID EN OWNER AUN -->\n        <!-- NO ME SALE QUE CUANDO ME VENGA DESPUES DE CREAR EL PRODUCTO HACER LA IGUALACION ya que si hago todo en una linea productToShow.owner?.id !== this.user.id || productToShow?.owner !== this.user.id una invalidaria a la otra?¿?? -->\n        <ion-icon *ngIf="productToShow.owner?.id && productToShow.owner?.id !== this.user.id" class="like" (click)="like()" [name]="(liking)? \'heart\' : \'heart-outline\'"></ion-icon>\n        <ion-icon class="share" name="share-outline"></ion-icon>\n      </div>\n    </ion-navbar>\n    \n  </ion-header>\n  \n  <ion-content padding>\n    <div class="wrapper" *ngIf="productToShow">\n      <div class="imgWrapper">\n        <ion-slides [pager]="productToShow.photos?.length > 1" options="{efect: \'flip\'}">\n          <ion-slide *ngFor="let photo of productToShow.photos">\n            <div class="relative">\n              <img [src]="photo" alt="image">\n            </div>\n          </ion-slide>\n        </ion-slides>\n        <div class="counterWrapper" *ngIf="comingAfterCreateProduct || productToShow.owner?.id === this.user.id">\n          <!-- aqui lo mismo??? -->\n          <ion-icon class="likeSmall" name="heart-outline">\n            <span class="counter">{{productToShow.numberOfLikes}}</span>\n          </ion-icon>\n        </div>\n        \n        <div class="rentOrBuyTag">\n          <p>{{productToShow.rentOrBuy}}</p>\n        </div>\n      </div>\n      <div class="info">\n        <h2 class="price">\n          {{productToShow.price}} €\n        </h2>\n        <h4 class="title">\n          {{productToShow.name | titlecase}}\n        </h4>\n        <p class="summary">\n          {{productToShow.description | titlecase}}\n        </p>\n      </div>\n    </div>\n  </ion-content>\n  '/*ion-inline-end:"/Users/franciscomanriquedelara/Desktop/front/src/pages/product-detail/product-detail.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__providers_products_products__["a" /* ProductsProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_products_products__["a" /* ProductsProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthProvider */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_6__providers_wish_list_wish_list__["a" /* WishListProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__providers_wish_list_wish_list__["a" /* WishListProvider */]) === "function" && _g || Object])
    ], ProductDetailPage);
    return ProductDetailPage;
    var _a, _b, _c, _d, _e, _f, _g;
}());

//# sourceMappingURL=product-detail.js.map

/***/ })

});
//# sourceMappingURL=6.js.map