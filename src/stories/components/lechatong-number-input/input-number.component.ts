import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'lechatong-input-number',
    imports: [CommonModule],
    template: ` 
    <label class="lechatong">
        <span class="lechatong-label">{{this.label}}</span>
        <input 
            type="number"
            placeholder="{{this.placeHolder}}"
            [value]="this.modelValue"
            [ngClass]="inputClasses"
            [disabled]="this.disabled"
            (focus)="onFocus.emit($event)"
            (blur)="onBlur.emit($event)"
            (submit)="onSubmit.emit($event)" />
            <span 
              ng-if="{{this.message}}"
              [ngClass]="messageClasses">
              {{this.message}}
            </span>
    </label>
    `,
    styleUrls: ['./input-number.scss']
})
export default class InputDateComponent {

  @Input()
  label = 'Label';

  @Input()
  modelValue: number = 0

  @Input()
  max: number = 25;

  @Input()
  min: number = 0;

  @Input()
  disabled: boolean = false;

  @Input()
  inputType: 'default' | 'success' | 'info' | 'warning' | 'error' = 'default';

  @Input()
  placeHolder = '0';

  @Input()
  message = '(*) Simple message text';

  @Output()
  onFocus = new EventEmitter<Event>();

  @Output()
  onBlur = new EventEmitter<Event>();

  @Output()
  onSubmit = new EventEmitter<Event>();

  public get inputClasses(): string[] {
    return [
        'lechatong-input-number',
        `lechatong-input-number--${this.inputType}`,
        this.disabled ? 'lechatong-input-number--disable' : '',
    ]
  }

  public get messageClasses(): string[] {
    return [
        'lechatong-message',
        `lechatong-message--${this.inputType}`,
    ]
  }
}
