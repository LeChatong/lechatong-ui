import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";

@Component({
    selector: 'lechatong-input-text',
    template: ` 
    <label>
        <span class="lechatong-label">{{this.label}}</span>
        <input 
            [ngClass]="classes"
            [placeHolder]="getPlaceHolder"
            type="text" />
    </label>`,
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
  placeHolder = 'Saisir le texte';

  @Input()
  message = 'message';

  public get classes(): string[] {
    return [
        'lechatong-input-text',
        this.disabled ? 'lechatong-input-text--disable' : `lechatong-input-text--${this.inputType}`,
    ]
  }

  public get getPlaceHolder(): string {
    return `${this.placeHolder}`
  }
}
