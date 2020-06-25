import { Num } from './../domain';
import { Component, OnInit } from '@angular/core';
import { AlService } from '../al.service';

@Component({
  selector: 'app-picker',
  template: `
  <div class="card" style="width: 18rem;">

  <div class="card-body ">
    <h5 class="card-title mb-5">Please pick the alert</h5>
    <div class="alert alert-primary" role="alert" (click)="onpick('alert-primary')">
      A simple primary alert—check it out!
    </div>
    <div class="alert alert-secondary" role="alert" (click)="onpick('alert-secondary')">
      A simple secondary alert—check it out!
    </div>
    <div class="alert alert-success" role="alert" (click)="onpick('alert-success')">
      A simple success alert—check it out!
    </div>
    <div class="alert alert-danger" role="alert" (click)="onpick('alert-danger')">
      A simple danger alert—check it out!
    </div>
    <div class="alert alert-warning" role="alert" (click)="onpick('alert-warning')">
      A simple warning alert—check it out!
    </div>
    <div class="alert alert-info" role="alert" (click)="onpick('alert-info')">
      A simple info alert—check it out!
    </div>
    <div class="alert alert-light" role="alert" (click)="onpick('alert-light')">
      A simple light alert—check it out!
    </div>
    <div class="alert alert-dark" role="alert" (click)="onpick('alert-dark')">
      A simple dark alert—check it out!
    </div>
  </div>
</div>
  `,
  styles: []
})
export class PickerComponent implements OnInit {

  constructor(
    private alsv: AlService
  ) { }

  ngOnInit(): void {
  }


  onpick(al: string) {
    this.alsv.publishAl(al)
  }

}
