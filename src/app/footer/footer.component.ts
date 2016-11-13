import { Component } from '@angular/core';
import { StatisticsService } from '../services/statistics.service';

@Component({
  selector: 'my-footer',
  template: require('./footer.component.html'),
  styles: [String(require('./footer.component.styl'))]
})
export class FooterComponent {
  subjects:Object;
  constructor(private statisticsService: StatisticsService){
    this.subjects = statisticsService.subjects.subjects
  }

  footerSubjects = [
    {contact:{
      title: "Kontakt",
      name: "Jonas Johnasson",
      website: "http://jonasjohansson.net/",
      email: "mail@domain.com"
    }},
    {
      statisticsSource:{
      title: "Statistiska källor",
      sources: [{
        name: "Statistiska centralbyrån",
        website: "http://www.scb.se/"
      }
      ]
    }},
    {sitemap:{
      title: "Webbplatskarta",
      links: [
        "#home",
        "#econ",
        "#health",
        "#power",
        "#drugs",
        "#family"
      ]
    }}
  ]

}
