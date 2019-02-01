import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CONFIG } from '../../config/config.int';
import { Product } from './../../models/product';
import { AuthProvider } from '../auth/auth';
import { ApiError } from './../../models/ApiError';
import { Observable, Subject } from 'rxjs';
import {_throw} from 'rxjs/observable/throw';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class ProductsProvider {
  
  
  private static readonly ENDPOINT = `${CONFIG.API_ENDPOINT}`;
  private static readonly httpOptionsForFormData = {
    headers: new HttpHeaders({ "myHeaders": "fotos"}), // si uso content type multipart dara error de bountry pero necesito que el interceptor reciba algo para poner el loader????
    withCredentials: true
  }
  
  constructor(public http: HttpClient,
    private auth: AuthProvider) {
    }
    
    createProduct(product: Product): Observable<Product | ApiError> { 
      let user = JSON.parse(this.auth.getUserFromLocalStorage());      
      return this.http.post<Product>(`${ProductsProvider.ENDPOINT}/products/${user.id}/create`, this.asFormData(product), ProductsProvider.httpOptionsForFormData)
      .pipe(
        map((product: Product)=>{
          console.log(product);
          
          return product;
        }),
        catchError(this.handleError));
      }
      
      asFormData(product){
        const data = new FormData();      
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
      
      handleError(error: HttpErrorResponse):Observable<ApiError>{
        console.log(error);
        
        const apiError = new ApiError();
        if (error.error instanceof ErrorEvent) {
          console.log('es error event');
          
          apiError.message = 'Something went bad, try again';
        } else{
          console.log('no es error event');
          console.log(error.error);
          
          apiError.message = error.error.message;
          apiError.errors = error.error.errors;
        }    
        console.log(apiError);
        
        return _throw(apiError);
      }
      
    }