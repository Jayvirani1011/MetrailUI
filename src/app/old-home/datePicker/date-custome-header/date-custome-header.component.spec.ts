import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateCustomeHeaderComponent } from './date-custome-header.component';

describe('DateCustomeHeaderComponent', () => {
  let component: DateCustomeHeaderComponent;
  let fixture: ComponentFixture<DateCustomeHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DateCustomeHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DateCustomeHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
