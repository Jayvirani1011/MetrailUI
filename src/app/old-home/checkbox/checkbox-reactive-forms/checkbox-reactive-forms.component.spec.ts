import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxReactiveFormsComponent } from './checkbox-reactive-forms.component';

describe('CheckboxReactiveFormsComponent', () => {
  let component: CheckboxReactiveFormsComponent;
  let fixture: ComponentFixture<CheckboxReactiveFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckboxReactiveFormsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckboxReactiveFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
