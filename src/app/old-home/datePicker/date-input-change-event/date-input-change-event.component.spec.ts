import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateInputChangeEventComponent } from './date-input-change-event.component';

describe('DateInputChangeEventComponent', () => {
  let component: DateInputChangeEventComponent;
  let fixture: ComponentFixture<DateInputChangeEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DateInputChangeEventComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DateInputChangeEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
