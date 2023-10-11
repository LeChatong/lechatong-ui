import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Input, NO_ERRORS_SCHEMA, Output } from "@angular/core";
import { NumberOnlyDirective } from "src/stories/common/directives/numberonly/numberonly.directive";
import { Message } from "src/stories/utils/message.const";

@Component({
    selector: 'lechatong-input-number',
    standalone: true,
    hostDirectives:[NumberOnlyDirective],
    imports: [CommonModule, NumberOnlyDirective],
    schemas: [NO_ERRORS_SCHEMA],
    template: `
    <div class="lechatong">
        <span class="lechatong-label">{{this.label}}</span>
        <input
            numberonly
            [allowDecimals]="this.allowDecimals"
            [allowSign]="this.allowSign"
            [decimalSeparator]="this.decimalSeparator"
            [twoNumberAfterDecimal]="this.twoNumberAfterDecimal"
            placeholder="{{this.placeHolder}}"
            [value]="this.modelValue"
            [ngClass]="inputClasses"
            [disabled]="this.disabled"
            (input)="onInput.emit($event)"
            (change)="onChange.emit($event)"
            (blur)="onBlur.emit($event)"
            (click)="onClick.emit($event)"
            (focus)="onFocus.emit($event)"
            (submit)="onSubmit.emit($event)"
        />
            <span
              *ngIf="this.showMessage"
              [ngClass]="messageClasses">
              {{this.message}}
            </span>
  </div>
    `,
    styleUrls: ['./input-number.scss']
})
export default class InputNumberComponent {

  @Input()
  label = 'Label';

  @Input()
  modelValue: string = ''

  @Input()
  disabled: boolean = false;

  @Input()
  inputType: 'default' | 'success' | 'info' | 'warning' | 'error' = 'default';

  @Input()
  placeHolder = 'Write a number';

  @Input()
  message = '(*) Simple message text';

  @Input()
  showMessage = false

  @Input()
  allowDecimals = true;

  @Input()
  allowSign = true;

  @Input()
  decimalSeparator: '.' | ',' = '.';

  @Input()
  twoNumberAfterDecimal = false;

  @Output()
  onFocus = new EventEmitter<Event>();

  @Output()
  onChange = new EventEmitter<Event>();

  @Output()
  onSubmit = new EventEmitter<Event>();

  @Output()
  onInput= new EventEmitter<Event>();

  @Output()
  onBlur= new EventEmitter<Event>();

  @Output()
  onClick = new EventEmitter<Event>();

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
