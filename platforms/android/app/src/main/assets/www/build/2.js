webpackJsonp([2],{

/***/ 438:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(449);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(52);
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
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* CustomComponentsModule */],
            ],
        })
    ], HomePageModule);
    return HomePageModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 444:
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

/***/ 449:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_user__ = __webpack_require__(444);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_products_products__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__ = __webpack_require__(52);
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
    function HomePage(navCtrl, navParams, loadingCtrl, auth, modal, productsProvider, _sanitizer, toastCtrl, translate) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.auth = auth;
        this.modal = modal;
        this.productsProvider = productsProvider;
        this._sanitizer = _sanitizer;
        this.toastCtrl = toastCtrl;
        this.translate = translate;
        this.loader = null;
        this.user = new __WEBPACK_IMPORTED_MODULE_3__models_user__["a" /* User */]();
        this.products = [];
        this.productColumn1 = [];
        this.productColumn2 = [];
        this.newOnesAfterRefresh = [];
        this.addedOnes = null;
        this.categories = [
            {
                icon: 'ios-home-outline',
                name: 'House',
            },
            {
                icon: 'ios-car-outline',
                name: 'Car',
            },
            {
                icon: 'ios-game-controller-b-outline',
                name: 'Gaming',
            },
            {
                icon: 'bicycle',
                name: 'Bicycle',
            },
            {
                icon: 'ios-american-football-outline',
                name: 'Sports',
            },
            {
                icon: 'ios-phone-portrait-outline',
                name: 'Phones',
            }
        ];
    }
    HomePage.prototype.ionViewDidLoad = function () {
    };
    HomePage.prototype.ngOnInit = function () {
        this.getAllProducts();
    };
    HomePage.prototype.getAllProducts = function (refresher) {
        var _this = this;
        this.closeOpenedOnes(); // close detail of opened ones
        this.productsProvider.getAllProducts().subscribe(function (products) {
            if (refresher) {
                if (products.length > _this.products.length) {
                    _this.showToast((Number(products.length) - Number(_this.products.length)).toString() + " products new");
                }
                else {
                    _this.translator('NO_NEW_PRODUCTS_AFTER_REFRESH');
                }
                refresher.complete();
            }
            _this.products = products;
            _this.populateProductsList(); // split products in 3 columns
        });
    };
    HomePage.prototype.translator = function (textToTranslate) {
        var _this = this;
        this.translate.get(textToTranslate).subscribe(function (data) {
            _this.showToast(data);
        });
    };
    HomePage.prototype.showToast = function (message) {
        this.toastCtrl.create({
            message: message,
            duration: 2000,
            position: 'top',
        }).present();
    };
    HomePage.prototype.closeOpenedOnes = function () {
        this.products.forEach(function (product) {
            product.opacity = false;
        });
    };
    HomePage.prototype.populateProductsList = function () {
        var _this = this;
        this.productColumn1 = [];
        this.productColumn2 = [];
        this.products.forEach(function (product, i) {
            if (i <= _this.products.length / 2) {
                _this.productColumn1.push(product);
            }
            else {
                _this.productColumn2.push(product);
            }
        });
    };
    HomePage.prototype.randomStyleHeightDiv = function () {
        return this._sanitizer.bypassSecurityTrustStyle("height:" + (Math.floor(Math.random() * 60) + 40));
    };
    HomePage.prototype.searchingProduct = function (pattern) {
        // this.modal.create('SearchProductPage').present();
        this.navCtrl.push('SearchProductPage'); // mediante el push puedo pasar info a otra pagina o si no quiero pasar y pasar usar behaviour subject???
    };
    HomePage.prototype.doRefresh = function (refresher) {
        this.getAllProducts(refresher);
    };
    HomePage.prototype.showSmallDetail = function (productClicked) {
        var _this = this;
        return this.products.forEach(function (product) {
            if (product._id === productClicked._id) {
                return _this.turnOpacity(product);
            }
        });
    };
    HomePage.prototype.turnOpacity = function (product) {
        if (!product.opacity) {
            product.opacity = true;
        }
        else {
            product.opacity = false;
        }
    };
    HomePage.prototype.goToProduct = function (product) {
        // PONER ESTO CON SUBJECT ASI APRENDO??? AUNQUE SOLO PRA ESTO NO HARIA FALTA
        console.log(product);
        this.navCtrl.push('ProductDetailPage', product);
    };
    HomePage.prototype.menuClick = function (event) {
        // ESTO PARA QUE???
        console.log(event);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/franciscomanriquedelara/Desktop/front/src/pages/home/home.html"*/'<!-- HEADER -->\n<ion-header>\n  <ion-navbar>\n    <!-- MENU TOGGLE -->\n    <ion-buttons start class="burger">\n      <!-- ESTE CLICK PARA QUE???? -->\n      <button ion-button icon-only menuToggle (click)="menuClick($event)"> \n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <!-- SEARCH BAR -->\n    <div class="flex">\n      <ion-searchbar (click)="searchingProduct(pattern)" [(ngModel)]="pattern"></ion-searchbar>\n    </div>\n  </ion-navbar>\n</ion-header>\n<!-- ION CONTENT -->\n<ion-content>\n  <!-- REFRESHER -->\n  <ion-refresher pullMin="100" (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="Pull to refresh" refreshingSpinner="circles" refreshingText="Refreshing..."></ion-refresher-content>\n  </ion-refresher>  \n  <!-- TOP PART -->\n  <div class="fixedTop">\n    <!-- SEARCH IN... -->\n    <div class="searchIn">\n      <div>\n        <h6>{{ \'SEARCH_IN\' | translate }}</h6>\n      </div>\n      <div>\n        <span>{{ \'SEE_ALL\' | translate }}\n          <!-- <ion-icon name="arrow-forward"></ion-icon> -->\n        </span>\n      </div>\n    </div>\n    <!-- SEARCH BY ICON -->\n    <div class="listOfProductsToChooseFrom">\n      <div *ngFor="let category of categories">\n        <ion-icon [name]="category.icon" (click)="chooseProduct(category)"></ion-icon>\n        <span>{{category.name | translate }}</span>\n      </div>\n    </div>\n  </div>\n  <!-- MAIN CONTENT -->\n  <div class="productsList">\n    <ion-row>\n      <!-- LEFT COLUMN -->\n      <ion-col>\n        <div class="product" *ngFor="let product of productColumn1">\n          <div class="container" [style]="product.randomHeight" [ngClass]="{\'increasesizeContainer\': product.opacity}">\n            <div class="relative">\n              <img [src]="product.photos[0]" (click)="showSmallDetail(product)" alt="image" [ngClass]="{\'opacity03\': product.opacity}">\n              <!-- if clicked -->\n              <h6 class="goToProduct" *ngIf="product.opacity" (click)="goToProduct($event)">{{\'SEE\' | translate}} {{ product.name }}</h6>\n              <!-- fin if clicked -->\n            </div>\n            <div class="infoWrapper">\n              <h6 class="price">{{ product.price }} €</h6>\n              <span class="name">{{ product.name | titlecase}}</span>\n            </div>\n            <!-- IF CLICKED -->\n            <div class="showHiddenContent" *ngIf="product.opacity">\n              <div class="imagesGallery">\n                <img [src]="image" alt="image" *ngFor="let image of product.photos">\n              </div>\n              <small class="description">{{product.description}}</small>\n              <ion-icon [name]="product.icon"></ion-icon>\n            </div>\n            <!-- FIN IF CLICKED -->\n          </div>\n        </div>\n      </ion-col>\n      <!-- RIGHT COLUMN -->\n      <ion-col>\n        <div class="product" *ngFor="let product of productColumn2">\n          <div class="container" [style]="product.randomHeight" [ngClass]="{\'increasesizeContainer\': product.opacity}">\n            <div class="relative">\n              <img [src]="product.photos[0]" (click)="showSmallDetail(product)" alt="image" [ngClass]="{\'opacity03\': product.opacity}">\n              <!-- if clicked -->\n              <h6 class="goToProduct" *ngIf="product.opacity" (click)="goToProduct(product)">{{\'SEE\' | translate}} {{ product.name }}</h6>\n              <!-- fin if clicked -->\n            </div>\n            <div class="infoWrapper">\n              <h6 class="price">{{ product.price }} €</h6>\n              <span class="name">{{ product.name | titlecase}}</span>\n            </div>\n            <!-- IF CLICKED -->\n            <div class="showHiddenContent" *ngIf="product.opacity">\n              <div class="imagesGallery">\n                <img [src]="image" alt="image" *ngFor="let image of product.photos">\n              </div>\n              <small class="description">{{product.description}}</small>\n              <ion-icon [name]="product.icon"></ion-icon>\n            </div>\n            <!-- FIN IF CLICKED -->\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n    <!-- <ion-fab-button color="primary">Primary</ion-fab-button> -->\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/franciscomanriquedelara/Desktop/front/src/pages/home/home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_products_products__["a" /* ProductsProvider */],
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["c" /* TranslateService */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=2.js.map