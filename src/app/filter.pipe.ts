import {Pipe, PipeTransform, Injectable} from '@angular/core';


@Pipe({name: 'filter', pure: false})
@Injectable()
export class FilterArrayPipe implements PipeTransform{


  transform(valueArray: any, term: any) {
    if (term) {
      let filterKeys = Object.keys(valueArray[0]);
      return valueArray.filter((item: any) =>
        filterKeys.reduce((memo, keyName) =>
        memo && item.nombre.toLowerCase().indexOf(term.toLowerCase()) > -1, true));
    } else {
      return valueArray;
    }
  }
}


