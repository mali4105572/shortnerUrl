import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatsComponent } from './stats.component';
import { TopSelModule } from '../top-sel/top-sel.module';
import { TopUniqueSelModule } from '../top-unique-sel/top-unique-sel.module';
import { PastDaysModule } from '../past-days/past-days.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [StatsComponent],
  imports: [
    CommonModule,
    TopSelModule,
    TopUniqueSelModule,
    PastDaysModule,
    RouterModule.forChild([
      { path: 'stats', component: StatsComponent}
    ]),
  ],
  exports:[StatsComponent]
})
export class StatsModule { }
