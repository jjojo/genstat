import { Component } from '@angular/core';


@Component({
  selector: 'menu',
  template: require('./menu.component.html'),
  styles: [String(require('./menu.component.styl'))]
})
export class MenuComponent {
  constructor(){
    console.log('In Home constructor');
  }
}
