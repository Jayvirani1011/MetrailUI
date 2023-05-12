import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateRangeCustomComponent } from './date-range-custom.component';

describe('DateRangeCustomComponent', () => {
  let component: DateRangeCustomComponent;
  let fixture: ComponentFixture<DateRangeCustomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DateRangeCustomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DateRangeCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
