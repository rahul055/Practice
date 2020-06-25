import { Num } from './domain';
import { Injectable, EventEmitter } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AlService {


  private Em: EventEmitter<Num> = new EventEmitter()
  constructor() {

  }


  publishAl(al: string) {
    this.Em.emit({ st: al })
  }
  subscribeAl(myfn: (ev: Num) => void) {
    this.Em.subscribe(ev => myfn(ev))
  }
}
