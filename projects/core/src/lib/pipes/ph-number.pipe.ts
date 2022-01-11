import { Pipe, PipeTransform } from '@angular/core';
import { stringIsNumber } from '../functions/string-is-number';
import { DecimalPipe } from '@angular/common';

@Pipe({  name: 'phNumber'})
export class PhNumberPipe  extends DecimalPipe implements PipeTransform {

  transform(value: string): string {
    if (stringIsNumber(value)) { return super.transform(value); }
    return value || '';
  }
}

 
