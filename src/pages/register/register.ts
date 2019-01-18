import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, Platform, AlertController, ModalController } from 'ionic-angular';
import { User } from '../../models/user';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { SessionProvider } from '../../providers/session/session';
import { HttpResponse } from '@angular/common/http';
import { ModuleLoader } from 'ionic-angular/umd/util/module-loader';
import { PATTERNS } from '../../shared/constants';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  
  
  user: User = new User();
  myForm: FormGroup;

  constructor(public navCtrl: NavController, 
    public toastCtrl: ToastController, 
    public translateService: TranslateService, 
    private sessionProvider: SessionProvider,
    private platform: Platform,
    private formBuilder: FormBuilder,
    private alertCtrl: AlertController,
    private translate: TranslateService,
    private toast: ToastController) {
      
      this.myForm = this.formBuilder.group({
        name: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required, Validators.email, Validators.pattern(PATTERNS.PATTERN_EMAIL)]),
        password: new FormControl('', [Validators.required, Validators.pattern(PATTERNS.PATTERN_PASSWORD)])
      });   
      
    }
    
    redirectToLogin(){
      this.navCtrl.setRoot('LoginPage');
    }
    
    doRegister(){
      this.sessionProvider.register(this.user).subscribe((res: any)=>{
        console.log(res);
       // poner errores
        this.showToast();
      })
    }

    showToast(){
      this.translate.get('USER_CREATED').subscribe((value: string)=>{
        this.toastCtrl.create({
          message: value,
          duration: 2000,
          position: 'top'
        }).present();
      })
      //si es satisfacrorio llevalo a login
      this.navCtrl.setRoot('LoginPage');
    }
    
  }
  
  
  
  
  
  
  