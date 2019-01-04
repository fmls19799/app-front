import { Component, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController, Platform, AlertController } from 'ionic-angular';
import { User } from '../../models/user';

import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { SessionProvider } from '../../providers/session/session';
import { HttpResponse } from '@angular/common/http';
import { RegisterPage } from '../register/register';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage implements OnInit{
  
  @ViewChild('myForm') myForm: FormGroup;
  user: User = new User();
  formBuilder: FormBuilder;
  
  constructor(public navCtrl: NavController, 
    public toastCtrl: ToastController, 
    public translateService: TranslateService, 
    private platform: Platform,
    private sessionProvider: SessionProvider,
    private alertCtrl: AlertController,
    private translate: TranslateService,
    private toast: ToastController) {
      //  this.myForm = this.formBuilder.group({
      //   email: new FormControl('', Validators.compose([
      //     Validators.required,
      //     Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      //   ])),
      //   password: new FormControl('', Validators.required)
      // });
      
    }
    
    
    ngOnInit(){
      // console.log(this.platform.is('cordova'));
    }
    
    doLogin(){
      
      if (this.myForm.valid) {
        this.sessionProvider.login(this.user).subscribe((res: any)=>{
          console.log(res);
          // TO DO ===>>>
          // if (res.body === 'KO') {
          
          // } else{
          
          // }
        })
      } else{
        this.translate.get('FORBIDDEN').subscribe((data: string)=>{          
          this.showToast(data);
        })
      }
    }
    
    showToast(data: string){
      this.toastCtrl.create({
        message: data,
        duration: 2000,
        position: 'top',
      }).present();      
    }
    
    forgotPassword(){
      console.log('forgot password');
    }
    
    redirectToRegister(){
      this.navCtrl.setRoot('RegisterPage');
    }
  }
  