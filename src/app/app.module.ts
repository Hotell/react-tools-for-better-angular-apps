import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgReduxModule, NgRedux } from '@angular-redux/store';

import { createLogger } from 'redux-logger';

import { DemoModule } from './demo/demo.module';

import { StoreModule /* reducers,  */ /* createStoreFactory, AppState */ } from './store';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter.component';

@NgModule({
  declarations: [AppComponent, CounterComponent],
  imports: [BrowserModule, DemoModule, RouterModule.forRoot([]), StoreModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
