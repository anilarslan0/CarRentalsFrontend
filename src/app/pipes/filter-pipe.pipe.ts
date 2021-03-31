import { Pipe, PipeTransform } from '@angular/core';
import { CarDetail } from '../models/carDetail';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(value: CarDetail[], filterText:string): CarDetail[] {
    filterText=filterText?filterText.toLocaleLowerCase():""
    return filterText?value.filter((c:CarDetail)=>c.brandName.toLocaleLowerCase().indexOf(filterText)!==-1 
    || c.colorName.toLocaleLowerCase().indexOf(filterText)!==-1
    || c.dailyPrice.toString().indexOf(filterText)!==-1
    || c.carName.toLocaleLowerCase().indexOf(filterText)!==-1
    ):value;    
  }



}
