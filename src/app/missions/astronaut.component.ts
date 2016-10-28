import { Component, Input, OnDestroy } from '@angular/core';

import { MissionService } from '../services/mission.service';
import { Subscription }   from 'rxjs/Subscription';

@Component({
  selector: 'my-nav',
  template:`
    <div class="nav-item" (click)="selectedNavItem({test:'1'})">nav 1 (click me)</div>
    <div class="nav-item" (click)="selectedNavItem({test:'2'})">nav 2 (click me)</div>`
})
export class AstronautComponent {
  item = {test:"annan data"};
  constructor(private _navService:MissionService) {}
  selectedNavItem(item: Object) {
    console.log('selected nav item ' + item);
    this._navService.changeNav(item);
  }
}