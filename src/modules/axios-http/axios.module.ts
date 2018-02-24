import { NgModule } from '@angular/core';

import { HttpClient } from './http-client';

@NgModule({
  providers: [HttpClient],
})
export class AxiosModule {}
