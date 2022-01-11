import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects';
import { SalesReducer } from './sales/sale-reducer';
import { SalesEffects } from './sales/sale-effects';

@NgModule({
  imports: [
    StoreModule.forFeature('sales', SalesReducer),

    EffectsModule.forFeature([SalesEffects]),

  ],
  exports: [StoreModule, EffectsModule]
})
export class SalesStoreModule { }
