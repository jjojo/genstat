import { Component } from '@angular/core';
import { Home } from './home/home';
import { About } from './about/about';

@Component({
  selector: 'my-app',
  template: `
    <!-- <div>
      <a [routerLink]="['/']">Home</a>
      <a [routerLink]="['/about']">About</a>
    </div> -->
    <input-menu></input-menu>
    <menu></menu>
    <div>
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [String(require('./app.styl'))]
})
export class MyApp {}
