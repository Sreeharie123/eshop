import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Login, register, registerData } from '../interfaces/login';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http:HttpClient) { }

  baseUrl:string="http://localhost:4000"

getLogin(email:string,password:string):Observable<Login>{
  const body = {
    email: email,
    password: password,
  };
return this.http.post<Login>(`${this.baseUrl}/auth/login`,body)
}

getRegister(data:registerData):Observable<register>{
  const body={
    firstName:data.firstName,
    lastName:data.lastName,
    email:data.email,
    password:data.password
  }

 return this.http.post<register>(`${this.baseUrl}/auth/register`,body)
}

}
