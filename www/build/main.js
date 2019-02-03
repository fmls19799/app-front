webpackJsonp([10],{

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_config_int__ = __webpack_require__(140);
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
        var _this = this;
        return this.http.post(AuthProvider_1.ENDPOINT + "/sessions", user).map(function (data) {
            _this.user = data; // IF GOOD PONER ESO???
            _this.saveInLocalStorageAfterLogin(_this.user);
            return data;
        });
    };
    AuthProvider.prototype.isLoggedIn = function () {
        return localStorage.getItem('user') ? true : false;
    };
    AuthProvider.prototype.saveInLocalStorageAfterLogin = function (user) {
        localStorage.setItem('user', JSON.stringify(user));
    };
    AuthProvider.prototype.saveUserInAuthWhenAppLoads = function () {
        if (localStorage.getItem('user')) {
            this.user = JSON.parse(localStorage.getItem('user'));
        }
    };
    // rememberMe():boolean{
    //   return localStorage.getItem('rememberMe') ? true : false;
    // }
    AuthProvider.prototype.logout = function () {
        localStorage.removeItem('user');
        this.user = null;
    };
    AuthProvider.ENDPOINT = "" + __WEBPACK_IMPORTED_MODULE_2__config_config_int__["a" /* CONFIG */].API_ENDPOINT;
    AuthProvider = AuthProvider_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */]])
    ], AuthProvider);
    return AuthProvider;
    var AuthProvider_1;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 140:
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

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_config_int__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_auth__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_ApiError__ = __webpack_require__(446);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_throw__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operators__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ProductsProvider = /** @class */ (function () {
    function ProductsProvider(http, auth) {
        this.http = http;
        this.auth = auth;
    }
    ProductsProvider_1 = ProductsProvider;
    ProductsProvider.prototype.asFormData = function (product) {
        var data = new FormData();
        data.append('name', product.name);
        data.append('icon', product.icon);
        data.append('description', product.description);
        data.append('price', (product.price).toString());
        data.append('type', product.type);
        for (var _i = 0, _a = product.photos; _i < _a.length; _i++) {
            var photo = _a[_i];
            data.append('photos', photo);
        }
        return data;
    };
    ProductsProvider.prototype.createProduct = function (product) {
        return this.http.post(ProductsProvider_1.ENDPOINT + "/products/" + this.auth.user.id + "/create", this.asFormData(product), ProductsProvider_1.httpOptionsForFormData)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["map"])(function (product) {
            return product;
        }), Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["catchError"])(this.handleError));
    };
    ProductsProvider.prototype.getAllProducts = function () {
        //QUITAR EL MOCK???      
        return this.http.get(ProductsProvider_1.ENDPOINT + "/products").map(function (products) { return products; })
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["map"])(function (products) {
            return products;
        }), Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["catchError"])(this.handleError));
        // return this.http.get<Array<Product>>(`http://www.mocky.io/v2/5c4ced6d3700002b0bb042ef`).map((products: Array<Product>)=> products);
    };
    // COMO HACEMOS CON PIPE O SIN??? ESTE ORDEN ESTA MAL????
    ProductsProvider.prototype.getProductsByUser = function () {
        // PONER BIEN LA RUTA NO TIENE SENTIDO PONER PRODUCT ID????
        return this.http.get(ProductsProvider_1.ENDPOINT + "/products/" + this.auth.user.id).map(function (products) { return products; })
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["map"])(function (products) {
            return products;
        }), Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["catchError"])(this.handleError));
    };
    ProductsProvider.prototype.likeProduct = function (product) {
        console.log(product);
        return this.http.put(ProductsProvider_1.ENDPOINT + "/products/" + product._id + "/like", product).map(function (product) { return product; })
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["map"])(function (product) {
            return product;
        }), Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["catchError"])(this.handleError));
    };
    ProductsProvider.prototype.unlikeProduct = function (product) {
        console.log(product);
        return this.http.put(ProductsProvider_1.ENDPOINT + "/products/" + product._id + "/unlike", product).map(function (product) { return product; })
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["map"])(function (product) {
            return product;
        }), Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["catchError"])(this.handleError));
    };
    ProductsProvider.prototype.deleteProductByUser = function (product) {
        // PONER MIDDLEWARE EN BACK TB???
        return this.http.delete(ProductsProvider_1.ENDPOINT + "/products/" + product._id + "/delete").map(function (res) { return res; })
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["map"])(function () {
            return;
        }), Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["catchError"])(this.handleError));
    };
    ProductsProvider.prototype.handleError = function (error) {
        console.log(error);
        var apiError = new __WEBPACK_IMPORTED_MODULE_4__models_ApiError__["a" /* ApiError */]();
        if (error.error instanceof ErrorEvent) {
            console.log('es error event');
            apiError.message = 'Something went bad, try again';
        }
        else {
            console.log('no es error event');
            console.log(error.error);
            apiError.message = error.error.message;
            apiError.errors = error.error.errors;
        }
        console.log(apiError);
        return Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_observable_throw__["_throw"])(apiError);
    };
    ProductsProvider.ENDPOINT = "" + __WEBPACK_IMPORTED_MODULE_2__config_config_int__["a" /* CONFIG */].API_ENDPOINT;
    ProductsProvider.httpOptionsForFormData = {
        headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["e" /* HttpHeaders */]({ "myHeaders": "fotos" }),
        withCredentials: true
    };
    ProductsProvider = ProductsProvider_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__auth_auth__["a" /* AuthProvider */]])
    ], ProductsProvider);
    return ProductsProvider;
    var ProductsProvider_1;
}());

