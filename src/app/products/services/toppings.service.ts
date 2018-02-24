import { Injectable } from '@angular/core';
import { HttpClient } from '@modules/axios-http';

import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import 'rxjs/add/observable/throw';

import { Topping } from '../models/topping.model';

import { normalizeData } from './utils';

@Injectable()
export class ToppingsService {
  constructor(private http: HttpClient) {}

  getToppings(): Promise<Topping[]> {
    return this.http.get<Topping[]>(`/api/toppings`).then(normalizeData);
  }
}
