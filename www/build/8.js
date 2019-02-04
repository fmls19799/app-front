webpackJsonp([8],{

/***/ 801:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemsPageModule", function() { return ItemsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__items__ = __webpack_require__(813);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(78);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ItemsPageModule = /** @class */ (function () {
    function ItemsPageModule() {
    }
    ItemsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__items__["a" /* ItemsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__items__["a" /* ItemsPage */]),
                __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* CustomComponentsModule */],
            ],
        })
    ], ItemsPageModule);
    return ItemsPageModule;
}());

//# sourceMappingURL=items.module.js.map

/***/ }),

/***/ 813:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_products_products__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_product__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__config_config_int__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__(79);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ItemsPage = /** @class */ (function () {
    function ItemsPage(navCtrl, navParams, productsProvider, alertCtrl, translate, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.productsProvider = productsProvider;
        this.alertCtrl = alertCtrl;
        this.translate = translate;
        this.toastCtrl = toastCtrl;
        this.productsOfUser = [];
        this.nameHeader = 'Your items';
        this.checkBoxedsOpened = false;
        this.arrayProductsToDelete = [];
        this.trashEmptyOrFull = 'ios-trash-outline';
        // productsInLocal: Array<Product> = [];
        this.subscriptions = new __WEBPACK_IMPORTED_MODULE_5_rxjs__["Subscription"]();
    }
    ItemsPage_1 = ItemsPage;
    ItemsPage.prototype.ngOnInit = function () {
        var _this = this;
        var subscription = this.productsProvider.productByUserChanges().subscribe(function (products) {
            _this.productsOfUser = products;
        });
        this.subscriptions.add(subscription);
        this.productsProvider.getProductsByUser().subscribe(function (products) {
            _this.productsOfUser = products;
        }, function (error) {
            // PONER API ERRORS BIEN???
            console.log(error);
        });
    };
    ItemsPage.prototype.emptyEverything = function () {
        this.arrayProductsToDelete.forEach(function (product) {
            product.selected = false;
        });
        this.arrayProductsToDelete = [];
        this.trashEmptyOrFull = 'ios-trash-outline';
        this.checkBoxedsOpened = false;
    };
    ItemsPage.prototype.ionViewWillLeave = function () {
        this.emptyEverything();
    };
    ItemsPage.prototype.fabOpenCheckboxes = function () {
        if (this.arrayProductsToDelete.length === 1) {
            this.translator(['DELETE_PRODUCT', 'ARE_YOU_SURE', 'DONE_BUTTON', 'CANCEL_BUTTON'], true);
        }
        else if (this.arrayProductsToDelete.length > 1) {
            this.translator(['DELETE_PRODUCTS', 'ARE_YOU_SURE', 'DONE_BUTTON', 'CANCEL_BUTTON'], true);
        }
        else {
            this.checkBoxedsOpened = !this.checkBoxedsOpened;
            if (!this.checkBoxedsOpened) {
                this.emptyEverything();
            }
        }
    };
    ItemsPage.prototype.translator = function (messageToTranslate, withAlert) {
        var _this = this;
        this.translate.get(messageToTranslate).subscribe(function (data) {
            if (withAlert) {
                _this.showAlert(data);
            }
            else {
                _this.showToast(data);
            }
        });
    };
    ItemsPage.prototype.showAlert = function (data) {
        var _this = this;
        this.alertCtrl.create({
            title: data.DELETE_PRODUCT,
            message: data.ARE_YOU_SURE,
            buttons: [
                {
                    text: data.DONE_BUTTON,
                    handler: function () {
                        _this.deleteManyProducts(_this.arrayProductsToDelete);
                    }
                },
                {
                    text: data.CANCEL_BUTTON,
                    role: 'cancel',
                    handler: function () {
                        console.log('cancel');
                    }
                }
            ]
        }).present();
    };
    ItemsPage.prototype.showToast = function (data) {
        this.toastCtrl.create({
            message: this.arrayProductsToDelete.length + " " + data,
            duration: 2000,
            position: 'top',
        }).present();
    };
    ItemsPage.prototype.countNumberOfProductsToDelete = function () {
        return this.arrayProductsToDelete.length;
    };
    ItemsPage.prototype.selectProductWithCheckbox = function (product) {
        product.selected = !product.selected;
        if (product.selected && this.arrayProductsToDelete.indexOf(product) == -1) {
            this.arrayProductsToDelete.push(product);
        }
        else {
            this.arrayProductsToDelete = this.arrayProductsToDelete.filter(function (elem) {
                return elem !== product;
            });
        }
        this.arrayProductsToDelete.length === 1 ? this.showNumberOfProductsToDelete = "Delete " + this.arrayProductsToDelete.length + " product" : this.showNumberOfProductsToDelete = "Delete " + this.arrayProductsToDelete.length + " products";
        this.paintTrash();
    };
    ItemsPage.prototype.paintTrash = function () {
        if (this.arrayProductsToDelete.length === 0) {
            this.trashEmptyOrFull = 'ios-trash-outline';
        }
        else {
            this.trashEmptyOrFull = 'ios-trash';
        }
    };
    ItemsPage.prototype.goToProduct = function (product) {
        this.navCtrl.push('ProductDetailPage', __WEBPACK_IMPORTED_MODULE_3__models_product__["a" /* Product */]);
    };
    // EN BACK PONER MIDDLEWARES DE SI ES EL MISMO USER ID???
    // LLAMAR A ESTA FUNCION MULTIPLES VECES???
    ItemsPage.prototype.deleteManyProducts = function (product) {
        var _this = this;
        var errors = [];
        var urls = [];
        this.arrayProductsToDelete.forEach(function (product) {
            urls.push(ItemsPage_1.ENDPOINT + "/" + product._id + "/delete");
        });
        return __WEBPACK_IMPORTED_MODULE_5_rxjs__["Observable"].forkJoin(urls.map(function (url) {
            return _this.productsProvider.deleteProductByUser(url);
        }), function () {
            var results = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                results[_i] = arguments[_i];
            }
            return ({
                failed: results.map(function (res) {
                    return res instanceof __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["d" /* HttpErrorResponse */] ? res : null;
                }),
                succeeded: results.map(function (res) {
                    // if (res.result === 'KO') {
                    //   errors.push(res);
                    // }
                    return res instanceof __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["d" /* HttpErrorResponse */] ? null : res;
                })
            });
        }).subscribe(function (data) {
            if (errors.length === 0) {
                _this.showToast('PRODUCTS_DELETED');
            }
            else {
                console.log(errors);
            }
        });
    };
    ItemsPage.ENDPOINT = __WEBPACK_IMPORTED_MODULE_6__config_config_int__["a" /* CONFIG */].API_ENDPOINT + "/products";
    ItemsPage = ItemsPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-items',template:/*ion-inline-start:"/Users/franciscomanriquedelara/Desktop/front/src/pages/items/items.html"*/'<!-- <header [name]="nameHeader"></header> -->\n\n<ion-header>\n  \n  <ion-navbar>\n    <ion-title>aaa</ion-title>\n  </ion-navbar>\n  \n</ion-header>\n\n\n<ion-content padding>\n  <!-- SI NO HAY PRODUCTOS -->\n  <div class="no-products" *ngIf="productsOfUser.length == 0">\n    <h6 class="text-no-products">{{\'NO_PRODUCTS_IN_YOUR_LIST\' | translate}}</h6>\n  </div>\n  \n  <ion-list>\n    <ion-item *ngFor="let product of productsOfUser" (click)="goToProduct()">\n      <ion-label>\n        <ion-slides pager="true" options="{efect: \'flip\'}">\n          <ion-slide *ngFor="let photo of product.photos">\n            <img [src]="photo" alt="image">\n          </ion-slide>\n        </ion-slides>\n      </ion-label>\n      <ion-checkbox *ngIf="checkBoxedsOpened" (click)="selectProductWithCheckbox(product)"></ion-checkbox>\n    </ion-item>\n  </ion-list>\n</ion-content>\n\n\n<ion-fab left bottom [ngClass]="{\'increaseSize\': arrayProductsToDelete.length > 0}" *ngIf="productsOfUser.length !== 0">\n  <button color=danger ion-fab mini (click)="fabOpenCheckboxes()" [ngClass]="{\'increaseSize\': arrayProductsToDelete.length > 0}">\n    <ion-icon [name]="trashEmptyOrFull"></ion-icon>\n    <small *ngIf="arrayProductsToDelete.length > 0" [innerHTML]="showNumberOfProductsToDelete"></small>\n  </button>\n</ion-fab>\n\n\n'/*ion-inline-end:"/Users/franciscomanriquedelara/Desktop/front/src/pages/items/items.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_products_products__["a" /* ProductsProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */]])
    ], ItemsPage);
    return ItemsPage;
    var ItemsPage_1;
}());

//# sourceMappingURL=items.js.map

/***/ })

});
//# sourceMappingURL=8.js.map