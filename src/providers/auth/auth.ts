import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { CONFIG } from '../../config/config.int';
import { User } from '../../models/user';
import { map, catchError } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { StringifiedError } from './../../models/StringifiedError';
import { HandlingErrorsProvider } from '../handling-errors/handling-errors';

@Injectable()
export class AuthProvider {
  user: User;
  private static readonly ENDPOINT = `${CONFIG.API_ENDPOINT}`;
  
  constructor(public http: HttpClient,
    private handlingError: HandlingErrorsProvider) { }
  
  ngOnInit() {
    
  }
  
  //quitar any???
  register(user: User): Observable<User | StringifiedError> {
    return this.http.post<User>(`${AuthProvider.ENDPOINT}/register`, user)
    .pipe(
      map((user: User) => {
        return user;
      }),
      catchError(this.handlingError.handleError)
    );
  }
  
  //quitar any???
  login(user: User): Observable<User | StringifiedError> {    
    return this.http.post<User>(`${AuthProvider.ENDPOINT}/sessions`, user)
    .pipe(
      map((user: User) => {
        this.user = user;
        this.saveInLocalStorageAfterLogin(this.user)
        return user;
      }),
      catchError(this.handlingError.handleError)
    );
  }
  
  isLoggedIn():boolean{    
    return localStorage.getItem('user') ? true : false;
  }
  
  saveInLocalStorageAfterLogin(user: User){
    localStorage.setItem('user', JSON.stringify(user));    
  }

  saveUserInAuthWhenAppLoads(){
    if (localStorage.getItem('user')) {
      this.user = JSON.parse(localStorage.getItem('user'));      
    }   
  }
  // rememberMe():boolean{
  //   return localStorage.getItem('rememberMe') ? true : false;
  // }
  
  logout(){
    localStorage.removeItem('user');
    this.user = null;
  }
  
}