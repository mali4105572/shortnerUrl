import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCartComponent } from './shopping-cart.component';
import { MatButtonModule } from '@angular/material';
import { PipesModule } from 'core';



@NgModule({
  declarations: [ShoppingCartComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    PipesModule
  ],
  exports:[ShoppingCartComponent]
})
export class ShoppingCartModule { }


