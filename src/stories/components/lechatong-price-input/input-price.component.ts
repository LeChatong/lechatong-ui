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
    <label class="lechatong">
        <span class="lechatong-label">{{this.label}}</span>
        <div [ngClass]="inputClasses">
          <span class="lechatong-money-sign" ng-if="{{this.moneySign}}">{{this.moneySign}}</span>
          <input
              numberonly [allowDecimals]="true"
              [allowSign]="false"
              placeholder="{{this.placeHolder}}"
              [value]="this.modelValue"
              [disabled]="this.disabled"
              (focus)="onFocus.emit($event)"
              (blur)="onBlur.emit($event)"
              (submit)="onSubmit.emit($event)" />
          <span ng-if="{{this.suffix}}">{{this.suffix}}</span>
        </div>

        <span
          ng-if="{{this.message}}"
          [ngClass]="messageClasses">
          {{this.message}}
        </span>
    </label>
    `,
    styleUrls: ['./input-price.scss']
})
export default class InputPriceComponent {

  @Input()
  label = 'Label';

  @Input()
  modelValue?: number = 50

  @Input()
  max: number = 25;

  @Input()
  min: number = 0;

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
  moneySign? = '$';

  @Output()
  onFocus = new EventEmitter<Event>();

  @Output()
  onBlur = new EventEmitter<Event>();

  @Output()
  onSubmit = new EventEmitter<Event>();

  public get inputClasses(): string[] {
    return [
        'lechatong-input-price',
        `lechatong-input-price--${this.inputType}`,
        this.disabled ? 'lechatong-input-price--disable' : '',
    ]
  }

  public get messageClasses(): string[] {
    return [
        'lechatong-message',
        `lechatong-message--${this.inputType}`,
    ]
  }
}
