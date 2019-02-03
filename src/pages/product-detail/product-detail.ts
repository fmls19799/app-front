import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Product } from './../../models/product';
import { ProductsProvider } from './../../providers/products/products';


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
  
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private productsProvider: ProductsProvider) {
    }
    
    ngOnInit(){
      this.productToShow = this.navParams.data;           
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
    
    // PONER ESTO CON SUBJECT ASI APRENDO??? SI FUESE ENTRAR MAS ADETRO SI HARIA FALTA SUBJECT???
    ionViewDidLoad() {
      this.productToShow = this.navParams.data;     
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
  