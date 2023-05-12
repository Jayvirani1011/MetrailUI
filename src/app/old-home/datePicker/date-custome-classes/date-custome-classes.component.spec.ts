import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateCustomeClassesComponent } from './date-custome-classes.component';

describe('DateCustomeClassesComponent', () => {
  let component: DateCustomeClassesComponent;
  let fixture: ComponentFixture<DateCustomeClassesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DateCustomeClassesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DateCustomeClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
