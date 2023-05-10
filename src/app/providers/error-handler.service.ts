import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  constructor() { }

  handleError(error: any) {
    let errorMessage = '';
    debugger
    if (error.error instanceof ErrorEvent) {
      
      // client
      errorMessage = `${error.error.message}`;
    } else {
      errorMessage = `${error.error.message} `;
      debugger
    }
    debugger
    console.error(errorMessage);
    alert(errorMessage);
    return throwError(errorMessage);
  }
}
