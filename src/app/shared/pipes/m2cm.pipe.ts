import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'm2cm'
})
export class M2cmPipe implements PipeTransform {

  transform(value:number,v:string ): string {

    if(v=="cm"){
        value/=100;
        return `${value} ${v}`;
    }else{
        return `${value} ${v}`;
    }

  }

}
