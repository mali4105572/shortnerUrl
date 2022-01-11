import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'enumLabelValueList'
})
export class EnumLabelValueListPipe implements PipeTransform {

  transform(enumVals: any, args?: any): any {
    return null;// enumToSelectItems(enumVals);
  }

}
