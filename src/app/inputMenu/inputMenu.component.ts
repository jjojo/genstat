import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StatisticsService } from '../services/statistics.service';
import { LineChartComponent } from '../lineChart/line-chart'




@Component({
  selector: 'input-menu',
  template: require('./inputMenu.component.html'),
  styles: [String(require('./inputMenu.component.styl'))]
})
export class InputMenuComponent implements OnInit {

  constructor(private statisticsService: StatisticsService) { 
  }

  //@ViewChild(LineChartComponent) lineChart: LineChartComponent;

  options = {
    workgroup: null,
    yearFrom: null,
    yearTo: null
  }
  yrken = [];
  years = [];
  workgroup = {};
  yearFrom = {};
  yearTo = {};
  


  refreshValue(value:any, type:any) {
    if(type === "workgroup") this.options.workgroup = value;
    if(type === "yearFrom") this.options.yearFrom = value;
    if(type === "yearTo") this.options.yearTo = value;
  }

  disabled(){
    if(this.options.workgroup === null || this.options.yearFrom === null) {
      console.log("inne och disablar")
      return true
    }
    else{
      console.log("inne och Odisablar")
      return false
    }
  }


  getStatistics(){
    console.log("test")
    this.getOptions();
    let retunData;
    this.statisticsService
      .fetchEconData(this.options.workgroup.id, 
                      this.options.yearFrom.id, 
                      this.options.yearTo.id)
        .then(function(data) {
          console.log(data)
        })
    
    //returnData.then(data => console.log(data))
    //console.log(returnData)
    console.log(this.options.workgroup)
  }





  ngOnInit():void{
    this.getOptions()
  }


  // getData():void{
  //   this.statisticsService.getStatistics().then(function(data){
  //   console.log(data.data);
  //   })
  //   console.log(this.options)
  // }

  getOptions():void{
    let t = this;
    this.statisticsService.getOptions().then(function(data){
      t.yrken = [];
      t.years = [];
      for (var i = 0; i < data.variables[0].valueTexts.length; i++) {
        t.yrken[i] = {text:data.variables[0].valueTexts[i],
          id:data.variables[0].values[i]}
      }
      for (var i = 0; i < data.variables[3].valueTexts.length; i++) {
        t.years[i] = {text:data.variables[3].valueTexts[i].substring(0,24),
          id:data.variables[3].values[i]}
      }
    });

  }

  print(test){
    console.log(test)
  }

  // onSubmit(f: NgForm):void {
  //   //console.log(this.options.variables[0].values[f.value.yrkesgrupp.index])
  //   //console.log(this.options.variables[0].values[f.value.yearFrom.index])
  //   //console.log(this.options.variables[0].values[f.value.yearTo.index])
    
  //   let yearsList = [f.value.yearFrom.year];
  //   let i = 1;
  //   while(yearsList[yearsList.length-1] !== f.value.yearTo.year){
  //      yearsList[i] = (parseInt(f.value.yearFrom.year) + i).toString();
  //      i++; 
  //   }
  //   //let yrkesgrupp = this.options.variables[0].values[f.value.yrkesgrupp.index];

  //   this.statisticsService.fetchEconData(yrkesgrupp, yearsList)


  //   //console.log(yearsList)

  //   //console.log(f.value.yrkesgrupp);
  //   //console.log(f.value.yearFrom.year);
  //   //console.log(f.value.yearTo.year);
  //   //console.log(this.options)
  // }












}
