import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Admin } from "./admin.models";
import { Customer } from "./customer.model";



@Injectable()
export class AdminService{

    baseUrl:string ='http://localhost:8080/api/admin';

    constructor(public http:HttpClient){

    }

createAdmin(admin:Admin): Observable<Admin>{
    return this.http.post<Admin>(this.baseUrl,admin)
}


updateAdmin(admin:Admin):Observable<Admin>{
return this.http.put<Admin>(this.baseUrl,admin)

}

getAdminById(id:number): Observable<Admin>{
    return this.http.delete<Admin>(`${this.baseUrl}/${id}`)
}

getAllAdmin():Observable<Admin[]>{

    return this.http.get<Admin[]>(`${this.baseUrl}`)
}

deleteAdminById(id: number): Observable<any> {
    return this.http.delete<Admin>(`${this.baseUrl}/${id}`)
}

deleteAllAdmin(): Observable<Admin[]> {
    return this.http.delete<Admin[]>(`${this.baseUrl}`)
}


// getAllCustomers(): Observable<Customer[]> {
//     return this.http.get<Customer[]>(`${this.baseUrl}`)

// }

}
