import {Injectable}      from '@angular/core'
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class MissionService {
  // Observable navItem source
  private _navItemSource = new BehaviorSubject<Object>({labels: ["hej","hejsan"]});
  // Observable navItem stream
  navItem$ = this._navItemSource.asObservable();
  // service command
  changeNav(Object) {
    this._navItemSource.next(Object);
  }
}