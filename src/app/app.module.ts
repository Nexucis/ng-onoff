import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgOnoffModule } from '../../projects/onoff/src/lib/ng-onoff.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OnoffDialogComponent } from './onoff-dialog/onoff-dialog.component';
import { MatButtonModule, MatDialogModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { A11yModule } from '@angular/cdk/a11y';

@NgModule({
  declarations: [
    AppComponent,
    OnoffDialogComponent
  ],
  imports: [
    BrowserAnimationsModule,
    NgOnoffModule,
    MatDialogModule,
    MatButtonModule,
    A11yModule,
    MatFormFieldModule,
    MatInputModule
  ],
  entryComponents: [ OnoffDialogComponent ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
