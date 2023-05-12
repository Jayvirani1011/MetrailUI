import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAppearanceVariantsComponent } from './form-appearance-variants.component';

describe('FormAppearanceVariantsComponent', () => {
  let component: FormAppearanceVariantsComponent;
  let fixture: ComponentFixture<FormAppearanceVariantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAppearanceVariantsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormAppearanceVariantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
