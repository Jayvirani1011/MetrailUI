import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputClearButtonComponent } from './input-clear-button.component';

describe('InputClearButtonComponent', () => {
  let component: InputClearButtonComponent;
  let fixture: ComponentFixture<InputClearButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputClearButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputClearButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
