import {Component}    from '@angular/core';
import { MissionService } from '../services/mission.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'obs-comp',
  template: `obs component, item: {{item.test}}`
})
export class MissionControlComponent {
  item: Object;
  subscription:Subscription;
  constructor(private _navService:MissionService) {}
  ngOnInit() {
    this.subscription = this._navService.navItem$
       .subscribe(item => this.item = item)
  }
  ngOnDestroy() {
    // prevent memory leak when component is destroyed
    this.subscription.unsubscribe();
  }
}