import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { max } from "rxjs";
import { NumberOnlyDirective } from "src/stories/common/directives/numberonly/numberonly.directive";

@Component({
    selector: 'lechatong-input-price',
    standalone: true,
    hostDirectives:[NumberOnlyDirective],
    imports: [CommonModule, NumberOnlyDirective],
    template: `
        <div class="lechatong">
          <span class="lechatong-label">{{this.label}}</span>
          <div class="lechatong-bloc-price">
            <input
              numberonly
              [allowDecimals]="this.allowDecimals"
              [allowSign]="this.allowSign"
              [decimalSeparator]="this.separatorDecimal"
              [twoNumberAfterDecimal]="this.twoNumberAfterDecimal"
              placeholder="{{this.placeHolder}}"
              [ngClass]="inputClasses"
              class="lechatong-input-price-text"
              [value]="this.modelValue"
              [disabled]="this.disabled"
              (input)="onInput.emit($event)"
              (change)="onChange.emit($event)"
              (blur)="onBlur.emit($event)"
              (click)="onClick.emit($event)"
              (focus)="onFocus.emit($event)"
              (submit)="onSubmit.emit($event)"
            />
            <span [ngClass]="suffixClasses">
              {{this.suffix}}
            </span>
          </div>

          <span [ngClass]="inputClasses">

          </span>
          <span
            *ngIf="this.showMessage"
            [ngClass]="messageClasses">
              {{this.message}}
          </span>
        </div>
    `,
    styleUrls: ['./input-price.scss']
})
export default class InputPriceComponent {

  @Input()
  label = 'Label';

  @Input()
  modelValue?: string = ''

  @Input()
  disabled: boolean = false;

  @Input()
  inputType: 'default' | 'success' | 'info' | 'warning' | 'error' = 'default';

  @Input()
  placeHolder = 'Write anything...';

  @Input()
  message = '(*) Simple message text';

  @Input()
  suffix? = 'USD';

  @Input()
  showMessage = false

  @Input()
  allowDecimals = true;

  @Input()
  allowSign = true;

  @Input()
  separatorDecimal: '.' | ',' = '.';

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
        'lechatong-input-price',
        `lechatong-input-price--${this.inputType}`,
        this.disabled ? 'lechatong-input-price--disable' : '',
    ]
  }

  public get suffixClasses(): string[] {
    return [
      'lechatong-price-suffix',
      `lechatong-price-suffix--${this.inputType}`,
    ]
  }

  public get messageClasses(): string[] {
    return [
        'lechatong-message',
        `lechatong-message--${this.inputType}`,
    ]
  }
}
