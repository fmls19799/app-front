import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CONFIG } from '../../config/config.int';
import { Product } from './../../models/product';

@Injectable()
export class ProductsProvider {
  
  private static readonly ENDPOINT = `${CONFIG.API_ENDPOINT}`;
  
  constructor(public http: HttpClient) {
  }
  
  getAllProducts(){
    //QUITAR EL MOCK???
    
    // return this.http.get<Array<Product>>(`${ProductsProvider.ENDPOINT}/products`).map((products: Array<Product>)=> products);
    return this.http.get<Array<Product>>(`http://www.mocky.io/v2/5c4ced6d3700002b0bb042ef`).map((products: Array<Product>)=> products);
  }
  
  getAllProducts2(){
    //QUITAR EL MOCK???
    // return this.http.get<Array<Product>>(`${ProductsProvider.ENDPOINT}/products`).map((products: Array<Product>)=> products);
    return this.http.get<Array<Product>>(`http://www.mocky.io/v2/5c4de7133100008d00c41bcb`).map((products: Array<Product>)=> products);
  }
  
  likeProduct(product: Product){
    console.log(product);
    return this.http.put<Product>(`${ProductsProvider.ENDPOINT}/products/${product.id}/like`, product).map((product: Product)=> product);
  }
  
  unlikeProduct(product: Product){
    console.log(product);
    return this.http.put<Product>(`${ProductsProvider.ENDPOINT}/products/${product.id}/unlike`, product).map((product: Product)=> product);
  }
}