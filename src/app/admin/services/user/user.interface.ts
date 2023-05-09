import { Observable } from "rxjs";

export interface IUserService {
    getAll() : Observable<any>;

    create(): Observable<any>;

    edit(): Observable<any>;

    delete(): Observable<any>;

    

}