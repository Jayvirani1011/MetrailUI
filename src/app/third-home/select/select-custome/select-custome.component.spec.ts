import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectCustomeComponent } from './select-custome.component';

describe('SelectCustomeComponent', () => {
  let component: SelectCustomeComponent;
  let fixture: ComponentFixture<SelectCustomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectCustomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectCustomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
