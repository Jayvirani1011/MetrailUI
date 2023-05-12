import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateStartComponent } from './date-start.component';

describe('DateStartComponent', () => {
  let component: DateStartComponent;
  let fixture: ComponentFixture<DateStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DateStartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DateStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
