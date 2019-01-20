import { Component, OnInit } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';

@Component({
  selector: 'modal-component-category-icons',
  templateUrl: 'modal-component-category-icons.html'
})
export class ModalComponentCategoryIcons implements OnInit{
  
  text: string;
  dataFromPreviewsModal: any; // hacer un modelo de esto???
  constructor(private viewCtrl: ViewController, private navParams: NavParams) {

  }
  
  ngOnInit(){
    this.dataFromPreviewsModal = this.navParams.get('data');
    console.log(this.dataFromPreviewsModal);
    console.log(this.viewCtrl);
    console.log(this.viewCtrl._cmp);
    
  }
  
  closeModal(){
    this.viewCtrl.dismiss();
  }
  
}
