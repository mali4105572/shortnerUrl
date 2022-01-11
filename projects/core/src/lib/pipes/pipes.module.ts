import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { IsDatePipe } from './is-date.pipe';
import { PhNumberPipe } from './ph-number.pipe';
import { TimespanPipe } from './timespan.pipe';
import { IsArrayPipe } from './is-array.pipe';
import { TimeSpanPipe } from './time-span.pipe';
import { EnumToStringPipe } from './enum-to-string.pipe';
import { EnumLabelValueListPipe } from './enum-label-value-list.pipe';
import { IsTextPipe } from './is-text.pipe';
import { IsObjectPipe } from './is-object.pipe';
import { MyDatePipe } from './my-date.pipe';
import { MyDateTimePipe } from './my-date-time.pipe';
import { MyTimePipe } from './time.pipe';
import { DolarPipe } from './dolar.pipe';

@NgModule({
  declarations: [
    IsDatePipe,
    PhNumberPipe,
    MyDatePipe,
    TimespanPipe,
    MyDateTimePipe,
    MyTimePipe,
    IsArrayPipe,
    TimeSpanPipe,
    EnumToStringPipe,
    EnumLabelValueListPipe,
    IsTextPipe,
    IsObjectPipe,
    DolarPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    IsDatePipe,
    PhNumberPipe,
    MyDatePipe,
    TimespanPipe,
    MyDateTimePipe,
    MyTimePipe,
    IsArrayPipe,
    TimeSpanPipe,
    EnumToStringPipe,
    EnumLabelValueListPipe,
    IsTextPipe,
    IsObjectPipe,
    DolarPipe
  ],
})
export class PipesModule { }
