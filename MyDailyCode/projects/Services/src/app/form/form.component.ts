import { Component, OnInit, } from '@angular/core';
import { ProgService } from '../prog.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(
    private prg: ProgService
  ) { }

  ngOnInit(): void {
  }


}
