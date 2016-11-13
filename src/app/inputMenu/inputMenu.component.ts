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

  selValues = {}
  //initialisation of value-variables (NOT GOOD SYSTEM)
  workgroup = {};
  yearFrom = {};
  yearTo = {};

  menu:Object = {
    subject: "",
    title: "",
    options:[]
  }

  disabled:boolean = true;
  win;

  constructor(
    private statisticsService: StatisticsService) {
  }



// // @HostListener('window:resize', ['$event'])
// onResize(event) {
//   event.target.innerWidth;
// }
  /*
    fetches menu options on initialisation
  */
  ngOnInit():void{
    this.getOptions()
    this.win = window;
  }

  /*
    refreches values of selected options
    needs a remake as well!
  */
  refreshValue(value:any, type:any) {
    let values = this.selValues
    this.menu['options'].forEach(function (option) {
      if(type == option.id) {
        values[type] = value.id
      }
    })
    this.disabled = this.disable()
  }


  /*
    checks wether selection is valid or not. Loops through
    selValues object and returns true or false
  */
  disable(){
    if(this.menu['options'].length === Object.keys(this.selValues).length){
      for (let option in this.selValues) {
        if (option === "yearFrom") {
          if(parseInt(this.selValues[option]) > parseInt(this.selValues["yearTo"])){
            return true
          }else{
            return false
          }
        }
      }
      return false
    }else{
      return true
    }
  }

  /*
    Tells service to get data depending on
    selected options. When data is resolved
    tell chart to update via parent component,
    statistics.component.ts
  */
  getStatistics(){
    this.win = window;
    let t = this;
    let args = []
    // this.selValues.forEach(function(value) {
    //   args.push(value)
    // })
    for (let option in this.selValues) {
      if (this.selValues.hasOwnProperty(option)) {
          args.push(this.selValues[option])
      }
    }

    this.statisticsService
      .fetchData(args, this.subject['subject'], this.subject['optionsUrl'])
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
