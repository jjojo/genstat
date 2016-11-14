import { Component, OnInit, ViewChild, Output, EventEmitter, Input } from '@angular/core';
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
  @Input() subject: Object;
  type;
  options;
  id;
  chartFontSize;
  ngOnInit(){

    //console.log(this.subject['subject'])
    this.id = this.subject['subject'] + "Chart"
    if(window.outerWidth < 1050){
      this.chartFontSize = 20
    }else{
      this.chartFontSize = 14
    }
    /*
      Options should be defined in each subjects service
      if to start from zero, etc
    */


    //Quiq-fix för att prova bar-chart
    if(this.subject['subject'] === "health" || this.subject['subject'] === "drugs") {
      this.type = 'bar'
      this.options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            yAxes: [{
                ticks: {
                    max: 100,
                    min: 0,
                    fontSize: this.chartFontSize
                },
                scaleLabel: {
                  display: true,
                  fontSize: this.chartFontSize
                }
            }],
            xAxes: [{
                ticks:{
                  fontSize: this.chartFontSize
                },
                scaleLabel: {
                  display: true,
                  fontSize: this.chartFontSize
                }
            }]
        }
      }
    }else{
      this.type = 'line'

      this.options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: false,
                    fontSize: this.chartFontSize
                },
                scaleLabel: {
                  display: true,
                  fontSize: this.chartFontSize
                }
            }],
            xAxes: [{
                ticks:{
                  fontSize: this.chartFontSize
                },
                scaleLabel: {
                  display: true,
                  fontSize: this.chartFontSize
                }
            }]
        }
      }
  }

}

  //initial data for charts
  data = {labels: [],
    datasets: [
      {
        label: "kvinnor",
        data: [],
        backgroundColor: 'rgba(247,183,51,0.8)',
        borderColor: 'rgba(247,183,51,1)',
        pointBackgroundColor: '#4c4c4c',
        pointBorderColor: '#f2f2f2',
        pointRadius: 4,
        pointBorderWidth: 2,
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(252,74,26,0.8)'
      },
      {
        label: "män",
        data: [],
        backgroundColor: 'rgba(252,74,26,0.8)',
        borderColor: 'rgba(252,74,26,1)',
        pointBackgroundColor: '#4c4c4c',
        pointBorderColor: '#f2f2f2',
        pointRadius: 4,
        pointBorderWidth: 2,
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(252,74,26,1)'
      },
    ]
  }


  /*
      Grants access to the core chart object don't forget
      to add .chart so chartComponent.chart is the object!
  */
  @ViewChild(ChartComponent) chartComponent: ChartComponent;

  /*
      Constructor for statisticsService
  */
  constructor(private statisticsService: StatisticsService) {
    //this.id = this.subject
    //console.log(this.id)
  }

  /*
      Gets data from statistics service. Function tells
      which subject it is an instance of and recieves
      relevant data for the chart.
  */
  getData(){
    let t = this;
    this.statisticsService.getData(this.subject['subject']).then(function(data) {
      //console.log(data)
      // labels, displayed in the x-axis of chart
      t.data.labels = data['labels']
      // first dataset is female data, results in graphics 'in-front'
      t.data.datasets[0].data = data['femaleData']
      // second dataset is male data, results in graphics 'behind'
      t.data.datasets[1].data = data['maleData']
      // sets axes labels
      t.chartComponent.chart.options.scales.yAxes[0].scaleLabel.labelString = data['yLabel']
      t.chartComponent.chart.options.scales.xAxes[0].scaleLabel.labelString = data['xLabel']
      // updates and redraws chart
      t.chartComponent.chart.update();

   })
  }
}
