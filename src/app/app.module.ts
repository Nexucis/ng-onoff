import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgOnoffModule } from '../../projects/onoff/src/lib/ng-onoff.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OnoffDialogComponent } from './onoff-dialog/onoff-dialog.component';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
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
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
