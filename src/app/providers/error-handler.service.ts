import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { ToastService } from '../services/toast.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  constructor(private toastService: ToastService) { }

  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client
      errorMessage = `${error.error.message}`;
    } else {
      errorMessage = `${error.error.message} `;

    }
    debugger
    console.error(errorMessage);
    this.toastService.showError(errorMessage);
    return throwError(errorMessage);
  }
}
