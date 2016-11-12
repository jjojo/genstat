import { Component } from '@angular/core';
import { Home } from './home/home';
import { About } from './about/about';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'my-app',
  template: `
    <div>
      <router-outlet></router-outlet>
    </div>
    <my-footer></my-footer>
  `,
  styles: [String(require('./app.styl'))]
})
export class MyApp {}
