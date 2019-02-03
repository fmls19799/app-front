import { Component, OnInit, DoCheck } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ProductsProvider } from './../../providers/products/products';
import { Product } from './../../models/product';
import { TranslateService } from '@ngx-translate/core';

export interface ProductSelected extends Product{
  selected: boolean;
}

@IonicPage()
@Component({
  selector: 'page-items',
  templateUrl: 'items.html',
})
export class ItemsPage implements OnInit{
  
  productsOfUser: Array<Product> = [];
  nameHeader: string = 'Your items';
  checkBoxedsOpened: boolean = false;
  arrayProductsToDelete: Array<ProductSelected> = [];
  trashEmptyOrFull: string = 'ios-trash-outline';
  showNumberOfProductsToDelete: string;
  
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private productsProvider: ProductsProvider,
    private alertCtrl: AlertController,
    private translate: TranslateService) {
    }
    
    ngOnInit(){  
      console.log(0, this.arrayProductsToDelete);
      console.log(1, this.trashEmptyOrFull);
      console.log(2, this.checkBoxedsOpened);
      
      
      this.productsProvider.getProductsByUser().subscribe((products: Array<Product>)=>{
        // console.log(products);
        
        this.productsOfUser = products;
        // console.log(this.productsOfUser);
        
      },
      (error)=>{
        // PONER API ERRORS BIEN???
        console.log(error);
        
      })
    }
    
    emptyEverything(){
      this.arrayProductsToDelete = [];
      this.trashEmptyOrFull = 'ios-trash-outline';
      this.checkBoxedsOpened = false;
    }
    
    ionViewWillLeave(){
      this.arrayProductsToDelete.forEach((product: ProductSelected)=>{
        product.selected = false;
      })
      this.emptyEverything();
    }
    
    fabOpenCheckboxes(){
      if (this.arrayProductsToDelete.length === 1) {        
        this.translator(['DELETE_PRODUCT', 'ARE_YOU_SURE', 'DONE_BUTTON', 'CANCEL_BUTTON']);
      } else if (this.arrayProductsToDelete.length > 1){        
        this.translator(['DELETE_PRODUCTS', 'ARE_YOU_SURE', 'DONE_BUTTON', 'CANCEL_BUTTON']);
      } else{        
        this.checkBoxedsOpened = !this.checkBoxedsOpened;
        if (!this.checkBoxedsOpened) {
          this.emptyEverything();
        }
      }
    }
    
    translator(messageToTranslate: Array<string> | string){
      this.translate.get(messageToTranslate).subscribe((data)=>{                  
        this.showAlert(data);
      })
    }
    
    showAlert(data){
      this.alertCtrl.create({
        title: data.DELETE_PRODUCT,
        message: data.ARE_YOU_SURE, 
        buttons: [
          {
            text: data.DONE_BUTTON,
            handler: () =>{
              console.log('ok');
              this.arrayProductsToDelete.forEach((product: Product)=>{
                this.deleteProductByUser(product);
              })
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
    
    
    selectProductWithCheckbox(product: ProductSelected){
      product.selected = !product.selected;
      
      if (product.selected && this.arrayProductsToDelete.indexOf(product) == -1) {
        this.arrayProductsToDelete.push(product);           
      } else{
        this.arrayProductsToDelete = this.arrayProductsToDelete.filter((elem: ProductSelected)=>{
          return elem !== product;
        })        
      }   
      this.arrayProductsToDelete.length === 1 ? this.showNumberOfProductsToDelete = `Delete ${this.arrayProductsToDelete.length} product` : this.showNumberOfProductsToDelete = `Delete ${this.arrayProductsToDelete.length} products`;
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
      this.navCtrl.push('ProductDetailPage', Product);
    }
    
    // EN BACK PONER MIDDLEWARES DE SI ES EL MISMO USER ID???
    // LLAMAR A ESTA FUNCION MULTIPLES VECES???
    deleteProductByUser(product: Product){
      
      // NO ME DEVUELVE NADA YA QUE LO BORRA EN BACK???
      this.productsProvider.deleteProductByUser(product).subscribe((res: any)=>{
        console.log(res);
        
      },
      (error)=>{
        console.log(error);
        
      })
    }
    
  }
  