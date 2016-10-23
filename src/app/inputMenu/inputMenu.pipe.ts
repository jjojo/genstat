import { Pipe, PipeTransform } from '@angular/core';

import { InputMenuComponent } from './inputMenu.component';

@Pipe({ name: 'laterYears' })
export class LaterYearsPipe implements PipeTransform {
  transform(years) {
    return years.filter(year => year > years.yearFrom.value);
  }
}