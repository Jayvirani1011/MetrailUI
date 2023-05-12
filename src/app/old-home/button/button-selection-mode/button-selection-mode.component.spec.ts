import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonSelectionModeComponent } from './button-selection-mode.component';

describe('ButtonSelectionModeComponent', () => {
  let component: ButtonSelectionModeComponent;
  let fixture: ComponentFixture<ButtonSelectionModeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonSelectionModeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonSelectionModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
