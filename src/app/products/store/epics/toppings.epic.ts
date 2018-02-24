import { Injectable } from '@angular/core';
import { combineEpics, Epic } from 'redux-observable';
import { of } from 'rxjs/observable/of';
import { map, catchError, switchMap } from 'rxjs/operators';

import { EpicsService } from '../../../store/types';

import * as toppingsActions from '../actions/toppings.action';
import * as fromServices from '../../services/toppings.service';

@Injectable()
export class ToppingsEpics implements EpicsService {
  getEpic() {
    return combineEpics(this.loadToppings$);
  }
  constructor(private toppingsService: fromServices.ToppingsService) {}
  loadToppings$: Epic<any, {}> = (actions$) =>
    actions$.ofType(toppingsActions.LOAD_TOPPINGS).pipe(
      switchMap(() => {
        return this.toppingsService
          .getToppings()
          .then((toppings) => new toppingsActions.LoadToppingsSuccess(toppings))
          .catch((error) => of(new toppingsActions.LoadToppingsFail(error)));
      })
    );
}
