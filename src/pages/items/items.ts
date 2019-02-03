import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductsProvider } from './../../providers/products/products';
import { Product } from './../../models/product';

@IonicPage()
@Component({
  selector: 'page-items',
  templateUrl: 'items.html',
})
export class ItemsPage implements OnInit{
  
  productsOfUser: Array<Product> = [];
  nameHeader: string = 'Your items';
  checkedToDelete: boolean = false;
  readyToDelete: boolean = false;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private productsProvider: ProductsProvider) {
    }
    
    ngOnInit(){
      
      this.productsProvider.getProductsByUser().subscribe((products: Array<Product>)=>{
        console.log(products);
        
        this.productsOfUser = products;
        console.log(this.productsOfUser);
        
      },
      (error)=>{
        // PONER API ERRORS BIEN???
        console.log(error);
        
      })
    }

    selectToDelete(){
      this.readyToDelete = !this.readyToDelete;
    }
    
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
  