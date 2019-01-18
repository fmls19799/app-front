import { Component, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController, Platform, AlertController } from 'ionic-angular';
import { User } from '../../models/user';

import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { SessionProvider } from '../../providers/session/session';
import { HttpResponse } from '@angular/common/http';
// import { RegisterPage } from '../register/register';
import { PATTERNS } from '../../shared/constants';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage implements OnInit{
  
  user: User = new User();  
  myForm: FormGroup;
  userStorage: User;
  
  constructor(
    public navCtrl: NavController, 
    public toastCtrl: ToastController, 
    public translateService: TranslateService, 
    private sessionProvider: SessionProvider,
    private formBuilder: FormBuilder,
    private translate: TranslateService,
    private platform: Platform,
    private alertCtrl: AlertController,
    private toast: ToastController) {
      
      this.myForm = this.formBuilder.group({
        email: new FormControl('', [Validators.required, Validators.email, Validators.pattern(PATTERNS.PATTERN_EMAIL)]),
        password: new FormControl('', [Validators.required, Validators.pattern(PATTERNS.PATTERN_PASSWORD)])
      });      
    }
    
    
    ngOnInit(){
    //  this.user = JSON.parse(localStorage.getItem('user'))     
    }
    
    doLogin(){
      if (this.myForm.valid) { 
        this.sessionProvider.login(this.user).subscribe((res: any)=>{
          // console.log(res);
          
          this.userStorage = res;
          if (this.userStorage ) {
            this.saveInLocalStorage(this.userStorage)
          }
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

    saveInLocalStorage(userStorage: User){
      localStorage.setItem('user', JSON.stringify(userStorage));

    }
    
    redirectToRegister(){
      this.navCtrl.setRoot('RegisterPage');
    }
  }
  