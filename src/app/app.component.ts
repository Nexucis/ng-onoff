import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OnoffDialogComponent } from './onoff-dialog/onoff-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {
  constructor(public dialog: MatDialog) {
  }

  openDialog(): void {
    this.dialog.open(OnoffDialogComponent, {
      width: '60%',
    });
  }
}
