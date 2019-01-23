import { Component, OnInit } from '@angular/core';
import { ViewController, NavController, ModalController } from 'ionic-angular';
import { Subscription, Subject, Observable } from 'rxjs';

@Component({
  selector: 'modal-choose-category',
  templateUrl: 'modal-choose-category.html'
})
export class ModalComponentChooseCategory implements OnInit {
  
  text: string;
  turnOpacity: boolean = false;
  categoriesArray: Array<string> = [];
  categories: any = { //esto cambiar el any y que sea dinamico dependiendo de las etiquetas que vayan creando los usuarios ok?????
    real_state: 'ios-home-outline',
    car: 'ios-car-outline',
    gaming: 'ios-game-controller-b-outline',
    bycicle: 'bicycle',
    sports: 'ios-american-football-outline',
    phones: 'ios-phone-portrait-outline',
    // cloghing: 'ios-shirt-outline'    
  }
  
  constructor(private viewCtrl: ViewController, private modalCtrl: ModalController) {
    
  }
  
  ngOnInit(){
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
  
  closeModal(){
    this.viewCtrl.dismiss();
  }
  
}

