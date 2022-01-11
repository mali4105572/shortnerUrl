import { Pipe, PipeTransform } from '@angular/core';
import { enumValueToString } from '../functions/enum-value-to-string';

@Pipe({ name: 'enumToString' })
export class EnumToStringPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return enumValueToString(args[0], value);
  }

}
