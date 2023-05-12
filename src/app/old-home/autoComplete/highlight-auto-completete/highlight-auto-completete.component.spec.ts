import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightAutoCompleteteComponent } from './highlight-auto-completete.component';

describe('HighlightAutoCompleteteComponent', () => {
  let component: HighlightAutoCompleteteComponent;
  let fixture: ComponentFixture<HighlightAutoCompleteteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HighlightAutoCompleteteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HighlightAutoCompleteteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
