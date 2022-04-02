import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time',
})
export class TimePipe implements PipeTransform {
  v!: number;
  v1!: string;
  transform(value: string): string {
    this.v1 = value.substring(1, 3);
    this.v = Number(this.v1);
    this.v += 12;
    return `${this.v}`;
  }
}
