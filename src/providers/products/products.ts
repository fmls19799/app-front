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
    return this.http.get<Array<Product>>(`http://www.mocky.io/v2/5c4c64183700002e00b0425d`).map((products: Array<Product>)=> products);
  }
}
