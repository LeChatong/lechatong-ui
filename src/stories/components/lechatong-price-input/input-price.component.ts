import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { NumberonlyDirective } from "src/stories/common/numberonly/numberonly.directive";

@Component({
    selector: 'lechatong-input-price',
    standalone: true,
    hostDirectives:[NumberonlyDirective],
    imports: [CommonModule],
    template: `
    <label class="lechatong">
        <span class="lechatong-label">{{this.label}}</span>
        <div [ngClass]="inputClasses">
          <span>$</span>
          <input
              Numberonly
              placeholder="{{this.placeHolder}}"
              [value]="this.modelValue"
              [disabled]="this.disabled"
              (focus)="onFocus.emit($event)"
              (blur)="onBlur.emit($event)"
              (submit)="onSubmit.emit($event)" />
          <span>USD</span>
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
