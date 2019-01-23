webpackJsonp([4],{

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_config_int__ = __webpack_require__(175);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthProvider = /** @class */ (function () {
    function AuthProvider(http) {
        this.http = http;
    }
    AuthProvider_1 = AuthProvider;
    AuthProvider.prototype.ngOnInit = function () {
    };
    //quitar any???
    AuthProvider.prototype.register = function (user) {
        return this.http.post(AuthProvider_1.ENDPOINT + "/register", user).map(function (data) { return data; });
    };
    //quitar any???
    AuthProvider.prototype.login = function (user) {
        console.log(user);
        return this.http.post(AuthProvider_1.ENDPOINT + "/sessions", user).map(function (data) { return data; });
    };
    AuthProvider.prototype.isLoggedIn = function () {
        return localStorage.getItem('user') ? true : false;
    };
    AuthProvider.prototype.rememberMe = function () {
        return localStorage.getItem('rememberMe') ? true : false;
    };
    AuthProvider.ENDPOINT = "" + __WEBPACK_IMPORTED_MODULE_2__config_config_int__["a" /* CONFIG */].API_ENDPOINT;
    AuthProvider.defaultOptions = {
        headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["e" /* HttpHeaders */]().set('Content-Type', 'application/json'),
        withCredentials: true
    };
    AuthProvider = AuthProvider_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */]])
    ], AuthProvider);
    return AuthProvider;
    var AuthProvider_1;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Utils; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Utils = /** @class */ (function () {
    function Utils(platform) {
        this.platform = platform;
    }
    Utils.prototype.ngOnInit = function () {
    };
    Utils.prototype.isCordova = function () {
        return this.platform.is('cordova');
    };
    Utils = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */]])
    ], Utils);
    return Utils;
}());

//# sourceMappingURL=utils.js.map

/***/ }),

/***/ 132:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 132;

/***/ }),

