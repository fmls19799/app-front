import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading, LoadingController, ModalController, ToastController } from 'ionic-angular';
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
  newOnesAfterRefresh: Array<Product> = [];
  randomStyleColumn1: number;
  randomStyleColumn2: number;
  addedOnes: number = null;
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
    private toastCtrl: ToastController) {
      
    }
    
    ionViewDidLoad() {
      
    }
    
    
    ngOnInit(){
      this.getAllProducts();
    }
    
    getAllProducts(refresher?: any){
      this.closeOpenedOnes(); // close detail of opened ones
      
      this.productsProvider.getAllProducts().subscribe((products: Array<Product>)=>{
        
        if (refresher) { // stop refresher after i got resuls, if im doing refresher, only include new ones instead adding them all ???
          // this.productsProvider.getAllProducts2().subscribe((products: Array<Product>)=>{            
          this.mergeArraysAndUniquifyThem(products);
          console.log(1);
          
          refresher.complete();
          // })
        } else{
          this.products = products;           
        }
        this.populateProductsList(); // split products in 3 columns
      })
      
      // this.populateProductsList(); // split products in 3 columns
      
      console.log(this.products);
      
    }
    
    
    
    
    
    mergeArraysAndUniquifyThem(newProducts: Array<Product>){
      let allIncludingNew = this.products.concat(newProducts);
      let uniqueonesaftermerge = this.getUnique(allIncludingNew,'id');
      if (uniqueonesaftermerge.length > this.products.length) {                            
        this.addedOnes = Number(uniqueonesaftermerge.length) - Number(this.products.length)              
        this.showToast(`${this.addedOnes.toString()} products new`);
      } else{
        this.showToast('No new products');
      }
      this.products = uniqueonesaftermerge;    
      this.populateProductsList();
    }
    
    showToast(message: string){
      
      this.toastCtrl.create({
        message: message,
        duration: 2000,
        position: 'top',
      }).present();
    }
    
    
    getUnique(arr, comp) {
      const unique = arr
      .map(e => e[comp])
      // store the keys of the unique objects
      .map((e, i, final) => final.indexOf(e) === i && i)
      // eliminate the dead keys & store unique objects
      .filter(e => arr[e]).map(e => arr[e]);
      return unique;
    }
    
    
    closeOpenedOnes(){
      this.products.forEach(product => {
        product.opacity = false;                
      });
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
      return this.products.forEach(product => {
        if (product.id === productClicked.id) {
          return this.turnOpacity(product);
        }
      });
    }
    
    turnOpacity(product: Product){          
      if (!product.opacity) {
        product.opacity = true;
      } else{
        product.opacity = false;
      }
    }
    
    goToProduct(product: Product){    
      // PONER ESTO CON SUBJECT ASI APRENDO??? AUNQUE SOLO PRA ESTO NO HARIA FALTA
      console.log(product);
      this.navCtrl.push('ProductDetailPage', product)
    }
    
    menuClick(event: any){
      // ESTO PARA QUE???
      // console.log(event); 
      
    }
  }
  