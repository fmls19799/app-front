webpackJsonp([2],{

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(56);
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

/***/ 336:
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

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_user__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_products_products__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__(31);
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
    function HomePage(navCtrl, navParams, loadingCtrl, auth, modal, productsProvider, _sanitizer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.auth = auth;
        this.modal = modal;
        this.productsProvider = productsProvider;
        this._sanitizer = _sanitizer;
        this.loader = null;
        this.user = new __WEBPACK_IMPORTED_MODULE_3__models_user__["a" /* User */]();
        this.products = [];
        this.productColumn1 = [];
        this.productColumn2 = [];
        this.productColumn3 = [];
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
        this.productsProvider.getAllProducts().subscribe(function (products) {
            _this.products = products;
            if (refresher) {
                refresher.complete();
            }
            _this.populateProductsList(_this.products); // split products in 3 columns
        });
    };
    HomePage.prototype.populateProductsList = function (products) {
        var _this = this;
        products.forEach(function (product, i) {
            // console.log(i);
            if (i <= products.length / 2) {
                // product.randomHeight = this.randomStyleHeightDiv();          
                _this.productColumn1.push(product);
            }
            else {
                // product.randomHeight = this.randomStyleHeightDiv(); 
                _this.productColumn2.push(product);
            }
        });
        // console.log(this.productColumn1);
        // console.log(this.productColumn2);
        this.productColumn1.forEach(function (el) {
            console.log(el.id);
        });
        this.productColumn2.forEach(function (el) {
            console.log(el.id);
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
    HomePage.prototype.productDetail = function (productClicked) {
        var _this = this;
        console.log('dsa', productClicked.id);
        return this.products.forEach(function (product) {
            if (product.id === productClicked.id) {
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
        // product.opacity = !product.opacity ? true : false;
    };
    HomePage.prototype.close = function () {
        console.log('CLOSED');
    };
    HomePage.prototype.isActive = function () {
        console.log('ACTIVE');
    };
    HomePage.prototype.ionWillClose = function () {
        console.log('will close');
    };
    HomePage.prototype.ionDidClose = function () {
        console.log('did close');
    };
    HomePage.prototype.menuClick = function (a) {
        // console.log('menu', a);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/franciscomanriquedelara/Desktop/front/src/pages/home/home.html"*/'<!-- HEADER -->\n<ion-header>\n  <ion-navbar>\n    <!-- MENU TOGGLE -->\n    <ion-buttons start class="burger">\n      <button ion-button icon-only menuToggle (click)="menuClick($event)">\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <!-- SEARCH BAR -->\n    <div class="flex">\n      <ion-searchbar (click)="searchingProduct(pattern)" [(ngModel)]="pattern"></ion-searchbar>\n    </div>\n  </ion-navbar>\n</ion-header>\n<!-- ION CONTENT -->\n<ion-content>\n  <!-- REFRESHER -->\n  <ion-refresher pullMin="200" (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="Pull to refresh" refreshingSpinner="circles" refreshingText="Refreshing..."></ion-refresher-content>\n  </ion-refresher>  \n  <!-- TOP PART -->\n  <div class="fixedTop">\n    <!-- SEARCH IN... -->\n    <div class="searchIn">\n      <div>\n        <h6>{{ \'SEARCH_IN\' | translate }}</h6>\n      </div>\n      <div>\n        <span>{{ \'SEE_ALL\' | translate }}\n          <!-- <ion-icon name="arrow-forward"></ion-icon> -->\n        </span>\n      </div>\n    </div>\n    <!-- SEARCH BY ICON -->\n    <div class="listOfProductsToChooseFrom">\n      <div *ngFor="let category of categories">\n        <ion-icon [name]="category.icon" (click)="chooseProduct(category)"></ion-icon>\n        <span>{{category.name | translate }}</span>\n      </div>\n    </div>\n  </div>\n  <!-- MAIN CONTENT -->\n  <div class="productsList">\n    <ion-row>\n      <!-- LEFT COLUMN -->\n      <ion-col>\n        <div class="product" *ngFor="let product of productColumn1">\n          <div class="container" [style]="product.randomHeight" [ngClass]="{\'increasesizeContainer\': product.opacity}">\n            <img [src]="product.photos[0]" (click)="productDetail(product)" alt="image" [ngClass]="{\'opacity03\': product.opacity}">\n            <div class="infoWrapper">\n              <h6 class="price">{{ product.price }} €</h6>\n              <span class="name">{{ product.name | titlecase}}</span>\n            </div>\n            <!-- IF CLICKED -->\n            <div class="showHiddenContent" *ngIf="product.opacity">\n              <div class="imagesGallery">\n                <img [src]="image" alt="image" *ngFor="let image of product.photos">\n              </div>\n              <small class="description">{{product.description}}</small>\n              <ion-icon [name]="product.icon"></ion-icon>\n              <h4 class="goToProduct">Ir a producto</h4>\n            </div>\n            <!-- FIN IF CLICKED -->\n          </div>\n        </div>\n      </ion-col>\n      <!-- RIGHT COLUMN -->\n      <ion-col>\n        <div class="product" *ngFor="let product of productColumn2">\n          <div class="container" [style]="product.randomHeight" [ngClass]="{\'increasesizeContainer\': product.opacity}">\n            <img [src]="product.photos[0]" (click)="productDetail(product)" alt="image" [ngClass]="{\'opacity03\': product.opacity}">\n            <div class="infoWrapper">\n              <h6 class="price">{{ product.price }} €</h6>\n              <span class="name">{{ product.name | titlecase}}</span>\n            </div>\n            <!-- IF CLICKED -->\n            <div class="showHiddenContent" *ngIf="product.opacity">\n              <div class="imagesGallery">\n                <img [src]="image" alt="image" *ngFor="let image of product.photos">\n              </div>\n              <small class="description">{{product.description}}</small>\n              <ion-icon [name]="product.icon"></ion-icon>\n              <h4 class="goToProduct">Ir a producto</h4>\n            </div>\n            <!-- FIN IF CLICKED -->\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/franciscomanriquedelara/Desktop/front/src/pages/home/home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_products_products__["a" /* ProductsProvider */],
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["c" /* DomSanitizer */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=2.js.map