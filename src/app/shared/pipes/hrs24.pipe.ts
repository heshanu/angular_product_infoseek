import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hrs24'
})
export class Hrs24Pipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
