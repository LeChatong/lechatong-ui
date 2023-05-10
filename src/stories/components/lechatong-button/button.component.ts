import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Component, Input, Output, EventEmitter  } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'lechatong-button',
  imports: [CommonModule, FontAwesomeModule],
  template: ` <button
    type="button"
    (click)="onClick.emit($event)"
    [ngClass]="classes"
  >
    <fa-icon [icon]="IconDefinition" /> {{ label }}
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
  buttonType: 'default' | 'success' | 'info' | 'warning' | 'error' = 'default';

  /**
   * Is activate or not ?
   */
  @Input()
  disabled = false;

  @Input()
  useIcon = false;

  @Input()
  icon: IconDefinition = faCoffee;

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
    return [
      'lechatong-button', 
      `lechatong-button--size--${this.size}`, 
      this.disabled ? 'lechatong-button--disable' : `lechatong-button--type--${this.buttonType}`,
    ];
  }

  public get iconObj(): IconDefinition {
    return this.icon
  }
}
