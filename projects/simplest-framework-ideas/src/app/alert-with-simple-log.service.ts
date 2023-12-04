import {Injectable} from '@angular/core';
import {MyAlertServiceInterface} from '@gpeel/my-validators';
import {Plog} from '@gpeel/plog';

@Injectable({
  providedIn: 'root'
})
export class AlertWithSimpleLogService implements MyAlertServiceInterface {

  constructor() {
    Plog.createComponent('AlertWithSimpleLogService');
  }

  warn(...msg: string[]) {
    // console.log(...msg);
    alert(...msg);
  }

}
