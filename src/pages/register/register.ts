import { Component, ViewChild, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, Platform, AlertController, ModalController } from 'ionic-angular';
import { User } from '../../models/user';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { PATTERNS } from '../../shared/constants';
import { AuthProvider } from './../../providers/auth/auth';
import { StringifiedError } from './../../models/StringifiedError';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage implements OnInit{
  
  user: User = new User();
  myForm: FormGroup;
  // apiError: ApiError;
  stringifiedError: StringifiedError;
  
  constructor(public navCtrl: NavController, 
    public toastCtrl: ToastController, 
    public translateService: TranslateService, 
    private auth: AuthProvider,
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
    
    ngOnInit(){
      this.user = {
        name: 'fran',
        email: 'fmls1989@gmail.com',
        password: 'Berna123'
      }
    }
    
    redirectToLogin(){
      this.navCtrl.setRoot('LoginPage');
    }
    
    doRegister(){
      if (this.myForm.valid) { 
        
        this.auth.register(this.user).subscribe((user: User)=>{
          this.translator('USER_CREATED', true);
        },
        (error: any) =>{
          console.log(error);
          
          this.translator(error);
        })
      } else{
        this.translator('FORBIDDEN');
      }
    }
    
    translator(messageToTranslate: string, goToLogin?: boolean){      
      this.translate.get(messageToTranslate).subscribe((data: string)=>{          
        this.showToast(data, goToLogin);
      })
    }
    
    showToast(data: string, goToLogin?: boolean){
      if(goToLogin){
        var timing = 3000;
      } else{
        timing = 2000
      }
      let toast = this.toastCtrl.create({
        message: data,
        duration: timing,
        position: 'top',
      });
      
      if (goToLogin) {        
        toast.onDidDismiss(() => {          
          this.navCtrl.setRoot('LoginPage');
        });
      } 
      toast.present();
    }
  }
  
  
  
  
  
  
  
  