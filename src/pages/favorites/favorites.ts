import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FavoritesProvider } from './../../providers/favorites/favorites';
import { TranslateService } from '@ngx-translate/core';
import { WishProduct } from 'src/models/wishlist';

@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage implements OnInit {
  
  wishList: Array<WishProduct> = [];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private favoritesProvider: FavoritesProvider,
    private toastCtrl: ToastController,
    private translate: TranslateService) {
    }
    
    
    ngOnInit(){
      this.favoritesProvider.getFavoritesProductsOfUser().subscribe((wishList: Array<WishProduct>)=>{
        this.wishList = wishList;        
      },
      (error) =>{
        console.log(error);
        // this.translator(error);
      })
    }
    
    translator(message: string) {
      this.translate.get(message).subscribe((data: string) => {
        this.showToast(data);
      })
    }
    
    showToast(data: string) {
      this.toastCtrl.create({
        message: data,
        duration: 2000,
        position: 'top',
      }).present();
    }
    
  }
  