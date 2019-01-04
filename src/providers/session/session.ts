import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../config/environment';
import { User } from '../../models/user';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SessionProvider {
  
  private static readonly SESSION_ENDPOINT = `${environment.enpoint}`;
  private static readonly defaultOptions = {
    headers: new HttpHeaders().set('Content-Type', 'application/json'),
    withCredentials: true
  };
  
  constructor(public http: HttpClient) {
    
  }

  register(user: User){
    return this.http.post<User>(`${SessionProvider.SESSION_ENDPOINT}/users`, user, SessionProvider.defaultOptions);
  }
  
  login(user: User){        
    return this.http.post<User>(`${SessionProvider.SESSION_ENDPOINT}/sessions`, user, SessionProvider.defaultOptions);
  }

}
