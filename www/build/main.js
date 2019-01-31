webpackJsonp([9],{

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_config_int__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_auth__ = __webpack_require__(56);
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
    // request.setRequestHeader("Content-Type", "multipart/form-data; boundary=l3iPy71otz");
    ProductsProvider.prototype.createProduct = function (product) {
        var user = JSON.parse(this.auth.getUserFromLocalStorage());
        console.log(product);
        console.log(111, user);
        var aa = this.a(product);
        if (aa) {
            console.log(2);
            return this.http.post(ProductsProvider_1.ENDPOINT + "/products/" + user.id + "/create", aa, { withCredentials: true }).map(function (product) { return product; });
        }
    };
    ProductsProvider.prototype.a = function (product) {
        var data = new FormData();
        console.log(1);
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
    ProductsProvider.prototype.getAllProducts = function () {
        //QUITAR EL MOCK???      
        return this.http.get(ProductsProvider_1.ENDPOINT + "/products").map(function (products) { return products; });
        // return this.http.get<Array<Product>>(`http://www.mocky.io/v2/5c4ced6d3700002b0bb042ef`).map((products: Array<Product>)=> products);
    };
    ProductsProvider.prototype.likeProduct = function (product) {
        console.log(product);
        return this.http.put(ProductsProvider_1.ENDPOINT + "/products/" + product._id + "/like", product).map(function (product) { return product; });
    };
    ProductsProvider.prototype.unlikeProduct = function (product) {
        console.log(product);
        return this.http.put(ProductsProvider_1.ENDPOINT + "/products/" + product._id + "/unlike", product).map(function (product) { return product; });
    };
    ProductsProvider.ENDPOINT = "" + __WEBPACK_IMPORTED_MODULE_2__config_config_int__["a" /* CONFIG */].API_ENDPOINT;
    ProductsProvider.httpOptionsForFormData = {
        headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({ "Content-Type": "multipart/form-data" }),
        withCredentials: true
    };
    ProductsProvider.httpOptionsForApplicationJson = {
        headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({ "Content-Type": "application/json" }),
        withCredentials: true
    };
    ProductsProvider = ProductsProvider_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__auth_auth__["a" /* AuthProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__auth_auth__["a" /* AuthProvider */]) === "function" && _b || Object])
    ], ProductsProvider);
    return ProductsProvider;
    var ProductsProvider_1, _a, _b;
}());

//# sourceMappingURL=products.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Utils; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
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

/***/ 133:
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
webpackEmptyAsyncContext.id = 133;

/***/ }),

