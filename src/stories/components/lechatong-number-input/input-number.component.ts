import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Message } from "src/stories/utils/message.const";

@Component({
    selector: 'lechatong-input-number',
    imports: [CommonModule],
    template: `
    <label class="lechatong">
        <span class="lechatong-label">{{this.label}}</span>
        <input
            type="number"
            placeholder="{{this.placeHolder}}"
            inputmode="numeric"
            [value]="this.modelValue"
            [ngClass]="inputClasses"
            [max]="max"
            [min]="min"
            [disabled]="this.disabled"
            (input)="inputHandler($event)"
            (focus)="onFocus.emit($event)"
            (blur)="blurHandler($event)"
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
export default class InputNumberComponent {

  @Input()
  label = 'Label';

  @Input()
  modelValue?: number = 50

  @Input()
  max?: number = 1000

  @Input()
  min?: number = 0

  @Input()
  disabled: boolean = false;

  @Input()
  inputType: 'default' | 'success' | 'info' | 'warning' | 'error' = 'default';

  @Input()
  placeHolder = 'Write a number';

  @Input()
  message = '(*) Simple message text';

  @Output()
  onFocus = new EventEmitter<Event>();

  @Output()
  onSubmit = new EventEmitter<Event>();

  inputHandler(e: Event): void {
    // let inputValue = (e.target as HTMLInputElement).value
  }

  blurHandler(e: Event): void {
    let inputValue = parseInt((e.target as HTMLInputElement).value)
    if(!inputValue){
      this.defineInput('error', Message.IS_EMPTY)
    }
    if(this.min && inputValue < this.min){
      console.log('greather')
      this.defineInput('error', Message.GREATER_THAN + this.min)
    }
    if(this.max && inputValue > this.max){
      console.log('less')
      this.defineInput('error', Message.LESS_THAN + this.max)
    }
  }

  defineInput(type: any, msg: string): void{
    this.inputType = type
    this.message = msg
  }

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
