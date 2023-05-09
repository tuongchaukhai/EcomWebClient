import { Injectable } from '@angular/core';
import { IAuthService } from './auth.interface';
import { BehaviorSubject, Observable, catchError, map, pipe } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { LoginDto } from '../dto/login.dto';
import { ErrorHandlerService } from 'src/app/providers/error-handler.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { UserTokenInfo } from '../dto/user-token-info.dto';
import jwt_decode from 'jwt-decode'; //npm install jwt-decode


@Injectable({
  providedIn: 'root'
})
export class AuthService implements IAuthService {
  private url = 'https://localhost:7209/api/Auth';
  // private userTokenSubject = new BehaviorSubject<UserTokenInfo | null>(null);
  // public userToken: Observable<UserTokenInfo | null> = this.userTokenSubject.asObservable();
  private readonly TOKEN_KEY = 'token';

  constructor(private http: HttpClient, private errorHandler: ErrorHandlerService) { }

  get token(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  get userToken(): any {
    const token = this.token;
    if (token) {
      return jwt_decode(token);
    }
    return null;
  }

  logOut(): void {
    localStorage.removeItem('token');
  }


  // isExpired(): Observable<boolean> {
  //   return this.userToken.pipe(
  //     map(token => {
  //       const currentTimeUTC = Date.now() + new Date().getTimezoneOffset() * 60000;
  //       if (!token || token?.exp * 1000 < currentTimeUTC) {
  //         return true;
  //       }
  //       return false;
  //     })
  //   );
  // }


  isExpired(): boolean {
    const userToken = this.userToken;
    if (!userToken) {
      return true;
    }
    const currentTimeUTC = Date.now() + new Date().getTimezoneOffset() * 60000;
    if (userToken.exp * 1000 < currentTimeUTC) {
      return true;
    }
    return false;
  }

  // isLoggedIn() : Observable<boolean> {
  //   return 
  // }

  staffLogin(request: LoginDto): Observable<any> {
    return this.http.post<any>(`${this.url}`, request).pipe(
      map(response => {
        this.setToken(response.data)
        return { success: true, message: response.message };
      }),
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
    }
  }

}

