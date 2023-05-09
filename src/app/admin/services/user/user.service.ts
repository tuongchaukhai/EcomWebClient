import { Injectable } from '@angular/core';
import { IUserService } from './user.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService implements IUserService {
  private url = 'https://localhost:7209/api/user';

  constructor(private http: HttpClient) { }

  getAll(page?: number, rows?: number): Observable<any> {
    return this.http.get(`${this.url}?page=${page}&pageSize=${rows}`);
  }
  create(): Observable<any> {
    throw new Error('Method not implemented.');
  }
  edit(): Observable<any> {
    throw new Error('Method not implemented.');
  }
  delete(): Observable<any> {
    throw new Error('Method not implemented.');
  }
}
