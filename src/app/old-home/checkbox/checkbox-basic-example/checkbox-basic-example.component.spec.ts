import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxBasicExampleComponent } from './checkbox-basic-example.component';

describe('CheckboxBasicExampleComponent', () => {
  let component: CheckboxBasicExampleComponent;
  let fixture: ComponentFixture<CheckboxBasicExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckboxBasicExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckboxBasicExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
