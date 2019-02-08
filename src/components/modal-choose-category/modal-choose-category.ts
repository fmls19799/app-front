import { Component, OnInit, ElementRef } from '@angular/core';
import { ViewController, NavController, ModalController, ToastController } from 'ionic-angular';
import { Subscription, Subject, Observable } from 'rxjs';
import { Product } from './../../models/product';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { ProductsProvider } from './../../providers/products/products';
import { StringifiedError } from './../../models/StringifiedError';

import { AuthProvider } from './../../providers/auth/auth';
import { User } from './../../models/user';

@Component({
  selector: 'modal-choose-category',
  templateUrl: 'modal-choose-category.html'
})
export class ModalComponentChooseCategory implements OnInit {
  
  text: string;
  turnOpacity: boolean = false;
  categoriesArray: Array<string> = [];
  isProductChosen: boolean = false;
  productChosen: Product = new Product();
  MODALTITLE: string = '';
  previewImages: any = [];
  increaseImageWrapperHeight: boolean;
  user: User;
  myForm: FormGroup;
  rentOrBuyOptions: Array<string> = ['Rent', 'Sell', 'Exchange', 'Gift'];
  categories: Array<any> = [{icon: 'ios-home-outline',type: 'Real state'},{icon: 'ios-car-outline',type: 'Cars'},{icon: 'ios-game-controller-b-outline',type: 'Gaming'},{icon: 'bicycle',type: 'Cycling'},{icon: 'football',type: 'Sports'},{icon: 'phone-portrait',type: 'Phones'},{icon: 'bicycle',type: 'Clothing'},{icon: 'boat-outline',type: 'Boats'},{icon: 'ios-home-outline',type: 'Real state'},{icon: 'ios-car-outline',type: 'Cars'},{icon: 'ios-game-controller-b-outline',type: 'Gaming'},{icon: 'bicycle',type: 'Cycling'},{icon: 'football',type: 'Sports'},{icon: 'phone-portrait',type: 'Phones'},{icon: 'bicycle',type: 'Clothing'},{icon: 'boat-outline',type: 'Boats' }
]

constructor(private viewCtrl: ViewController,
  private modalCtrl: ModalController,
  private formBuilder: FormBuilder,
  private translate: TranslateService,
  private toastCtrl: ToastController,
  private productsProvider: ProductsProvider,
  private navCtrl: NavController,
  private auth: AuthProvider) {
    
    this.myForm = this.formBuilder.group({
      name: new FormControl('',[Validators.required, Validators.maxLength(10)]),
      description: new FormControl('',[Validators.required, Validators.maxLength(200)]),
      price: new FormControl('',[Validators.required]),
      rentOrBuy: new FormControl('',[Validators.required])
    })
  }
  
  ngOnInit(){
    console.log(this.categories);
    
    this.user = this.auth.user;
    if (this.productChosen) {
      this.MODALTITLE = 'CHOOSE_CATEGORY';        
    }
  }
  
  chooseProduct(nameProduct: Product){
    this.isProductChosen = true;
    this.MODALTITLE = 'PUBLISHING_IN';
    this.productChosen = nameProduct;      
  }
  
  closeModal(){
    this.viewCtrl.dismiss();
  }
  
  chooseAgain(){
    this.MODALTITLE = 'CHOOSE_CATEGORY';
    this.isProductChosen = false;
  }
  
  
  receiveImageFromChildren(imagesReceived: Array<File>){ 
    this.productChosen.photos = []; // cada vez que pongo fotos lo vacio para que entre limpio???  
    Array.from(imagesReceived).forEach(file => { 
      this.productChosen.photos.push(file)
    });
    this.renderPreviewImg(imagesReceived); // to render in the view
  }
  
  renderPreviewImg(imagesReceived: Array<File>){  
    if(imagesReceived.length > 5){
      this.increaseImgWrapper();        
    }   
    if (this.previewImages.length >= 15) {   
      this.translator('MAXIMUM_IMAGE_STACK_EXCEEDED', null);
    }
    
    Array.from(imagesReceived).forEach(file => { 
      var reader = new FileReader(); // si pones const no va ya que esta busy reading blobs???
      reader.readAsDataURL(file);
      reader.onload = () =>{
        if (this.previewImages.length < 15) {
          this.previewImages.push(reader.result);  
        } 
      }
    });
  }
  
  uploadProduct(){
    
    if (this.previewImages.length <= 0) {
      this.translator('ONE_IMAGE_REQUIRED', null);
    }
    else if(this.myForm.valid){  
      this.productsProvider.createProduct(this.productChosen).subscribe((product: Product)=>{
        this.productChosen = product; //YA LO TENGO CON ID RETORNADO PERO EL POPULATE NO 
        // SE HACE HASTA QUE HAGA GET NO POST, ahora si se lo puedo pasar pero los ifs del 
        // html habra que poner mas opciones ya que no hay owner.id???
        this.translator('PRODUCT_CREATED', true);
      },
      (error: any)=>{
        this.translator(error, false);
      })
    } 
    else{
      this.translator('FORGOT_SOMETHING_VALIDATION', null);
    }
  }
  
  increaseImgWrapper(){
    this.increaseImageWrapperHeight = true;
  }
  
  translator(messageToTranslate: string, closeAfterDismissedToast: boolean){
    this.translate.get(messageToTranslate).subscribe((data: string)=>{          
      this.showToast(data, closeAfterDismissedToast);
    })
  }
  
  
  showToast(data: string, closeAfterDismissedToast: boolean){
    let toast = this.toastCtrl.create({
      message: data,
      duration: 2000,
      position: 'top',
    })
    toast.present();
    if (closeAfterDismissedToast) {
      toast.onDidDismiss(()=>{
        this.navCtrl.push('ProductDetailPage', this.productChosen); // SI HAGO EL PUSH YA NO ESTOY EN ESTE MODAL Y NO HABRA PUSH POSIBLE???
        this.closeModal();
      })
    }
  }
}