//# sourceMappingURL=products.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Utils; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */]])
    ], Utils);
    return Utils;
}());

//# sourceMappingURL=utils.js.map

/***/ }),

/***/ 212:
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
webpackEmptyAsyncContext.id = 212;

/***/ }),

/***/ 256:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/chat/chat.module": [
		798,
		9
	],
	"../pages/home/home.module": [
		799,
		2
	],
	"../pages/items/items.module": [
		800,
		8
	],
	"../pages/login/login.module": [
		801,
		1
	],
	"../pages/map/map.module": [
		802,
		7
	],
	"../pages/product-detail/product-detail.module": [
		803,
		6
	],
	"../pages/profile/profile.module": [
		804,
		5
	],
	"../pages/register/register.module": [
		805,
		0
	],
	"../pages/search-product/search-product.module": [
		806,
		4
	],
	"../pages/settings/settings.module": [
		807,
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
webpackAsyncContext.id = 256;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalComponentChooseCategory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_product__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_products_products__ = __webpack_require__(198);
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
    function ModalComponentChooseCategory(viewCtrl, modalCtrl, formBuilder, translate, toastCtrl, productsProvider, navCtrl) {
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.formBuilder = formBuilder;
        this.translate = translate;
        this.toastCtrl = toastCtrl;
        this.productsProvider = productsProvider;
        this.navCtrl = navCtrl;
        this.turnOpacity = false;
        this.categoriesArray = [];
        this.isProductChosen = false;
        this.productChosen = new __WEBPACK_IMPORTED_MODULE_2__models_product__["a" /* Product */]();
        this.MODALTITLE = '';
        this.previewImages = [];
        this.categories = [
            {
                icon: 'ios-home-outline',
                type: 'House',
            },
            {
                icon: 'ios-car-outline',
                type: 'Car',
            },
            {
                icon: 'ios-game-controller-b-outline',
                type: 'Gaming',
            },
            {
                icon: 'bicycle',
                type: 'Bicycle',
            }
        ];
        this.myForm = this.formBuilder.group({
            name: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].maxLength(10)]),
            description: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].maxLength(200)]),
            price: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required])
        });
    }
    ModalComponentChooseCategory.prototype.ngOnInit = function () {
        if (this.productChosen) {
            this.MODALTITLE = 'CHOOSE_CATEGORY';
        }
    };
    ModalComponentChooseCategory.prototype.chooseProduct = function (nameProduct) {
        this.isProductChosen = true;
        this.MODALTITLE = 'PUBLISHING_IN';
        this.productChosen = nameProduct;
    };
    ModalComponentChooseCategory.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    ModalComponentChooseCategory.prototype.chooseAgain = function () {
        this.MODALTITLE = 'CHOOSE_CATEGORY';
        this.isProductChosen = false;
    };
    ModalComponentChooseCategory.prototype.receiveImageFromChildren = function (imagesReceived) {
        var _this = this;
        this.productChosen.photos = []; // cada vez que pongo fotos lo vacio para que entre limpio???  
        Array.from(imagesReceived).forEach(function (file) {
            _this.productChosen.photos.push(file);
        });
        this.renderPreviewImg(imagesReceived); // to render in the view
    };
    ModalComponentChooseCategory.prototype.renderPreviewImg = function (imagesReceived) {
        var _this = this;
        if (imagesReceived.length > 5) {
            this.increaseImgWrapper();
        }
        if (this.previewImages.length >= 15) {
            this.translator('MAXIMUM_IMAGE_STACK_EXCEEDED', null);
        }
        Array.from(imagesReceived).forEach(function (file) {
            var reader = new FileReader(); // si pones const no va ya que esta busy reading blobs???
            reader.readAsDataURL(file);
            reader.onload = function () {
                if (_this.previewImages.length < 15) {
                    _this.previewImages.push(reader.result);
                }
            };
        });
    };
    ModalComponentChooseCategory.prototype.uploadProduct = function () {
        var _this = this;
        if (this.previewImages.length <= 0) {
            this.translator('ONE_IMAGE_REQUIRED', null);
        }
        else if (this.myForm.valid) {
            this.productsProvider.createProduct(this.productChosen).subscribe(function (product) {
                _this.translator('PRODUCT_CREATED', true);
            }, function (error) {
                console.log(333, error);
            });
        }
        else {
            this.translator('FORGOT_SOMETHING_VALIDATION', null);
        }
    };
    ModalComponentChooseCategory.prototype.increaseImgWrapper = function () {
        this.increaseImageWrapperHeight = true;
    };
    ModalComponentChooseCategory.prototype.translator = function (messageToTranslate, closeAfterDismissedToast) {
        var _this = this;
        this.translate.get(messageToTranslate).subscribe(function (data) {
            _this.showToast(data, closeAfterDismissedToast);
        });
    };
    ModalComponentChooseCategory.prototype.showToast = function (data, closeAfterDismissedToast) {
        var _this = this;
        var toast = this.toastCtrl.create({
            message: data,
            duration: 2000,
            position: 'top',
        });
        toast.present();
        if (closeAfterDismissedToast) {
            toast.onDidDismiss(function () {
                _this.closeModal();
                _this.navCtrl.setRoot('HomePage'); //NO ME DEJA HABRIR EL MENU DE NUEVO VER ESTO ??????  NO DEBERIA HACERLO ASI SINO UN SIMPLE GET DEL PROVIDER DE HOME AGAIN????
            });
        }
    };
    ModalComponentChooseCategory = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'modal-choose-category',template:/*ion-inline-start:"/Users/franciscomanriquedelara/Desktop/front/src/components/modal-choose-category/modal-choose-category.html"*/'<!-- CHOOSE PRODUCT -->\n<div *ngIf="!isProductChosen" class="modalChooseProduct">\n  <div class="top">\n    <div class="close">\n      <ion-icon name="close" (click)="closeModal()"></ion-icon>\n    </div>\n    <h6 (click)="closeModal()">{{ MODALTITLE | translate}} \n      <ion-icon name="arrow-down"></ion-icon>   <!-- para poder usar icons en componentes se importa ionicmodule en components ??? -->\n    </h6>\n  </div>\n  <div class="bottom">\n    <ion-row>\n      <ion-col *ngFor="let category of categories">\n        <ion-icon [name]="category.icon" (click)="chooseProduct(category)"></ion-icon>\n        <span>{{category.type | translate }}</span>\n      </ion-col>\n    </ion-row>\n  </div>\n</div>\n\n<!-- PRODUCT CHOSEN -->\n<div *ngIf="isProductChosen" class="modalProductChosen">\n  <div class="top">\n    <div class="close">\n      <ion-icon name="close" (click)="closeModal()"></ion-icon>\n    </div>\n    <h6 (click)="chooseAgain()">{{ MODALTITLE | translate}} <span class="strong">{{ productChosen.type }}</span>\n      <ion-icon name="arrow-down"></ion-icon>   <!-- para poder usar icons en componentes se importa ionicmodule en components ??? -->\n    </h6>\n  </div>\n  \n  <section class="bottom">\n    \n    <!-- <div class="imagesContainer" *ngFor="let previewImage of previewImages"> -->\n      <div class="imagesContainer" [ngClass]="{\'increaseDivWtapper\': increaseImageWrapperHeight}">\n        <img [src]="previewImage" *ngFor="let previewImage of previewImages" alt="image">\n      </div>\n      <!-- </div> -->\n      \n      <div class="mainWrapper">\n        <form [formGroup]="myForm" class="myForm" (ngSubmit)="uploadProduct()">\n          <ion-list>\n            <ion-item class="item-form-control" [ngClass]="{\'has-error\': myForm.controls.name.invalid && myForm.controls.name.touched}">\n              <ion-label floating>{{ \'NAME\' | translate }}*</ion-label>\n              <ion-input formControlName="name" type="text" [(ngModel)]="productChosen.name">\n                \n              </ion-input>\n            </ion-item>\n            <ion-item class="item-form-control" [ngClass]="{\'has-error\': myForm.controls.description.invalid && myForm.controls.description.touched}">\n              <ion-label floating>{{ \'DESCRIPTION\' | translate }}*</ion-label>\n              <ion-input formControlName="description" type="text" [(ngModel)]="productChosen.description">\n                \n              </ion-input>\n            </ion-item>\n            <ion-item class="item-form-control" [ngClass]="{\'has-error\': myForm.controls.price.invalid && myForm.controls.price.touched}">\n              <ion-label floating>{{ \'PRICE\' | translate }}*</ion-label>\n              <ion-input formControlName="price" type="number" [(ngModel)]="productChosen.price">\n                \n              </ion-input>\n            </ion-item>\n            \n            <button type="submit" ion-button color="red" block>{{\'UPLOAD_PRODUCT\' | translate}}</button>\n            \n          </ion-list>\n        </form>\n      </div>\n      <!--  -->\n      <div *ngIf="downloadURL | async; let downloadSrc" class="alert alert-info" role="alert">\n        File uploaded: <a [href]="downloadSrc">{{downloadSrc}}</a>\n      </div>\n      <!--  -->\n    </section>\n    \n    <div class="upload">\n      <fileuploader [multipleImages]="true" [iconName]="\'camera-outline\'" [icon]="true" [hideInput]="true" (uploadFileFromChildrenToParent)="receiveImageFromChildren($event)"></fileuploader>\n    </div>\n  </div>'/*ion-inline-end:"/Users/franciscomanriquedelara/Desktop/front/src/components/modal-choose-category/modal-choose-category.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_products_products__["a" /* ProductsProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]])
    ], ModalComponentChooseCategory);
    return ModalComponentChooseCategory;
}());

//# sourceMappingURL=modal-choose-category.js.map

/***/ }),

