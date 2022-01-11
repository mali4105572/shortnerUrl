import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PastDaysComponent } from './past-days.component';
import { PipesModule } from 'core';



@NgModule({
  declarations: [PastDaysComponent],
  imports: [
    CommonModule,
    PipesModule
  ],
  exports:[PastDaysComponent]
})
export class PastDaysModule { }
