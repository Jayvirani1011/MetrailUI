import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtontogglesFormsComponent } from './buttontoggles-forms.component';

describe('ButtontogglesFormsComponent', () => {
  let component: ButtontogglesFormsComponent;
  let fixture: ComponentFixture<ButtontogglesFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtontogglesFormsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtontogglesFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
