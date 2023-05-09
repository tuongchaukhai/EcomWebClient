import { Observable } from "rxjs";
import { LoginDto } from "../dto/login.dto";
import { UserTokenInfo } from "../dto/user-token-info.dto";

export interface IAuthService {
    staffLogin(request: LoginDto): Observable<any>;

    logOut(): void;
    
    isLoggedIn(): boolean;
    
    // get token(): string | null;

    // get userToken(): any | null;



}