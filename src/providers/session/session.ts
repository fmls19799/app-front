import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { CONFIG } from '../../config/config.int';
import { User } from '../../models/user';
import { map, catchError } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';


@Injectable()
export class SessionProvider implements OnInit {
  
  private static readonly ENDPOINT = `${CONFIG.API_ENDPOINT}`;
  private static readonly defaultOptions = {
    headers: new HttpHeaders().set('Content-Type', 'application/json'),
    withCredentials: true
  };
  
  constructor(public http: HttpClient) {
    
  }
  
  ngOnInit() {
    
  }
  
  //quitar any???
  register(user: User): Observable<User | HttpErrorResponse> {
    return this.http.post<User>(`${SessionProvider.ENDPOINT}/users`, user).map((data: any) => data);
  }
  
  //quitar any???
  login(user: User): Observable<User | HttpErrorResponse> {
    return this.http.post<User>(`${SessionProvider.ENDPOINT}/sessions`, user).map((data: any) => data);
  }
  
}
