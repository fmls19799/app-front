import { Component, OnInit } from '@angular/core';
import { ViewController, NavController, ModalController } from 'ionic-angular';
import { Subscription, Subject, Observable } from 'rxjs';
import { ModalComponentCategoryIcons } from '../modal-component-category-icons/modal-component-category-icons';

@Component({
  selector: 'modal-choose-category',
  templateUrl: 'modal-choose-category.html'
})
export class ModalComponentChooseCategory implements OnInit {
  
  text: string;
  turnOpacity: boolean = false;
  
  constructor(private viewCtrl: ViewController, private modalCtrl: ModalController) {
    
  }
  
  ngOnInit(){
    this.turnOpacity = true;
    console.log('aaa');
    setTimeout(()=>{
      console.log('bbb');
      
      this.modalCtrl.create(ModalComponentCategoryIcons, this.viewCtrl).present(); // en componentes no puedo usar '' lazy loading ???
    },100)
    
  }
  
  closeModal(){
    this.viewCtrl.dismiss();
  }
  
}

