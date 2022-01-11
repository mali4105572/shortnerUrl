import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
import { dateFormats, timeFormats, dateTimeFormats } from 'types';
import { stringIsDate } from '../functions/string-is-date';

import * as moment_ from 'moment';
const moment = moment_;

@Pipe({ name: 'myDate' })
export class MyDatePipe extends DatePipe implements PipeTransform {
  regexFormats = [
    /[0-9]{4}[-/][0-9]{2}[-/][0-9]{2}/,
    /[0-9]{2}[-/][0-9]{2}[-/][0-9]{4}/
  ]

  dateIsValidByMoment(value): boolean {
    return moment(value).isValid();
  }

  dateByMoment(value, format): string {
    return moment(value).format(format);
  }

  transform(value: any, format: dateFormats | dateTimeFormats | timeFormats): any {
    if (!value) { return value; }

    if (this.dateIsValidByMoment(value)) {
      return this.dateByMoment(value, format);
    }

    if (this.regexFormats.some(re => re.test(value))) {
      return super.transform(value, format);
    }

    if (stringIsDate(value)) {
      const result = super.transform(super.transform(value, format), format);
      if ((value as string).indexOf(result) >= 0) {
        return result;
      }
      return super.transform(value, format);
    }
    return value;
  }


}
