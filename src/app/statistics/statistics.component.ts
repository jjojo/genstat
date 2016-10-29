import { Component, ViewChild } from '@angular/core';
import { LineChartComponent } from '../lineChart/line-chart';


@Component({
  selector: 'statistics',
  template: require('./statistics.component.html'),
  styles: [String(require('./statistics.component.styl'))]
})
export class StatisticsComponent {
  constructor(){
    console.log('In statistics constructor');
  }

  @ViewChild(LineChartComponent) chart: LineChartComponent;

  onNotify(message:string):void {
    this.chart.getData()
  }
}
