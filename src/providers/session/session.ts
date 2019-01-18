import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CONFIG } from '../../config/config.int';
// import { CONFIG } from '@environment';
import { User } from '../../models/user';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operator/map';

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


  

  // create(house: House): Observable<House | ApiError> {
  //   return this.http.post<House>(`${HomeService.HOUSE_API}/users/${this.session.user.id}/houses`, house.asFormData(), { withCredentials: true })
  //   .pipe(
  //     map((house: House) => {
  //       this.houses.push(house);
  //       console.log(house);
        
  //       return house;
  //     }),
  //     catchError(this.handleError)
  //     )
  //   }



  
  login(user: User){        
    return this.http.post<User>(`${SessionProvider.ENDPOINT}/sessions`, user).map((data: any)=>data);
  }
  
}
