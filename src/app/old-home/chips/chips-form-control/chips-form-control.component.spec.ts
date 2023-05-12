import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipsFormControlComponent } from './chips-form-control.component';

describe('ChipsFormControlComponent', () => {
  let component: ChipsFormControlComponent;
  let fixture: ComponentFixture<ChipsFormControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChipsFormControlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChipsFormControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