/***/ 175:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/chat/chat.module": [
		325,
		8
	],
	"../pages/home/home.module": [
		326,
		2
	],
	"../pages/login/login.module": [
		327,
		1
	],
	"../pages/map/map.module": [
		328,
		7
	],
	"../pages/product-detail/product-detail.module": [
		329,
		6
	],
	"../pages/profile/profile.module": [
		330,
		5
	],
	"../pages/register/register.module": [
		331,
		0
	],
	"../pages/search-product/search-product.module": [
		332,
		4
	],
	"../pages/settings/settings.module": [
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
webpackAsyncContext.id = 175;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalComponentChooseCategory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_product__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_products_products__ = __webpack_require__(117);
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
            description: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].maxLength(10)]),
            price: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required])
        });
    }
    ModalComponentChooseCategory.prototype.ngOnInit = function () {
        console.log(this.productChosen);
        if (this.productChosen) {
            this.MODALTITLE = 'CHOOSE_CATEGORY';
            console.log(this.MODALTITLE);
        }
    };
    ModalComponentChooseCategory.prototype.chooseProduct = function (nameProduct) {
        this.isProductChosen = true;
        this.MODALTITLE = 'PUBLISHING_IN';
        this.productChosen = nameProduct;
        console.log(nameProduct);
    };
    ModalComponentChooseCategory.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    ModalComponentChooseCategory.prototype.chooseAgain = function () {
        this.MODALTITLE = 'CHOOSE_CATEGORY';
        this.isProductChosen = false;
    };
    ModalComponentChooseCategory.prototype.receiveImageFromChildren = function (imagesReceived) {
        // if (imagesReceived.length <= 5) {
        this.renderPreviewImg(imagesReceived); // to render in the view
        // } else{   
        // this.translator('MAXIMUM_IMAGE_STACK_EXCEEDED');
        // }
    };
    ModalComponentChooseCategory.prototype.renderPreviewImg = function (imagesReceived) {
        var _this = this;
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
            this.productChosen.photos = this.previewImages; // le igualo lo que tenia en preview???  DESCOMENTAR ESTO????       
            this.productsProvider.createProduct(this.productChosen).subscribe(function (res) {
                if (res.error === null) {
                    // ERROR
                }
                else {
                    _this.translator('PRODUCT_CREATED', true);
                }
            });
        }
        else {
            this.translator('FORGOT_SOMETHING_VALIDATION', null);
        }
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
                _this.viewCtrl.dismiss();
                _this.navCtrl.setRoot('HomePage'); //NO ME DEJA HABRIR EL MENU DE NUEVO VER ESTO ??????  NO DEBERIA HACERLO ASI SINO UN SIMPLE GET DEL PROVIDER DE HOME AGAIN????
            });
        }
    };
    ModalComponentChooseCategory = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'modal-choose-category',template:/*ion-inline-start:"/Users/franciscomanriquedelara/Desktop/front/src/components/modal-choose-category/modal-choose-category.html"*/'<!-- CHOOSE PRODUCT -->\n<div *ngIf="!isProductChosen" class="modalChooseProduct">\n  <div class="top">\n    <div class="close">\n      <ion-icon name="close" (click)="closeModal()"></ion-icon>\n    </div>\n    <h6 (click)="closeModal()">{{ MODALTITLE | translate}} \n      <ion-icon name="arrow-down"></ion-icon>   <!-- para poder usar icons en componentes se importa ionicmodule en components ??? -->\n    </h6>\n  </div>\n  <div class="bottom">\n    <ion-row>\n      <ion-col *ngFor="let category of categories">\n        <ion-icon [name]="category.icon" (click)="chooseProduct(category)"></ion-icon>\n        <span>{{category.type | translate }}</span>\n      </ion-col>\n    </ion-row>\n  </div>\n</div>\n\n<!-- PRODUCT CHOSEN -->\n<div *ngIf="isProductChosen" class="modalProductChosen">\n  <div class="top">\n    <div class="close">\n      <ion-icon name="close" (click)="closeModal()"></ion-icon>\n    </div>\n    <h6 (click)="chooseAgain()">{{ MODALTITLE | translate}} <span class="strong">{{ productChosen.type }}</span>\n      <ion-icon name="arrow-down"></ion-icon>   <!-- para poder usar icons en componentes se importa ionicmodule en components ??? -->\n    </h6>\n  </div>\n  \n  <section class="bottom">\n\n    <!-- <div class="imagesContainer" *ngFor="let previewImage of previewImages"> -->\n      <div class="imagesContainer">\n          <img [src]="previewImage" *ngFor="let previewImage of previewImages" alt="image">\n      </div>\n    <!-- </div> -->\n\n    <div class="mainWrapper">\n      <form [formGroup]="myForm" class="myForm" (ngSubmit)="uploadProduct()">\n        <ion-list>\n          <ion-item class="item-form-control" [ngClass]="{\'has-error\': myForm.controls.name.invalid && myForm.controls.name.touched}">\n            <ion-label floating>{{ \'NAME\' | translate }}*</ion-label>\n            <ion-input formControlName="name" type="text" [(ngModel)]="productChosen.name">\n              \n            </ion-input>\n          </ion-item>\n          <ion-item class="item-form-control" [ngClass]="{\'has-error\': myForm.controls.description.invalid && myForm.controls.description.touched}">\n            <ion-label floating>{{ \'DESCRIPTION\' | translate }}*</ion-label>\n            <ion-input formControlName="description" type="text" [(ngModel)]="productChosen.description">\n              \n            </ion-input>\n          </ion-item>\n          <ion-item class="item-form-control" [ngClass]="{\'has-error\': myForm.controls.price.invalid && myForm.controls.price.touched}">\n            <ion-label floating>{{ \'PRICE\' | translate }}*</ion-label>\n            <ion-input formControlName="price" type="number" [(ngModel)]="productChosen.price">\n              \n            </ion-input>\n          </ion-item>\n          \n          <button type="submit" ion-button color="red" block>{{\'UPLOAD_PRODUCT\' | translate}}</button>\n          \n        </ion-list>\n      </form>\n    </div>\n  </section>\n  \n  <div class="upload">\n    <fileuploader [multipleImages]="true" [iconName]="\'camera-outline\'" [icon]="true" [hideInput]="true" (uploadFileFromChildrenToParent)="receiveImageFromChildren($event)"></fileuploader>\n  </div>\n</div>'/*ion-inline-end:"/Users/franciscomanriquedelara/Desktop/front/src/components/modal-choose-category/modal-choose-category.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_products_products__["a" /* ProductsProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__header_header__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_choose_category_modal_choose_category__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__fileuploader_fileuploader__ = __webpack_require__(297);
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
                __WEBPACK_IMPORTED_MODULE_5__fileuploader_fileuploader__["a" /* FileuploaderComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */],
                __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["e" /* IonicModule */] // para poder usar icons en componentes???
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__header_header__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_2__modal_choose_category_modal_choose_category__["a" /* ModalComponentChooseCategory */],
                __WEBPACK_IMPORTED_MODULE_5__fileuploader_fileuploader__["a" /* FileuploaderComponent */],
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Product; });
var Product = /** @class */ (function () {
    function Product() {
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

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(240);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createTranslateLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_http_loader__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_utils__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_auth_auth__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_components_module__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_products_products__ = __webpack_require__(117);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









// import { AppHttpInterceptorProvider } from '../providers/app-http-interceptor';




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
                __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: (createTranslateLoader),
                        deps: [__WEBPACK_IMPORTED_MODULE_8__angular_common_http__["a" /* HttpClient */]]
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {
                    tabsPlacement: 'top',
                    backButtonText: 'Back'
                }, {
                    links: [
                        { loadChildren: '../pages/chat/chat.module#ChatPageModule', name: 'ChatPage', segment: 'chat', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/map/map.module#MapPageModule', name: 'MapPage', segment: 'map', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/product-detail/product-detail.module#ProductDetailPageModule', name: 'ProductDetailPage', segment: 'product-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search-product/search-product.module#SearchProductPageModule', name: 'SearchProductPage', segment: 'search-product', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_11__components_components_module__["a" /* CustomComponentsModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                // {provide: HTTP_INTERCEPTORS, useClass:AppHttpInterceptorProvider, multi: true},
                __WEBPACK_IMPORTED_MODULE_9__providers_utils__["a" /* Utils */],
                __WEBPACK_IMPORTED_MODULE_10__providers_auth_auth__["a" /* AuthProvider */],
                __WEBPACK_IMPORTED_MODULE_12__providers_products_products__["a" /* ProductsProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 296:
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

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileuploaderComponent; });
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
    FileuploaderComponent.prototype.fileChangeEvent = function ($event) {
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
            selector: 'fileuploader',template:/*ion-inline-start:"/Users/franciscomanriquedelara/Desktop/front/src/components/fileuploader/fileuploader.html"*/'<div class="file-container" #fileContainer>\n  <input class="file" type="file" (change)="fileChangeEvent($event)" #file multiple>\n  <ion-icon *ngIf="icon" [name]="iconName" (click)="clickButtonToOpenFile()"></ion-icon>\n</div>\n'/*ion-inline-end:"/Users/franciscomanriquedelara/Desktop/front/src/components/fileuploader/fileuploader.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], FileuploaderComponent);
    return FileuploaderComponent;
}());

//# sourceMappingURL=fileuploader.js.map

/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_splash_screen__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__config_config_int__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_utils__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_auth_auth__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_modal_choose_category_modal_choose_category__ = __webpack_require__(180);
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
    function MyApp(translate, platform, config, statusBar, splashScreen, utils, auth, toast, modalCtrl, menuController) {
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
        this.menuController = menuController;
        this.showTabs = false;
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
                //set current page ????
                _this.currentPage = view.id;
                // console.log('current page =>:', this.currentPage);
                if (_this.currentPage === 'LoginPage' || _this.currentPage === 'login' || _this.currentPage === 'register' || _this.currentPage === 'RegisterPage') {
                    _this.showTabs = false;
                }
                else {
                    _this.showTabs = true;
                }
                var publicPagesRegex = /login|register|LoginPage|RegisterPage/;
                // check user is logged in          
                if (_this.auth.isLoggedIn()) {
                    _this.isLogged = true;
                    _this.userLocalStorage = _this.auth.getUserFromLocalStorage();
                    _this.nav.setRoot('HomePage');
                    // console.log('auth');
                }
                else {
                    console.log('not auth');
                }
                // console.log(1, !publicPagesRegex.test(this.currentPage) && (!this.isLogged));
                // console.log(2, (!publicPagesRegex.test(this.currentPage) && !/LoginPage/.test(this.currentPage)) && (!/register/.test(this.currentPage) && !/RegisterPage/.test(this.currentPage)) && !this.isLogged);
                // if current page is not login / register, set login as root
                // if ((!publicPagesRegex.test(this.currentPage) && !/LoginPage/.test(this.currentPage)) && (!/register/.test(this.currentPage) && !/RegisterPage/.test(this.currentPage)) && !this.isLogged) {
                //   this.nav.setRoot('LoginPage');
                //   this.translate.get('LOGIN_ERROR').subscribe((value: string)=>{
                //     this.toast.create({
                //       message: value,
                //       duration: 3000,
                //       position: 'top'
                //     }).present()
                //   })
                // }
            }
        });
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
            case 'settings':
                this.nav.push('SettingsPage');
                break;
            default:
                break;
        }
        this.menuController.close();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["j" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["j" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('menutoggle'),
        __metadata("design:type", Object)
    ], MyApp.prototype, "menutoggle", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/franciscomanriquedelara/Desktop/front/src/app/app.html"*/'<ion-nav [root]="rootPage" #content></ion-nav>\n<!-- <div class="version">{{ versionWebOrPhone }}</div>\n  <div class="userAgent">{{ userAgent }}</div> -->\n  \n  <!-- EL MENU DEBE ESCUCHAR DRAG EVENT POR LO QUE ION-NAV DEBE TENER TODO EL CONTENIDO DE LA APP-->\n  <ion-menu [content]="content" side="start" type="overlay" #menutoggle>\n    <ion-header>\n      <ion-toolbar>\n        <div class="flex">\n          <!-- <ion-icon name="ios-contact-outline"></ion-icon> -->\n          <img src="data:image/png;base64,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" alt="">\n          <div class="flex2">\n            <ion-title>Francisco M.</ion-title>\n            <!-- <small>Go to my profile</small> -->\n          </div>\n        </div>\n      </ion-toolbar>\n    </ion-header>\n    <ion-content>\n      <ion-list>\n        <ion-item *ngFor="let icon of icons">\n          <div (click)="goToSelectedTab(icon.name)">\n            <span>{{ icon.name | translate | titlecase}}</span>\n          </div>\n        </ion-item>\n      </ion-list>\n    </ion-content>\n  </ion-menu>\n  \n  <!-- TABS IN ALL PAGES -->\n  <!-- <ion-footer *ngIf="showTabs">\n    <ion-segment *ngFor="let icon of icons">\n      <ion-icon [name]="icon.icon" (click)="colorIcons(icon.name)"></ion-icon>\n      <span>{{ icon.name | translate }}</span>\n    </ion-segment>\n  </ion-footer> -->\n  '/*ion-inline-end:"/Users/franciscomanriquedelara/Desktop/front/src/app/app.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["m" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["b" /* Config */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_6__providers_utils__["a" /* Utils */],
            __WEBPACK_IMPORTED_MODULE_7__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* MenuController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_config_int__ = __webpack_require__(90);
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
    // LO PUEDO QUITAR??? PROBAR YA QUE LO TENGO EN INTERCEPTOR???
    // private static readonly defaultOptions = {
    //   headers: new HttpHeaders().set('Content-Type', 'application/json'),
    //   withCredentials: true
    // };
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
            _this.user = data; // IF GOOD???
            _this.saveInLocalStorage(_this.user);
            return data;
        });
    };
    AuthProvider.prototype.isLoggedIn = function () {
        return localStorage.getItem('user') ? true : false;
    };
    AuthProvider.prototype.saveInLocalStorage = function (user) {
        localStorage.setItem('user', JSON.stringify(user));
    };
    AuthProvider.prototype.getUserFromLocalStorage = function () {
        return localStorage.getItem('user');
    };
    // localStorageUser: User;
    AuthProvider.ENDPOINT = "" + __WEBPACK_IMPORTED_MODULE_2__config_config_int__["a" /* CONFIG */].API_ENDPOINT;
    AuthProvider = AuthProvider_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], AuthProvider);
    return AuthProvider;
    var AuthProvider_1;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 90:
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

/***/ })

},[226]);
//# sourceMappingURL=main.js.map