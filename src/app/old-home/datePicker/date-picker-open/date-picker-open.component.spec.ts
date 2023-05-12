import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatePickerOpenComponent } from './date-picker-open.component';

describe('DatePickerOpenComponent', () => {
  let component: DatePickerOpenComponent;
  let fixture: ComponentFixture<DatePickerOpenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatePickerOpenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatePickerOpenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
