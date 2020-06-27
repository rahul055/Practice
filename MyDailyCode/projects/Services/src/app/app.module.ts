import { ProgService } from './prog.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OpsCardComponent } from './ops-card/ops-card.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { FormComponent } from './form/form.component';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    OpsCardComponent,
    ProgressBarComponent,
    FormComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [ProgService],
  bootstrap: [AppComponent]
})
export class AppModule { }
