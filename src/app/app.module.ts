import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgOnoffModule } from '../../projects/onoff/src/lib/ng-onoff.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OnoffDialogComponent } from './onoff-dialog/onoff-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
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
