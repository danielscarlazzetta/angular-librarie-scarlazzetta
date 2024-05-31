import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { NgxScarlazzettaButtonComponent }from 'ngx-scarlazzetta';

//import x from '../../../ngx-scarlazzetta/src/lib/';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxScarlazzettaButtonComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
