import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CONFIG } from '../../config/config.int';
import { Product } from './../../models/product';
import { AuthProvider } from '../auth/auth';
import { StringifiedError } from './../../models/StringifiedError';
import { Observable, Subject, Subscription, BehaviorSubject } from 'rxjs';
import { _throw } from 'rxjs/observable/throw';
import { map, catchError } from 'rxjs/operators';
import { HandlingErrorsProvider } from '../handling-errors/handling-errors';

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
    private auth: AuthProvider,
    private handlingError: HandlingErrorsProvider) {

  }
  // deberia en en el modelo pero no va????
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

  createProduct(product: Product): Observable<Product | StringifiedError> {
    return this.http.post<Product>(`${ProductsProvider.ENDPOINT}/products/users/${this.auth.user.id}/create`, this.asFormData(product), ProductsProvider.httpOptionsForFormData)
      .pipe(
        map((product: Product) => {          
          return product;
        }),

        catchError(this.handlingError.handleError)
      );
  }

  getAllProducts(): Observable<Array<Product> | StringifiedError> {
    //QUITAR EL MOCK???      
    return this.http.get<Array<Product>>(`${ProductsProvider.ENDPOINT}/products`).map((products: Array<Product>) => products)
      .pipe(
        map((products: Array<Product>) => {
          return products;
        }),
        catchError(this.handlingError.handleError));
  }

  // COMO HACEMOS CON PIPE O SIN??? no haria falta 
  getProductsByUser(): Observable<Array<Product> | StringifiedError> {
    // PONER BIEN LA RUTA NO TIENE SENTIDO PONER PRODUCT ID????
    return this.http.get<Array<Product>>(`${ProductsProvider.ENDPOINT}/products/users/${this.auth.user.id}`).map((products: Array<Product>) => products)
      .pipe(
        map((products: Array<Product>) => {
          return products;
        }),
        catchError(this.handlingError.handleError));
  }



  likeProduct(product: Product): Observable<Product | StringifiedError> {
    return this.http.put<Product>(`${ProductsProvider.ENDPOINT}/products/${product._id}/like`, product).map((product: Product) => product)
      .pipe(
        map((product: Product) => {
          return product;
        }),
        catchError(this.handlingError.handleError));
  }

  unlikeProduct(product: Product): Observable<Product | StringifiedError> {
    return this.http.put<Product>(`${ProductsProvider.ENDPOINT}/products/${product._id}/unlike`, product).map((product: Product) => product)
      .pipe(
        map((product: Product) => {
          return product;
        }),
        catchError(this.handlingError.handleError));
  }

  deleteProductByUser(url): Observable<void | StringifiedError> {
    return this.http.delete<Product>(url).map((res: any) => res)
      .pipe(
        map(() => {
          return; // USAR SUBJECTS O NO???? COMO AFECTARIA EL FORKJOIN EN ESTE CASO SI HAY ERROR????
        }),
        catchError(this.handlingError.handleError));
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


}