import { Component } from '@angular/core';

@Component({
  selector: 'app-date-filter-validation',
  templateUrl: './date-filter-validation.component.html',
  styleUrls: ['./date-filter-validation.component.css']
})
export class DateFilterValidationComponent {
  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    return day !== 0 && day !== 6;
  }
}
