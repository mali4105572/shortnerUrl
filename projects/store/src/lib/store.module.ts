import { NgModule } from '@angular/core';
import { StoreComponent } from './store.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [StoreComponent],
  imports: [
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    }),
    EffectsModule.forRoot([]),
  ],
  exports: [StoreModule, EffectsModule, StoreComponent]
})
export class MainStoreModule { }
