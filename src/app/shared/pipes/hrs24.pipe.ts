import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hrs24',
})
export class Hrs24Pipe implements PipeTransform {
  v!: number;
  v1!: string;
  transform(value: string): string {
    this.v=Number(value.substring(0,3));
    console.log(this.v);
    this.v+=12;
    console.log(this.v);
    return `${this.v}`;
  }
}
