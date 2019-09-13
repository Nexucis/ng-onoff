import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OnoffModule } from '../../projects/onoff/src/lib/onoff.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    OnoffModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
