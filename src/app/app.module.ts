import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatCardModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatSlideToggleModule,
  MatInputModule,
  MatListModule,
  MatSidenavModule
} from '@angular/material';

import 'hammerjs';

import { AppComponent } from './app.component';
import { ReturnChangeComponent } from './components/return-change/return-change.component';

@NgModule({
  declarations: [
    AppComponent,
    ReturnChangeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatSlideToggleModule,
    MatInputModule,
    MatListModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 