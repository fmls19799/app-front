import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { CONFIG } from '../../config/config.int';
import { User } from '../../models/user';
import { map, catchError } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';


@Injectable()
export class AuthProvider {
  user: User;
  private static readonly ENDPOINT = `${CONFIG.API_ENDPOINT}`;
  
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
      this.user = data; // IF GOOD PONER ESO???
      this.saveInLocalStorageAfterLogin(this.user)
      return data;
    });
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