import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialUiModule } from './material-ui.module';




@NgModule({
  declarations: [AppComponent],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialUiModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
