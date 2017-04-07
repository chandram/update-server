import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filter'
})

/** Set your target to ES2017 (by writing --target ES2017 or setting "target": "es2017"
 * in your tsconfig file) to let TypeScript know you're running on an ES2017
 * runtime and thus have access to ES2017 APIs like Object.values
 * bad hack to use <any>Object; use
 */
export class FilterPipe implements PipeTransform {
  transform(items: any[], value: any) {
    console.log(' in pipe filter ');
    if (typeof value === 'undefined') {
      return items;
    }
    return items.filter(it => {
       return(<any>Object).values(it).indexOf(value) > -1;
    });

    // throw new Error('Method not implemented.');
    // return it['hostname'].indexOf(value) > -1;
  }
};
