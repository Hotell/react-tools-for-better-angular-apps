import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { CounterComponent } from './counter.component';

const components = [CounterComponent, ButtonComponent];

@NgModule({
  imports: [CommonModule],
  declarations: [...components],
  exports: [...components],
})
export class DemoModule {}
