import { Component } from '@angular/core';
import { Subject } from 'rxjs'
import { StatisticsService } from '../services/statistics.service';

@Component({
  selector: 'my-home',
  template: `
	<div class="wrapper">
		<start></start>
    <mail-list></mail-list>
		<statistics></statistics>
	</div>`,
  styles: [String(require('./home.styl'))],
  providers: [ StatisticsService ]
})
export class Home {
  constructor(private statisticsService: StatisticsService) {
  }
}
