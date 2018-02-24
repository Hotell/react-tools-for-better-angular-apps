import { Injectable } from '@angular/core';

import { PizzasEpics } from './pizzas.epic';
import { ToppingsEpics } from './toppings.epic';

import { EpicsService } from '../../../store/types';
import { combineEpics } from 'redux-observable';

@Injectable()
export class ProductsEpics implements EpicsService {
  constructor(private pizzas: PizzasEpics, private toppings: ToppingsEpics) {}
  getEpic() {
    return combineEpics(this.pizzas.getEpic(), this.toppings.getEpic());
  }
}

export const epics = [PizzasEpics, ToppingsEpics, ProductsEpics];

export * from './pizzas.epic';
export * from './toppings.epic';
