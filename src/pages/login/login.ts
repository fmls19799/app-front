import { Component, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController, Platform, AlertController } from 'ionic-angular';
import { User } from '../../models/user';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { PATTERNS } from '../../shared/constants';
import { ApiError } from 'src/models/ApiError';
import { Utils } from './../../providers/utils';
import { AuthProvider } from './../../providers/auth/auth';
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
  apiError: ApiError;
  isCordova: boolean;
  rememberMeCheckbox: boolean = false;

  constructor(
    public navCtrl: NavController, 
    public toastCtrl: ToastController, 
    public translateService: TranslateService, 
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
      // poner mejor esto ???
      // USER SAVED IN LOCAL STORAGE
      if(localStorage.getItem('user')){
        this.userStorage = JSON.parse(localStorage.getItem('user'));
        this.user = this.userStorage;
      } 
      
      //CHECK PLATFORM TO CHANGE HTML VIEW
      this.isCordova = this.utils.isCordova();        
    }
    
    doLogin(){
      if (this.myForm.valid) {
        this.auth.login(this.user).subscribe((user: User)=>{                   
          this.userStorage = user;
          if (this.userStorage) {
            this.saveInLocalStorage(this.userStorage);
            this.navCtrl.setRoot('HomePage')
          }
        },
        (error: ApiError) => {
          this.apiError = error;
          this.translator(this.apiError.error.message);
          console.log('error:', this.apiError.error.message);
        })
      } else{
        this.translator('FORBIDDEN');
      }
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
  