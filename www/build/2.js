webpackJsonp([2],{

/***/ 810:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(823);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(83);
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

/***/ 812:
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

/***/ 823:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_user__ = __webpack_require__(812);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_products_products__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_favorites_favorites__ = __webpack_require__(421);
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
    function HomePage(navCtrl, navParams, loadingCtrl, auth, modal, productsProvider, _sanitizer, toastCtrl, translate, favoritesProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.auth = auth;
        this.modal = modal;
        this.productsProvider = productsProvider;
        this._sanitizer = _sanitizer;
        this.toastCtrl = toastCtrl;
        this.translate = translate;
        this.favoritesProvider = favoritesProvider;
        this.loader = null;
        this.user = new __WEBPACK_IMPORTED_MODULE_3__models_user__["a" /* User */]();
        this.products = [];
        this.newOnesAfterRefresh = [];
        // productsRemainAllTheTime: Array<Product> = [];
        this.rentOrBuyOptions = [];
        this.categories = [{ icon: 'ios-home-outline', type: 'Real state' }, { icon: 'ios-car-outline', type: 'Cars' }, { icon: 'ios-game-controller-b-outline', type: 'Gaming' }, { icon: 'bicycle', type: 'Cycling' }, { icon: 'football-outline', type: 'Sports' }, { icon: 'phone-portrait', type: 'Phones' }, { icon: 'shirt-outline', type: 'Clothing' }, { icon: 'boat-outline', type: 'Boats' }];
        this.wishList = [];
        this.subscriptions = new __WEBPACK_IMPORTED_MODULE_7_rxjs__["Subscription"]();
        this.pagination = 1;
        this.rentOrBuyTabSelected = '';
        this.typeSelected = '';
    }
    HomePage.prototype.ngOnInit = function () {
        this.rentOrBuyOptions = ['All', 'Rent', 'Sell', 'Exchange', 'Gift'];
        this.getAllProducts();
        this.getAllFavs();
        // this.getSuscription();//ESTO??????
    };
    // getSuscription(){//ESTO??????
    //   let subscription = this.productsProvider.allProductsHomeChanges().subscribe((products: Array<Product>)=>{
    //     this.products = products; // ya que cuando doy al tab va cambiando el  array original, hago que el array completo se mantenga para poder mantener los tabs en el html???        
    //   })      
    //   this.subscriptions.add(subscription);
    // }
    HomePage.prototype.chooseProduct = function (category) {
        // this.filterByType(category.type)//ESTO??????
        // SI ES NUEVO O NO ES EL MISMO QUIERO VACIAR EL ARRAY LOCAL ASI ME DA EL TIPO QUE QUIERO
        if (this.typeSelected === '' || this.typeSelected !== category.type) {
            this.typeSelected = category.type;
            this.products = [];
            this.pagination = 1;
            this.getAllProducts(null, { 'type': category.type });
        }
        // console.log(111111, this.typeSelected);
        this.inWhatTabIclickedLast({ 'type': category.type });
    };
    HomePage.prototype.segmentSelected = function (event) {
        // this.filterByType(event.target.innerHTML) //ESTO??????
        if (this.rentOrBuyTabSelected === 'All') {
            // this.pagination = 1;
            // this.lastTabClicked = undefined; 
            // this.getAllProducts();
        }
        if (this.rentOrBuyTabSelected === '' || this.rentOrBuyTabSelected !== event.target.innerHTML) {
            this.rentOrBuyTabSelected = event.target.innerHTML;
            this.products = [];
            this.pagination = 1;
            this.getAllProducts(null, { 'rentOrBuy': event.target.innerHTML });
        }
        // console.log(22222, this.rentOrBuyTabSelected);
        this.inWhatTabIclickedLast({ 'rentOrBuy': event.target.innerHTML });
    };
    HomePage.prototype.inWhatTabIclickedLast = function (objectClicked) {
        // REEEMPLAZA EL ULTIMO SITIO DONDE CLIQUEE ASI EL INFINITE PUEDE RECARGAR SOBRE ESO    
        this.lastTabClicked = objectClicked;
    };
    // filterByType(filterByType: string){   //ESTO??????
    //   this.getSuscription(); // si no pongo esto hace un filtro sobre lo ya filtrado previamente y no existe nada???
    //   if (filterByType !== 'All') {
    //     this.products = this.products.filter(product => product.type === filterByType);
    //   }
    // }
    // filterByRentOrBuy(rentOrBuy: string){   //ESTO??????         
    //   this.getSuscription(); // si no pongo esto hace un filtro sobre lo ya filtrado previamente y no existe nada???
    //   if (rentOrBuy !== 'All') {
    //     this.products = this.products.filter(product => product.rentOrBuy === rentOrBuy);
    //   }
    // }
    HomePage.prototype.getAllProducts = function (refresher, rentOrBuyOrType) {
        var _this = this;
        this.productsProvider.getAllProducts(this.pagination, rentOrBuyOrType)
            .subscribe(function (products) {
            if (refresher) {
                refresher.complete();
            }
            if (products.length > 0) {
                products.forEach(function (product) {
                    _this.products.push(product);
                });
            }
        });
    };
    // ESTO???????
    // getaAllProducts(refresher?: any){      
    //   this.productsProvider.getAllProducts().subscribe((products: Array<Product>)=>{        
    //     if (refresher) { // stop refresher after i got results, if im doing refresher, only include new ones instead adding them all ???
    //       if (products.length > this.products.length) {
    //         this.showToast(`${(Number(products.length) - Number(this.products.length)).toString()} products new`);            
    //       } else{
    //         this.translator('NO_NEW_PRODUCTS_AFTER_REFRESH');            
    //       }
    //       refresher.complete();
    //     } 
    //   })
    // }
    HomePage.prototype.getAllFavs = function () {
        var _this = this;
        this.favoritesProvider.getFavoritesProductsOfUser().subscribe(function (wishList) {
            _this.wishList = wishList;
            _this.paintHeartIfLiked();
        }, function (error) {
            console.log(error);
            // this.translator(error);
        });
    };
    // ESTO???
    HomePage.prototype.loadData = function (event) {
        var _this = this;
        setTimeout(function () {
            _this.pagination++;
            console.log(777, _this.lastTabClicked);
            _this.getAllProducts(null, _this.lastTabClicked);
            event.complete();
        }, 500);
    };
    // ESTO???
    HomePage.prototype.paintHeartIfLiked = function () {
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
    HomePage.prototype.searchingProduct = function (pattern) {
        // this.modal.create('SearchProductPage').present();
        this.navCtrl.push('SearchProductPage'); // mediante el push puedo pasar info a otra pagina o si no quiero pasar y pasar usar behaviour subject???
    };
    HomePage.prototype.doRefresh = function (refresher) {
        this.products = [];
        this.pagination = 1;
        this.lastTabClicked = undefined; // necesito no solo pasar a la funcion undefined para que no tenga en cuenta el filtro sino tambien esto, ya que el infinite recuerda la ultima clicada???
        this.getAllProducts(refresher, undefined);
    };
    HomePage.prototype.goToProduct = function (product) {
        // PONER ESTO CON SUBJECT ASI APRENDO??? AUNQUE SOLO PRA ESTO NO HARIA FALTA
        this.navCtrl.push('ProductDetailPage', product);
    };
    HomePage.prototype.menuClick = function (event) {
        // ESTO PARA QUE???
        // console.log(event); 
    };
    HomePage.prototype.ngOnDestroy = function () {
        this.subscriptions.unsubscribe();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/franciscomanriquedelara/Desktop/front/src/pages/home/home.html"*/'<!-- HEADER -->\n<ion-header>\n  <ion-navbar>\n    <!-- MENU TOGGLE -->\n    <ion-buttons start class="burger">\n      <!-- ESTE CLICK PARA QUE???? -->\n      <button ion-button icon-only menuToggle (click)="menuClick($event)"> \n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <!-- SEARCH BAR -->\n    <div class="searchBar">\n      <ion-searchbar (click)="searchingProduct(pattern)" [(ngModel)]="pattern"></ion-searchbar>\n      <ion-icon name="md-funnel"></ion-icon>\n    </div>\n  </ion-navbar>\n</ion-header>\n<!-- ION CONTENT -->\n<ion-content padding>\n  <!-- REFRESHER -->\n  <ion-refresher pullMin="100" (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="Pull to refresh" refreshingSpinner="circles" refreshingText="Refreshing..."></ion-refresher-content>\n  </ion-refresher>\n  <!-- TOP PART -->\n  <div class="fixedTop">\n    <!-- SEARCH IN... -->\n    <div class="searchIn">\n      <div>\n        <h6>{{ \'SEARCH_IN\' | translate }}</h6>\n      </div>\n      <div>\n        <span>{{ \'SEE_ALL\' | translate }}\n          <!-- <ion-icon name="arrow-forward"></ion-icon> -->\n        </span>\n      </div>\n    </div>\n    <!-- SEARCH BY ICON -->\n    <div class="listOfProductsToChooseFrom">\n      <div *ngFor="let category of categories">\n        <ion-icon [name]="category.icon" (click)="chooseProduct(category)">\n        </ion-icon>\n        <span>{{category.name | translate }}</span>\n      </div>\n    </div>\n    \n    <!-- SEGMENT TABS TOCHANGE CONTENT -->\n    <ion-segment (click)="segmentSelected($event)" class="segmentOptions" *ngIf="rentOrBuyOptions" color ="dark">\n      <ion-segment-button *ngFor="let option of rentOrBuyOptions">\n        <ion-label>{{option}}</ion-label>\n      </ion-segment-button>\n    </ion-segment>\n  </div>\n  <!-- MAIN CONTENT -->\n  <div class="productsList">\n    <div class="product" *ngFor="let product of products">\n      <div class="container" [style]="product.randomHeight">\n        <div class="relative" (click)="goToProduct(product)">\n          <img [src]="product.photos[0]" alt="image">\n          <div class="rentOrBuyTag">\n            <p>{{product.rentOrBuy}}</p>\n            <p>{{product.type}}</p>\n          </div>\n          <!-- <div class="typeTag">\n            <p>{{product.type}}</p>\n          </div> -->\n          <div class="imgUser">\n            <img [src]="product.owner.image" alt="">\n          </div>\n        </div>\n        <div class="infoWrapper">\n          <div class="flex">\n            <h6 class="price">{{ product.price }} €</h6>\n            <ion-icon name="heart-outline"></ion-icon>\n          </div>\n          <span class="name">{{ product.name | titlecase}}</span>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- INFINITE SCROLL -->\n  <ion-infinite-scroll threshold="10px" (ionInfinite)="loadData($event)">\n    <ion-infinite-scroll-content\n    loadingSpinner="bubbles"\n    loadingText="Loading more data...">\n  </ion-infinite-scroll-content>\n</ion-infinite-scroll>\n</ion-content>'/*ion-inline-end:"/Users/franciscomanriquedelara/Desktop/front/src/pages/home/home.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__providers_products_products__["a" /* ProductsProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_products_products__["a" /* ProductsProvider */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["c" /* TranslateService */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_8__providers_favorites_favorites__["a" /* FavoritesProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__providers_favorites_favorites__["a" /* FavoritesProvider */]) === "function" && _k || Object])
    ], HomePage);
    return HomePage;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
}());

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=2.js.map