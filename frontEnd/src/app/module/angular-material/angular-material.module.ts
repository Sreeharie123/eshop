import { NgModule } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatBadgeModule} from '@angular/material/badge';
import {MatIconModule} from '@angular/material/icon';
@NgModule({

  exports: [
 MatSlideToggleModule,
 MatBadgeModule,
 MatIconModule
  ]
})
export class AngularMaterialModule { }
