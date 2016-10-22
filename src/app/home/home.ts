import { Component } from '@angular/core';


@Component({
  selector: 'my-home',
  template: require('./home.html'),
  styles: [String(require('./home.styl'))]
})
export class Home {
  constructor(){
    console.log('In Home constructor');
  }
}
