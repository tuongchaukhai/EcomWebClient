import { Observable } from "rxjs";
import { UserAddDto } from "../../user/dto/user-add.dto";

export interface IUserService {
    getAll() : Observable<any>;

    create(userDto: UserAddDto): Observable<any>;

    edit(): Observable<any>;

    delete(id: number): Observable<any>;

    

}