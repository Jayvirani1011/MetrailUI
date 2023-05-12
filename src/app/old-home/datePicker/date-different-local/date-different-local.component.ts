import { Component, Inject } from '@angular/core';
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS, MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';

@Component({
  selector: 'app-date-different-local',
  templateUrl: './date-different-local.component.html',
  styleUrls: ['./date-different-local.component.css'],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'ja-jp'},
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
  ],
})
export class DateDifferentLocalComponent {

  minDate: Date;
  maxDate: Date;

  constructor(private _adapter: DateAdapter<any>, @Inject(MAT_DATE_LOCALE) private _locale: string){
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 20, 0, 1);
    this.maxDate = new Date(currentYear + 1, 11, 31);
  }

  french(){
    this._locale = 'fr';
    this._adapter.setLocale(this._locale);
  }

  getDateFormatString(): string{
    if (this._locale === 'ja-jp') {
      return 'YYYY/MM/DD';
    }else if(this._locale === 'fr'){
      return 'DD/MM/YYYY';
    }
    return '';
  }
}
