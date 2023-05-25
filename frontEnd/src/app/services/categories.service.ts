import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { categoryList } from '../interfaces/category';


@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http:HttpClient) { }

  getCategories():Observable<categoryList[]>{
   return this.http.get<categoryList[]>('http://localhost:4000/categories/all')
  }
}
