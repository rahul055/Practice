import { GtNo } from './domain';
import { Injectable, EventEmitter } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ProgService {

  private Em: EventEmitter<GtNo> = new EventEmitter()
  constructor() { }

  publishno(no: number) {
    this.Em.emit({ num: no })
  }

  subscribeno(myFn: (ev: GtNo) => void) {
    this.Em.subscribe(ev => myFn(ev))
  }
}
