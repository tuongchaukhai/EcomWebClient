import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  constructor() { }

  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client
      errorMessage = `${error.error.message}`;
    } else {
      // server
      // if (error.status == 401) {
      //   errorMessage = `You didn't log in`;
      //   // this.authService.logOut();
      //   this.router.navigate(['/login']);
      // }
      // else if (error.status == 400) {
      //   errorMessage = `You didn't have permission to`;
      // }
      // else {
      errorMessage = `${error.error.message} `;
      debugger
    }
    debugger
    console.error(errorMessage);
    alert(errorMessage);
    return throwError(errorMessage);
  }
}
