import { NgModule, InjectionToken, Inject, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { combineEpics } from 'redux-observable';

import * as fromProducts from '../products/store/epics';
import * as fromRoot from './epics';

import { createRootEpic } from './utils';
import { EpicsService } from './types';

@Injectable()
export class RootEpic implements EpicsService {
  constructor(private routerEpics: fromRoot.RouterEpics, private productsEpics: fromProducts.ProductsEpics) {}

  getEpic() {
    return combineEpics(this.routerEpics.getEpic(), this.productsEpics.getEpic());
  }
}

const rootEpics = [...fromRoot.epics];
const featureEpics = [...fromProducts.epics];
@NgModule({
  imports: [CommonModule],
  providers: [RootEpic, ...rootEpics, ...featureEpics],
})
export class EpicsModule {}
