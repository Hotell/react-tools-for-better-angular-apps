import { Action } from 'redux';
import { NavigationExtras } from '@angular/router';

export const GO = '[Router] Go';
export const BACK = '[Router] Back';
export const FORWARD = '[Router] Forward';

export class Go {
  readonly type = GO;
  constructor(
    public payload: {
      path: any[];
      query?: object;
      extras?: NavigationExtras;
    }
  ) {}
}

export class Back {
  readonly type = BACK;
}

export class Forward {
  readonly type = FORWARD;
}

export type Actions = Go | Back | Forward;
