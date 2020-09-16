import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import { Constantes } from '../utils/Constantes';

@Pipe({
  name: 'DateTimeFormatter'
})
export class DateTimeFormatterPipe extends DatePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return super.transform(value, Constantes.DATE_FMT);
  }

}
