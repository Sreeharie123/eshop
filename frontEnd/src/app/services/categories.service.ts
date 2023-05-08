import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { categoryList } from '../interfaces/login';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http:HttpClient) { }

  getCategories():Observable<string[]>{
   return this.http.get<categoryList[]>('http://localhost:4000/product/Allcategory').pipe(map(res=>res[0].categories))
  }
}
