import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AuthProvider } from './../../providers/auth/auth';
import { TranslateService } from '@ngx-translate/core';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private authProvider: AuthProvider,
    private translate: TranslateService,
    private toastCtrl: ToastController) {
    }
    
    logout(){
      this.authProvider.logout();
      this.translator('LOGGED_OUT', true);
      
    }
    
    translator(messageToTranslate: string, closeAfterDismissedToast?: boolean){
      this.translate.get(messageToTranslate).subscribe((data: string)=>{                  
        this.showToast(data, closeAfterDismissedToast);
      })
    }
    
    showToast(data: string, closeAfterDismissedToast?: boolean){
      let toast = this.toastCtrl.create({
        message: data,
        duration: 2000,
        position: 'top',
      })
      toast.present();
      if (closeAfterDismissedToast) {        
        toast.onDidDismiss(()=>{          
          this.navCtrl.setRoot('LoginPage'); //NO ME DEJA HABRIR EL MENU DE NUEVO VER ESTO ??????  NO DEBERIA HACERLO ASI SINO UN SIMPLE GET DEL PROVIDER DE HOME AGAIN????
        })
      } 
    }
    
    
  }
  