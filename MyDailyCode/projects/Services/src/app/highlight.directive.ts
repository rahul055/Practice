import { Directive, ElementRef } from '@angular/core';
import { ProgService } from './prog.service';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  private el: ElementRef
  no: number
  constructor(private prg: ProgService, el: ElementRef) {
    // el.nativeElement.style.backgroundColor = 'yellow';

    // if (this.el.nativeElement.value == '  ') {
    //   this.prg.progb()
    // }
  }

}
