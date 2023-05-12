import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateDifferentLocalComponent } from './date-different-local.component';

describe('DateDifferentLocalComponent', () => {
  let component: DateDifferentLocalComponent;
  let fixture: ComponentFixture<DateDifferentLocalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DateDifferentLocalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DateDifferentLocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
