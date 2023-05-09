import { Observable } from "rxjs";
import { LoginDto } from "../dto/login.dto";

export interface IAuthService {
    staffLogin(request: LoginDto): Observable<any>;

    logOut(): void;

    setToken(token: string): void;
    
    getToken(): string | null;

    isExpired(): Observable<boolean>;


}