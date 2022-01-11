import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopSelComponent } from './top-sel.component';



@NgModule({
  declarations: [TopSelComponent],
  imports: [
    CommonModule
  ],
  exports:[TopSelComponent]
})
export class TopSelModule { }
