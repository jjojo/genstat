import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'input-menu',
  template: require('./inputMenu.component.html'),
  styles: [String(require('./inputMenu.component.styl'))]
})
export class InputMenuComponent {

  constructor(){
    console.log('In Menu constructor');
  }

  onSubmit(f: NgForm) {
    console.log(f.value);  // { first: '', last: '' }
    console.log(f.valid);  // false
  }


}
