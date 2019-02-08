import { Component, OnInit, OnDestroy } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Product } from './../../models/product';
import { ProductsProvider } from './../../providers/products/products';
import { AuthProvider } from './../../providers/auth/auth';
import { User } from './../../models/user';
import { TranslateService } from '@ngx-translate/core';
import { WishListProvider } from './../../providers/wish-list/wish-list';
import { Subscription } from 'rxjs';

@IonicPage()
@Component({
  selector: 'page-product-detail',
  templateUrl: 'product-detail.html',
})
export class ProductDetailPage implements OnInit, OnDestroy{
  
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
    private translate: TranslateService,
    private wishListProvider: WishListProvider) {
    }
    
    ngOnInit(){
      this.liking = false;
      
      this.user = this.auth.user;
      if (this.navParams.data) {
        this.comingAfterCreateProduct = true;
      }
      this.productToShow = this.navParams.data;
      this.isLiking(); //PARA PINTAR DE UNA MANERA U OTRA HABRA QUE COMPROBAR SI YA SE ESTA LIKE?? DEBE IR DEBAJO PARA TENER EL PRODUCTO QUE LE PASE DESDE HOME???
      // this.getSuscription();
    }

    getSuscription(){
      let subscription = this.productsProvider.productByUserChanges().subscribe((product: Product)=>{
        this.productToShow = product;  
  
      })      
      this.subscriptions.add(subscription);
    }
    
    isLiking(){
      this.productsProvider.isLiking(this.productToShow).subscribe((data: any)=>{
        this.liking = data;
      },
      (error)=>{
        this.translator(error);
      })
    }
    
    
    
    
    like(){
      if (this.productToShow.owner.id !== this.user.id) {
        console.log('no es tu product y si puedes likear');
        this.liking = !this.liking;
        this.likeOrUnlike();
      }
    }
    
    likeOrUnlike(){
      if (this.liking) {
        this.productsProvider.likeProduct(this.productToShow).subscribe((data: any)=>{
          console.log(data);
          // AUNQUE SI SE CAMBNIE EL ICONO DE FORMA LOCAL DEBO NITIFICAR CAMBIOS PARA QUE EL PRODUCT SE VEA LOS LIKES EN TIEMPO REAL???
        },
        (error)=>{
          this.translator(error);
        })
      } else{
        this.productsProvider.unlikeProduct(this.productToShow).subscribe(()=>{},
        (error)=>{
          this.translator(error);
        })
      }
    }
    
    translator(message: string){
      this.translate.get(message).subscribe((data: string)=>{
        
        this.showToast(data);
      })
    }
    
    showToast(data: string){
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
  