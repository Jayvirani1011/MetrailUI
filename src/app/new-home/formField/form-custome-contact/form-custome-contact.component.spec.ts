import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCustomeContactComponent } from './form-custome-contact.component';

describe('FormCustomeContactComponent', () => {
  let component: FormCustomeContactComponent;
  let fixture: ComponentFixture<FormCustomeContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCustomeContactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormCustomeContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
