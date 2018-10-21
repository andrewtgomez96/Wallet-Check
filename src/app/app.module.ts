import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CorporationsComponent } from './corporations/corporations.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CorporationsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
