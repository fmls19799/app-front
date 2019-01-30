import { Component, OnInit, ElementRef } from '@angular/core';
import { ViewController, NavController, ModalController, ToastController } from 'ionic-angular';
import { Subscription, Subject, Observable } from 'rxjs';
import { Product } from './../../models/product';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { ProductsProvider } from './../../providers/products/products';

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
  
  
  myForm: FormGroup;
  
  categories: Array<any> = [
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
  ]
  
  constructor(private viewCtrl: ViewController, 
    private modalCtrl: ModalController,
    private formBuilder: FormBuilder,
    private translate: TranslateService,
    private toastCtrl: ToastController,
    private productsProvider: ProductsProvider,
    private navCtrl: NavController) {
      
      this.myForm = this.formBuilder.group({
        name: new FormControl('',[Validators.required, Validators.maxLength(10)]),
        description: new FormControl('',[Validators.required, Validators.maxLength(10)]),
        price: new FormControl('',[Validators.required])
      })
    }
    
    ngOnInit(){        
      console.log(this.productChosen);
      
      if (this.productChosen) {
        this.MODALTITLE = 'CHOOSE_CATEGORY';
        console.log(this.MODALTITLE);
        
      }
      
    }
    
    chooseProduct(nameProduct: Product){
      this.isProductChosen = true;
      this.MODALTITLE = 'PUBLISHING_IN';
      this.productChosen = nameProduct;
      console.log(nameProduct);
      
    }
    
    closeModal(){
      this.viewCtrl.dismiss();
    }
    
    chooseAgain(){
      this.MODALTITLE = 'CHOOSE_CATEGORY';
      this.isProductChosen = false;
    }
    
    
    receiveImageFromChildren(imagesReceived: Array<File>){            
      // if (imagesReceived.length <= 5) {
      this.renderPreviewImg(imagesReceived); // to render in the view
      // } else{   
      // this.translator('MAXIMUM_IMAGE_STACK_EXCEEDED');
      // }
    }
    
    renderPreviewImg(imagesReceived: Array<File>){      
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
      } else if(this.myForm.valid){
        // this.productChosen.photos = this.previewImages; // le igualo lo que tenia en preview???  DESCOMENTAR ESTO????       
        this.productsProvider.createProduct(this.productChosen).subscribe((res: any)=>{
          if (res.error === null) {  // por ejemplo, HACER ESTO???
            // ERROR
          } else{
            this.translator('PRODUCT_CREATED', true);
          
          }
          
        })
      } else{
        this.translator('FORGOT_SOMETHING_VALIDATION', null);
      }
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
          this.viewCtrl.dismiss();
          this.navCtrl.setRoot('HomePage'); //NO ME DEJA HABRIR EL MENU DE NUEVO VER ESTO ??????  NO DEBERIA HACERLO ASI SINO UN SIMPLE GET DEL PROVIDER DE HOME AGAIN????
        })
      }
    }
  }
  
  
  