import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, Component, EventEmitter, Input, NO_ERRORS_SCHEMA, Output } from "@angular/core";

@Component({
    selector: 'lechatong-input-text',
    imports: [CommonModule],
    standalone: true,
    schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
    template: `
    <div class="lechatong">
      <span class="lechatong-label">{{this.label}}</span>
      <input
          type="text"
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
    styleUrls: ['./input-text.scss']
})
export default class InputTextComponent {

  @Input()
  modelValue?: string = ''

  @Input()
  label = 'Label';

  @Input()
  disabled: boolean = false;

  @Input()
  inputType: 'default' | 'success' | 'info' | 'warning' | 'error' = 'default';

  @Input()
  placeHolder = 'Write anything...';

  @Input()
  message = '(*) Simple message text';

  @Input()
  showMessage = false

  @Output()
  onInput = new EventEmitter<Event>();

  @Output()
  onChange = new EventEmitter<Event>();

  @Output()
  onFocus = new EventEmitter<Event>();

  @Output()
  onBlur = new EventEmitter<Event>();

  @Output()
  onClick = new EventEmitter<Event>();

  @Output()
  onSubmit= new EventEmitter<Event>();

  public get inputClasses(): string[] {
    return [
        'lechatong-input-text',
        `lechatong-input-text--${this.inputType}`,
        this.disabled ? 'lechatong-input-text--disable' : '',
    ]
  }

  public get messageClasses(): string[] {
    return [
        'lechatong-message',
        `lechatong-message--${this.inputType}`,
    ]
  }
}
