import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectCustomErrorStateMatcherComponent } from './select-custom-error-state-matcher.component';

describe('SelectCustomErrorStateMatcherComponent', () => {
  let component: SelectCustomErrorStateMatcherComponent;
  let fixture: ComponentFixture<SelectCustomErrorStateMatcherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectCustomErrorStateMatcherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectCustomErrorStateMatcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
