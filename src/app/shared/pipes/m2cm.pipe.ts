import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'm2cm'
})
export class M2cmPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
