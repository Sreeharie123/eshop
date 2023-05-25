import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { categoryList } from 'src/app/interfaces/category';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.scss']
})
export class ProductCategoryComponent implements OnInit {

  constructor(private categoryService:CategoriesService){}

  mark(data:HTMLButtonElement){
    data.classList.add('color')
  }

  categoryList?:Observable<categoryList[]>

ngOnInit(): void {

   this.categoryList = this.categoryService.getCategories()
}

}
