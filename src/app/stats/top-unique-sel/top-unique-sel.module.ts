import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopUniqueSelComponent } from './top-unique-sel.component';



@NgModule({
  declarations: [TopUniqueSelComponent],
  imports: [
    CommonModule
  ],
  exports:[TopUniqueSelComponent]
})
export class TopUniqueSelModule { }
