import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFieldPrefixSuffixComponent } from './form-field-prefix-suffix.component';

describe('FormFieldPrefixSuffixComponent', () => {
  let component: FormFieldPrefixSuffixComponent;
  let fixture: ComponentFixture<FormFieldPrefixSuffixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormFieldPrefixSuffixComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormFieldPrefixSuffixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
