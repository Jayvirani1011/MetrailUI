import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavBackgroundSettingComponent } from './side-nav-background-setting.component';

describe('SideNavBackgroundSettingComponent', () => {
  let component: SideNavBackgroundSettingComponent;
  let fixture: ComponentFixture<SideNavBackgroundSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideNavBackgroundSettingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideNavBackgroundSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
