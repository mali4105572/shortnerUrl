import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MatButtonModule, MatIconModule, MatInputModule } from '@angular/material';
import { ShoppingCartModule } from '../shopping-cart/shopping-cart.module';
import { ProductModule } from '../product/product.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    ShoppingCartModule,
    ProductModule,
    RouterModule.forChild([
      { path: 'home', component: HomeComponent}
    ]),
    
  ],
  exports:[HomeComponent]
})
export class HomeModule { }
