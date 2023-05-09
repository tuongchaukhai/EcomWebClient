import { Injectable } from '@angular/core';
import { IUserService } from './user.interface';
import { Observable, catchError, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UserAddDto } from '../../user/dto/user-add.dto';
import { ErrorHandlerService } from 'src/app/providers/error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class UserService implements IUserService {
  private url = 'https://localhost:7209/api/user';

  constructor(private http: HttpClient, private errorHandler: ErrorHandlerService) { }

  getAll(page?: number, rows?: number): Observable<any> {
    return this.http.get<any>(`${this.url}?page=${page}&pageSize=${rows}`);
  }
  create(userDto: UserAddDto): Observable<any> {
    return this.http.post<any>(`${this.url}`, userDto).pipe(
      map(response => {
        return { success: true, message: response.message }
      }),
      catchError(error => this.errorHandler.handleError(error))
    );
  }
  edit(): Observable<any> {
    throw new Error('Method not implemented.');
  }
  delete(): Observable<any> {
    throw new Error('Method not implemented.');
  }
}
