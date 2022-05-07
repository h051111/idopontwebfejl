import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formattime'
})
export class FormattimePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): any {
    return value.replace(',', '').replace('AM', '');
  }

}
