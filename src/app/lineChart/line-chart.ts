import { Component } from '@angular/core';
import { StatisticsService } from '../services/statistics.service';
import { ChartsModule } from 'ng2-charts/ng2-charts';
//import { BaseChartDirective } from 'ng2-charts/ng2-charts';

@Component({
  selector: 'line-chart',
  template: require('./line-chart.html'),
  styles: [String(require('./lineChart.styl'))]

})
export class LineChartComponent {
  test;
  years = [];
  valuesM = [];
  valuesF = [];
  // constructor to acess service
  constructor(private statisticsService: StatisticsService) {
   
  }


  // lineChartData specifies the style and dataset for the graph
  public lineChartData:Array<any> = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A', pointRadius: 6},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'},
  ];

  public lineChartLabels:Array<String> = this.years;
  

  getData2(){
    let t = this;
      this.statisticsService.getEconData().then(function(data) {
        console.log(data)
       let years:Array<String> = [];
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
        t.years = years;
        t.lineChartData = [
            {data: valuesM, label: 'Series A', pointRadius: 6},
            {data: valuesF, label: 'Series B'}
          ]
     })

     // this.statisticsService.getEconData().then(function(data) {
     //   for (var i = 0; i < data['data'].length/2; ++i) {
     //       if(data['data'][i].key[1] === "1") {
     //         t.valuesM[i] = data['data'][i].values[0]
     //       }
     //       if(data['data'][data['data'].length/2 + i].key[1] === "2") {
     //         t.valuesF[i] = data['data'][data['data'].length/2 + i].values[0]
     //       }
     //    }
     //      // code...
     //      t.lineChartData = [
     //        {data: t.valuesM, label: 'Series A', pointRadius: 6},
     //        {data: t.valuesF, label: 'Series B'}
     //      ]

     // })

  }

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
           t.lineChartLabels[i] = data['data'][i].key[2]
        }

        t.lineChartLabels = years;
          // code...
          t.lineChartData = [
            {data: valuesM, label: 'Series A', pointRadius: 6},
            {data: valuesF, label: 'Series B'}
          ];
        

        
         //console.log(years)
         //console.log(t.lineChartLabels)
        // console.log(valuesM)
        // console.log(valuesF)
        // console.log(data)
     })
  }

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
  public lineChartLegend:boolean = true;
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
