import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StatisticsService } from '../services/statistics.service';



@Component({
  selector: 'input-menu',
  template: require('./inputMenu.component.html'),
  styles: [String(require('./inputMenu.component.styl'))]
})
export class InputMenuComponent implements OnInit {
  yrken = [];
  years = [];
  workgroup = {};
  yearFrom = {};
  yearTo = {};
  

  // private _disabledV:string = '0';
  // private disabled:boolean = false;

  // private get disabledV():string {
  //   return this._disabledV;
  // }

  // private set disabledV(value:string) {
  //   this._disabledV = value;
  //   this.disabled = this._disabledV === '1';
  // }

  // public selected(value:any):void {
  //   console.log('Selected value is: ', value);
  // }

  // public removed(value:any):void {
  //   console.log('Removed value is: ', value);
  // }

  // public typed(value:any):void {
  //   console.log('New search input: ', value);
  // }

  public refreshValue(value:any, type:any):void {
    if(type === "workgroup") this.workgroup = value;
    if(type === "yearFrom") this.yearFrom = value;
    if(type === "yearTo") this.yearTo = value;
  }





  constructor(private statisticsService: StatisticsService) { 
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
        t.years[i] = {text:data.variables[3].valueTexts[i],
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
