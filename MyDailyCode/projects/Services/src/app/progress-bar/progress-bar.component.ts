import { GtNo } from './../domain';
import { Component, OnInit } from '@angular/core';
import { ProgService } from '../prog.service';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {
  al: GtNo;
  prog: number = 20
  constructor(
    private prg: ProgService
  ) { }

  ngOnInit(): void {
    this.prg.subscribeno((ev: GtNo) => {

      if (ev.num === 1) {
        if (this.prog < 100) {
          this.prog += 5
        }

      } else {
        if (this.prog > 0) {
          this.prog -= 5
        }

      }
    });

  }

}
