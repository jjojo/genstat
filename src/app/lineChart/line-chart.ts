import { Component } from '@angular/core';

// webpack html imports
let template = require('./line-chart.html');

@Component({
  selector: 'line-chart',
  template: require('./line-chart.html'),
  styles: [String(require('./lineChart.styl'))]

})
export class LineChartComponent {
  // lineChart

  // lineChartData specifies the style and dataset for the graph
  public lineChartData:Array<any> = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A', pointRadius: 6},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];

  public lineChartLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions:any = {
    animation: false,
    responsive: true
  };
  public lineChartColors:Array<any> = [
    { // dark orange
      backgroundColor: 'rgba(252,74,26,0.8)',
      borderColor: 'rgba(252,74,26,1)',
      pointBackgroundColor: 'rgba(247,183,51,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(252,74,26,0.8)'
    },
    { // lighter orange
      backgroundColor: 'rgba(252,74,26,0.65)',
      borderColor: 'rgba(252,74,26,1)',
      pointBackgroundColor: 'rgba(247,183,51,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(252,74,26,1)'
    },
  ];
  public lineChart:boolean = true;
  public lineChartType:string = 'line';

  // public randomize():void {
  //   let _lineChartData:Array<any> = new Array(this.lineChartData.length);
  //   for (let i = 0; i < this.lineChartData.length; i++) {
  //     _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
  //     for (let j = 0; j < this.lineChartData[i].data.length; j++) {
  //       _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
  //     }
  //   }
  //   this.lineChartData = _lineChartData;
  // }

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }
}
