import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CONFIG } from '../../config/config.int';
import { Product } from './../../models/product';
import { AuthProvider } from '../auth/auth';

@Injectable()
export class ProductsProvider {
  
  private static readonly ENDPOINT = `${CONFIG.API_ENDPOINT}`;
  private static readonly httpOptionsForFormData = {
    headers: new HttpHeaders().set('Content-Type', 'multipart/form-data'),
    withCredentials: true
  }

  constructor(public http: HttpClient,
    private auth: AuthProvider) {
    }
    
    createProduct(product: Product){ 
      console.log(222);
      
      // let user = JSON.parse(localStorage.getItem('user')).id; 
      //  console.log(`${ProductsProvider.ENDPOINT}/products/${user}/create`);
      // console.log(`${ProductsProvider.ENDPOINT}/products/5c430f7c26a58d1e5ae6ea21/create`);
      // const data = new FormData();
      
      // data.append('name', product.name);
      // data.append('icon', product.icon);
      // data.append('description', product.description);
      // data.append('price', (product.price).toString());
      // data.append('type', product.type);
      
      // for (const photo of product.photos) {
      //   data.append('photos', photo); // 'photos' aqui es como debe llamarse en multer el middleware
      // }
      
      // data.forEach((element)=>{
      //     console.log(element);
      
      // })
      
      return this.http.post<Product>(`${ProductsProvider.ENDPOINT}/products/5c430f7c26a58d1e5ae6ea21/create`, product).map((product: Product)=> product);
    }
    
    getAllProducts(){
      //QUITAR EL MOCK???
      console.log(11111);
      
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