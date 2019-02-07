import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Product } from './../../models/product';
import { ProductsProvider } from './../../providers/products/products';
import { AuthProvider } from './../../providers/auth/auth';
import { User } from './../../models/user';
import { TranslateService } from '@ngx-translate/core';

@IonicPage()
@Component({
  selector: 'page-product-detail',
  templateUrl: 'product-detail.html',
})
export class ProductDetailPage implements OnInit{
  
  productToShow: Product = new Product();
  productCounterLikes: number = 0; // QUE SEA DINAMICO PONER EN SU MODELO???
  liking: boolean;
  likingIcon: string;
  user: User;
  
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private productsProvider: ProductsProvider,
    private auth: AuthProvider,
    private toastCtrl: ToastController,
    private translate: TranslateService) {
    }
    
    ngOnInit(){
    
      this.user = this.auth.user;
      this.productToShow = this.navParams.data;
      console.log('product: ', this.productToShow);
      console.log('user', this.user);
      
      this.isLiking();
    }
    
    
    isLiking(){
      if (!this.liking) {
        this.likingIcon = 'heart-outline';
        this.liking = false;
        
      } else{
        this.likingIcon = 'heart';
        this.liking = true;
        
      }
      
    }
    
    
    
    addOrRemoveLikeToThisProduct(){
      // this.liking = !this.liking;
      this.likingIcon = 'heart-outline';
      this.isLiking();
      // if (condition) {
      //   this.productsProvider.likeProduct(this.productToShow).subscribe((product: Product)=>{
      //     console.log(product);
      
      //   })
      
      // } else{
      //   this.productsProvider.unlikeProduct(this.productToShow).subscribe((product: Product)=>{
      //     console.log(product);
      
      //   })
      // }
    }
  }
  