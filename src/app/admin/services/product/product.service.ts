import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map } from 'rxjs';
import { ErrorHandlerService } from 'src/app/providers/error-handler.service';
import { ProductUpdateDto } from '../../product/dto/product-update.dto';
import { ProductResultDto } from '../../product/dto/product-result.dto';
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

  update(product: ProductUpdateDto): Observable<any> {
    return this.http.put<any>(`${this.url}`, product).pipe(
      map(response => {
        return {sccuess: true, message: response.message }
      }),
      catchError(error => this.errorHandler.handleError(error))
    );
  }

  delete(productId: number): Observable<any> {
    debugger
    return this.http.delete<any>(`${this.url}?id=${productId}`).pipe(
      map(response => {
  
        return {sccuess: true, message: response.message }
      }),
      catchError(error => this.errorHandler.handleError(error))
    );
  }

  create(product: ProductAddDto) : Observable<any> {
    return this.http.post<any>(`${this.url}`, product).pipe(
      map(response => {
        return {sccuess: true, message: response.message }
      }),
      catchError(error => this.errorHandler.handleError(error))
    );
  }
}

