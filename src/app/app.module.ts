import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { ReturnChangeComponent } from './components/return-change/return-change.component';

@NgModule({
  declarations: [
    AppComponent,
    ReturnChangeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 