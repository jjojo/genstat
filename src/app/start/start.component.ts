import { Component } from '@angular/core';
import { StatisticsService } from '../services/statistics.service';


@Component({
  selector: 'start',
  template: require('./start.component.html'),
  styles: [String(require('./start.component.styl'))]
})
export class StartComponent {
	info;
  constructor(private statisticsService: StatisticsService){
  	this.info = statisticsService.subjects.subjects
   }
}
