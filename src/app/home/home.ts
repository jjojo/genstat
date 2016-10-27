import { Component } from '@angular/core';


@Component({
  selector: 'my-home',
  template: `
	<div class="wrapper">
		<start></start>
		<statistics></statistics>
	</div>`,
  styles: [String(require('./home.styl'))]
})
export class Home {
  constructor(){
    console.log('In Home constructor');
  }
}
