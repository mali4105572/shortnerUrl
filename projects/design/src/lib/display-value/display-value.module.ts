import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayValueComponent } from './display-value.component';
import { PipesModule } from 'core';
// import { PhIconModule } from '../controls/ph-icon/ph-icon.module';

@NgModule({
  declarations: [DisplayValueComponent],
  imports: [
    CommonModule,
    PipesModule,
    // PhIconModule
  ],
  exports: [DisplayValueComponent]
})
export class DisplayValueModule { }
