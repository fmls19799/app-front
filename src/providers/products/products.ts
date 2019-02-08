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
export class ProductsProvider extends HandlingErrorsProvider {

  productsByUser: Array<Product> = [];
  subjectProductsOfUser = new BehaviorSubject(null);

  private static readonly ENDPOINT = `${CONFIG.API_ENDPOINT}`;
  private static readonly httpOptionsForFormData = {
    headers: new HttpHeaders({ "myHeaders": "fotos" }), // si uso content type multipart dara error de bountry pero necesito que el interceptor reciba algo para poner el loader????
    withCredentials: true
  }

  constructor(public http: HttpClient,
    private auth: AuthProvider) {
    super();

  }
  // deberia en en el modelo pero no va????
  asFormData(product) {
    const data = new FormData();
    data.append('name', product.name);
    data.append('icon', product.icon);
    data.append('description', product.description);
    data.append('price', (product.price).toString());
    data.append('type', product.type);
    data.append('rentOrBuy', product.rentOrBuy);

    for (const photo of product.photos) {
      data.append('photos', photo);
    }
    return data;
  }

  createProduct(product: Product): Observable<Product | StringifiedError> {
    // console.log(this.asFormData(product));
    // console.log(product);

    return this.http.post<Product>(`${ProductsProvider.ENDPOINT}/products/users/${this.auth.user.id}/create`, this.asFormData(product), ProductsProvider.httpOptionsForFormData)
      .pipe(
        map((product: Product) => {
          // no hace falta notify changes porque donde me quiero ahorrar el get es al borrar elementos???
          return product;
        }),

        catchError(this.handleError));
  }

  getAllProducts(): Observable<Array<Product> | StringifiedError> {
    return this.http.get<Array<Product>>(`${ProductsProvider.ENDPOINT}/products`)
      .pipe(
        map((products: Array<Product>) => {
          return products;
        }),
        catchError(this.handleError));
  }

  // COMO HACEMOS CON PIPE O SIN??? no haria falta 
  getProductsByUser(): Observable<Array<Product> | StringifiedError> {
    // PONER BIEN LA RUTA NO TIENE SENTIDO PONER PRODUCT ID????
    return this.http.get<Array<Product>>(`${ProductsProvider.ENDPOINT}/products/users/${this.auth.user.id}`)
      .pipe(
        map((products: Array<Product>) => {
          this.productsByUser = products;
          console.log(0);

          this.notifyChanges();
          return products;
        }),
        catchError(this.handleError));
  }



  likeProduct(product: Product): Observable<Product | StringifiedError> {
    return this.http.put<Product>(`${ProductsProvider.ENDPOINT}/products/${product._id}/like`, product)
      .pipe(
        map((product: Product) => {
          return product;
        }),
        catchError(this.handleError));
  }

  unlikeProduct(product: Product): Observable<Product | StringifiedError> {
    return this.http.put<Product>(`${ProductsProvider.ENDPOINT}/products/${product._id}/unlike`, product)
      .pipe(
        map((product: Product) => {
          return product;
        }),
        catchError(this.handleError));
  }


  deleteProductByUser(product: Product): Observable<void | StringifiedError> {

    return this.http.delete<Product>(`${ProductsProvider.ENDPOINT}/products/${product._id}/delete`)
      .pipe(
        map(() => {
          this.productsByUser = this.productsByUser.filter(productsByUser => productsByUser._id !== product._id);
          this.notifyChanges(); // no emito y suscribo desde el page como en altran ya que aqui no retorno nada y no quiero en el page retornar algo, asi que emito aqui???
          return;
        }),
        catchError(this.handleError));
  }


  notifyChanges() {
    console.log(1);
    this.subjectProductsOfUser.next(this.productsByUser);
  }

  productByUserChanges() {
    console.log(4);
    return this.subjectProductsOfUser.asObservable();
  }

}