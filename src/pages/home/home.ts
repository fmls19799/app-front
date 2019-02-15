import { Component, OnInit, OnDestroy } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading, LoadingController, ModalController, ToastController } from 'ionic-angular';
import { AuthProvider } from './../../providers/auth/auth';
import { User } from './../../models/user';
import { SearchProductPage } from './../search-product/search-product';
import { ProductsProvider } from './../../providers/products/products';
import { Product } from './../../models/product';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { FavoritesProvider } from './../../providers/favorites/favorites';
import { WishProduct } from './../../models/wishlist';

export interface ProductSelected extends Product{
  selected: boolean;
}

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage implements OnInit, OnDestroy{
  private loader: Loading = null;
  user: User = new User();
  products: any = [];
  newOnesAfterRefresh: Array<Product> = [];
  rentOrBuyOptions: Array<string> = [];
  categories: Array<any> = [{icon: 'ios-home-outline',type: 'Real state'},{icon: 'ios-car-outline',type: 'Cars'},{icon: 'ios-game-controller-b-outline',type: 'Gaming'},{icon: 'bicycle',type: 'Cycling'},{icon: 'football-outline',type: 'Sports'},{icon: 'phone-portrait',type: 'Phones'},{icon: 'shirt-outline',type: 'Clothing'},{icon: 'boat-outline',type: 'Boats'}]
  tabSelected: string = '';
  wishList: Array<WishProduct> = [];
  subscriptions = new Subscription();
  pagination: number = 1;
  
  constructor(public navCtrl: NavController,
    public navParams: NavParams, 
    public loadingCtrl: LoadingController, 
    private auth: AuthProvider,
    private modal: ModalController,
    private productsProvider: ProductsProvider,
    private _sanitizer: DomSanitizer,
    private toastCtrl: ToastController,
    private translate: TranslateService,
    private favoritesProvider: FavoritesProvider,) {
      
    }
    
    ngOnInit(){          
      this.rentOrBuyOptions = ['All', 'Rent', 'Sell', 'Exchange', 'Gift'];      
      this.getAllProducts();
      this.getAllFavs();
      this.getSuscription();
    }
    
    getSuscription(){
      let subscription = this.productsProvider.allProductsHomeChanges().subscribe((products: Array<Product>)=>{
        this.products = products; // ya que cuando doy al tab va cambiando el  array original, hago que el array completo se mantenga para poder mantener los tabs en el html???        
      })      
      this.subscriptions.add(subscription);
    }
    
    chooseProduct(category: any){
      this.filterByType(category.type)
    }
    
    segmentSelected(event: any){        
      this.tabSelected = event.target.innerHTML;
      this.filterByRentOrBuy(this.tabSelected);
    }
    
    filterByType(filterByType: string){        
      this.getSuscription(); // si no pongo esto hace un filtro sobre lo ya filtrado previamente y no existe nada???
      if (filterByType !== 'All') {
        this.products = this.products.filter(product => product.type === filterByType);
      }
    }
    
    filterByRentOrBuy(rentOrBuy: string){            
      this.getSuscription(); // si no pongo esto hace un filtro sobre lo ya filtrado previamente y no existe nada???
      if (rentOrBuy !== 'All') {
        this.products = this.products.filter(product => product.rentOrBuy === rentOrBuy);
      }
    }
    
    getAllProducts(refresher?: any){      
      this.productsProvider.getAllProducts(this.pagination).subscribe((products: Array<Product>)=>{        
        if (refresher) { // stop refresher after i got results, if im doing refresher, only include new ones instead adding them all ???
          if (products.length > this.products.length) {
            this.showToast(`${(Number(products.length) - Number(this.products.length)).toString()} products new`);            
          } else{
            this.translator('NO_NEW_PRODUCTS_AFTER_REFRESH');            
          }
          refresher.complete();
        } 
        
        
        // ESTO???????
        // if (products.length > 0) {
        //   products.forEach((product)=>{            
        //     this.products.push(product);
        //   })  
        // }
        // console.log(555,  this.products);
        // ESTO???????
      })
    }
    
    getAllFavs(){
      this.favoritesProvider.getFavoritesProductsOfUser().subscribe((wishList: Array<WishProduct>)=>{
        this.wishList = wishList;   
        this.paintHeartIfLiked();     
      },
      (error) =>{
        console.log(error);
        // this.translator(error);
      })
      
    }
    // ESTO???
    // loadData(event: any){
    //   setTimeout(()=>{
    //     this.pagination++;
    //     this.getAllProducts();
    //     event.complete();
    //   },500)
    // }
    // ESTO???
    
    paintHeartIfLiked(){
      
    }
    
    translator(textToTranslate: string){
      this.translate.get(textToTranslate).subscribe((data: string)=>{        
        this.showToast(data);
      })
    }
    
    
    showToast(message: string){
      
      this.toastCtrl.create({
        message: message,
        duration: 2000,
        position: 'top',
      }).present();
    }
    
    searchingProduct(pattern: string){   
      // this.modal.create('SearchProductPage').present();
      this.navCtrl.push('SearchProductPage'); // mediante el push puedo pasar info a otra pagina o si no quiero pasar y pasar usar behaviour subject???
    }
    
    doRefresh(refresher) {
      this.getAllProducts(refresher);
    }
    
    goToProduct(product: Product){         
      // PONER ESTO CON SUBJECT ASI APRENDO??? AUNQUE SOLO PRA ESTO NO HARIA FALTA
      this.navCtrl.push('ProductDetailPage', product)
    }
    
    menuClick(event: any){
      // ESTO PARA QUE???
      // console.log(event); 
      
    }
    
    ngOnDestroy(){
      this.subscriptions.unsubscribe();
    }
    
  }
  