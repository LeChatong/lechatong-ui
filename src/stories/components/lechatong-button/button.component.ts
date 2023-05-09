import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lechatong-button',
  imports: [CommonModule],
  template: ` <button
    type="button"
    (click)="onClick.emit($event)"
    [ngClass]="classes"
  >
    {{ label }}
  </button>`,
  styleUrls: ['./button.scss'],
})
export default class ButtonComponent {

  /**
   * How large should the button be?
   */
  @Input()
  size: 'small' | 'medium' | 'large' = 'medium';

  /**
   *  Which type of button ?
   */
  @Input()
  buttonType: 'default' | 'success' | 'info' | 'danger' | 'error' = 'default';

  /**
   * Is activate or not ?
   */
  @Input()
  disabled = true;

  @Input()
  useIcon = false;

  /**
   * Button contents
   *
   * @required
   */
  @Input()
  label = 'Button';

  /**
   * Optional click handler
   */
  @Output()
  onClick = new EventEmitter<Event>();

  public get classes(): string[] {
    return ['lechatong-button', `lechatong-button--size--${this.size}`, `lechatong-button--type--${this.buttonType}`];
  }
}
