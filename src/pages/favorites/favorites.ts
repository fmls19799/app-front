import { Component, OnInit, OnDestroy } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FavoritesProvider } from './../../providers/favorites/favorites';
import { TranslateService } from '@ngx-translate/core';
import { WishProduct } from './../../models/wishlist';
import { Subscription } from 'rxjs';
import { Product } from './../../models/product';

@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage implements OnInit, OnDestroy {
  
  wishList: Array<WishProduct> = [];
  wishProductRemailAllTheTime: Array<WishProduct>;
  rentOrBuyOptions: Array<string> = [];
  tabSelected: string = '';
  subscriptions = new Subscription();
  
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private favoritesProvider: FavoritesProvider,
    private toastCtrl: ToastController,
    private translate: TranslateService) {
    }
    
    
    ngOnInit(){
      this.rentOrBuyOptions = ['All', 'Rent', 'Sell', 'Exchange', 'Gift'];
      this.getAllFavs();
      this.getSuscription();
    }
    
    goToProduct(product: Product){
      this.navCtrl.push('ProductDetailPage', product);
    }
    
    getSuscription(){
      let subscription = this.favoritesProvider.favsByUserChanges().subscribe((wishList: Array<WishProduct>)=>{        
        this.wishList = wishList;  
        console.log(11, this.wishList);
        
        this.wishProductRemailAllTheTime = wishList; // ya que cuando doy al tab va cambiando el  array original, hago que el array completo se mantenga para poder mantener los tabs en el html???              
        console.log(22, this.wishProductRemailAllTheTime);
      })      
      this.subscriptions.add(subscription);
    }
    
    segmentSelected(event: any){        
      this.tabSelected = event.target.innerHTML;
      this.goToSelectedTab(this.tabSelected);
    }
    
    goToSelectedTab(selectedTab: string){            
      this.getSuscription(); // si no pongo esto hace un filtro sobre lo ya filtrado previamente y no existe nada???            
      if (selectedTab !== 'All') {
        this.wishList = this.wishList.filter(wishProduct => wishProduct.product.rentOrBuy === selectedTab);       
      }
    }
    
    getAllFavs(){
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
    
    ngOnDestroy(){
      this.subscriptions.unsubscribe();
    }
    
  }
  