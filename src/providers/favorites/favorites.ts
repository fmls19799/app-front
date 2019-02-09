import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { CONFIG } from '../../config/config.int';
import { AuthProvider } from '../auth/auth';
import { StringifiedError } from './../../models/StringifiedError';
import { Observable, Subject, Subscription, BehaviorSubject } from 'rxjs';
import { _throw } from 'rxjs/observable/throw';
import { map, catchError } from 'rxjs/operators';
import { HandlingErrorsProvider } from '../handling-errors/handling-errors';
import { WishProduct } from './../../models/wishlist';


@Injectable()
export class FavoritesProvider extends HandlingErrorsProvider {
  wishList: Array<WishProduct> = [];
  
  private static readonly ENDPOINT = `${CONFIG.API_ENDPOINT}`;
  constructor(public http: HttpClient, private auth: AuthProvider) {
    super();
    
  }
  
  getFavoritesProductsOfUser(): Observable<Array<WishProduct> | StringifiedError>{
    return this.http.get<Array<WishProduct>>(`${FavoritesProvider.ENDPOINT}/wishlist/user/${this.auth.user.id}`)
    .pipe(
      map((wishlist: Array<WishProduct>)=>{
        this.wishList = wishlist;
        return wishlist;
      }),
      catchError(this.handleError));
    }
    
  }
  