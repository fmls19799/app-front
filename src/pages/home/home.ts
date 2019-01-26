import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading, LoadingController, ModalController } from 'ionic-angular';
import { AuthProvider } from './../../providers/auth/auth';
import { User } from './../../models/user';
import { ApiError } from './../../models/ApiError';
import { SearchProductPage } from './../search-product/search-product';
import { ProductsProvider } from './../../providers/products/products';
import { Product } from './../../models/product';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

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
  productColumn3: Array<any> = [];
  randomStyleColumn1: number;
  randomStyleColumn2: number;
  a: any;
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
    private _sanitizer: DomSanitizer) {
      
    }
    
    ionViewDidLoad() {
      
    }
    
    
    ngOnInit(){
      this.getAllProducts();
    }
    
    getAllProducts(refresher?: any){
      this.productsProvider.getAllProducts().subscribe((products: Array<Product>)=>{
        this.products = products;
        
        if (refresher) { // stop refresher after i got resuls
          refresher.complete();
        }
        this.populateProductsList(this.products); // split products in 3 columns
      })
    }
    populateProductsList(products: Array<Product>){
      products.forEach((product, i) => {
        if (i % 2 === 0) {
          product.randomHeight = this.randomStyleHeightDiv();
          this.productColumn1.push(product);
          // console.log(this.productColumn1);
          
        } else{
          product.randomHeight = this.randomStyleHeightDiv(); 
          this.productColumn2.push(product);
          // console.log(this.productColumn2);
          
          // console.log(this.productColumn2);
        }
      });
      // console.log(products);
      
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
    
    close(){
      console.log('CLOSED');
      
    }
    
    isActive(){
      console.log('ACTIVE');
      
    }
    
    ionWillClose(){
      console.log('will close');
      
    }
    
    ionDidClose(){
      console.log('did close');
      
    }
    
    menuClick(a){
      // console.log('menu', a);
      
    }
  }
  