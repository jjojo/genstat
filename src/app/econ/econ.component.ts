import { Component } from '@angular/core';


@Component({
  selector: 'econ',
  template: require('./econ.component.html'),
  styles: [String(require('./econ.component.styl'))]
})
export class EconComponent {
  constructor(){
    console.log('In econ constructor');
  }
}
