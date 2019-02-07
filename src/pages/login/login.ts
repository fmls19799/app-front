import { Component, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController, Platform, AlertController } from 'ionic-angular';
import { User } from '../../models/user';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { PATTERNS } from '../../shared/constants';
import { Utils } from './../../providers/utils';
import { AuthProvider } from './../../providers/auth/auth';
import { StringifiedError } from './../../models/StringifiedError';
// var encrypter = require('object-encrypter');
// var engine = encrypter('your secret', {ttl: true});

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage implements OnInit{
  
  user: User = new User();  
  myForm: FormGroup;
  userStorage: User;
  stringifiedError: StringifiedError;
  isCordova: boolean;
  rememberMeCheckbox: boolean = false;

  constructor(
    public navCtrl: NavController, 
    public toastCtrl: ToastController, 
    private auth: AuthProvider,
    private formBuilder: FormBuilder,
    private translate: TranslateService,
    private utils: Utils) {
      
      this.myForm = this.formBuilder.group({
        email: new FormControl('', [Validators.required, Validators.email, Validators.pattern(PATTERNS.PATTERN_EMAIL)]),
        password: new FormControl('', [Validators.required, Validators.pattern(PATTERNS.PATTERN_PASSWORD)])
      });      
    }
    
    
    ngOnInit(){
      //CHECK PLATFORM TO CHANGE HTML VIEW
      this.isCordova = this.utils.isCordova();        
    }
    
    doLogin(){
      if (this.myForm.valid) {        
        this.auth.login(this.user).subscribe((user: User)=>{  
          this.userStorage = user;                                     
          if (this.userStorage) {
            this.navCtrl.setRoot('HomePage')
          }
        },
        (error: any) => {
          this.translator(error)
        })
      } else{
        this.translator('FORBIDDEN');
      }
    }

    rememberMe(){
      this.user.rememberMe = !this.user.rememberMe;      
    }
    
    translator(messageToTranslate: string){
      this.translate.get(messageToTranslate).subscribe((data: string)=>{          
        this.showToast(data);
      })
    }
    
    showToast(data: string){
      this.toastCtrl.create({
        message: data,
        duration: 2000,
        position: 'top',
      }).present();      
    }
    
    // forgotPassword(){
    //   console.log('forgot password');
    // }
    
    redirectToRegister(){
      this.navCtrl.setRoot('RegisterPage');
    }
  }
  