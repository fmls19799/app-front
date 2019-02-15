import { Component, OnInit, ElementRef } from '@angular/core';
import {IonicPage, ViewController, NavController, NavParams, ModalController, ToastController } from 'ionic-angular';
import { Subscription, Subject, Observable } from 'rxjs';
import { Product } from './../../models/product';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { ProductsProvider } from './../../providers/products/products';
import { StringifiedError } from './../../models/StringifiedError';
import { User } from './../../models/user';
import { UserProvider } from './../../providers/user/user';
import { AuthProvider } from './../../providers/auth/auth';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage implements OnInit{
  nameHeader: string = 'Your profile';
  user: User;
  previewImage: any;
  
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private userProvider: UserProvider,
    private auth: AuthProvider) {
    }
    
    ngOnInit(){
      this.user = this.auth.user;
    }

    receiveImageFromChildren(imagesReceived: Array<File>){ 
      console.log(11111, imagesReceived);
      
      this.user.image = imagesReceived[0];
      console.log(this.user);
      
      this.renderPreviewImg(imagesReceived[0]); // to render in the view
    }
    
    renderPreviewImg(imageReceived: File){  
      console.log(imageReceived);
      
      var reader = new FileReader();
      reader.readAsDataURL(imageReceived);
      reader.onload = () =>{
        this.previewImage = reader.result;
      }
    }
    
    editUser(){
      this.userProvider.updateUser(this.user).subscribe((res)=>{
        console.log(res);
        
      },
      (error) =>{
        console.log(error);
        
      })
    }
    
  }
  