import { Component } from '@angular/core';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.scss']
})
export class ProductCategoryComponent {

  mark(data:HTMLButtonElement){
    data.classList.add('color')
  }

}
