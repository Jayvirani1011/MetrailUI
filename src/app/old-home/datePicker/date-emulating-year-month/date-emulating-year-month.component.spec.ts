import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateEmulatingYearMonthComponent } from './date-emulating-year-month.component';

describe('DateEmulatingYearMonthComponent', () => {
  let component: DateEmulatingYearMonthComponent;
  let fixture: ComponentFixture<DateEmulatingYearMonthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DateEmulatingYearMonthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DateEmulatingYearMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
