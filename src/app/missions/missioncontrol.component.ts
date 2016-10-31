import {Component}    from '@angular/core';
import { MissionService } from '../services/mission.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'obs-comp',
  template: `obs component, item: {{item.labels[0]}}
  <button (click)="print()">print</button>`
})
export class MissionControlComponent {
  item: Object;
  subscription:Subscription;
  constructor(private _navService:MissionService) {}
  ngOnInit() {
    this.subscription = this._navService.navItem$
       .subscribe(item => this.item = item)
    console.log(this.item)
  }
  print(){
    console.log(this.item)
  }
  ngOnDestroy() {
    // prevent memory leak when component is destroyed
    this.subscription.unsubscribe();
  }
}