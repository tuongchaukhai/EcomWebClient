import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IRoleService } from './role.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleService implements IRoleService {
  private url = `https://localhost:7209/api/role/`;

  constructor(private http: HttpClient) {}

  getAll() : Observable<any> {
    return this.http.get<any>(`${this.url}`);
  }
}
