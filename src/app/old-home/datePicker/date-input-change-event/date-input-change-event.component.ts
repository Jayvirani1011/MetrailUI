import { Component } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

@Component({
  selector: 'app-date-input-change-event',
  templateUrl: './date-input-change-event.component.html',
  styleUrls: ['./date-input-change-event.component.css']
})
export class DateInputChangeEventComponent {
  events: string[] = [];

  addEvent(type: string, event: MatDatepickerInputEvent<Date>){
    this.events.push(`${type}: ${event.value}`)
  }
}
