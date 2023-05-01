import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductDto } from '../../product/dto/product.dto';
import { Observable, catchError } from 'rxjs';
import { ErrorHandlerService } from 'src/app/providers/error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient, private errorHandler: ErrorHandlerService) { }

  private url = 'https://localhost:7209/api/product';

  getAll(): Observable<any> {
    debugger
    return this.http.get<any>(`${this.url}`).pipe(
      catchError(error => this.errorHandler.handleError(error))
    );
  }

}