/***/ 419:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modal_choose_category_modal_choose_category__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fileuploader_fileuploader__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__header_header__ = __webpack_require__(465);
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
                __WEBPACK_IMPORTED_MODULE_1__modal_choose_category_modal_choose_category__["a" /* ModalComponentChooseCategory */],
                __WEBPACK_IMPORTED_MODULE_4__fileuploader_fileuploader__["a" /* FileuploaderComponent */],
                __WEBPACK_IMPORTED_MODULE_5__header_header__["a" /* HeaderComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* IonicModule */] // para poder usar icons en componentes???
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__modal_choose_category_modal_choose_category__["a" /* ModalComponentChooseCategory */],
                __WEBPACK_IMPORTED_MODULE_4__fileuploader_fileuploader__["a" /* FileuploaderComponent */],
                __WEBPACK_IMPORTED_MODULE_5__header_header__["a" /* HeaderComponent */],
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_1__modal_choose_category_modal_choose_category__["a" /* ModalComponentChooseCategory */],
            ]
        })
    ], CustomComponentsModule);
    return CustomComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 420:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Product; });
var Product = /** @class */ (function () {
    function Product() {
        this.photos = [];
    }
    Product.prototype.asFormData = function () {
        var data = new FormData();
        data.append('name', this.name);
        data.append('icon', this.icon);
        data.append('description', this.description);
        data.append('price', (this.price).toString());
        data.append('type', this.type);
        for (var _i = 0, _a = this.photos; _i < _a.length; _i++) {
            var photo = _a[_i];
            data.append('photos', photo);
        }
        return data;
    };
    return Product;
}());

