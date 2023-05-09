import { Observable } from "rxjs";

export interface IRoleService {
    getAll(): Observable<any>;
    
}