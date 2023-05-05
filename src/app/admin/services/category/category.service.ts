import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { ErrorHandlerService } from 'src/app/providers/error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient, private errorHandler: ErrorHandlerService) { }

  private url = 'https://localhost:7209/api/category';

  getAll(): Observable<any> {
    return this.http.get<any>(`${this.url}`).pipe(
      catchError(error => this.errorHandler.handleError(error))
    );
  }
}
