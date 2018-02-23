import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-products',
  template: `
    <p>
      products works!
    </p>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