//# sourceMappingURL=product.js.map

/***/ }),

/***/ 421:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(426);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 426:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createTranslateLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(487);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_http_loader__ = __webpack_require__(488);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_app_http_interceptor__ = __webpack_require__(490);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_utils__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_auth_auth__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_components_module__ = __webpack_require__(419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_products_products__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angularfire2__ = __webpack_require__(493);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_angularfire2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angularfire2_storage__ = __webpack_require__(792);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angularfire2_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_angularfire2_storage__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














// FIREBASE


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
                    backButtonText: 'Back'
                }, {
                    links: [
                        { loadChildren: '../pages/chat/chat.module#ChatPageModule', name: 'ChatPage', segment: 'chat', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/items/items.module#ItemsPageModule', name: 'ItemsPage', segment: 'items', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/map/map.module#MapPageModule', name: 'MapPage', segment: 'map', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/product-detail/product-detail.module#ProductDetailPageModule', name: 'ProductDetailPage', segment: 'product-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search-product/search-product.module#SearchProductPageModule', name: 'SearchProductPage', segment: 'search-product', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_12__components_components_module__["a" /* CustomComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_14_angularfire2__["AngularFireModule"].initializeApp({
                    apiKey: "<your-api-key>",
                    authDomain: "<your-auth-domain>",
                    storageBucket: "<project-id>.appspot.com",
                    projectId: "<your-project-id>",
                }),
                __WEBPACK_IMPORTED_MODULE_15_angularfire2_storage__["AngularFireStorageModule"]
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
                __WEBPACK_IMPORTED_MODULE_11__providers_auth_auth__["a" /* AuthProvider */],
                __WEBPACK_IMPORTED_MODULE_13__providers_products_products__["a" /* ProductsProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 446:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiError; });
var ApiError = /** @class */ (function () {
    function ApiError() {
        this.errors = [];
    }
    return ApiError;
}());

//# sourceMappingURL=ApiError.js.map

/***/ }),

