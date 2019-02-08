import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './../../models/product';
import { Observable, Subject, Subscription, BehaviorSubject } from 'rxjs';
import { WishProduct } from 'src/models/wishlist';
import { StringifiedError } from 'src/models/StringifiedError';
import { ProductsProvider } from '../products/products';
import { CONFIG } from '../../config/config.int';
import { AuthProvider } from '../auth/auth';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class WishListProvider {

  private static readonly ENDPOINT = `${CONFIG.API_ENDPOINT}`;
  constructor(public http: HttpClient,
    private auth: AuthProvider) {
    
    console.log('Hello WishListProvider Provider');
  }

}
