import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DemoModule } from './demo/demo.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, DemoModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