/***/ 464:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileuploaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FileuploaderComponent = /** @class */ (function () {
    function FileuploaderComponent() {
        this.uploadFileFromChildrenToParent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */];
        this.imagesPicked = [];
    }
    FileuploaderComponent.prototype.ngOnInit = function () {
        // console.log('hide input : ',this.hideInput);
        // console.log('icon: ',this.icon);
        // console.log('icon name : ',this.iconName);
        // console.log('file : ',this.file);
        // console.log('file container : ',this.fileContainer);
    };
    FileuploaderComponent.prototype.clickButtonToOpenFile = function () {
        this.file.nativeElement.click(); // desde un icono ejecuto apertura del file y se ejecuta en la funcion de abajo
    };
    FileuploaderComponent.prototype.fileChangeEvent = function (images, $event) {
        this.imagesPicked = $event.target.files;
        this.uploadFileFromChildrenToParent.emit(this.imagesPicked); // le envio la imagen al padre
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], FileuploaderComponent.prototype, "hideInput", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], FileuploaderComponent.prototype, "icon", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], FileuploaderComponent.prototype, "iconName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], FileuploaderComponent.prototype, "multipleImages", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], FileuploaderComponent.prototype, "uploadFileFromChildrenToParent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('file'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], FileuploaderComponent.prototype, "file", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('fileContainer'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], FileuploaderComponent.prototype, "fileContainer", void 0);
    FileuploaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'fileuploader',template:/*ion-inline-start:"/Users/franciscomanriquedelara/Desktop/front/src/components/fileuploader/fileuploader.html"*/'<div class="file-container" #fileContainer>\n  <input class="file" type="file" (change)="fileChangeEvent(file, $event)" #file multiple>\n  <ion-icon *ngIf="icon" [name]="iconName" (click)="clickButtonToOpenFile()"></ion-icon>\n</div>\n'/*ion-inline-end:"/Users/franciscomanriquedelara/Desktop/front/src/components/fileuploader/fileuploader.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], FileuploaderComponent);
    return FileuploaderComponent;
}());

//# sourceMappingURL=fileuploader.js.map

/***/ }),

