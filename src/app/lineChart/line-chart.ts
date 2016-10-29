import { Component, OnInit, ViewChild } from '@angular/core';
import { StatisticsService } from '../services/statistics.service';
//import { ChartModule } from 'angular2-chartjs';
//import { ChartComponent } from 'angular2-chartjs/src';

@Component({
  selector: 'line-chart',
  template: require('./line-chart.html'),
  styles: [String(require('./lineChart.styl'))]

})
export class LineChartComponent implements OnInit{
  // constructor to acess service
  constructor(private statisticsService: StatisticsService) {
   this.statisticsService.getData().then(data => this.data = data)
  }  
  
  //@ViewChild(ChartComponent) chartComponent: ChartComponent;
  data = {labels: [],
    datasets: [
      {
        label: "",
        data: [],
        backgroundColor: 'rgba(247,183,51,0.8)',
        borderColor: 'rgba(247,183,51,1)',
        pointBackgroundColor: 'rgba(0,0,0,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(252,74,26,0.8)'
      },
      {
        label: "",
        data: [],
        backgroundColor: 'rgba(252,74,26,0.8)',
        borderColor: 'rgba(252,74,26,1)',
        pointBackgroundColor: 'rgba(0,0,0,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(252,74,26,1)'
      },
    ]}
  options = {
    responsive: true,
    maintainAspectRatio: false
  };

  ngOnInit():void{
    
  }

  type = 'line';
  

  // type = 'line';
  // data = {
  //   labels: [],
  //   datasets: [
  //     {
  //       label: "",
  //       data: [],
  //       backgroundColor: 'rgba(247,183,51,0.8)',
  //       borderColor: 'rgba(247,183,51,1)',
  //       pointBackgroundColor: 'rgba(0,0,0,1)',
  //       pointBorderColor: '#fff',
  //       pointHoverBackgroundColor: '#fff',
  //       pointHoverBorderColor: 'rgba(252,74,26,0.8)'
  //     },
  //     {
  //       label: "",
  //       data: [],
  //       backgroundColor: 'rgba(252,74,26,0.8)',
  //       borderColor: 'rgba(252,74,26,1)',
  //       pointBackgroundColor: 'rgba(0,0,0,1)',
  //       pointBorderColor: '#fff',
  //       pointHoverBackgroundColor: '#fff',
  //       pointHoverBorderColor: 'rgba(252,74,26,1)'
  //     },
  //   ]
  // };
  // options = {
  //   responsive: true,
  //   maintainAspectRatio: false
  // };

  public getData(){
    let t = this;
      this.statisticsService.getEconData().then(function(data) {
        console.log(data)
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
        
        t.data = {
          labels: years,
          datasets: [
            {
              label: "Kvinnor",
              data: valuesF,
              backgroundColor: 'rgba(252,74,26,0.8)',
              borderColor: 'rgba(252,74,26,1)',
              pointBackgroundColor: 'rgba(0,0,0,1)',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: 'rgba(252,74,26,1)'
            },
            {
              label: "Män",
              data: valuesM,
              backgroundColor: 'rgba(247,183,51,0.8)',
              borderColor: 'rgba(247,183,51,1)',
              pointBackgroundColor: 'rgba(0,0,0,1)',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: 'rgba(252,74,26,0.8)'
            },
          ]
        };
     })
  }

  // getData2(){
  //   let t = this;
  //     this.statisticsService.getEconData().then(function(data) {
  //       console.log(data)
  //      let years:Array<String> = [];
  //      let valuesM = [];
  //      let valuesF = [];
  //      for (var i = 0; i < data['data'].length/2; ++i) {
  //          years[i] = data['data'][i].key[2]
  //          if(data['data'][i].key[1] === "1") {
  //            valuesM[i] = data['data'][i].values[0]
  //          }
  //          if(data['data'][data['data'].length/2 + i].key[1] === "2") {
  //            valuesF[i] = data['data'][data['data'].length/2 + i].values[0]
  //          }
  //       }
  //       t.years = years;
  //       t.lineChartData = [
  //           {data: valuesM, label: 'Series A', pointRadius: 6},
  //           {data: valuesF, label: 'Series B'}
  //         ]
  //    })
  // }
     
  // public lineChartColors:Array<any> = [
  //   { // dark orange
  //     backgroundColor: 'rgba(252,74,26,0.8)',
  //     borderColor: 'rgba(252,74,26,1)',
  //     pointBackgroundColor: 'rgba(247,183,51,1)',
  //     pointBorderColor: '#fff',
  //     pointHoverBackgroundColor: '#fff',
  //     pointHoverBorderColor: 'rgba(252,74,26,0.8)'
  //   },
  //   { // lighter orange
  //     backgroundColor: 'rgba(252,74,26,0.65)',
  //     borderColor: 'rgba(252,74,26,1)',
  //     pointBackgroundColor: 'rgba(247,183,51,1)',
  //     pointBorderColor: '#fff',
  //     pointHoverBackgroundColor: '#fff',
  //     pointHoverBorderColor: 'rgba(252,74,26,1)'
  //   },
  // ];
}
