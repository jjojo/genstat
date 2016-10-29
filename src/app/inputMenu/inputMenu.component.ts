import { Component, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StatisticsService } from '../services/statistics.service';


@Component({
  selector: 'input-menu',
  template: require('./inputMenu.component.html'),
  styles: [String(require('./inputMenu.component.styl'))]
})
export class InputMenuComponent implements OnInit {

  constructor(private statisticsService: StatisticsService) { 
  }

  ngOnInit():void{
    this.getOptions()
  }

  @Output() notify: EventEmitter<string> = new EventEmitter<string>();
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
    if(type === "workgroup") this.options.workgroup = value.id;
    if(type === "yearFrom") this.options.yearFrom = parseInt(value.id);
    if(type === "yearTo") this.options.yearTo = parseInt(value.id);
  }

  getStatistics(){
    let t = this;
    this.statisticsService
      .fetchEconData(this.options.workgroup, 
                      this.options.yearFrom.toString(), 
                      this.options.yearTo.toString())
        .then(function(data) {
          t.notify.emit('payload');
        })
  }


  getOptions():void{
    let t = this;
    this.statisticsService.getOptions().then(function(data){
      t.yrken = [];
      t.years = [];
      for (var i = 0; i < data.variables[0].valueTexts.length; i++) {
        t.yrken[i] = {text:data.variables[0].valueTexts[i],
          id:data.variables[0].values[i]}
      }
      //Could be merged but if datadosent match it could result in errors
      for (var i = 0; i < data.variables[3].valueTexts.length; i++) {
        t.years[i] = {text:data.variables[3].valueTexts[i].substring(0,24),
          id:data.variables[3].values[i]}
      }
    });
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
