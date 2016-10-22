import { Component } from '@angular/core';


@Component({
  selector: 'menu',
  template: require('./menu.component.html'),
  styles: [String(require('./menu.component.styl'))]
})
export class MenuComponent {

  constructor(){
    console.log('In Menu constructor');
  }

  menu = 'menu';

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
