import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <button (click)="handleClick($event);">
        <ng-content *ngIf="!text, else content"></ng-content>
    </button>
    <ng-template #content><span>{{ text }}</span></ng-template>
  `,
  styles: [
    `
    button {
      border: 1px solid #eee;
      border-radius: 3px;
      background-color: #FFFFFF;
      cursor: pointer;
      font-size: 15px;
      padding: 3px 10px;
      margin: 10px;
    }
  `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  @Input() text = '';
  @Output() click = new EventEmitter<Event>();
  handleClick(event: MouseEvent) {
    // event.stopPropagation();
    this.click.emit(event);
  }
}
