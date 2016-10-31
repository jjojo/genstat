import { Component, ViewChildren, AfterViewInit } from '@angular/core';
import { LineChartComponent } from '../lineChart/line-chart';
import { StatisticsService } from '../services/statistics.service';


@Component({
  selector: 'statistics',
  template: require('./statistics.component.html'),
  styles: [String(require('./statistics.component.styl'))]
})
export class StatisticsComponent implements AfterViewInit {
  info:Object;
  econ;
  health;
  chartChildren;

  @ViewChildren(LineChartComponent) charts: LineChartComponent;

  constructor(private statisticsService:StatisticsService){
  	this.info = this.statisticsService.subjects.subjects
    
    
  }

  ngAfterViewInit(){
  		this.chartChildren = this.charts['_results']
  		this.econ = this.charts['_results'][0]
  		this.health = this.charts['_results'][1]
  	}

  onNotify(subjectNr):void {
  	//console.log(this.charts)
  	//console.log(message)
  	//console.log(subjectNr)
	this.chartChildren[subjectNr].getData()  	

    //this.econ.getData()
    //this.health.getData()
  }

}
