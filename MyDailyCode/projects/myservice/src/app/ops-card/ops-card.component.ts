import { ProgressService } from './../progress.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ops-card',
  templateUrl: './ops-card.component.html',
  styleUrls: ['./ops-card.component.css'],
  providers: [ProgressService],
})
export class OpsCardComponent implements OnInit {

  constructor(
    private progress: ProgressService
  ) { }


  onProgress(bt: number) {
    this.progress.em.emit({ progressType: bt })
  }

  ngOnInit(): void {
  }

}
