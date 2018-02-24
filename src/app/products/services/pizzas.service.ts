import { Injectable } from '@angular/core';
import { HttpClient } from '@modules/axios-http';

import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import 'rxjs/add/observable/throw';

import { Pizza } from '../models/pizza.model';

import { normalizeData } from './utils';

@Injectable()
export class PizzasService {
  constructor(private http: HttpClient) {}

  getPizzas(): Promise<Pizza[]> {
    return this.http.get<Pizza[]>(`/api/pizzas`).then(normalizeData);
  }

  createPizza(payload: Pizza): Promise<Pizza> {
    return this.http.post<Pizza>(`/api/pizzas`, payload).then(normalizeData);
  }

  updatePizza(payload: Pizza): Promise<Pizza> {
    return this.http.put<Pizza>(`/api/pizzas/${payload.id}`, payload).then(normalizeData);
  }

  removePizza(payload: Pizza): Promise<Pizza> {
    return this.http.delete<any>(`/api/pizzas/${payload.id}`).then(normalizeData);
  }
}
