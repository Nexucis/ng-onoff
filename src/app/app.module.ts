import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgOnoffModule } from '../../projects/onoff/src/lib/ng-onoff.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgOnoffModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
