import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProgressComponent } from './progress/progress.component';
import { OpsCardComponent } from './ops-card/ops-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ProgressComponent,
    OpsCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
