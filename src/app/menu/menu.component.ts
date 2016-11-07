import { Component, Input } from '@angular/core';
import { StatisticsService } from '../services/statistics.service';
import { __platform_browser_private__, SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'menu',
  template: require('./menu.component.html'),
  styles: [String(require('./menu.component.styl'))],
  providers: [StatisticsService, __platform_browser_private__.BROWSER_SANITIZATION_PROVIDERS]
})
export class MenuComponent {
  @Input() subject: Object;
  iconUrl;
  info;
  constructor(private statisticsService: StatisticsService,
    private sanitizer: DomSanitizer){
    this.info = statisticsService.subjects.subjects
  }

  secureUrl(url){
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  activeSrc(sub){
    //console.log(this.subject['subject'])
    if(this.subject['subject'] === sub['subject']) {
      return this.subject['iconUrl'] + "_active.svg"
    }else{
      return sub.iconUrl + "_inactive.svg"
    }
  }
  

}
