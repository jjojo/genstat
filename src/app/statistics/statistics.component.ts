import { Component, ViewChildren } from '@angular/core';
import { LineChartComponent } from '../lineChart/line-chart';
import { StatisticsService } from '../services/statistics.service';


@Component({
  selector: 'statistics',
  template: require('./statistics.component.html'),
  styles: [String(require('./statistics.component.styl'))]
})
export class StatisticsComponent {
  info:Object;
  constructor(private statisticsService:StatisticsService){
  	this.info = this.statisticsService.subjects.subjects
    console.log('In statistics constructor');
  }

  @ViewChildren(LineChartComponent) charts: LineChartComponent;

  onNotify(message):void {
  	console.log(this.charts)
  	let econ = this.charts._results[0]
  	let health = this.charts._results[1]
    econ.getData()
    health.getData()
  }

}
