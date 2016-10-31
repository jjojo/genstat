import { Component } from '@angular/core';
import { StatisticsService } from '../services/statistics.service';


@Component({
  selector: 'start',
  template: require('./start.component.html'),
  styles: [String(require('./start.component.styl'))]
})
export class StartComponent {
	info;
  constructor(private statisticsService: StatisticsService){
  	this.info = statisticsService.subjects.subjects
    console.log('In start constructor');
  }

	items = [
		{
			name: "ekonomi",
			iconUrl: "../../assets/img/pig-coin.svg",
			text: "Hur skiljer sig..."
		},
		{
			name: "hälsa",
			iconUrl: "../../assets/img/health.svg",
			text: "Hur skiljer sig..."
		},
		{
			name: "inflytande",
			iconUrl: "../../assets/img/tie.svg",
			text: "Hur skiljer sig..."
		},
		{
			name: "alkohol",
			iconUrl: "../../assets/img/drink.svg",
			text: "Hur skiljer sig..."
		},
		{
			name: "familj",
			iconUrl: "../../assets/img/fam.svg",
			text: "Hur skiljer sig..."
		}
	]


}
