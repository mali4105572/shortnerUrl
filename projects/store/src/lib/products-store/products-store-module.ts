import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects';
import { ProductsReducer } from './products/product-reducer';
import { ProductsEffects } from './products/product-effects';

@NgModule({
  imports: [
    StoreModule.forFeature('products', ProductsReducer),

    EffectsModule.forFeature([ProductsEffects]),

  ],
  exports: [StoreModule, EffectsModule]
})
export class ProductsStoreModule { }
