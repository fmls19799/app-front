import { Component, OnInit, OnDestroy } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading, LoadingController, ModalController, ToastController } from 'ionic-angular';
import { AuthProvider } from './../../providers/auth/auth';
import { User } from './../../models/user';
import { SearchProductPage } from './../search-product/search-product';
import { ProductsProvider } from './../../providers/products/products';
import { Product } from './../../models/product';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

export interface ProductSelected extends Product{
  selected: boolean;
}

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage implements OnInit{
  private loader: Loading = null;
  user: User = new User();
  products: any = [];
  productColumn1: Array<any> = [];
  productColumn2: Array<any> = [];
  newOnesAfterRefresh: Array<Product> = [];
  randomStyleColumn1: number;
  randomStyleColumn2: number;
  addedOnes: number = null;
  rentOrBuyOptions: Array<string> = [];
  
  
  categories: Array<any> = [
    {
      icon: 'ios-home-outline',
      name: 'House',
    },
    {
      icon: 'ios-car-outline',
      name: 'Car',
    },
    {
      icon: 'ios-game-controller-b-outline',
      name: 'Gaming',
    },
    {
      icon: 'bicycle',
      name: 'Bicycle',
    },
    {
      icon: 'ios-american-football-outline',
      name: 'Sports',
    },
    {
      icon: 'ios-phone-portrait-outline',
      name: 'Phones',
    }
  ]
  
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
      this.getAllProducts();

      this.rentOrBuyOptions = ['All', 'Rent', 'Sell', 'Exchange', 'Gift'];      
    }
    
    getAllProducts(refresher?: any){
      this.closeOpenedOnes(); // close detail of opened ones
      
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
        console.log(888, this.products);
        
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
    
    closeOpenedOnes(){      
      if (this.products) {
        this.products.forEach(product => {
          product.selected = false;                
        });
      }
    }
    
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
    
    randomStyleHeightDiv(){      
      return this._sanitizer.bypassSecurityTrustStyle(`height:${Math.floor(Math.random() * 60) + 40}`)
    }
    
    searchingProduct(pattern: string){   
      // this.modal.create('SearchProductPage').present();
      this.navCtrl.push('SearchProductPage'); // mediante el push puedo pasar info a otra pagina o si no quiero pasar y pasar usar behaviour subject???
    }
    
    doRefresh(refresher) {
      this.getAllProducts(refresher);
    }
    
    showSmallDetail(productClicked: Product){           
      this.products.forEach(product => {        
        if (product._id === productClicked._id) {
          this.increaseContainer(product);
        } else{
          this.closeOtherOnes(product);
        }       
      });
    }
    
    closeOtherOnes(product: ProductSelected){
      product.selected = false;
    }
    
    increaseContainer(product: ProductSelected){          
      if (!product.selected) {
        product.selected = true;
      } else{
        product.selected = false;
      }      
    }
    
    goToProduct(product: Product){         
      // PONER ESTO CON SUBJECT ASI APRENDO??? AUNQUE SOLO PRA ESTO NO HARIA FALTA
      this.navCtrl.push('ProductDetailPage', product)
    }
    
    menuClick(event: any){
      // ESTO PARA QUE???
      // console.log(event); 
      
    }
    
  }
  