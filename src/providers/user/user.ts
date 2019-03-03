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
import { User } from './../../models/user';

@Injectable()
export class UserProvider extends HandlingErrorsProvider {
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
    asFormData(user) {
      const data = new FormData();
      data.append('name', user.name);
      data.append('email', (user.email));
      data.append('image', user.image);
      
      return data;
    }
    
    updateUser(user: User){
      // console.log(33, user);
      
      return this.http.put<User>(`${UserProvider.ENDPOINT}/users/${this.auth.user.id}/update`, this.asFormData(user), UserProvider.httpOptionsForFormData)
      .pipe(
        map((user: User) => {
          // no hace falta notify changes porque donde me quiero ahorrar el get es al borrar elementos???
          return user;
        }),
        catchError(this.handleError));
      }
    }
    