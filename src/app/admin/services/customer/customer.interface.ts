import { Observable } from "rxjs";

export interface ICustomerService{
    getAll() : Observable<any>;

    create(customer: any): Observable<any>;

    edit(customer: any): Observable<any>;

    delete(id: number): Observable<any>;

    
}