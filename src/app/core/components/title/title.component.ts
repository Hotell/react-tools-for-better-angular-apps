import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { UserService } from '../../services';

@Component({
  selector: 'app-title',
  template: `
    <h1>
      Welcome to {{ title }}!
    </h1>
  `,
  styleUrls: ['./title.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TitleComponent {
  @Input() title = 'Unknown app';

  user = this.userService.userName;

  constructor(private userService: UserService) {}
}
