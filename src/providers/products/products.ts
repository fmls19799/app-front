import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CONFIG } from '../../config/config.int';
import { Product } from './../../models/product';
import { AuthProvider } from '../auth/auth';
import { ApiError } from './../../models/ApiError';
import { Observable, Subject, Subscription, BehaviorSubject } from 'rxjs';
import { _throw } from 'rxjs/observable/throw';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class ProductsProvider {

  allProducts: Array<Product> = [];
  subjectAllProducts = new BehaviorSubject(null);

  productsByUser: Array<Product> = [];
  // subjectProductOfUser = new BehaviorSubject(null);
  // subscriptions = new Subscription();

  private static readonly ENDPOINT = `${CONFIG.API_ENDPOINT}`;
  private static readonly httpOptionsForFormData = {
    headers: new HttpHeaders({ "myHeaders": "fotos" }), // si uso content type multipart dara error de bountry pero necesito que el interceptor reciba algo para poner el loader????
    withCredentials: true
  }

  constructor(public http: HttpClient,
    private auth: AuthProvider) {

  }

  asFormData(product) {
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

  createProduct(product: Product): Observable<Product | ApiError> {
    return this.http.post<Product>(`${ProductsProvider.ENDPOINT}/products/${this.auth.user.id}/create`, this.asFormData(product), ProductsProvider.httpOptionsForFormData)
      .pipe(
        map((product: Product) => {
          return product;
        }),
        catchError(this.handleError));
  }

  getAllProducts(): Observable<Array<Product> | ApiError> {
    //QUITAR EL MOCK???      
    return this.http.get<Array<Product>>(`${ProductsProvider.ENDPOINT}/products`).map((products: Array<Product>) => products)
      .pipe(
        map((products: Array<Product>) => {
          // this.allProducts = products;
          return products;
        }),
        catchError(this.handleError));
    // return this.http.get<Array<Product>>(`http://www.mocky.io/v2/5c4ced6d3700002b0bb042ef`).map((products: Array<Product>)=> products);
  }

  // COMO HACEMOS CON PIPE O SIN??? ESTE ORDEN ESTA MAL????
  getProductsByUser(): Observable<Array<Product> | ApiError> {
    // PONER BIEN LA RUTA NO TIENE SENTIDO PONER PRODUCT ID????
    return this.http.get<Array<Product>>(`${ProductsProvider.ENDPOINT}/products/${this.auth.user.id}`).map((products: Array<Product>) => products)
      .pipe(
        map((products: Array<Product>) => {
          // this.productsByUser = products;
          // this.notifyChanges();
          return products;
        }),
        catchError(this.handleError));
  }

  likeProduct(product: Product): Observable<Product | ApiError> {
    return this.http.put<Product>(`${ProductsProvider.ENDPOINT}/products/${product._id}/like`, product).map((product: Product) => product)
      .pipe(
        map((product: Product) => {
          return product;
        }),
        catchError(this.handleError));
  }

  unlikeProduct(product: Product): Observable<Product | ApiError> {
    return this.http.put<Product>(`${ProductsProvider.ENDPOINT}/products/${product._id}/unlike`, product).map((product: Product) => product)
      .pipe(
        map((product: Product) => {
          return product;
        }),
        catchError(this.handleError));
  }

  deleteProductByUser(url): Observable<void | ApiError> {
    // PONER MIDDLEWARE EN BACK TB???
    return this.http.delete<Product>(url).map((res: any) => res)
      .pipe(
        map(() => {
          // this.productsByUser = this.productsByUser.filter(product => product._id !== id);
          // this.allProducts = this.allProducts.filter(product => product._id !== id);
          // this.notifyChanges();
          return;
        }),
        catchError(this.handleError));
  }

  // notifyChanges() {
  //   this.subjectProductOfUser.next(this.productsByUser);
  //   this.subjectAllProducts.next(this.allProducts);
  // }

  // productByUserChanges() {
  //   return this.subjectProductOfUser.asObservable();
  // }

  // allProductsChanges() {
  //   return this.subjectProductOfUser.asObservable();
  // }

  handleError(error: HttpErrorResponse): Observable<ApiError> {
    console.log(error);

    const apiError = new ApiError();
    if (error.error instanceof ErrorEvent) {
      console.log('es error event');

      apiError.message = 'Something went bad, try again';
    } else {
      console.log('no es error event');
      console.log(error.error);

      apiError.message = error.error.message;
      apiError.errors = error.error.errors;
    }
    console.log(apiError);

    return _throw(apiError);
  }

}