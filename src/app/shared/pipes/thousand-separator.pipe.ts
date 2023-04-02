import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'thousandSeparator'
})
export class ThousandSeparatorPipe implements PipeTransform {
  transform(val: number): string {
    if (val !== undefined && val !== null) {
      const valS = val.toLocaleString('de-DE');
      return valS.replace(/\./g, ' ');
    } else {
      return '';
    }
  }
}
