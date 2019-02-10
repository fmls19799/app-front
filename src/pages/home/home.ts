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
  productColumn1: Array<any> = [];
  productColumn2: Array<any> = [];
  newOnesAfterRefresh: Array<Product> = [];
  randomStyleColumn1: number;
  randomStyleColumn2: number;
  rentOrBuyOptions: Array<string> = [];
  categories: Array<any> = [{icon: 'ios-home-outline',type: 'Real state'},{icon: 'ios-car-outline',type: 'Cars'},{icon: 'ios-game-controller-b-outline',type: 'Gaming'},{icon: 'bicycle',type: 'Cycling'},{icon: 'football',type: 'Sports'},{icon: 'phone-portrait',type: 'Phones'},{icon: 'bicycle',type: 'Clothing'},{icon: 'boat-outline',type: 'Boats'},{icon: 'ios-home-outline',type: 'Real state'},{icon: 'ios-car-outline',type: 'Cars'},{icon: 'ios-game-controller-b-outline',type: 'Gaming'},{icon: 'bicycle',type: 'Cycling'},{icon: 'football',type: 'Sports'},{icon: 'phone-portrait',type: 'Phones'},{icon: 'bicycle',type: 'Clothing'},{icon: 'boat-outline',type: 'Boats' }]
  tabSelected: string = '';
  subscriptions = new Subscription();
  
  
  constructor(public navCtrl: NavController,
    public navParams: NavParams, 
    public loadingCtrl: LoadingController, 
    private auth: AuthProvider,
    private modal: ModalController,
    private productsProvider: ProductsProvider,
    private _sanitizer: DomSanitizer,
    private toastCtrl: ToastController,
    private translate: TranslateService) {
      
    }
    
    ngOnInit(){      
      this.rentOrBuyOptions = ['All', 'Rent', 'Sell', 'Exchange', 'Gift'];      
      this.getAllProducts();
      this.getSuscription();
    }
    
    getSuscription(){
      let subscription = this.productsProvider.allProductsHomeChanges().subscribe((products: Array<Product>)=>{
        this.products = products; 
        console.log(22, this.products);
        
        // this.productsRemainAllTheTime = products; // ya que cuando doy al tab va cambiando el  array original, hago que el array completo se mantenga para poder mantener los tabs en el html???
        
      })      
      this.subscriptions.add(subscription);
    }

    chooseProduct(category: any){
      console.log(11, category);
      this.filterByType(category.type)
    }

    segmentSelected(event: any){        
      this.tabSelected = event.target.innerHTML;
      this.filterByRentOrBuy(this.tabSelected);
    }

    filterByType(filterByType: string){  
      console.log(filterByType);
          
      this.getSuscription(); // si no pongo esto hace un filtro sobre lo ya filtrado previamente y no existe nada???
      if (filterByType !== 'All') {
        this.products = this.products.filter(product => product.type === filterByType);
      }
      this.populateProductsList();
    }
    
    filterByRentOrBuy(rentOrBuy: string){            
      this.getSuscription(); // si no pongo esto hace un filtro sobre lo ya filtrado previamente y no existe nada???
      if (rentOrBuy !== 'All') {
        this.products = this.products.filter(product => product.rentOrBuy === rentOrBuy);
      }
      this.populateProductsList();
    }
    
    getAllProducts(refresher?: any){      
      this.productsProvider.getAllProducts().subscribe((products: Array<Product>)=>{        
        if (refresher) { // stop refresher after i got results, if im doing refresher, only include new ones instead adding them all ???
          if (products.length > this.products.length) {
            this.showToast(`${(Number(products.length) - Number(this.products.length)).toString()} products new`);            
          } else{
            this.translator('NO_NEW_PRODUCTS_AFTER_REFRESH');            
          }
          refresher.complete();
        } 
        this.products = products; 
        console.log(11, this.products);
                 
        this.populateProductsList(); // split products in 3 columns
      })
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
    
    // closeOpenedOnes(){      
    //   if (this.products) {
    //     this.products.forEach(product => {
    //       product.selected = false;                
    //     });
    //   }
    // }
    
    populateProductsList(){  
      this.productColumn1 = [];
      this.productColumn2 = [];
      this.products.forEach((product, i) => {  
        if (i <= this.products.length / 2) {
          this.productColumn1.push(product);          
        } else{
          this.productColumn2.push(product);
        }
      });      
    }
    
    // randomStyleHeightDiv(){      
    //   return this._sanitizer.bypassSecurityTrustStyle(`height:${Math.floor(Math.random() * 60) + 40}`)
    // }
    
    searchingProduct(pattern: string){   
      // this.modal.create('SearchProductPage').present();
      this.navCtrl.push('SearchProductPage'); // mediante el push puedo pasar info a otra pagina o si no quiero pasar y pasar usar behaviour subject???
    }
    
    doRefresh(refresher) {
      this.getAllProducts(refresher);
    }
    
    // showSmallDetail(productClicked: Product){           
    //   this.products.forEach(product => {        
    //     if (product._id === productClicked._id) {
    //       this.increaseContainer(product);
    //     } else{
    //       this.closeOtherOnes(product);
    //     }       
    //   });
    // }
    
    // closeOtherOnes(product: ProductSelected){
    //   product.selected = false;
    // }
    
    // increaseContainer(product: ProductSelected){          
    //   if (!product.selected) {
    //     product.selected = true;
    //   } else{
    //     product.selected = false;
    //   }      
    // }
    
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
  