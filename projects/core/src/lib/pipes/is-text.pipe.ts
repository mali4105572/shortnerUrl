import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isText'
})
export class IsTextPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return typeof value !== 'object' && !Array.isArray(value);
  }

}
