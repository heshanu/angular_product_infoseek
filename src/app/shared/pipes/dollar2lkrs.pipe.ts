import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dollar2lkrs'
})
export class Dollar2lkrsPipe implements PipeTransform {

  transform(value: number,v:string):any {
    if(v=="$"){
      value/=300;
      return value;
    }else{
      return value;
    }

  }

}
