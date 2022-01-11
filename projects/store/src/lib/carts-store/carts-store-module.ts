import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects';
import { CartsEffects } from './carts/cart-effects';
import { CartsReducer } from './carts/cart-reducer';

@NgModule({
  imports: [
    StoreModule.forFeature('carts', CartsReducer),

    EffectsModule.forFeature([CartsEffects]),

  ],
  exports: [StoreModule, EffectsModule]
})
export class CartsStoreModule { }
