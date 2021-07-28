import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { PortalModule } from '@angular/cdk/portal';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatRippleModule } from '@angular/material/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { WordMachineComponent } from './word-machine/word-machine.component';

@NgModule({
  declarations: [AppComponent, WordMachineComponent],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'fill' }
    }
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatRippleModule,
    MatDividerModule,
    MatSnackBarModule,
    MatBottomSheetModule,
    MatButtonToggleModule,
    PortalModule,
    ScrollingModule
  ]
})
export class AppModule {}
