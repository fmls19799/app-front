import { Component, OnInit, OnDestroy } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Product } from './../../models/product';
import { ProductsProvider } from './../../providers/products/products';
import { AuthProvider } from './../../providers/auth/auth';
import { User } from './../../models/user';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@IonicPage()
@Component({
  selector: 'page-product-detail',
  templateUrl: 'product-detail.html',
})
export class ProductDetailPage implements OnInit, OnDestroy {
  
  liking: boolean = false;
  user: User;
  comingAfterCreateProduct: boolean;
  productToShow: Product = new Product();
  subscriptions = new Subscription();
  
  
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private productsProvider: ProductsProvider,
    private auth: AuthProvider,
    private toastCtrl: ToastController,
    private translate: TranslateService) {
    }
    
    ngOnInit() {
      this.getProductById(this.navParams.data._id);
      this.getSuscription();
      this.liking = false;
      this.user = this.auth.user;
    }
    
    getSuscription() {
      let subscription = this.productsProvider.productDetailChanges().subscribe((product: Product) => {
        this.productToShow = product;
      })
      this.subscriptions.add(subscription);
    }
    
    getProductById(id: string) {
      this.productsProvider.getProductById(id).subscribe((data) => {
        
        this.liking = data.liking;
        console.log(this.liking);
        
        this.productToShow = data.product;
      },
      (error) => {
        this.translator(error);
      })
    }
    
    like() {
      // this.likeOrUnlike();
      if (this.productToShow.owner.id !== this.user.id) {
        this.liking = !this.liking;
        this.likeOrUnlike();
      } else{
        this.translator('YOU_CANNOT_LIKE_YOUR_OWN_PRODUCT');
      }
    }
    
    // AUNQUE SI SE CAMBNIE EL ICONO DE FORMA LOCAL DEBO NITIFICAR CAMBIOS PARA QUE EL PRODUCT SE VEA LOS LIKES EN TIEMPO REAL???
    likeOrUnlike() {
      if (this.liking) {
        this.productsProvider.likeProduct(this.productToShow).subscribe((product: Product) => {
          this.productToShow = product;
        },
        (error) => {
          this.translator(error);
        })
      } else {
        this.productsProvider.unlikeProduct(this.productToShow).subscribe((product: Product) => { 
          this.productToShow = product;
        },
        (error) => {
          this.translator(error);
        })
      }
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
    
    ngOnDestroy() {
      this.subscriptions.unsubscribe();
    }
  }
  