import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'spacePipe'
})
export class SpacePipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    value = value.replace('  ', ' ');
    if (value) {
      let w = '';
      w = value.trim();
      return w;
    }
    return value;
  }

}
