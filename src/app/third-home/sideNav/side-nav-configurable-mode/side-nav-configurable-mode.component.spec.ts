import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavConfigurableModeComponent } from './side-nav-configurable-mode.component';

describe('SideNavConfigurableModeComponent', () => {
  let component: SideNavConfigurableModeComponent;
  let fixture: ComponentFixture<SideNavConfigurableModeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideNavConfigurableModeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideNavConfigurableModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
