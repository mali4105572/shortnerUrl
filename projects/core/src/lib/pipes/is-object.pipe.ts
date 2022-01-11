import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isObject'
})
export class IsObjectPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return typeof value === 'object' && !Array.isArray(value);
  }

}
