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

  uploadFile(formData: FormData): Observable<any> {

    console.log(formData.get('file'));
    return this.http.post<any>(`${this.url}/upload`, formData).pipe(
      map(response => {
        return { success: true, message: response.message };
      }),
      catchError(error => this.errorHandler.handleError(error))
    );
  }

  exportDataToCSV(): void {
    this.http.get(`${this.url}/export`, { responseType: 'blob' })
      .subscribe((response: Blob) => {
        const blob = new Blob([response], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);

        // create a temporary link
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = 'customers.csv';
        //click on the link to trigger the download
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        //clean up the temporary link
        window.URL.revokeObjectURL(link.href);
        link.remove();
      });
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
