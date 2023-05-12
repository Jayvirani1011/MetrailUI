import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionGroupAutoCompleteteComponent } from './option-group-auto-completete.component';

describe('OptionGroupAutoCompleteteComponent', () => {
  let component: OptionGroupAutoCompleteteComponent;
  let fixture: ComponentFixture<OptionGroupAutoCompleteteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptionGroupAutoCompleteteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptionGroupAutoCompleteteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
