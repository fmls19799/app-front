import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CONFIG } from '../../config/config.int';
import { Product } from './../../models/product';
import { AuthProvider } from '../auth/auth';
import { a } from '@angular/core/src/render3';

@Injectable()
export class ProductsProvider {
  
 
  private static readonly ENDPOINT = `${CONFIG.API_ENDPOINT}`;
  private static readonly httpOptionsForFormData = {
    headers: new HttpHeaders({ "Content-Type": "multipart/form-data"}),
    withCredentials: true
  }
  private static readonly httpOptionsForApplicationJson = {
    headers: new HttpHeaders({ "Content-Type": "application/json"}),
    withCredentials: true
  }
  
  constructor(public http: HttpClient,
    private auth: AuthProvider) {
    }
    // request.setRequestHeader("Content-Type", "multipart/form-data; boundary=l3iPy71otz");
    
    createProduct(product: Product){ 
      let user = JSON.parse(this.auth.getUserFromLocalStorage());
      console.log(product);
      console.log(111, user);
      
      let aa = this.a(product);
      if (aa) {
        console.log(2);
        
        return this.http.post<Product>(`${ProductsProvider.ENDPOINT}/products/${user.id}/create`, aa, {withCredentials: true}).map((product: Product)=> product);
      }
    }
    
    a(product){
      const data = new FormData();
      console.log(1);
      
      data.append('name', product.name);
      data.append('icon', product.icon);
      data.append('description', product.description);
      data.append('price', (product.price).toString());
      data.append('type', product.type);
      
      for (const photo of product.photos) {
        data.append('photos', photo);
      }
      return data;
    }
    
    getAllProducts(){
      //QUITAR EL MOCK???      
      return this.http.get<Array<Product>>(`${ProductsProvider.ENDPOINT}/products`).map((products: Array<Product>)=> products);
      // return this.http.get<Array<Product>>(`http://www.mocky.io/v2/5c4ced6d3700002b0bb042ef`).map((products: Array<Product>)=> products);
    }
    
    
    likeProduct(product: Product){
      console.log(product);
      return this.http.put<Product>(`${ProductsProvider.ENDPOINT}/products/${product._id}/like`, product).map((product: Product)=> product);
    }
    
    unlikeProduct(product: Product){
      console.log(product);
      return this.http.put<Product>(`${ProductsProvider.ENDPOINT}/products/${product._id}/unlike`, product).map((product: Product)=> product);
    }
  }