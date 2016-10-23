import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { StatisticsService } from '../services/statistics.service';


@Component({
  selector: 'input-menu',
  template: require('./inputMenu.component.html'),
  styles: [String(require('./inputMenu.component.styl'))]
})
export class InputMenuComponent implements OnInit {
  options;
  yrken:Object;
  years:Object;
  constructor(private statisticsService: StatisticsService) { 
  }


  ngOnInit():void{
    this.getOptions()
  }


  getData():void{
    this.statisticsService.getStatistics().then(function(data){
    console.log(data.data);
    })
    console.log(this.options)
  }

  getOptions():void{
    let t = this;
    this.statisticsService.getOptions().then(function(data){
      t.options = data
      console.log(data)
      t.yrken = data.variables[0].valueTexts;
      t.years = data.variables[3].valueTexts;
    });
  }

  print(test){
    console.log(test)
  }

  onSubmit(f: NgForm):void {
    //console.log(this.options.variables[0].values[f.value.yrkesgrupp.index])
    //console.log(this.options.variables[0].values[f.value.yearFrom.index])
    //console.log(this.options.variables[0].values[f.value.yearTo.index])
    
    let yearsList = [f.value.yearFrom.year];
    let i = 1;
    while(yearsList[yearsList.length-1] !== f.value.yearTo.year){
       yearsList[i] = (parseInt(f.value.yearFrom.year) + i).toString();
       i++; 
    }
    let yrkesgrupp = this.options.variables[0].values[f.value.yrkesgrupp.index];

    this.statisticsService.fetchEconData(yrkesgrupp, yearsList)


    //console.log(yearsList)

    //console.log(f.value.yrkesgrupp);
    //console.log(f.value.yearFrom.year);
    //console.log(f.value.yearTo.year);
    //console.log(this.options)
  }


}