/***/ 174:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/home/home.module": [
		330,
		2
	],
	"../pages/login/login.module": [
		332,
		1
	],
	"../pages/register/register.module": [
		331,
		0
	],
	"../pages/search-product/search-product.module": [
		333,
		3
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 174;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CONFIG; });
var CONFIG = {
    ENV: 'int',
    USE_MOCKS: false,
    API_ENDPOINT: 'http://localhost:3000',
    VERSION: '/v1_0/',
    BUCKET_S3: '',
    BUCKET_URL: ''
};
//# sourceMappingURL=config.int.js.map

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalComponentChooseCategory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModalComponentChooseCategory = /** @class */ (function () {
    function ModalComponentChooseCategory(viewCtrl, modalCtrl) {
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.turnOpacity = false;
        this.categoriesArray = [];
        this.categories = {
            real_state: 'ios-home-outline',
            car: 'ios-car-outline',
            gaming: 'ios-game-controller-b-outline',
            bycicle: 'bicycle',
            sports: 'ios-american-football-outline',
            phones: 'ios-phone-portrait-outline',
        };
    }
    ModalComponentChooseCategory.prototype.ngOnInit = function () {
    };
    ModalComponentChooseCategory.prototype.getIcons = function () {
        // this.categoriesArray = Object.values(this.categories);
        // console.log(this.categoriesArray.length);
        // if (this.categoriesArray.length % 3 === 0) {
        //   console.log(true);
        // } else{
        //   console.log(false);
        // }
        // console.log(this.categoriesArray);
        return this.categoriesArray;
    };
    ModalComponentChooseCategory.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    ModalComponentChooseCategory = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'modal-choose-category',template:/*ion-inline-start:"/Users/franciscomanriquedelara/Desktop/front/src/components/modal-choose-category/modal-choose-category.html"*/'  <div class="modal" [ngClass]="{\'opacity03\': turnOpacity}">\n    <div class="top">\n      <div class="close">\n        <ion-icon name="close" (click)="closeModal()"></ion-icon>\n      </div>\n      <h6>{{ \'CHOOSE_CATEGORY\' | translate}} \n        <ion-icon name="arrow-down"></ion-icon>   <!-- para poder usar icons en componentes se importa ionicmodule en components ??? -->\n      </h6>\n    </div>\n    <div class="bottom">\n\n      <ion-row>\n        <ion-col>\n          <ion-icon name="ios-home-outline"></ion-icon>\n          <span>{{\'REAL_STATE\' | translate }}</span>\n        </ion-col>\n        <ion-col>\n          <ion-icon name="ios-car-outline"></ion-icon>\n          <span>{{\'CARS\' | translate }}</span>\n        </ion-col>\n        <ion-col>\n          <ion-icon name="ios-game-controller-b-outline"></ion-icon>\n          <span>{{\'GAMING\' | translate }}</span>\n        </ion-col>\n      </ion-row>\n      \n      <ion-row>\n        <ion-col>\n          <ion-icon name="bicycle"></ion-icon>\n          <span>{{\'CYCLING\' | translate }}</span>\n        </ion-col>\n        <ion-col>\n          <ion-icon name="ios-american-football-outline"></ion-icon>\n          <span>{{\'SPORTS\' | translate }}</span>\n        </ion-col>\n        <ion-col>\n          <ion-icon name="ios-phone-portrait-outline"></ion-icon>\n          <span>{{\'PHONES\' | translate }}</span>\n        </ion-col>\n      </ion-row>\n      \n      <ion-row>\n        <ion-col>\n          <ion-icon name="ios-shirt-outline"></ion-icon>\n          <span>{{\'CLOTHING\' | translate }}</span>\n        </ion-col>\n        <ion-col>\n          <ion-icon name="ios-boat-outline"></ion-icon>\n          <span>{{\'BOATS\' | translate }}</span>\n        </ion-col>\n        <ion-col>\n          <ion-icon name="ios-boat-outline"></ion-icon>\n          <span>{{\'BOATS\' | translate }}</span>\n        </ion-col>\n      </ion-row>\n      \n      <ion-row>\n        <ion-col>\n          <ion-icon name="ios-home-outline"></ion-icon>\n          <span>{{\'REAL_STATE\' | translate }}</span>\n        </ion-col>\n        <ion-col>\n          <ion-icon name="ios-car-outline"></ion-icon>\n          <span>{{\'CARS\' | translate }}</span>\n        </ion-col>\n        <ion-col>\n          <ion-icon name="ios-game-controller-b-outline"></ion-icon>\n          <span>{{\'GAMING\' | translate }}</span>\n        </ion-col>\n      </ion-row>\n      \n      <ion-row>\n        <ion-col>\n          <ion-icon name="bicycle"></ion-icon>\n          <span>{{\'CYCLING\' | translate }}</span>\n        </ion-col>\n        <ion-col>\n          <ion-icon name="ios-american-football-outline"></ion-icon>\n          <span>{{\'SPORTS\' | translate }}</span>\n        </ion-col>\n        <ion-col>\n          <ion-icon name="ios-phone-portrait-outline"></ion-icon>\n          <span>{{\'PHONES\' | translate }}</span>\n        </ion-col>\n      </ion-row>\n      \n      <ion-row>\n        <ion-col>\n          <ion-icon name="ios-shirt-outline"></ion-icon>\n          <span>{{\'CLOTHING\' | translate }}</span>\n        </ion-col>\n        <ion-col>\n          <ion-icon name="ios-boat-outline"></ion-icon>\n          <span>{{\'BOATS\' | translate }}</span>\n        </ion-col>\n        <ion-col>\n          <ion-icon name="ios-boat-outline"></ion-icon>\n          <span>{{\'BOATS\' | translate }}</span>\n        </ion-col>\n      </ion-row>\n      \n\n\n\n    </div>\n  </div>\n'/*ion-inline-end:"/Users/franciscomanriquedelara/Desktop/front/src/components/modal-choose-category/modal-choose-category.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]])
    ], ModalComponentChooseCategory);
    return ModalComponentChooseCategory;
}());

//# sourceMappingURL=modal-choose-category.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__header_header__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_choose_category_modal_choose_category__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var CustomComponentsModule = /** @class */ (function () {
    function CustomComponentsModule() {
    }
    CustomComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__header_header__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_2__modal_choose_category_modal_choose_category__["a" /* ModalComponentChooseCategory */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */],
                __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["f" /* IonicModule */] // para poder usar icons en componentes???
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__header_header__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_2__modal_choose_category_modal_choose_category__["a" /* ModalComponentChooseCategory */],
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_1__header_header__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_2__modal_choose_category_modal_choose_category__["a" /* ModalComponentChooseCategory */],
            ]
        })
    ], CustomComponentsModule);
    return CustomComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(238);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createTranslateLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_http_loader__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_app_http_interceptor__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_utils__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_auth_auth__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_components_module__ = __webpack_require__(224);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_7__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: (createTranslateLoader),
                        deps: [__WEBPACK_IMPORTED_MODULE_8__angular_common_http__["b" /* HttpClient */]]
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {
                    tabsPlacement: 'top',
                    backButtonText: ''
                }, {
                    links: [
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search-product/search-product.module#SearchProductPageModule', name: 'SearchProductPage', segment: 'search-product', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_12__components_components_module__["a" /* CustomComponentsModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicErrorHandler */] },
                { provide: __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["a" /* HTTP_INTERCEPTORS */], useClass: __WEBPACK_IMPORTED_MODULE_9__providers_app_http_interceptor__["a" /* AppHttpInterceptorProvider */], multi: true },
                __WEBPACK_IMPORTED_MODULE_10__providers_utils__["a" /* Utils */],
                __WEBPACK_IMPORTED_MODULE_11__providers_auth_auth__["a" /* AuthProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        console.log('Hello HeaderComponent Component');
        this.text = 'Hello World';
    }
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'header',template:/*ion-inline-start:"/Users/franciscomanriquedelara/Desktop/front/src/components/header/header.html"*/'<div>\n  <h1>HOLA</h1>\n</div>'/*ion-inline-end:"/Users/franciscomanriquedelara/Desktop/front/src/components/header/header.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());

//# sourceMappingURL=header.js.map

/***/ }),

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_splash_screen__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__config_config_int__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_utils__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_auth_auth__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_modal_choose_category_modal_choose_category__ = __webpack_require__(176);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





 // AQUI DEFINO EL ENTORNO !!!



// import { CONFIG } from '@environment';
var MyApp = /** @class */ (function () {
    function MyApp(translate, platform, config, statusBar, splashScreen, utils, auth, toast, modalCtrl) {
        var _this = this;
        this.translate = translate;
        this.platform = platform;
        this.config = config;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.utils = utils;
        this.auth = auth;
        this.toast = toast;
        this.modalCtrl = modalCtrl;
        this.showTabs = false;
        platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
        this.initTranslate();
    }
    MyApp.prototype.ionViewWillEnter = function () {
        // console.log(this.viewCtrl);
    };
    MyApp.prototype.ngOnInit = function () {
        var _this = this;
        // set root page at first load and environment
        this.rootPage = 'LoginPage';
        this.environment = __WEBPACK_IMPORTED_MODULE_5__config_config_int__["a" /* CONFIG */].ENV;
        // check phone or web
        this.isCordova = this.utils.isCordova() ? true : false;
        this.versionWebOrPhone = this.isCordova ? 'phone' : 'web';
        //check user agent
        console.log(navigator.userAgent);
        if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
            this.userAgent = 'firefox';
        }
        else if (/Mozilla/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor)) {
            this.userAgent = 'chrome';
        }
        //global guardas in here (NAV is the whole nav, not like using ionviewwilleneter,
        //  VIEW CONTROLLER is the view that is going to load) 
        this.nav.viewWillEnter.subscribe(function (view) {
            if (_this.currentPage !== view.id) {
                //set current page
                _this.currentPage = view.id;
                console.log(view.id);
                // console.log('current page =>:', this.currentPage);
                if (_this.currentPage === 'login' || _this.currentPage === 'register' || _this.currentPage === 'LoginPage' || _this.currentPage === 'RegisterPage') {
                    _this.showTabs = false;
                }
                else {
                    _this.showTabs = true;
                    console.log(_this.currentPage);
                    console.log(_this.showTabs);
                }
                var publicPagesRegex = /login|register/;
                //check user is logged in          
                // if (this.auth.isLoggedIn() && !this.auth.rememberMe()) {
                //   console.log('is logged and has remember me');
                //   // this.nav.setRoot('HomePage')
                // } else{
                //   console.log('not logged');
                // }
                // if current page is not login, set login as root
                // if (!/login/.test(this.currentPage)) {
                //   this.translate.get('LOGIN_ERROR').subscribe((value: string)=>{
                //     let toast = this.toast.create({
                //       message: value,
                //       duration: 3000,
                //       position: 'top'
                //     });
                //     toast.onDidDismiss(()=>{
                //       this.nav.setRoot('LoginPage')
                //     })
                //     toast.present();
                //   })
                // }
            }
        });
    };
    MyApp.prototype.initTranslate = function () {
        var _this = this;
        // Set the default language for translation strings, and the current language.
        this.translate.setDefaultLang('en');
        var browserLang = this.translate.getBrowserLang();
        if (browserLang) {
            if (browserLang === 'zh') {
                var browserCultureLang = this.translate.getBrowserCultureLang();
                if (browserCultureLang.match(/-CN|CHS|Hans/i)) {
                    this.translate.use('zh-cmn-Hans');
                }
                else if (browserCultureLang.match(/-TW|CHT|Hant/i)) {
                    this.translate.use('zh-cmn-Hant');
                }
            }
            else {
                this.translate.use(this.translate.getBrowserLang());
            }
        }
        else {
            this.translate.use('en'); // Set your language here
        }
        this.translate.get(['BACK_BUTTON_TEXT']).subscribe(function (values) {
            _this.config.set('ios', 'backButtonText', values.BACK_BUTTON_TEXT);
        });
    };
    MyApp.prototype.uploadItem = function () {
        this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_8__components_modal_choose_category_modal_choose_category__["a" /* ModalComponentChooseCategory */]).present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["j" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["j" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/franciscomanriquedelara/Desktop/front/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n<!-- <div class="version">{{ versionWebOrPhone }}</div>\n<div class="userAgent">{{ userAgent }}</div> -->\n\n<!-- TABS IN ALL PAGES -->\n<ion-footer *ngIf="showTabs">\n    <ion-segment>\n      <ion-icon name="ios-contact-outline"></ion-icon>\n      <span>{{ \'PROFILE\' | translate }}</span>\n    </ion-segment>\n    <ion-segment>\n      <ion-icon name="ios-reverse-camera-outline" (click)="uploadItem()"></ion-icon>\n      <span>{{ \'UPLOAD_PHOTO\' | translate }}</span>\n    </ion-segment>\n    <ion-segment>\n      <ion-icon name="ios-map-outline"></ion-icon>\n      <span>{{ \'AROUND_YOU\' | translate }}</span>\n    </ion-segment>\n    <ion-segment>\n      <ion-icon name="ios-pricetag-outline"></ion-icon>\n      <span>{{ \'YOUR_ITEMS\' | translate }}</span>\n    </ion-segment>\n    <ion-segment>\n        <ion-icon name="ios-chatbubbles-outline"></ion-icon>\n        <span>{{ \'CHAT\' | translate }}</span>\n    </ion-segment>\n    <ion-segment>\n      <ion-icon name="ios-cog-outline"></ion-icon>\n      <span>{{ \'SETTINGS\' | translate }}</span>\n    </ion-segment>\n  </ion-footer>'/*ion-inline-end:"/Users/franciscomanriquedelara/Desktop/front/src/app/app.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["m" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["b" /* Config */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_6__providers_utils__["a" /* Utils */],
            __WEBPACK_IMPORTED_MODULE_7__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["i" /* ModalController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppHttpInterceptorProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_finally__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_finally___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_finally__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AppHttpInterceptorProvider = /** @class */ (function () {
    function AppHttpInterceptorProvider(loadingCtrl, events, toastCtrl) {
        var _this = this;
        this.loadingCtrl = loadingCtrl;
        this.events = events;
        this.toastCtrl = toastCtrl;
        this.loader = null;
        this.pendingCalls = 0;
        this.isLoading = new __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__["BehaviorSubject"]({
            showLoader: false
        });
        this.isLoading.subscribe(function (data) {
            if (!_this.loader && data.showLoader) {
                _this.loader = _this.loadingCtrl.create({
                    content: data.text || '',
                });
                // this.loader.onDidDismiss(() => this.pendingCalls = 0)
                console.log('Show loader', 'loader:', _this.loader, 'data show loader:', data.showLoader);
                _this.loader.present();
            }
            else if (_this.loader && !data.showLoader) {
                console.log('Hide loader');
                _this.loader.dismiss()
                    .then(function (success) { return _this.loader = null; })
                    .catch(function (error) { });
            }
        });
    }
    // Definicón de interceptores. Se pueden llamar en el orden en que se definen los metadata del provider
    AppHttpInterceptorProvider.prototype.intercept = function (req, next) {
        var _this = this;
        this.updatePendingRequests(1);
        var noLoaderHeader = req.headers.get('No-Loader');
        console.log(noLoaderHeader);
        this.isLoading.next({
            text: req.headers.get('Loader-Text') || '',
            showLoader: !noLoaderHeader || (noLoaderHeader && noLoaderHeader !== 'true')
        });
        if (req.headers.get('Content-Type') && req.headers.get('Content-Type') === 'multipart/form-data') {
            req = req.clone({
                headers: req.headers
                    .delete('Loader-Text')
                //.append('Content-Type', 'application/json')
                // .append('utc', new Date().toString())
                // .append('cognito_id', atob(localStorage.getItem('cognito_id')))
                // .append('X-Authorization', `${atob(localStorage.getItem('access_token'))}`)
                // .append('Y-Authorization', `Bearer ${atob(localStorage.getItem('adfsaccessToken'))}`)
                // .append('env', CONFIG.ENV)
            });
        }
        else {
            req = req.clone({
                headers: req.headers
                    .delete('Loader-Text')
                    .append('Content-Type', 'application/json')
                // .append('utc', new Date().toString())
                // .append('cognito_id', atob(localStorage.getItem('cognito_id')))
                // .append('Authorization', `${atob(localStorage.getItem('access_token'))}`)
                // .append('Y-Authorization', `Bearer ${atob(localStorage.getItem('adfsaccessToken'))}`)
                // .append('env', CONFIG.ENV)
            });
        }
        return next.handle(req)
            .map(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["f" /* HttpResponse */]) {
                // change the response body here
                // console.log(event.body);
                if ((event.body && event.body['errorMessage']) && (event.body['errorMessage'] === '401 Unauthorized' || event.body['errorMessage'] === '[401] Unauthorized')) {
                    throw event.clone({ status: 401 });
                }
                else if (event.body && event.body['errorMessage']) {
                    throw event.clone({ status: 567 });
                }
                else if (event.body && event.body['body'] && event.body['body'] === '401 Unauthorized') {
                    throw event.clone({ status: 401 });
                }
                else if (event.body && event.body['message'] && event.body['message'] === '401 Unauthorized') {
                    throw event.clone({ status: 401 });
                }
            }
            return event;
        })
            .do(
        // return next.handle(req).do(
        function (success) {
            if (success instanceof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["f" /* HttpResponse */]) {
                _this.updatePendingRequests(-1);
            }
        }, function (err) {
            if (err instanceof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpErrorResponse */]) {
                _this.updatePendingRequests(-1);
            }
            if (err instanceof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["f" /* HttpResponse */]) {
                _this.updatePendingRequests(-1);
            }
            if (err.status === 403 || err.status === 401) {
                _this.events.publish('logout', true);
            }
            else {
                if (err.status !== 200) {
                    _this.events.publish('network-error', err.status);
                }
            }
            if (err.status === 567 || err.status === 504) {
                // let alert = this.utils.createBasicAlert('', 'El servicio no responde, inténtelo de nuevo más tarde');
                // alert.present();
            }
        });
    };
    AppHttpInterceptorProvider.prototype.updatePendingRequests = function (update) {
        var _this = this;
        if (this.pendingCalls < 0) {
            // console.log('pendingCalls = 0');
            this.pendingCalls = 0;
        }
        if (update > 0) {
            this.pendingCalls += update;
            // console.log('pendingCalls++:', this.pendingCalls);
        }
        else {
            var _update_1 = update;
            setTimeout(function () {
                if (_this.pendingCalls > 0) {
                    _this.pendingCalls += _update_1;
                    // console.log('pendingCalls--:', this.pendingCalls);
                    _this.isLoading.next({ showLoader: _this.pendingCalls > 0 });
                }
            }, 1000);
        }
    };
    AppHttpInterceptorProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["n" /* ToastController */]])
    ], AppHttpInterceptorProvider);
    return AppHttpInterceptorProvider;
}());

//# sourceMappingURL=app-http-interceptor.js.map

/***/ })

},[225]);
//# sourceMappingURL=main.js.map