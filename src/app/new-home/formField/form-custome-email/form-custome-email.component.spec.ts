import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCustomeEmailComponent } from './form-custome-email.component';

describe('FormCustomeEmailComponent', () => {
  let component: FormCustomeEmailComponent;
  let fixture: ComponentFixture<FormCustomeEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCustomeEmailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormCustomeEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
