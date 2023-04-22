import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  trueElement:boolean=false;

  onClick(data:boolean){
    this.trueElement=!data
  }

}
