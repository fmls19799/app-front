import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ToastController } from 'ionic-angular';
import { AuthProvider } from './../../providers/auth/auth';
import { User } from './../../models/user';
import { StringifiedError } from './../../models/StringifiedError';


@IonicPage()
@Component({
  selector: 'page-search-product',
  templateUrl: 'search-product.html',
})
export class SearchProductPage {
  
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private auth: AuthProvider,
    private toastCtrl: ToastController,
    ) {
      
    }
    
    
    findProducts(pattern: string){       
      
      //DEBERIA CARGAR TODO LA PRIMERA VEZ QUE SE ENTRA EN HOME Y QUE AHORA NO SE HAGA LLAMADA SINO HACER UN PIPE LOCALMENTE ???
      if (pattern.length % 3 === 0 && pattern.length !== 0) {
        var user: User = {
          name: 'francisco',
          email: 'fmls1989@gmail.com',
          password: 'Berna123'
        }
        this.auth.login(user).subscribe((user: User)=>{                   
          if (user) {
            // console.log('good');
            this.showToast('we have found 3 items');
          }
        },
        (error: StringifiedError) => {
          // console.log('error', error);
        })
      }
      
    }
    
    // translator(messageToTranslate: string){
    //   this.translate.get(messageToTranslate).subscribe((data: string)=>{          
    //     this.showToast(data);
    //   })
    // }
    
    showToast(data: string){
      this.toastCtrl.create({
        message: data,
        duration: 2000,
        position: 'top',
      }).present();      
    }
    
  }
  