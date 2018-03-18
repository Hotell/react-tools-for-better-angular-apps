import { Injectable } from '@angular/core';

let nextId = 1;

@Injectable()
export class UserService {
  id = nextId++;
  private _userName = 'Sherlock Holmes';

  get userName() {
    // Demo: add a suffix if this service has been created more than once
    const suffix = this.id > 1 ? ` times ${this.id}` : '';
    return this._userName + suffix;
  }
}
