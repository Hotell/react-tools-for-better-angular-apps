import { ReducersMapObject } from 'redux';
import { createFeatureSelector } from '../../../store/utils';

import * as fromPizzas from './pizzas.reducer';
import * as fromToppings from './toppings.reducer';

export interface ProductsState {
  pizzas: fromPizzas.PizzaState;
  toppings: fromToppings.ToppingsState;
}

export const STORE_ID = 'products';

export const reducers: ReducersMapObject = {
  pizzas: fromPizzas.reducer,
  toppings: fromToppings.reducer,
};

export const selectProductsState = createFeatureSelector<ProductsState>(STORE_ID);
