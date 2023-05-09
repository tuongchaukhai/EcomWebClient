import { Injectable } from '@angular/core';
import { IAuthService } from './auth.interface';
import { BehaviorSubject, Observable, catchError, map, pipe } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { LoginDto } from '../dto/login.dto';
import { ErrorHandlerService } from 'src/app/providers/error-handler.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { UserTokenInfo } from '../dto/user-token-info.dto';
import jwt_decode from 'jwt-decode'; //npm install jwt-decode
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService implements IAuthService {
  private url = 'https://localhost:7209/api/Auth';
  // private userTokenSubject = new BehaviorSubject<UserTokenInfo | null>(null);
  // public userToken: Observable<UserTokenInfo | null> = this.userTokenSubject.asObservable();
  private readonly TOKEN_KEY = 'token';

  public userTokenSubject = new BehaviorSubject<any>(null);

  constructor(private http: HttpClient, private errorHandler: ErrorHandlerService, private router: Router) {
    this.getToken();
  }

  staffLogin(request: LoginDto): Observable<any> {
    return this.http.post<any>(`${this.url}`, request).pipe(
      map(response => {
        this.setToken(response.data);
        return { success: true, message: response.message };
      }),
      catchError(error => this.errorHandler.handleError(error))
    );
  }

  isLoggedIn(): boolean {
    const userToken = this.userTokenSubject.getValue();
    //isLogged check
    if (!userToken) {
      return false;
    }
    //isExpired check
    const currentTimeUTC = Date.now() + new Date().getTimezoneOffset() * 60000;
    if (userToken.exp * 1000 < currentTimeUTC) {
      return false;
    }
    return true;
  }

  private getToken(): void {
    const token = localStorage.getItem(this.TOKEN_KEY);
    if (token) {
      this.userTokenSubject.next(this.decodeToken(token));
    }
  }

  private setToken(token: string): void {
    if (!token) {
      localStorage.removeItem(this.TOKEN_KEY);
      return;
    }
    else {
      localStorage.setItem(this.TOKEN_KEY, token);
      this.userTokenSubject.next(this.decodeToken(token));
    }
  }

  private decodeToken(token: string): any {
    return jwt_decode(token);
  }

  logOut(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    this.userTokenSubject.next(null);
    this.router.navigate(['/stafflogin']);
  }

  // get userToken(): Observable<any | null> {
  //   return this.userTokenSubject.asObservable();
  // }

  // isLogged(): boolean {
  //   const userToken = this.userToken;
  //   //isLogged check
  //   if (!userToken) {
  //     return false;
  //   }
  //   //isExpired check
  //   const currentTimeUTC = Date.now() + new Date().getTimezoneOffset() * 60000;
  //   if (userToken.exp * 1000 < currentTimeUTC) {
  //     return false;
  //   }
  //   return true;
  // }

  // get token(): string | null {
  //   return localStorage.getItem(this.TOKEN_KEY);
  // }

  // get userToken(): any {
  //   const token = this.token;
  //   if (token) {
  //     return jwt_decode(token);
  //   }
  //   return null;
  // }

  // logOut(): void {
  //   localStorage.removeItem('token');
  // }

  // isLogged(): boolean {
  //   const userToken = this.userToken;
  //   //isLogged check
  //   if (!userToken) {
  //     return false;
  //   }
  //   //isExpired check
  //   const currentTimeUTC = Date.now() + new Date().getTimezoneOffset() * 60000;
  //   if (userToken.exp * 1000 < currentTimeUTC) {
  //     return false;
  //   }
  //   return true;
  // }

  // staffLogin(request: LoginDto): Observable<any> {
  //   return this.http.post<any>(`${this.url}`, request).pipe(
  //     map(response => {
  //       this.setToken(response.data)
  //       return { success: true, message: response.message };
  //     }),
  //     catchError(error => this.errorHandler.handleError(error))
  //   );
  // }

  // setToken(token: string): void {
  //   if (!token) {
  //     localStorage.removeItem('token');
  //     return;
  //   }
  //   else {
  //     localStorage.setItem('token', token);
  //   }
  // }

}

