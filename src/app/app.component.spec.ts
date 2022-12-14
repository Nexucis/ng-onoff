import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MatLegacyDialogModule } from '@angular/material/legacy-dialog';
import { MatLegacyFormFieldModule } from '@angular/material/legacy-form-field';
import { MatLegacyInputModule } from '@angular/material/legacy-input';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
      ],
      imports: [
        NoopAnimationsModule,
        MatLegacyDialogModule,
        MatLegacyFormFieldModule,
        MatLegacyInputModule
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
