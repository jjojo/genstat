import { Component } from '@angular/core';

@Component({
  selector: 'my-about',
  template: require('./about.html'),
  styles: [String(require('./about.styl'))]
})
export class About {}
