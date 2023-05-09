import { Injectable } from '@angular/core';
import { IAuthService } from './auth.interface';
import { BehaviorSubject, Observable, catchError, map, pipe } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { LoginDto } from '../dto/login.dto';
import { ErrorHandlerService } from 'src/app/providers/error-handler.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { UserTokenInfo } from '../dto/user-token-info.dto';


@Injectable({
  providedIn: 'root'
})
export class AuthService implements IAuthService {
  private url = 'http://localhost:7209/api/users';
  private userTokenSubject = new BehaviorSubject<UserTokenInfo | null>(null);
  public userToken: Observable<UserTokenInfo | null> = this.userTokenSubject.asObservable();

  constructor(private http: HttpClient, private errorHandler: ErrorHandlerService) { }
  logOut(): void {
    throw new Error('Method not implemented.');
  }
  getToken(): string | null {
    const token = localStorage.getItem('token');
    if (!token) {
      return null;
    } else {
      return token;
    }
  }

  isExpired(): Observable<boolean> {
    return this.userToken.pipe(
      map(token => {
        const currentTimeUTC = Date.now() + new Date().getTimezoneOffset() * 60000;
        if (!token || token?.exp * 1000 < currentTimeUTC) {
          return true;
        }
        return false;
      })
    );
  }

  staffLogin(request: LoginDto): Observable<any> {
    return this.http.post<any>(`${this.url}`, request).pipe(
      map(response => this.setToken(response.data.token)),
      catchError(error => this.errorHandler.handleError(error))
    );
  }

  setToken(token: string): void {
    if (!token) {
      localStorage.removeItem('token');
      return;
    }
    else {
      localStorage.setItem('token', token);
      const helper = new JwtHelperService();
      const decoded = helper.decodeToken(token)
      const userTokenInfo: UserTokenInfo = {
        email: decoded.email,
        role: decoded.role,
        exp: decoded.exp,
      };
      this.userTokenSubject.next(userTokenInfo);
    }
  }





}
