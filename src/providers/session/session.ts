import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CONFIG } from '../../config/config.int';
// import { CONFIG } from '@environment';
import { User } from '../../models/user';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SessionProvider {
  
  private static readonly ENDPOINT = `${CONFIG.API_ENDPOINT}`;
  private static readonly defaultOptions = {
    headers: new HttpHeaders().set('Content-Type', 'application/json'),
    withCredentials: true
  };
  
  constructor(public http: HttpClient) {
    
  }

  register(user: User){
    console.log(user);
    
    return this.http.post<User>(`${SessionProvider.ENDPOINT}/users`, user).map((data: any)=> data);
  }
  
  login(user: User){        
    return this.http.post<User>(`${SessionProvider.ENDPOINT}/sessions`, user).map((data: any)=>data);
  }

}
