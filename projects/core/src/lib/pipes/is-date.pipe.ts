import { Pipe, PipeTransform, ModuleWithComponentFactories } from '@angular/core';
import { dateTimeFormats, dateFormats, timeFormats } from 'types';
import mom from 'moment';
const moment = mom;

@Pipe({ name: 'isDate' })
export class IsDatePipe implements PipeTransform {

  transform(value: any, args?: any): any {

    // if (!isNaN(+value)) { return null; }
    const dateTimePatterns: dateTimeFormats[] = Object.entries(dateTimeFormats).map(([key, val]) => val) || [];
    const datePatterns = Object.entries(dateFormats).map(([key, val]) => val) || [];
    const timePatterns = Object.entries(timeFormats).map(([key, val]) => val) || [];

    // const patterns = [...dateTimePatterns, ...datePatterns, ...timePatterns, moment.ISO_8601];

    // for (const pattern of patterns) {
    //   const m = value && /UTC/i.test(value) ? moment(new Date(value), pattern, true) : moment(value, pattern, true);
    //   if (m.isValid()) {
    //     const date = m.toDate();
    //     return date.getFullYear() > 1970 ? date : null;
    //   }
    // }
    return null;
  }


}
