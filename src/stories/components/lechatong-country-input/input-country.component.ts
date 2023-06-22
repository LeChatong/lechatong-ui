import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Input, NO_ERRORS_SCHEMA, Output } from "@angular/core";
import countriesData from "../../common/data/countries.lechatong.json";
import { ICountry } from "src/stories/utils/country.lechatong";

@Component({
    selector: 'lechatong-country-text',
    imports: [CommonModule],
    standalone: true,
    schemas: [NO_ERRORS_SCHEMA],
    template: `
    <label class="lechatong">
        <span ng-if="{{this.label}}" class="lechatong-label">{{this.label}}</span>
        <input
          readonly
          [ngClass]="inputClasses"
          [disabled]="this.disabled"
          [placeholder]="this.placeHolder"
          (click)="onClick($event)"
          >
        <span class="lechatong-country-menu" [hidden]="!isFocus">
          <div class="lechatong-country-menu-item" *ngFor="let country of countries"
            (click)="clickItemHandler(country)">
            <img width="20" height="20" [src]="country.image" />
            <b>{{ country.name }}</b>
          </div>
        </span>

        <span ng-if="{{this.message}}" [ngClass]="messageClasses">{{this.message}}</span>
    </label>
    `,
    styleUrls: ['./input-country.scss']
})
export default class InputCountryComponent {

  countries: ICountry[] = countriesData

  @Input()
  label? = 'Label';

  @Input()
  modelValue?: ICountry;

  @Input()
  disabled: boolean = false;

  @Input()
  inputType: 'default' | 'success' | 'info' | 'warning' | 'error' = 'default';

  @Input()
  placeHolder? = '--- Choose a country ---';

  @Input()
  message? = '(*) Simple message text';

  isFocus = false

  clickItemHandler(country: ICountry): void {
    console.log('1')
    if(this.modelValue !== country){
      console.log('2')
      this.modelValue = country
    }
  }

  onFocus(e: Event): void {
    console.log(this.isFocus)
    this.isFocus = true
  };

  onBlur(e: Event): void {
    console.log(this.isFocus)
    this.isFocus = false
  };

  onClick(e: Event){
    this.isFocus = (this.isFocus) ? false : true
  }

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
