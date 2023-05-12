import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateCustomFormatsComponent } from './date-custom-formats.component';

describe('DateCustomFormatsComponent', () => {
  let component: DateCustomFormatsComponent;
  let fixture: ComponentFixture<DateCustomFormatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DateCustomFormatsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DateCustomFormatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
