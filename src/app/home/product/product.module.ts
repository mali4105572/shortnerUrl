import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material';
import { ProductComponent } from './product.component';
import { PipesModule } from 'core';



@NgModule({
  declarations: [ProductComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    PipesModule
  ],
  exports:[ProductComponent]
})
export class ProductModule { }
