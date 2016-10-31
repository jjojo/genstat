import { Component, OnInit, ViewChild, EventEmitter, Output, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StatisticsService } from '../services/statistics.service';


@Component({
  selector: 'input-menu',
  template: require('./inputMenu.component.html'),
  styles: [String(require('./inputMenu.component.styl'))]
})
export class InputMenuComponent implements OnInit {
  //Input from parent component, statistics.component.ts
  @Input() subject: Object;
  //Output from child to parent through an eventemitter
  @Output() notify: EventEmitter<string> = new EventEmitter<string>();
  
  /*
    values from selections is stored
    in options-object. This archetecture
    needs a remake!
  */
  options = {
    workgroup: null,
    yearFrom: 0,
    yearTo: 0
  }
  //initialisation of value-variables (NOT GOOD SYSTEM)
  workgroup = {};
  yearFrom = {};
  yearTo = {};

  menu:Object = {};
  

  constructor(private statisticsService: StatisticsService) { 
  }

  /*
    fetches menu options on initialisation
  */
  ngOnInit():void{
    this.getOptions()
  }

  /*
    refreches values of selected options
    needs a remake as well!
  */
  refreshValue(value:any, type:any) {
    if(this.subject['subject'] == "econ") {
      if(type === "workgroup") this.options.workgroup = value.id;
      if(type === "yearFrom") this.options.yearFrom = parseInt(value.id);
      if(type === "yearTo") this.options.yearTo = parseInt(value.id);
    }
    else{
      if(type === "workgroup") this.options.workgroup = value.id;
      if(type === "yearFrom") this.options.yearFrom = value.id;
      if(type === "yearTo") this.options.yearTo = value.id;
    } 
  }

  /*
    Tells service to get data depending on 
    selected options. When data is resolved
    tell chart to update via parent component,
    statistics.component.ts
  */
  getStatistics(){
    let t = this;
    this.statisticsService
      .fetchData([
        this.options.workgroup, 
        this.options.yearFrom.toString(), 
        this.options.yearTo.toString()],
        this.subject['subject'])
          .then(function(data) {
            t.notify.emit(t.subject['subjectNr']);
          })
  }

  /*
    fetches menu options from statistics service,
    sends which subject and url to SCB,
    recives options for spesific table
  */
  getOptions():void{
    let t = this;
    this.statisticsService
      .getOptions(
        this.subject['subject'], 
        this.subject['optionsUrl'])
          .then(function(data){
            t.menu = data
          })
  }

}