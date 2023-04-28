import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http:HttpClient) { }

getLogin(email:string,password:string){

return this.http.post('http://localhost:5000/user/login',
{
  email,
  password
}
)
}


}
