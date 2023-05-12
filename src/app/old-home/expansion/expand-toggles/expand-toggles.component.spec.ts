import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandTogglesComponent } from './expand-toggles.component';

describe('ExpandTogglesComponent', () => {
  let component: ExpandTogglesComponent;
  let fixture: ComponentFixture<ExpandTogglesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpandTogglesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpandTogglesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
