import { Injectable, EventEmitter } from '@angular/core';
import { progressData } from './progress-data';

@Injectable({
  providedIn: 'root'
})
export class ProgressService {


  readonly em: EventEmitter<progressData> = new EventEmitter()

  constructor() { }
}
