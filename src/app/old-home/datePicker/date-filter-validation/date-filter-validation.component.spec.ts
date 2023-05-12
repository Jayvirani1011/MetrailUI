import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateFilterValidationComponent } from './date-filter-validation.component';

describe('DateFilterValidationComponent', () => {
  let component: DateFilterValidationComponent;
  let fixture: ComponentFixture<DateFilterValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DateFilterValidationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DateFilterValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
