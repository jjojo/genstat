import { Component } from '@angular/core';
import { StatisticsService } from '../services/statistics.service';

@Component({
  selector: 'menu',
  template: require('./menu.component.html'),
  styles: [String(require('./menu.component.styl'))],
  providers: [StatisticsService]
})
export class MenuComponent {

  //test2 =  this.statisticsService.test
  menu = 'menu';
  //let data = {};

  minify():void {
    this.menu = 'menu min-menu'
  }

  menuOptions: Object[] = [
    {title: "Ekonomi", link: 'econ'},
    {title: "Maktpositioner", link: 'power'},
    {title: "Alkohol", link: 'drugs'},
    {title: "Familj", link: 'family'},
    {title: "Hälsa", link: 'health'}
  ];



}
