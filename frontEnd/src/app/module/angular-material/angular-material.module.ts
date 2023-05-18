import { NgModule } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatBadgeModule} from '@angular/material/badge';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from "@angular/material/progress-bar"
@NgModule({

  exports: [
 MatSlideToggleModule,
 MatBadgeModule,
 MatIconModule,
 MatProgressSpinnerModule,
 MatProgressBarModule

  ]
})
export class AngularMaterialModule { }
