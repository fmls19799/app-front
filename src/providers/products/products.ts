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
import { parseTemplate } from 'ionic-angular/umd/util/datetime-util';

@Injectable()
export class ProductsProvider extends HandlingErrorsProvider {
  productsByUser: Array<Product> = [];
  subjectProductsOfUser = new BehaviorSubject(null);
  
  productDetail: Product;
  subjectProductDetail = new BehaviorSubject(null);
  
  allProductsHome: Array<Product>;
  subjectAllProductsHome = new BehaviorSubject(null);
  
  private static readonly ENDPOINT = `${CONFIG.API_ENDPOINT}`;
  private static readonly httpOptionsForFormData = {
    headers: new HttpHeaders({ "myHeaders": "fotos" }), // si uso content type multipart dara error de bountry pero necesito que el interceptor reciba algo para poner el loader????
    withCredentials: true
  }
  private static readonly httpOptionsNoLoader = {
    headers: new HttpHeaders({ "No-Loader": "true" }),
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
      
      getAllProducts(pagination: number, rentOrBuyOrType: any): any {     
        console.log(888, rentOrBuyOrType);
               
        let customQuery = `?page=${pagination}`;
        if (rentOrBuyOrType) {
          if(rentOrBuyOrType.rentOrBuy){
            customQuery = `?page=${pagination}&rentOrBuy=${rentOrBuyOrType.rentOrBuy}`;            
          } else if(rentOrBuyOrType.type){
            customQuery = `?page=${pagination}&type=${rentOrBuyOrType.type}`;            
          } 
        }
        console.log(`${ProductsProvider.ENDPOINT}/products/${this.auth.user.id}${customQuery}`);
        
        // return this.http.get<Array<Product>>(`${ProductsProvider.ENDPOINT}/products/${this.auth.user.id}?page=${pagination}`)
        return this.http.get<Array<Product>>(`${ProductsProvider.ENDPOINT}/products/${this.auth.user.id}${customQuery}`)
        .pipe(
          map((products: Array<Product>) => {
            this.allProductsHome = products;
            // console.log(22, this.allProductsHome);
            
            // this.notifyChangesAllProductsHome();
            return products;
          }),
          catchError(this.handleError));
        }
        
        
        // ESTO??????
        // getAllProducts(): Observable<Array<Product> | StringifiedError> {            
        //   return this.http.get<Array<Product>>(`${ProductsProvider.ENDPOINT}/products/${this.auth.user.id}`)
        //     .pipe(
        //       map((products: Array<Product>) => {
        //         this.allProductsHome = products;
        //         // console.log(22, this.allProductsHome);
        
        //         this.notifyChangesAllProductsHome();
        //         return products;
        //       }),
        //       catchError(this.handleError));
        // }
        
        
        // COMO HACEMOS CON PIPE O SIN??? no haria falta
        getProductsByUser(): Observable<Array<Product> | StringifiedError> {
          
          // PONER BIEN LA RUTA NO TIENE SENTIDO PONER PRODUCT ID????
          return this.http.get<Array<Product>>(`${ProductsProvider.ENDPOINT}/products/users/${this.auth.user.id}`)
          .pipe(
            map((products: Array<Product>) => {
              this.productsByUser = products;
              this.notifyChangesProductsOfUserl();
              return products;
            }),
            catchError(this.handleError));
          }
          
          getProductById(id: string): Observable<any | StringifiedError> { // le pongo any ya que es el producto + si esta like???    
            
            return this.http.get<Product>(`${ProductsProvider.ENDPOINT}/products/${id}/users/${this.auth.user.id}`)
            .pipe(
              map((data: any) => {
                this.productDetail = data.product;
                this.notifyChangesproductDetail();
                return data;
              }),
              catchError(this.handleError));
            }
            
            // NO LOAD ERCOMO HACERLO??? PONER ESTO EN WISHLIST PROVIDER PERO DA URINARY ERROR AL MEZCLARA DIFERENTES TIPOS???
            likeProduct(product: Product): Observable<Product | StringifiedError> {
              return this.http.put<Product>(`${ProductsProvider.ENDPOINT}/products/${product._id}/users/${this.auth.user.id}/like`, product)
              .pipe(
                map((product: Product) => {
                  this.productDetail = product;
                  this.notifyChangesproductDetail();
                  return product;
                }),
                catchError(this.handleError));
              }
              
              unlikeProduct(product: Product): Observable<Product | StringifiedError> {
                return this.http.put<Product>(`${ProductsProvider.ENDPOINT}/products/${product._id}/users/${this.auth.user.id}/unlike`, product)
                .pipe(
                  map((product: Product) => {
                    this.productDetail = product;
                    this.notifyChangesproductDetail();
                    return product;
                  }),
                  catchError(this.handleError));
                }
                
                
                deleteProductByUser(product: Product): Observable<void | StringifiedError> {
                  
                  return this.http.delete<Product>(`${ProductsProvider.ENDPOINT}/products/${product._id}/delete`)
                  .pipe(
                    map(() => {
                      this.productsByUser = this.productsByUser.filter(productsByUser => productsByUser._id !== product._id);
                      this.notifyChangesProductsOfUserl(); // no emito y suscribo desde el page como en altran ya que aqui no retorno nada y no quiero en el page retornar algo, asi que emito aqui???
                      return;
                    }),
                    catchError(this.handleError));
                  }
                  
                  
                  notifyChangesproductDetail() {
                    this.subjectProductDetail.next(this.productDetail);
                  }
                  productDetailChanges() {
                    return this.subjectProductDetail.asObservable();
                    
                  }
                  
                  
                  notifyChangesProductsOfUserl() {
                    this.subjectProductsOfUser.next(this.productsByUser);
                  }
                  
                  productByUserChanges() {
                    return this.subjectProductsOfUser.asObservable();
                  }
                  
                  notifyChangesAllProductsHome() {
                    // console.log(111, this.allProductsHome);
                    
                    this.subjectAllProductsHome.next(this.allProductsHome);
                  }
                  
                  allProductsHomeChanges() {
                    console.log(444, this.allProductsHome);
                    return this.subjectAllProductsHome.asObservable();
                  }
                  
                  
                  
                }