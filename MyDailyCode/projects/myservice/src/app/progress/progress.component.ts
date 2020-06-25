import { ProgressService } from './../progress.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css'],
  providers: [ProgressService],

})
export class ProgressComponent implements OnInit {

  constructor(
    private progress: ProgressService
  ) { }


  prog = 30


  ngOnInit(): void {
    this.progress.em.subscribe(bt => {
      if (bt.progressType === 1) {
        this.prog++
      } else {
        this.prog--
      }
    })
  }

}
