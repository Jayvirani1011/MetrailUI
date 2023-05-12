import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonExclusiveComponent } from './button-exclusive.component';

describe('ButtonExclusiveComponent', () => {
  let component: ButtonExclusiveComponent;
  let fixture: ComponentFixture<ButtonExclusiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonExclusiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonExclusiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
