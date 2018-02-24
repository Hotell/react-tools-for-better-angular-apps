import { Injectable } from '@angular/core';
import { Epic, combineEpics } from 'redux-observable';
import { of } from 'rxjs/observable/of';
import { map, switchMap, catchError } from 'rxjs/operators';

import { EpicsService } from '../../../store/types';

// import * as fromRoot from '../../../store';
import * as pizzaActions from '../actions/pizzas.action';
import * as fromServices from '../../services';

@Injectable()
export class PizzasEpics implements EpicsService {
  getEpic() {
    return combineEpics(this.loadPizzas$);
  }
  constructor(private pizzaService: fromServices.PizzasService) {}
  //   @Effect()
  loadPizzas$: Epic<any, {}> = (actions$) =>
    actions$.ofType(pizzaActions.LOAD_PIZZAS).pipe(
      switchMap(() => {
        return this.pizzaService
          .getPizzas()
          .pipe(
            map((pizzas) => new pizzaActions.LoadPizzasSuccess(pizzas)),
            catchError((error) => of(new pizzaActions.LoadPizzasFail(error)))
          );
      })
    );
  //   @Effect()
  //   createPizza$ = this.actions$.ofType(pizzaActions.CREATE_PIZZA).pipe(
  //     map((action: pizzaActions.CreatePizza) => action.payload),
  //     switchMap(pizza => {
  //       return this.pizzaService
  //         .createPizza(pizza)
  //         .pipe(
  //           map(pizza => new pizzaActions.CreatePizzaSuccess(pizza)),
  //           catchError(error => of(new pizzaActions.CreatePizzaFail(error)))
  //         );
  //     })
  //   );
  //   @Effect()
  //   createPizzaSuccess$ = this.actions$.ofType(pizzaActions.CREATE_PIZZA_SUCCESS).pipe(
  //     map((action: pizzaActions.CreatePizzaSuccess) => action.payload),
  //     map(pizza => {
  //       return new fromRoot.Go({
  //         path: ['/products', pizza.id],
  //       });
  //     })
  //   );
  //   @Effect()
  //   updatePizza$ = this.actions$.ofType(pizzaActions.UPDATE_PIZZA).pipe(
  //     map((action: pizzaActions.UpdatePizza) => action.payload),
  //     switchMap(pizza => {
  //       return this.pizzaService
  //         .updatePizza(pizza)
  //         .pipe(
  //           map(pizza => new pizzaActions.UpdatePizzaSuccess(pizza)),
  //           catchError(error => of(new pizzaActions.UpdatePizzaFail(error)))
  //         );
  //     })
  //   );
  //   @Effect()
  //   removePizza$ = this.actions$.ofType(pizzaActions.REMOVE_PIZZA).pipe(
  //     map((action: pizzaActions.RemovePizza) => action.payload),
  //     switchMap(pizza => {
  //       return this.pizzaService
  //         .removePizza(pizza)
  //         .pipe(
  //           map(() => new pizzaActions.RemovePizzaSuccess(pizza)),
  //           catchError(error => of(new pizzaActions.RemovePizzaFail(error)))
  //         );
  //     })
  //   );
  //   @Effect()
  //   handlePizzaSuccess$ = this.actions$.ofType(pizzaActions.UPDATE_PIZZA_SUCCESS, pizzaActions.REMOVE_PIZZA_SUCCESS).pipe(
  //     map(pizza => {
  //       return new fromRoot.Go({
  //         path: ['/products'],
  //       });
  //     })
  //   );
}
