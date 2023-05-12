import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeRoundTextBoxComponent } from './practice-round-text-box.component';

describe('PracticeRoundTextBoxComponent', () => {
  let component: PracticeRoundTextBoxComponent;
  let fixture: ComponentFixture<PracticeRoundTextBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PracticeRoundTextBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PracticeRoundTextBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
