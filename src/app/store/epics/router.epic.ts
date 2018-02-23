import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Epic, ofType, combineEpics } from 'redux-observable';
import { Action } from 'redux';
import { tap, map, ignoreElements } from 'rxjs/operators';

import * as RouterActions from '../actions/router.action';

@Injectable()
export class RouterEpics {
  constructor(private router: Router, private location: Location) {}

  getEpic() {
    return combineEpics(this.navigate$, this.navigateBack$, this.navigateForward$);
  }

  navigate$: Epic<any, {}> = (actions$) =>
    actions$.ofType<RouterActions.Go>(RouterActions.GO).pipe(
      map((action) => action.payload),
      tap(({ path, query: queryParams, extras }) => {
        this.router.navigate(path, { queryParams, ...extras });
      }),
      ignoreElements()
    );

  navigateBack$: Epic<any, {}> = (actions$) =>
    actions$.ofType<RouterActions.Back>(RouterActions.BACK).pipe(tap(() => this.location.back()), ignoreElements());

  navigateForward$: Epic<any, {}> = (actions$) =>
    actions$
      .ofType<RouterActions.Forward>(RouterActions.FORWARD)
      .pipe(tap(() => this.location.forward()), ignoreElements());
}
