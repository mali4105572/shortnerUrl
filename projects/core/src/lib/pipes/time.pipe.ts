import { Pipe, PipeTransform } from '@angular/core';
//import moment_ from 'moment'
import { dateTimeFormats, dateFormats, timeFormats } from 'types';
import { DatePipe } from '@angular/common';
import { stringIsDate } from '../functions/string-is-date';
// const moment = moment_

@Pipe({ name: 'myTime' })
export class MyTimePipe extends DatePipe implements PipeTransform {
  regexFormat = [
    /[0-9]{4}[-/][0-9]{2}[-/][0-9]{2}/,
    /[0-9]{2}[-/][0-9]{2}[-/][0-9]{4}/
  ]
  dateIsValidByMoment(value): boolean {
    return null// moment(value).isValid();
  }

  dateByMoment(value, format): string {
    return null;//moment(value).format(format);
  }
  transform(value: any, format: dateFormats | dateTimeFormats | timeFormats): any {
    if (!value) { return value; }

    if (this.dateIsValidByMoment(value)) { return this.dateByMoment(value, format) }

    if (this.regexFormat.some(reg => reg.test(value))) {
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
