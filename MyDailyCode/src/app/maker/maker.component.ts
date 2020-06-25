import { Num } from './../domain';
import { AlService } from './../al.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maker',
  template: `
  <div class="row">
  <div class="col-md-12">
    <div [class]="al?.st" style="height: 500px;"></div>
  </div>
</div>

  `,
  styles: []
})
export class MakerComponent implements OnInit {
  al: Num
  constructor(
    private alsv: AlService
  ) { }

  ngOnInit(): void {
    this.alsv.subscribeAl((num: Num) => {
      this.al = num
    })
  }

}
