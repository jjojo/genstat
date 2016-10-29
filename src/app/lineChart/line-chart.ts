import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { StatisticsService } from '../services/statistics.service';
import { ChartModule } from 'angular2-chartjs';
import { ChartComponent } from 'angular2-chartjs';

@Component({
  selector: 'line-chart',
  template: require('./line-chart.html'),
  styles: [String(require('./lineChart.styl'))]

})
export class LineChartComponent {
  // Configuration for chart
  type = 'line'
  options = {
    responsive: true,
    maintainAspectRatio: false
  };

  //initial data
  data = {labels: [],
    datasets: [
      {
        label: "kvinnor",
        data: [],
        backgroundColor: 'rgba(247,183,51,0.8)',
        borderColor: 'rgba(247,183,51,1)',
        pointBackgroundColor: 'rgba(0,0,0,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(252,74,26,0.8)'
      },
      {
        label: "män",
        data: [],
        backgroundColor: 'rgba(252,74,26,0.8)',
        borderColor: 'rgba(252,74,26,1)',
        pointBackgroundColor: 'rgba(0,0,0,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(252,74,26,1)'
      },
    ]
  }

  //Grants access to the core chart object don't forget to att .chart so chartComponent.chart is the object!
  @ViewChild(ChartComponent) chartComponent: ChartComponent;

  //Constructor for statisticsService
  constructor(private statisticsService: StatisticsService) {} 
  
  getData(){
    let t = this;
      this.statisticsService.getEconData().then(function(data) {
       let years = [];
       let valuesM = [];
       let valuesF = [];
       for (var i = 0; i < data['data'].length/2; ++i) {
           years[i] = data['data'][i].key[2]
           if(data['data'][i].key[1] === "1") {
             valuesM[i] = data['data'][i].values[0]
           }
           if(data['data'][data['data'].length/2 + i].key[1] === "2") {
             valuesF[i] = data['data'][data['data'].length/2 + i].values[0]
           }
        }
        console.log(data)
        t.data.labels = years
        t.data.datasets[0].data = valuesF
        t.data.datasets[1].data = valuesM
        t.chartComponent.chart.update();
     })
  }
}