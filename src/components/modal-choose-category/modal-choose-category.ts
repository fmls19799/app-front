import { Component, OnInit, ElementRef } from '@angular/core';
import { ViewController, NavController, ModalController } from 'ionic-angular';
import { Subscription, Subject, Observable } from 'rxjs';
import { Product } from './../../models/product';

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
  imagesToUpload = new Array(10).fill('camera-outline');
  
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
    },
    {
      icon: 'ios-american-football-outline',
      name: 'Sports',
    },
    {
      icon: 'ios-phone-portrait-outline',
      name: 'Phones',
    },
    {
      icon: 'ios-shirt-outline',
      name: 'Clothing',
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
    },
    {
      icon: 'ios-shirt-outline',
      name: 'Clothing',
    },
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
    },
    {
      icon: 'ios-shirt-outline',
      name: 'Clothing',
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
    },
    {
      icon: 'ios-shirt-outline',
      name: 'Clothing',
    }
  ]
  
  constructor(private viewCtrl: ViewController, private modalCtrl: ModalController) {
    
  }
  
  ngOnInit(){  
     
    if (this.productChosen) {
      this.MODALTITLE = 'CHOOSE_CATEGORY';
      console.log(this.MODALTITLE);
      
    }
    
  }
  
  
  
  
  getIcons(){
    // this.categoriesArray = Object.values(this.categories);
    // console.log(this.categoriesArray.length);
    
    // if (this.categoriesArray.length % 3 === 0) {
    //   console.log(true);
    
    // } else{
    //   console.log(false);
    
    // }
    // console.log(this.categoriesArray);
    
    return this.categoriesArray;
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
    // this.productChosen ;
  }
  
}

