import { ProgService } from './../prog.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ops-card',
  templateUrl: './ops-card.component.html',
  styleUrls: ['./ops-card.component.css']
})
export class OpsCardComponent implements OnInit {

  constructor(
    private prg: ProgService
  ) { }

  ngOnInit(): void {
  }
  onProgress(no: number) {
    this.prg.publishno(no)
  }
}
