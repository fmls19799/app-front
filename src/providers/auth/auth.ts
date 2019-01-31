import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { CONFIG } from '../../config/config.int';
import { User } from '../../models/user';
import { map, catchError } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';


@Injectable()
export class AuthProvider {
  user: User;
  // localStorageUser: User;
  private static readonly ENDPOINT = `${CONFIG.API_ENDPOINT}`;
  // LO PUEDO QUITAR??? PROBAR YA QUE LO TENGO EN INTERCEPTOR???
  
  // private static readonly defaultOptions = {
  //   headers: new HttpHeaders().set('Content-Type', 'application/json'),
  //   withCredentials: true
  // };
  
  constructor(public http: HttpClient) { }
  
  ngOnInit() {
    
  }
  
  //quitar any???
  register(user: User): Observable<User | HttpErrorResponse> {
    return this.http.post<User>(`${AuthProvider.ENDPOINT}/register`, user).map((data: any) => data);
  }
  
  //quitar any???
  login(user: User): Observable<User | HttpErrorResponse> {    
    return this.http.post<User>(`${AuthProvider.ENDPOINT}/sessions`, user).map((data: any)=>{
      this.user = data; // IF GOOD???
      this.saveInLocalStorage(this.user)
      return data;
    });
  }
  
  isLoggedIn():boolean{
    return localStorage.getItem('user') ? true : false;
  }
  
  saveInLocalStorage(user: User){
    localStorage.setItem('user', JSON.stringify(user));    
  }
  
  getUserFromLocalStorage():any{    
    return localStorage.getItem('user');
  }
  
  // rememberMe():boolean{
  //   return localStorage.getItem('rememberMe') ? true : false;
  // }
  
  
}
