import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { COMPONENTS } from './components';
import { DIRECTIVES } from './directives';
import { PIPES } from './pipes';

@NgModule({
  imports: [CommonModule],
  declarations: [COMPONENTS, DIRECTIVES, PIPES],
  exports: [COMPONENTS, DIRECTIVES, PIPES],
})
export class SharedModule {}
