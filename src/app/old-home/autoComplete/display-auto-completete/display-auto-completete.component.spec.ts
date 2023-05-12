import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayAutoCompleteteComponent } from './display-auto-completete.component';

describe('DisplayAutoCompleteteComponent', () => {
  let component: DisplayAutoCompleteteComponent;
  let fixture: ComponentFixture<DisplayAutoCompleteteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayAutoCompleteteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayAutoCompleteteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