/***/ 465:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
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
    }
    HeaderComponent.prototype.ngOnInit = function () {
        console.log(this.name);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], HeaderComponent.prototype, "name", void 0);
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'header',template:/*ion-inline-start:"/Users/franciscomanriquedelara/Desktop/front/src/components/header/header.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title [innerHTML]="name"></ion-title>\n  </ion-navbar>\n</ion-header>\n'/*ion-inline-end:"/Users/franciscomanriquedelara/Desktop/front/src/components/header/header.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());

//# sourceMappingURL=header.js.map

/***/ }),

/***/ 487:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_splash_screen__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__config_config_int__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_utils__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_auth_auth__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_modal_choose_category_modal_choose_category__ = __webpack_require__(350);
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
    function MyApp(translate, platform, config, statusBar, splashScreen, utils, auth, toastCtrl, modalCtrl, menuController) {
        var _this = this;
        this.translate = translate;
        this.platform = platform;
        this.config = config;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.utils = utils;
        this.auth = auth;
        this.toastCtrl = toastCtrl;
        this.modalCtrl = modalCtrl;
        this.menuController = menuController;
        this.icons = [
            {
                name: 'profile',
                icon: 'ios-contact-outline',
                active: false
            },
            {
                name: 'upload',
                icon: 'ios-reverse-camera-outline',
                active: false
            },
            {
                name: 'map',
                icon: 'ios-map-outline',
                active: false
            },
            {
                name: 'items',
                icon: 'ios-pricetag-outline',
                active: false
            },
            {
                name: 'chat',
                icon: 'ios-chatbubbles-outline',
                active: false
            },
            {
                name: 'settings',
                icon: 'ios-cog-outline',
                active: false
            },
        ];
        platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
        this.initTranslate();
    }
    MyApp.prototype.ionViewWillEnter = function () {
        // console.log(this.viewCtrl);
    };
    MyApp.prototype.closeMenu = function () {
        this.menuController.close();
    };
    MyApp.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.saveUserInAuthWhenAppLoads();
        // set root page at first load and environment
        this.rootPage = 'HomePage';
        this.environment = __WEBPACK_IMPORTED_MODULE_5__config_config_int__["a" /* CONFIG */].ENV;
        // check phone or web
        this.isCordova = this.utils.isCordova() ? true : false;
        this.versionWebOrPhone = this.isCordova ? 'phone' : 'web';
        //check user agent
        // console.log(navigator.userAgent);
        // if(navigator.userAgent.toLowerCase().indexOf('firefox') > -1){
        //   this.userAgent = 'firefox';        
        // } else if(/Mozilla/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor)){
        //   this.userAgent = 'chrome';        
        // }
        //global guardas in here (NAV is the whole nav, not like using ionviewwilleneter,
        //  VIEW CONTROLLER is the view that is going to load) 
        this.nav.viewWillEnter.subscribe(function (view) {
            if (_this.currentPage !== view.id) {
                _this.currentPage = view.id;
                var publicPagesRegex = /login|register|LoginPage|RegisterPage/;
                if (!/login/.test(_this.currentPage.toLowerCase()) && !_this.auth.isLoggedIn()) {
                    console.log('no estas logueado y la vista no es login');
                    _this.nav.setRoot('LoginPage'); // si no paso siempre por login los subjects fallaran????
                    _this.translator('LOGIN_ERROR');
                }
                if (_this.auth.isLoggedIn() && (/login/.test(_this.currentPage.toLowerCase())) || (/register/.test(_this.currentPage.toLowerCase()))) {
                    console.log('estas logueado e intentas ir a login o register');
                    _this.nav.setRoot('HomePage');
                }
            }
        });
    };
    MyApp.prototype.translator = function (messageToTranslate, closeAfterDismissedToast) {
        var _this = this;
        this.translate.get(messageToTranslate).subscribe(function (data) {
            _this.showToast(data);
        });
    };
    MyApp.prototype.showToast = function (data, closeAfterDismissedToast) {
        var toast = this.toastCtrl.create({
            message: data,
            duration: 2000,
            position: 'top',
        }).present();
    };
    MyApp.prototype.initTranslate = function () {
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
    };
    // GO TO SELECTED SEGMENT
    MyApp.prototype.goToSelectedTab = function (icon) {
        switch (icon) {
            case 'upload':
                this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_8__components_modal_choose_category_modal_choose_category__["a" /* ModalComponentChooseCategory */]).present();
                break;
            case 'profile':
                this.nav.push('ProfilePage');
                break;
            case 'map':
                this.nav.push('MapPage');
                break;
            case 'chat':
                this.nav.push('ChatPage');
                break;
            case 'items':
                this.nav.push('ItemsPage');
                break;
            case 'settings':
                this.nav.push('SettingsPage');
                break;
            default:
                break;
        }
        this.menuController.close();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["k" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["k" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('menutoggle'),
        __metadata("design:type", Object)
    ], MyApp.prototype, "menutoggle", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/franciscomanriquedelara/Desktop/front/src/app/app.html"*/'\n<ion-nav [root]="rootPage" #content></ion-nav>\n<!-- <div class="version">{{ versionWebOrPhone }}</div>\n  <div class="userAgent">{{ userAgent }}</div> -->\n  \n  <!-- EL MENU DEBE ESCUCHAR DRAG EVENT POR LO QUE ION-NAV DEBE TENER TODO EL CONTENIDO DE LA APP-->\n  <ion-menu [content]="content" side="start" type="overlay" #menutoggle>\n    <ion-header>\n      <ion-toolbar>\n        <div class="flex">\n          <!-- <ion-icon name="ios-contact-outline"></ion-icon> -->\n          <img src="data:image/png;base64,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" alt="">\n          <div class="flex2">\n            <ion-title>Francisco M.</ion-title>\n            <!-- <small>Go to my profile</small> -->\n          </div>\n        </div>\n      </ion-toolbar>\n    </ion-header>\n    <ion-content>\n      <ion-list>\n        <ion-item *ngFor="let icon of icons">\n          <div (click)="goToSelectedTab(icon.name)">\n            <span>{{ icon.name | translate | titlecase}}</span>\n          </div>\n        </ion-item>\n      </ion-list>\n    </ion-content>\n  </ion-menu>\n  \n  <!-- TABS IN ALL PAGES -->\n  <!-- <ion-footer *ngIf="showTabs">\n    <ion-segment *ngFor="let icon of icons">\n      <ion-icon [name]="icon.icon" (click)="colorIcons(icon.name)"></ion-icon>\n      <span>{{ icon.name | translate }}</span>\n    </ion-segment>\n  </ion-footer> -->\n  '/*ion-inline-end:"/Users/franciscomanriquedelara/Desktop/front/src/app/app.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["b" /* Config */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_6__providers_utils__["a" /* Utils */],
            __WEBPACK_IMPORTED_MODULE_7__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["i" /* MenuController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 490:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppHttpInterceptorProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_finally__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_finally___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_finally__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__ = __webpack_require__(152);
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
                    spinner: 'crescent'
                    // dismissOnPageChange: true
                });
                // this.loader.onDidDismiss(() => this.pendingCalls = 0)
                // console.log('Show loader', 'loader:', this.loader, 'data show loader:', data.showLoader);
                _this.loader.present();
            }
            else if (_this.loader && !data.showLoader) {
                // console.log('Hide loader');
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
        // console.log(noLoaderHeader);
        this.isLoading.next({
            text: req.headers.get('Loader-Text') || '',
            showLoader: !noLoaderHeader || (noLoaderHeader && noLoaderHeader !== 'true')
        });
        // let a = false;
        if (req.headers.get('myHeaders') && req.headers.get('myHeaders') === 'fotos') {
            console.log('TIPO FOTO');
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
            console.log('TIPO JSON');
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
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["o" /* ToastController */]])
    ], AppHttpInterceptorProvider);
    return AppHttpInterceptorProvider;
}());

//# sourceMappingURL=app-http-interceptor.js.map

/***/ })

},[421]);
//# sourceMappingURL=main.js.map