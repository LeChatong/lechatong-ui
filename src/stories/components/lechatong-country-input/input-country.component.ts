import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Input, NO_ERRORS_SCHEMA, Output } from "@angular/core";
import { countriesData } from '../../common/data/countries.lechatong';
import { ICountry } from "src/stories/utils/country.lechatong";

@Component({
    selector: 'lechatong-country-text',
    imports: [CommonModule],
    standalone: true,
    schemas: [NO_ERRORS_SCHEMA],
    template: `
    <div class="lechatong">
        <span ng-if="{{this.label}}" class="lechatong-label">{{this.label}}</span>
        <input
          readonly
          class="lechatong-country-bloc-input"
          placeholder="{{this.placeHolder}}"
          [value]="this.selectValue"
          (click)="showCountryList()"
          (blur)="onBlur($event)"
        >
        <!-- <span class="lechatong-country-bloc">
          <span class="lechatong-country-bloc-input">

            <span ng-if="{{this.selectValue}}" class="lechatong-country-bloc-input-value">{{ selectValue }}</span>
            <span ng-if="{{!this.selectValue}}" class="lechatong-country-bloc-placeholder">{{this.placeHolder}}</span>
            <svg
              class="lechatong-country-bloc-input-arrow-top"
              width="14"
              height="8"
              viewbox="0 0 14 8"
              fill="none"
              xmlns="http:/www.w3.org/2000/svg"
            >
              <path
                stroke="#007D8F"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
              />
            </svg>
          </span>
        </span> -->
        <span class="lechatong-country-bloc-menu" [hidden]="!isFocus">
          <span *ngFor="let country of countries">
            <span class="lechatong-country-bloc-menu-item">{{country.name}}</span>
          </span>
        </span>
        <span ng-if="{{this.message}}" [ngClass]="messageClasses">{{this.message}}</span>
    </div>
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

  selectValue: any = null

  clickItemHandler(): void {
    console.log('1')
    // if(this.modelValue !== country){
    //   console.log('2')
    //   this.modelValue = country
    // }
  }

  onFocus(e: Event): void {
    console.log(this.isFocus)
    this.isFocus = true
  };

  onBlur(e: Event): void {
    console.log(this.isFocus)
    this.isFocus = false
  };

  showCountryList(){
    console.log(this.isFocus)
    if(this.isFocus){this.isFocus = false}else{this.isFocus = true}
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
