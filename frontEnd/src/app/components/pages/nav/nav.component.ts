import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { SpinnerService } from 'src/app/services/spinner.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  constructor(public loadingService:SpinnerService){}



  trueElement:boolean=false;

  onClick(data:boolean){
    this.trueElement=!data
  }

  searchElement:boolean=false
  onSearchClick(data:boolean){
   this.searchElement=!data
  }
}
