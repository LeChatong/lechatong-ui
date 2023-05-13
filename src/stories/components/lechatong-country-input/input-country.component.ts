import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'lechatong-country-text',
    imports: [CommonModule],
    template: ` 
    <label class="lechatong">
        <span class="lechatong-label">{{this.label}}</span>
        <input 
            type="text"
            placeholder="{{this.placeHolder}}"
            maxlength="{{this.maxLenght}}"
            minlength="{{this.minLenght}}"
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
    styleUrls: ['./input-country.scss']
})
export default class InputContryComponent {

  @Input()
  label = 'Label';

  @Input()
  maxLenght: number = 25;

  @Input()
  minLenght: number = 0;

  @Input()
  disabled: boolean = false;

  @Input()
  inputType: 'default' | 'success' | 'info' | 'warning' | 'error' = 'default';

  @Input()
  placeHolder = 'Write anything...';

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
        'lechatong-input-country',
        `lechatong-input-country--${this.inputType}`,
        this.disabled ? 'lechatong-input-country--disable' : '',
    ]
  }

  public get messageClasses(): string[] {
    return [
        'lechatong-message',
        `lechatong-message--${this.inputType}`,
    ]
  }
}
