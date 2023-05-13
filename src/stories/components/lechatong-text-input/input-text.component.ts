import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";

@Component({
    selector: 'lechatong-input-text',
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
            [disabled]="this.disabled" />
            <span 
              ng-if="{{this.message}}"
              [ngClass]="messageClasses">
              {{this.message}}
            </span>
    </label>
    `,
    styleUrls: ['./input-text.scss']
})
export default class InputTextComponent {

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
