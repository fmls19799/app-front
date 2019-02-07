import { Component, OnInit, DoCheck, OnDestroy, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { ProductsProvider } from './../../providers/products/products';
import { Product } from './../../models/product';
import { TranslateService } from '@ngx-translate/core';
import { Subscription, Observable } from 'rxjs';
import { CONFIG } from '../../config/config.int';
import { HttpErrorResponse } from '@angular/common/http';

export interface ProductSelected extends Product{
  selected: boolean;
}

@IonicPage()
@Component({
  selector: 'page-items',
  templateUrl: 'items.html',
})
export class ItemsPage implements OnInit{
  
  productsOfUser?: Array<Product> = [];
  nameHeader: string = 'Your items';
  checkBoxedsOpened: boolean = false;
  arrayProductsToDelete: Array<ProductSelected> = [];
  trashEmptyOrFull: string = 'ios-trash-outline';
  @ViewChild("fab") fab: any;
  
  private static readonly ENDPOINT = `${CONFIG.API_ENDPOINT}/products`;
  
  // productsInLocal: Array<Product> = [];
  subscriptions = new Subscription();
  
  
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private productsProvider: ProductsProvider,
    private alertCtrl: AlertController,
    private translate: TranslateService,
    private toastCtrl: ToastController) {
    }
    
    ngOnInit(){      
      // let subscription = this.productsProvider.productByUserChanges().subscribe((products: Array<Product>)=>{
      //   this.productsOfUser = products;
      // })
      // this.subscriptions.add(subscription);
      
      
      this.emptyEverything();
      this.getAllProducts();
    }
    
    getAllProducts(){
      this.productsProvider.getProductsByUser().subscribe((products: Array<Product>)=>{        
        this.productsOfUser = products;  
        
      },
      (error)=>{
        // PONER API ERRORS BIEN???
        console.log(error);
        
      })
    }
    
    
    
    emptyEverything(){
      this.arrayProductsToDelete.forEach((product: ProductSelected)=>{
        product.selected = false;
      })
      this.arrayProductsToDelete = [];
      this.trashEmptyOrFull = 'ios-trash-outline';
      this.checkBoxedsOpened = false;      
    }
    
    closeFab(){
      if (this.fab) {
        console.log(this.fab);
        this.fab.close();
      }
    }
    
    ionViewWillLeave(){
      this.emptyEverything();
      this.closeFab();
    }
    
    fabOpenCheckboxes(){
      
      this.checkBoxedsOpened = !this.checkBoxedsOpened;
      if (!this.checkBoxedsOpened) {
        this.emptyEverything();
      }
      
    }
    
    deleteProducts(){
      if(this.arrayProductsToDelete.length === 0){
        this.translator('HAVE_TO_SELECT_PRODUCT_FIRST', false);
      }
      else if (this.arrayProductsToDelete.length === 1) {                
        this.translator(['DELETE_PRODUCT', 'ARE_YOU_SURE', 'DONE_BUTTON', 'CANCEL_BUTTON'], true);
      } else if (this.arrayProductsToDelete.length > 1){  
        
        this.translator(['DELETE_PRODUCTS', 'ARE_YOU_SURE', 'DONE_BUTTON', 'CANCEL_BUTTON'], true);
      } 
    }
    
    translator(messageToTranslate: Array<string> | string, withAlert: boolean, withNumberOfProductsDeleted?: boolean){
      this.translate.get(messageToTranslate).subscribe((data)=>{                          
        if (withAlert) {
          this.showAlert(data);
        } else{
          this.showToast(data, withNumberOfProductsDeleted);
        }
      })
    }
    
    showAlert(data){
      var textToShow;
      if(this.arrayProductsToDelete.length === 0){
        textToShow = data.HAVE_TO_SELECT_PRODUCT_FIRST
      }
      else if (this.arrayProductsToDelete.length === 1) {
        textToShow = data.DELETE_PRODUCT
      } else{
        textToShow = data.DELETE_PRODUCTS
      }
      this.alertCtrl.create({
        title: textToShow,
        message: data.ARE_YOU_SURE, 
        buttons: [
          {
            text: data.DONE_BUTTON,
            handler: () =>{
              this.deleteManyProducts();
            }
          },
          {
            text: data.CANCEL_BUTTON,
            role: 'cancel',
            handler: () => {
              console.log('cancel');
              
            }
          }
        ]
      }).present();
    }
    
    showToast(data: string, withNumberOfProductsDeleted?: boolean){
      var messageToShow;
      if (withNumberOfProductsDeleted) {
        messageToShow = `${this.arrayProductsToDelete.length} ${data}`
      } else{
        messageToShow = data;
      }
      this.toastCtrl.create({
        message: messageToShow,
        duration: 2000,
        position: 'top',
      }).present();
    }
    
    selectProductWithCheckbox(product: ProductSelected){
      product.selected = !product.selected;
      
      if (product.selected && this.arrayProductsToDelete.indexOf(product) == -1) {
        this.arrayProductsToDelete.push(product);           
      } else{
        this.arrayProductsToDelete = this.arrayProductsToDelete.filter((elem: ProductSelected)=>{
          return elem !== product;
        })        
      }   
      // this.arrayProductsToDelete.length === 1 ? this.showNumberOfProductsToDelete = `Delete ${this.arrayProductsToDelete.length} product` : this.showNumberOfProductsToDelete = `Delete ${this.arrayProductsToDelete.length} products`;
      this.paintTrash();   
    }
    
    paintTrash(){
      if (this.arrayProductsToDelete.length === 0) {
        this.trashEmptyOrFull = 'ios-trash-outline';
      } else{
        this.trashEmptyOrFull = 'ios-trash';
      }
    }
    
    goToProduct(product: Product){
      this.navCtrl.push('ProductDetailPage', product);
    }
    
    // EN BACK PONER MIDDLEWARES DE SI ES EL MISMO USER ID???
    // LLAMAR A ESTA FUNCION MULTIPLES VECES???
    
    deleteManyProducts(){
      let errors = [];
      let urls = [];
      this.arrayProductsToDelete.forEach((product: Product)=>{
        urls.push(`${ItemsPage.ENDPOINT}/${product._id}/delete`);
      })
      
      // COMO AFECTARIA LOS ERRORES MULTIPLES AQUI????
      return Observable.forkJoin(
        urls.map((url)=>{
          return this.productsProvider.deleteProductByUser(url)
        }),
        (...results)=>({
          failed: results.map((res)=>{
            return res instanceof HttpErrorResponse ? res : null
          }),
          succeeded: results.map((res)=>{
            return res instanceof HttpErrorResponse ? null : res;
          })
        })).subscribe((data: any)=>{ // ESTE DATA QUE ES???
          if (errors.length === 0) {
            this.translator('PRODUCTS_DELETED', false, true);
            this.emptyEverything();
            this.closeFab();
            this.getAllProducts(); // MEJOR HACER SUBJECT YA QUE ESTOY EN LOCAL Y ME AHORRO LA SEGUNDA LLAMADA??????
          } else{
            console.log(errors); // PROBAR ERRORES DE BACK MULTIPLES AL DELETE???
          }
        })
      }
    }
    
    
    