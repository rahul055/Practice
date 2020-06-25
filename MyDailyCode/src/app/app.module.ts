import { AlService } from './al.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MakerComponent } from './maker/maker.component';
import { PickerComponent } from './picker/picker.component';

@NgModule({
  declarations: [
    AppComponent,
    MakerComponent,
    PickerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [AlService],
  bootstrap: [AppComponent]
})
export class AppModule { }
