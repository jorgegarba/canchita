import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizar'
})
export class CapitalizarPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    return value + 'CAPITLIZADO';
  }

}
