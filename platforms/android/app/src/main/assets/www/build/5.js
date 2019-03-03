webpackJsonp([5],{

/***/ 805:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile__ = __webpack_require__(818);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(83);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ProfilePageModule = /** @class */ (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */]),
                __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* CustomComponentsModule */],
            ],
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());

//# sourceMappingURL=profile.module.js.map

/***/ }),

/***/ 818:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_user__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, navParams, userProvider, auth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userProvider = userProvider;
        this.auth = auth;
        this.nameHeader = 'Your profile';
    }
    ProfilePage.prototype.ngOnInit = function () {
        this.user = this.auth.user;
    };
    ProfilePage.prototype.receiveImageFromChildren = function (imagesReceived) {
        // console.log(11111, imagesReceived);
        this.user.image = imagesReceived[0];
        // console.log(this.user);
        this.renderPreviewImg(imagesReceived[0]); // to render in the view
    };
    ProfilePage.prototype.renderPreviewImg = function (imageReceived) {
        // console.log(imageReceived);
        var _this = this;
        var reader = new FileReader();
        reader.readAsDataURL(imageReceived);
        reader.onload = function () {
            _this.previewImage = reader.result;
        };
    };
    ProfilePage.prototype.editUser = function () {
        this.userProvider.updateUser(this.user).subscribe(function (res) {
            // console.log(res);
        }, function (error) {
            // console.log(error);
        });
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"/Users/franciscomanriquedelara/Desktop/front/src/pages/profile/profile.html"*/'<!-- <header [name]="nameHeader"></header> -->\n\n<ion-content padding>\n    <fileuploader [multipleImages]="true" [iconName]="\'camera-outline\'" [icon]="true" [hideInput]="true" (uploadFileFromChildrenToParent)="receiveImageFromChildren($event)"></fileuploader>\n\n    <img [src]="previewImage">\n\n\n\n\n\n    <form (ngSubmit)="editUser()">\n            <button type="submit" ion-button color="red" block>Edit user</button>\n    </form>\n</ion-content>\n\n\n\n\n\n\n\n\n\n\n<!-- <div *ngIf="!isProductChosen" class="modalChooseProduct">\n    <div class="top">\n      <div class="close">\n        <ion-icon name="close" (click)="closeModal()"></ion-icon>\n      </div>\n      <h6 (click)="closeModal()">{{ MODALTITLE | translate}} \n        <ion-icon name="arrow-down"></ion-icon> \n      </h6>\n    </div>\n    <div class="bottom">\n      <ion-list>\n          <ion-item *ngFor="let category of categories" (click)="chooseProduct(category)">\n            <ion-icon [name]="category.icon"></ion-icon>\n            <span>{{category.type | translate }}</span>\n          </ion-item>\n      </ion-list>\n    </div>\n  </div>\n  \n  <div *ngIf="isProductChosen" class="modalProductChosen">\n    <div class="top">\n      <div class="close">\n        <ion-icon name="close" (click)="closeModal()"></ion-icon>\n      </div>\n      <h6 (click)="chooseAgain()">{{ MODALTITLE | translate}} <span class="strong">{{ productChosen.type }}</span>\n        <ion-icon name="arrow-down"></ion-icon>  \n      </h6>\n    </div>\n    \n    <section class="bottom">\n      \n        <div class="imagesContainer" [ngClass]="{\'increaseDivWtapper\': increaseImageWrapperHeight}">\n          <img [src]="previewImage" *ngFor="let previewImage of previewImages" alt="image">\n        </div>\n        \n        <div class="mainWrapper">\n          <form [formGroup]="myForm" class="myForm" (ngSubmit)="uploadProduct()">\n            <ion-list>\n              <ion-item [ngClass]="{\'has-error\': myForm.controls.name.invalid && myForm.controls.name.touched}">\n                <ion-label floating>{{ \'NAME\' | translate }}*</ion-label>\n                <ion-input formControlName="name" type="text" [(ngModel)]="productChosen.name">\n                  \n                </ion-input>\n              </ion-item>\n              <ion-item [ngClass]="{\'has-error\': myForm.controls.description.invalid && myForm.controls.description.touched}">\n                <ion-label floating>{{ \'DESCRIPTION\' | translate }}*</ion-label>\n                <ion-input formControlName="description" type="text" [(ngModel)]="productChosen.description">\n                  \n                </ion-input>\n              </ion-item>\n              <ion-item [ngClass]="{\'has-error\': myForm.controls.price.invalid && myForm.controls.price.touched}">\n                <ion-label floating>{{ \'PRICE\' | translate }}*</ion-label>\n                <ion-input formControlName="price" type="number" [(ngModel)]="productChosen.price">\n                </ion-input>\n              </ion-item>\n              \n              <ion-item class="rentOrBuy" [ngClass]="{\'has-error\': myForm.controls.price.invalid && myForm.controls.price.touched}">\n                <ion-label floating>{{ \'RENT_BUT_EXCHANGE_GIFT\' | translate }}</ion-label>\n                <ion-select formControlName="rentOrBuy" [(ngModel)]="productChosen.rentOrBuy">\n                  <ion-option *ngFor="let option of rentOrBuyOptions">{{option}}</ion-option>\n                </ion-select>\n              </ion-item>\n              <button type="submit" ion-button color="red" block>{{\'UPLOAD_PRODUCT\' | translate}}</button>\n              \n            </ion-list>\n          </form>\n        </div>\n        \n      </section>\n      \n      <div class="upload">\n        <fileuploader [multipleImages]="true" [iconName]="\'camera-outline\'" [icon]="true" [hideInput]="true" (uploadFileFromChildrenToParent)="receiveImageFromChildren($event)"></fileuploader>\n      </div>\n    </div>\n     -->\n'/*ion-inline-end:"/Users/franciscomanriquedelara/Desktop/front/src/pages/profile/profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ })

});
//# sourceMappingURL=5.js.map