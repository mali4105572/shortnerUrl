import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DateTimeService {

  convertOADateToDate(oaDate?: number): Date | null {
    if (!oaDate) { return null; }
    const date = new Date();
    date.setTime((oaDate - 25569) * 24 * 3600 * 100);
    const utc = date.getTime() + (date.getTimezoneOffset() * 60000);
    const localDateStr = new Date(utc).toLocaleString();
    return new Date(localDateStr);
  }

  convertDateToOADate(date?: Date): number | null {
    if (!date) { return null; }
    const utcDateMS = Date.UTC(date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      date.getHours(),
      date.getMinutes(),
      date.getSeconds(),
      date.getMilliseconds()
    )
    return (utcDateMS / (24 * 3600 * 100)) + 25569;
  }
}
