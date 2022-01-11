import { Pipe, PipeTransform } from '@angular/core';
import { timeFormats } from 'types';

@Pipe({ name: 'timeSpan' })
export class TimeSpanPipe implements PipeTransform {

  transform(value: any, format?: timeFormats): any {
    const numVal = parseInt(value, 10);
    if (!numVal && numVal !== 0) { return value; }
    const seconds = Math.floor((numVal / 1000) % 60);
    const minutes = Math.floor((numVal / (1000 * 60)) % 60);
    const hours = Math.floor((numVal / (1000 * 60 * 60)));

    const hoursText = hours < 10 ? '0' + hours : hours;
    const minutesText = minutes < 10 ? '0' + minutes : minutes;
    const secondsText = seconds < 10 ? '0' + seconds : seconds;

    if (format === timeFormats.HHmm) { return `${hoursText}:${minutesText}` }
    else { return `${hoursText}:${minutesText}:${secondsText}` }
  }
}
