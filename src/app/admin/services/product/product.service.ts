import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, map } from 'rxjs';
import { ErrorHandlerService } from 'src/app/providers/error-handler.service';
import { ProductUpdateDto } from '../../product/dto/product-update.dto';
import { ProductAddDto } from '../../product/dto/product-add.dto';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient, private errorHandler: ErrorHandlerService) { }

  private url = 'https://localhost:7209/api/product';

  getAll(page?: number, rows?: number): Observable<any> {
    return this.http.get<any>(`${this.url}?page=${page}&pageSize=${rows}`)
    // .pipe(
    //   catchError(error => this.errorHandler.handleError(error))
    // );
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
        link.download = 'products.csv';
        //click on the link to trigger the download
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        //clean up the temporary link
        window.URL.revokeObjectURL(link.href);
        link.remove();
      });
  }

  update(product: ProductUpdateDto): Observable<any> {
    return this.http.put<any>(`${this.url}`, product).pipe(
      map(response => {
        return { sccuess: true, message: response.message }
      }),
      catchError(error => this.errorHandler.handleError(error))
    );
  }

  delete(productId: number): Observable<any> {
    debugger
    return this.http.delete<any>(`${this.url}?id=${productId}`).pipe(
      map(response => {

        return { sccuess: true, message: response.message }
      }),
      catchError(error => this.errorHandler.handleError(error))
    );
  }

  create(product: ProductAddDto): Observable<any> {
    return this.http.post<any>(`${this.url}`, product).pipe(
      map(response => {
        return { sccuess: true, message: response.message }
      }),
      catchError(error => this.errorHandler.handleError(error))
    );
  }



}

