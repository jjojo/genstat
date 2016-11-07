import { Component, ViewChildren, AfterViewInit } from '@angular/core';
import { LineChartComponent } from '../lineChart/line-chart';
import { StatisticsService } from '../services/statistics.service';
import {PageScrollConfig} from 'ng2-page-scroll';


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
    
    PageScrollConfig.defaultScrollOffset = 50;
        PageScrollConfig.defaultEasingLogic = {
            ease: (t: number, b: number, c: number, d: number): number => {
                // easeInOutExpo easing
                if (t === 0) return b;
                if (t === d) return b + c;
                if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
                return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
            }
        }    
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
