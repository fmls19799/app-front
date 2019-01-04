import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, Platform, AlertController, ModalController } from 'ionic-angular';
import { User } from '../../models/user';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { SessionProvider } from '../../providers/session/session';
import { HttpResponse } from '@angular/common/http';
import { ModuleLoader } from 'ionic-angular/umd/util/module-loader';

/**
* Generated class for the RegisterPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  
  
  @ViewChild('myForm') myForm: FormGroup; //cambiar esto y quitar any !!!
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
      
    }
    
    redirectToLogin(){
      this.navCtrl.setRoot('LoginPage');
    }

    doRegister(){
      this.sessionProvider.register(this.user).subscribe((res: any)=>{
        
      })
    }
  }

  
  
  
  
  
  