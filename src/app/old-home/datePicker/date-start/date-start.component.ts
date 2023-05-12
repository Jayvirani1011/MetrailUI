import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-date-start',
  templateUrl: './date-start.component.html',
  styleUrls: ['./date-start.component.css']
})
export class DateStartComponent {
  startDate = new Date(1990, 0, 1);

  date = new FormControl(new Date());
  serializedDate = new FormControl(new Date().toISOString());
}
