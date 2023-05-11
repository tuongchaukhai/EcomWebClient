import { Injectable } from '@angular/core';
import { ICustomerService } from './customer.interface';
import { Observable, catchError, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ErrorHandlerService } from 'src/app/providers/error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService implements ICustomerService {
  private url = 'https://localhost:7209/api/customer';

  constructor(private http: HttpClient, private errorHandler: ErrorHandlerService) { }

  getAll(page?: number, rows?: number): Observable<any> {
    return this.http.get<any>(`${this.url}?page=${page}&rows=${rows}`);
  }
  edit(customer: any): Observable<any> {
    return this.http.put<any>(`${this.url}`, customer).pipe(
      map(response => {
        return { success: true, message: response.message };
      }),
      catchError(error => this.errorHandler.handleError(error))
    );
  }

  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.url}?id=${id}`).pipe(
      map(
        response => {
          return { success: true, message: response.message };
        }),
      catchError(error => this.errorHandler.handleError(error))
    );
  }

  create(customer: any): Observable<any> {
    return this.http.post<any>(`${this.url}`, customer).pipe(
      map(response => {
        return { success: true, message: response.message }
      }),
      catchError(error => this.errorHandler.handleError(error))
    );
  }

}
