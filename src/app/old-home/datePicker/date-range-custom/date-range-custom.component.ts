import { Component, Injectable } from '@angular/core';
import { DateAdapter } from '@angular/material/core';
import { DateRange, MAT_DATE_RANGE_SELECTION_STRATEGY, MatDateRangeSelectionStrategy } from '@angular/material/datepicker';

@Injectable()
export class Demo<D> implements MatDateRangeSelectionStrategy<D>{
  constructor(private _dateAdapter: DateAdapter<D>){}

  selectionFinished(date: D | null): DateRange<D>{
    return this._createFiveDayRange(date);
  }

  createPreview(activeDate: D | null): DateRange<D> {
    return this._createFiveDayRange(activeDate);
  }

  private _createFiveDayRange(date: D | null): DateRange<D> {
    if(date){
      const start = this._dateAdapter.addCalendarDays(date, -2);
      const end = this._dateAdapter.addCalendarDays(date, 2);
      return new DateRange<D>(start, end);
    }

    return new DateRange<D>(null, null);
  }
}

@Component({
  selector: 'app-date-range-custom',
  templateUrl: './date-range-custom.component.html',
  styleUrls: ['./date-range-custom.component.css'],
  providers: [
    {
      provide: MAT_DATE_RANGE_SELECTION_STRATEGY,
      useClass: Demo,
    }
  ]
})
export class DateRangeCustomComponent {
  
}

