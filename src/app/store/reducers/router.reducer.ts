import { ActivatedRouteSnapshot, RouterStateSnapshot, Params } from '@angular/router';
import * as fromRouter from '@angular-redux/router';

import { createFeatureSelector } from '../utils';

export type State = string;

export const reducer = fromRouter.routerReducer;
