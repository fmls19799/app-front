import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { _throw } from 'rxjs/observable/throw';
import { StringifiedError } from './../../models/StringifiedError';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class HandlingErrorsProvider {
  
  constructor(private translate: TranslateService) {
  }
  
  public handleError(error: HttpErrorResponse): Observable<StringifiedError>{
    
    let stringifiedError = new StringifiedError();
    if (error) {
      if (error.error.length === 1) {
        stringifiedError = error.error.toString();
      } else if(error.error.length === 2){
        stringifiedError = error.error.join(' and ');
      } else{      
        stringifiedError = error.error.join(', ').replace(/,(?=[^,]*$)/, ' and')
      }
    }
    console.log(stringifiedError);
    
    return _throw(stringifiedError);
  }

}
