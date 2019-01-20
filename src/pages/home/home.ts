import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading, LoadingController, ModalController } from 'ionic-angular';
import { AuthProvider } from './../../providers/auth/auth';
import { User } from './../../models/user';
import { ApiError } from './../../models/ApiError';
import { SearchProductPage } from '../search-product/search-product';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage implements OnInit{
  private loader: Loading = null;
  user: User = new User();
  
  constructor(public navCtrl: NavController,
    public navParams: NavParams, 
    public loadingCtrl: LoadingController, 
    private auth: AuthProvider,
    private modal: ModalController ) {
    }
    
    ionViewDidLoad() {
      console.log('ionViewDidLoad HomePage');
    }
    
    
    ngOnInit(){ }
    
    searchingProduct(pattern: string){   
      // this.modal.create('SearchProductPage').present();
      this.navCtrl.push('SearchProductPage');
    }
    
    doRefresh(refresher) {
      var user: User = {
        name: 'francisco',
        email: 'fmls1989@gmail.com',
        password: 'Berna123'
      }
      this.auth.login(user).subscribe((user: User)=>{                   
        if (user) {
          console.log('good');
          refresher.complete();
        }
      },
      (error: ApiError) => {
        console.log('error', error);
      })
    }
  }
  