import { Component, ViewEncapsulation } from '@angular/core';
import { MatCalendarCellClassFunction } from '@angular/material/datepicker';

@Component({
  selector: 'app-date-custome-classes',
  templateUrl: './date-custome-classes.component.html',
  styleUrls: ['./date-custome-classes.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class DateCustomeClassesComponent {
  dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {
    if(view == 'month'){
      const date = cellDate.getDate();

      return date === 1 || date === 20 ? 'example-custom-date-class' : '';
    }
    return '';
  }
}
