import { Component, OnInit, ElementRef } from '@angular/core';
import { ViewController, NavController, ModalController } from 'ionic-angular';
import { Subscription, Subject, Observable } from 'rxjs';
import { Product } from './../../models/product';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'modal-choose-category',
  templateUrl: 'modal-choose-category.html'
})
export class ModalComponentChooseCategory implements OnInit {
  
  private static readonly IMG_PREVIEW: string = 'http://www.nfscars.net/static/img/not-found.png';
  text: string;
  turnOpacity: boolean = false;
  categoriesArray: Array<string> = [];
  isProductChosen: boolean = false;
  productChosen: Product = new Product();
  MODALTITLE: string = '';
  previewImagesFromChildren: Array<any> = [];
  
  
  
  imagesToUpload = new Array(10).fill('camera-outline');
  myForm: FormGroup;
  
  categories: Array<any> = [
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
    }
  ]
  
  constructor(private viewCtrl: ViewController, 
    private modalCtrl: ModalController,
    private formBuilder: FormBuilder) {
      this.myForm = this.formBuilder.group({
        name: new FormControl('',[Validators.required, Validators.maxLength(10)]),
        description: new FormControl('',[Validators.required, Validators.maxLength(10)]),
        price: new FormControl('',[Validators.required])
      })
    }
    
    ngOnInit(){        
      
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
    
    submitProductCreation(){
      console.log(this.myForm);
      if (this.myForm.valid && this.imagesToUpload.length > 0) { // que haya mas de una foto
        console.log(this.myForm.valid);
        
      }
    }
    
    receiveImageFromChildren(imageReceived: File){
      this.renderPreviewImg(imageReceived); // to render in the view
    }
    
    renderPreviewImg(imageReceived: File){
      var reader = new FileReader(); // si pones const no va ya que esta busy reading blobs???
      reader.readAsDataURL(imageReceived);
      
      reader.onload = () =>{
        // this.imgPreview = reader.result;
        this.previewImagesFromChildren.push(reader.result);
        console.log(this.previewImagesFromChildren);
        
      }
    }
  }
  
  