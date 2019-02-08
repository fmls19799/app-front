webpackJsonp([8],{

/***/ 811:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemsPageModule", function() { return ItemsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__items__ = __webpack_require__(824);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(80);
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

/***/ 824:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_products_products__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__config_config_int__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__(57);
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
        this.rentOrBuyOptions = [];
        this.tabSelected = '';
        this.subscriptions = new __WEBPACK_IMPORTED_MODULE_4_rxjs__["Subscription"]();
    }
    ItemsPage.prototype.ngOnInit = function () {
        this.rentOrBuyOptions = ['All', 'Rent', 'Sell', 'Exchange', 'Gift'];
        this.emptyEverything();
        this.getAllProducts();
        this.getSuscription();
    };
    ItemsPage.prototype.getSuscription = function () {
        var _this = this;
        var subscription = this.productsProvider.productByUserChanges().subscribe(function (products) {
            _this.productsOfUser = products;
            _this.productsRemainAllTheTime = products; // ya que cuando doy al tab va cambiando el  array original, hago que el array completo se mantenga para poder mantener los tabs en el html???
            console.log(5);
        });
        this.subscriptions.add(subscription);
    };
    ItemsPage.prototype.segmentSelected = function (event) {
        this.tabSelected = event.target.innerHTML;
        this.goToSelectedTab(this.tabSelected);
    };
    ItemsPage.prototype.goToSelectedTab = function (selectedTab) {
        console.log(3);
        this.getSuscription(); // si no pongo esto hace un filtro sobre lo ya filtrado previamente y no existe nada???
        console.log(6, this.productsOfUser);
        if (selectedTab !== 'All') {
            this.productsOfUser = this.productsOfUser.filter(function (product) { return product.rentOrBuy === selectedTab; });
        }
    };
    ItemsPage.prototype.getAllProducts = function () {
        var _this = this;
        this.productsProvider.getProductsByUser().subscribe(function (products) {
            _this.productsOfUser = products;
            console.log(2);
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
    ItemsPage.prototype.selectAllProductsToDelete = function () {
        var _this = this;
        this.arrayProductsToDelete = this.productsOfUser;
        this.translate.get(['DELETE_PRODUCTS', 'ARE_YOU_SURE_THAT_YOU_WANT_TO_DELETE', 'PRODUCTS', 'DONE_BUTTON', 'CANCEL_BUTTON'])
            .subscribe(function (data) {
            _this.alertCtrl.create({
                title: data.DELETE_PRODUCTS,
                message: data.ARE_YOU_SURE_THAT_YOU_WANT_TO_DELETE + " " + _this.arrayProductsToDelete.length + " " + data.PRODUCTS + "?",
                buttons: [
                    {
                        text: data.DONE_BUTTON,
                        handler: function () {
                            _this.deleteManyProducts();
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
        });
    };
    ItemsPage.prototype.closeFab = function () {
        if (this.fab) {
            this.fab.close();
        }
    };
    ItemsPage.prototype.ionViewWillLeave = function () {
        this.emptyEverything();
        this.closeFab();
    };
    ItemsPage.prototype.fabOpenCheckboxes = function () {
        this.checkBoxedsOpened = !this.checkBoxedsOpened;
        if (!this.checkBoxedsOpened) {
            this.emptyEverything();
        }
    };
    ItemsPage.prototype.deleteProducts = function () {
        if (this.arrayProductsToDelete.length === 0) {
            this.translator('HAVE_TO_SELECT_PRODUCT_FIRST', false);
        }
        else if (this.arrayProductsToDelete.length === 1) {
            this.translator(['DELETE_PRODUCT', 'ARE_YOU_SURE', 'DONE_BUTTON', 'CANCEL_BUTTON'], true);
        }
        else if (this.arrayProductsToDelete.length > 1) {
            this.translator(['DELETE_PRODUCTS', 'ARE_YOU_SURE', 'DONE_BUTTON', 'CANCEL_BUTTON'], true);
        }
    };
    ItemsPage.prototype.translator = function (messageToTranslate, withAlert, withNumberOfProductsDeleted) {
        var _this = this;
        this.translate.get(messageToTranslate).subscribe(function (data) {
            if (withAlert) {
                _this.showAlert(data);
            }
            else {
                _this.showToast(data, withNumberOfProductsDeleted);
            }
        });
    };
    ItemsPage.prototype.showAlert = function (data) {
        var _this = this;
        var textToShow;
        if (this.arrayProductsToDelete.length === 0) {
            textToShow = data.HAVE_TO_SELECT_PRODUCT_FIRST;
        }
        else if (this.arrayProductsToDelete.length === 1) {
            textToShow = data.DELETE_PRODUCT;
        }
        else {
            textToShow = data.DELETE_PRODUCTS;
        }
        this.alertCtrl.create({
            title: textToShow,
            message: data.ARE_YOU_SURE,
            buttons: [
                {
                    text: data.DONE_BUTTON,
                    handler: function () {
                        _this.deleteManyProducts();
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
    ItemsPage.prototype.showToast = function (data, withNumberOfProductsDeleted) {
        var messageToShow;
        if (withNumberOfProductsDeleted) {
            messageToShow = this.arrayProductsToDelete.length + " " + data;
        }
        else {
            messageToShow = data;
        }
        this.toastCtrl.create({
            message: messageToShow,
            duration: 2000,
            position: 'top',
        }).present();
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
        // this.arrayProductsToDelete.length === 1 ? this.showNumberOfProductsToDelete = `Delete ${this.arrayProductsToDelete.length} product` : this.showNumberOfProductsToDelete = `Delete ${this.arrayProductsToDelete.length} products`;
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
        console.log(this.checkBoxedsOpened);
        if (!this.checkBoxedsOpened) {
            this.navCtrl.push('ProductDetailPage', product);
        }
    };
    // EN BACK PONER MIDDLEWARES DE SI ES EL MISMO USER ID???
    // LLAMAR A ESTA FUNCION MULTIPLES VECES???
    ItemsPage.prototype.deleteManyProducts = function () {
        var _this = this;
        var errors = [];
        // COMO AFECTARIA LOS ERRORES MULTIPLES AQUI????
        return __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].forkJoin(this.arrayProductsToDelete.map(function (product) {
            return _this.productsProvider.deleteProductByUser(product);
        }), function () {
            var results = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                results[_i] = arguments[_i];
            }
            return ({
                failed: results.map(function (res) {
                    return res instanceof __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["d" /* HttpErrorResponse */] ? res : null;
                }),
                succeeded: results.map(function (res) {
                    return res instanceof __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["d" /* HttpErrorResponse */] ? null : res;
                })
            });
        }).subscribe(function (data) {
            if (errors.length === 0) {
                _this.translator('PRODUCTS_DELETED', false, true);
                _this.emptyEverything();
                _this.closeFab();
            }
            else {
                console.log(errors); // PROBAR ERRORES DE BACK MULTIPLES AL DELETE???
            }
        });
    };
    ItemsPage.prototype.ngOnDestroy = function () {
        this.subscriptions.unsubscribe();
    };
    ItemsPage.ENDPOINT = __WEBPACK_IMPORTED_MODULE_5__config_config_int__["a" /* CONFIG */].API_ENDPOINT + "/products";
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("fab"),
        __metadata("design:type", Object)
    ], ItemsPage.prototype, "fab", void 0);
    ItemsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-items',template:/*ion-inline-start:"/Users/franciscomanriquedelara/Desktop/front/src/pages/items/items.html"*/'  <!-- <header [name]="nameHeader"></header> -->\n  \n  <ion-header>\n    \n    <ion-navbar>\n      <ion-title>aaa</ion-title>\n    </ion-navbar>\n    \n  </ion-header>\n  \n  \n  <ion-content padding>\n    <!-- SI NO HAY PRODUCTOS -->\n    <div class="no-products" *ngIf="productsOfUser?.length === 0">\n      <h6 class="text-no-products">{{\'NO_PRODUCTS_IN_YOUR_LIST\' | translate}}</h6>\n    </div>\n    <ion-segment (click)="segmentSelected($event)" *ngIf="productsRemainAllTheTime?.length > 0">\n      <ion-segment-button *ngFor="let option of rentOrBuyOptions">\n        <ion-label>{{option}}</ion-label>\n      </ion-segment-button>\n    </ion-segment>\n    <ion-list>\n      <ion-item *ngFor="let product of productsOfUser" (click)="goToProduct(product)">\n        <ion-label>\n          <ion-slides [pager]="product?.photos.length > 1" options="{efect: \'flip\'}">\n            <ion-slide *ngFor="let photo of product.photos">\n              <img [src]="photo" alt="image">\n            </ion-slide>\n          </ion-slides>\n        </ion-label>\n        <ion-checkbox #checkBox *ngIf="checkBoxedsOpened" (click)="selectProductWithCheckbox(product)"></ion-checkbox>\n      </ion-item>\n    </ion-list>\n    \n    \n    <ion-fab left bottom #fab *ngIf="productsOfUser?.length !== 0">\n      <button color=danger ion-fab mini (click)="fabOpenCheckboxes()">\n        <ion-icon [name]="trashEmptyOrFull"></ion-icon>\n      </button>\n      <ion-fab-list side="right">\n        <button color=primary ion-fab>\n          <ion-icon name="share-alt"></ion-icon> \n        </button>\n        <button color=light ion-fab (click)="deleteProducts()">\n          <ion-icon [name]="trashEmptyOrFull"></ion-icon> \n        </button>\n      </ion-fab-list>\n    </ion-fab>\n  </ion-content>\n  \n  \n  \n  <div class="delete-all" *ngIf="checkBoxedsOpened" (click)="selectAllProductsToDelete()">\n    <p>{{\'DELETE_ALL\' | translate}}</p>\n  </div>\n\n\n\n'/*ion-inline-end:"/Users/franciscomanriquedelara/Desktop/front/src/pages/items/items.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_products_products__["a" /* ProductsProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_products_products__["a" /* ProductsProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */]) === "function" && _f || Object])
    ], ItemsPage);
    return ItemsPage;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=items.js.map

/***/ })

});
//# sourceMappingURL=8.js.map