import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filterBy'
})

export class FilterByPipe implements PipeTransform {
  transform(items: any[], fields: string, value: any) {
    console.log(' in pipe filter ');
    if (typeof value === 'undefined') {
      return items;
    }
    const fieldArr = fields.split(',');
    value = value.toLowerCase();
    return items.filter(it => {
      return this.isExist(it, fieldArr, value);
    });
  }

  isExist (obj: object, fields: any[], value: string) {
    let i = 0;
    for (i; i < fields.length; i++) {
      const keyVal = obj[fields[i]];
      if (keyVal && keyVal.toLowerCase().indexOf(value) > -1) {
        return true;
      }
    }
  }
};
