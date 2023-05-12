import { Component } from '@angular/core';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';
import * as _moment from 'moment';
import { default as _rollupMoment  } from 'moment';
import { FormControl } from '@angular/forms';

const moment = _rollupMoment  || _moment;

export const MY_FORMAT = {
  parse:{
    dateInput: 'LL'
  },
  display:{
    dateInput: 'LL',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  }
}

@Component({
  selector: 'app-date-custom-formats',
  templateUrl: './date-custom-formats.component.html',
  styleUrls: ['./date-custom-formats.component.css'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMAT},
  ],
})
export class DateCustomFormatsComponent {
  date = new FormControl(moment());
  selected: Date | null | undefined;
}
