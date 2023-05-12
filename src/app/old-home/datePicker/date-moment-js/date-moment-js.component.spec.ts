import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateMomentJsComponent } from './date-moment-js.component';

describe('DateMomentJsComponent', () => {
  let component: DateMomentJsComponent;
  let fixture: ComponentFixture<DateMomentJsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DateMomentJsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DateMomentJsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
