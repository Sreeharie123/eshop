import { NgModule } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatBadgeModule} from '@angular/material/badge';
@NgModule({

  exports: [
 MatSlideToggleModule,
 MatBadgeModule
  ]
})
export class AngularMaterialModule { }
