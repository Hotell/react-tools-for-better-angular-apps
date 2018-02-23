import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NgModuleFactory } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgReduxModule, NgRedux } from '@angular-redux/store';

import { createLogger } from 'redux-logger';

import { DemoModule } from './demo/demo.module';

import { StoreModule /* reducers,  */ /* createStoreFactory, AppState */ } from './store';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter.component';

import { ProductsComponent } from './products/products.component';
import { ProductsModule } from './products/products.module';

// routes
export const ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'products' },
  {
    path: 'products',
    component: ProductsComponent,
  },
];

@NgModule({
  declarations: [AppComponent, CounterComponent],
  imports: [BrowserModule, DemoModule, RouterModule.forRoot(ROUTES), StoreModule, ProductsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
