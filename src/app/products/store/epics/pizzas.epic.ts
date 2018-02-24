import { Injectable } from '@angular/core';
import { Epic, combineEpics } from 'redux-observable';
import { of } from 'rxjs/observable/of';
import { map, switchMap, catchError } from 'rxjs/operators';

import { EpicsService } from '../../../store/types';

import * as fromRoot from '../../../store/actions';
import * as pizzaActions from '../actions/pizzas.action';
import * as fromServices from '../../services';

@Injectable()
export class PizzasEpics implements EpicsService {
  getEpic() {
    return combineEpics(
      this.loadPizzas$,
      this.createPizza$,
      this.createPizzaSuccess$,
      this.handlePizzaSuccess$,
      this.removePizza$,
      this.updatePizza$
    );
  }
  constructor(private pizzaService: fromServices.PizzasService) {}
  loadPizzas$: Epic<any, {}> = (actions$) =>
    actions$.ofType(pizzaActions.LOAD_PIZZAS).pipe(
      switchMap(() => {
        return this.pizzaService
          .getPizzas()
          .then((pizzas) => new pizzaActions.LoadPizzasSuccess(pizzas))
          .catch((error) => new pizzaActions.LoadPizzasFail(error));
      })
    );
  createPizza$: Epic<any, {}> = (actions$) =>
    actions$.ofType(pizzaActions.CREATE_PIZZA).pipe(
      map((action: pizzaActions.CreatePizza) => action.payload),
      switchMap((pizza) => {
        return this.pizzaService
          .createPizza(pizza)
          .then((newPizza) => new pizzaActions.CreatePizzaSuccess(newPizza))
          .catch((error) => new pizzaActions.CreatePizzaFail(error));
      })
    );
  createPizzaSuccess$: Epic<any, {}> = (actions$) =>
    actions$.ofType(pizzaActions.CREATE_PIZZA_SUCCESS).pipe(
      map((action: pizzaActions.CreatePizzaSuccess) => action.payload),
      map((pizza) => {
        return new fromRoot.Go({
          path: ['/products', pizza.id],
        });
      })
    );
  updatePizza$: Epic<any, {}> = (actions$) =>
    actions$.ofType(pizzaActions.UPDATE_PIZZA).pipe(
      map((action: pizzaActions.UpdatePizza) => action.payload),
      switchMap((pizza) => {
        return this.pizzaService
          .updatePizza(pizza)
          .then((updatedPizza) => new pizzaActions.UpdatePizzaSuccess(updatedPizza))
          .catch((error) => new pizzaActions.UpdatePizzaFail(error));
      })
    );
  removePizza$: Epic<any, {}> = (actions$) =>
    actions$.ofType(pizzaActions.REMOVE_PIZZA).pipe(
      map((action: pizzaActions.RemovePizza) => action.payload),
      switchMap((pizza) => {
        return this.pizzaService
          .removePizza(pizza)
          .then(() => new pizzaActions.RemovePizzaSuccess(pizza))
          .catch((error) => of(new pizzaActions.RemovePizzaFail(error)));
      })
    );
  handlePizzaSuccess$: Epic<any, {}> = (actions$) =>
    actions$.ofType(pizzaActions.UPDATE_PIZZA_SUCCESS, pizzaActions.REMOVE_PIZZA_SUCCESS).pipe(
      map((pizza) => {
        return new fromRoot.Go({
          path: ['/products'],
        });
      })
    );
}
