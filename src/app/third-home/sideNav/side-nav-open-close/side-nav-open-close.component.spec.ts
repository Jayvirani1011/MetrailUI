import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavOpenCloseComponent } from './side-nav-open-close.component';

describe('SideNavOpenCloseComponent', () => {
  let component: SideNavOpenCloseComponent;
  let fixture: ComponentFixture<SideNavOpenCloseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideNavOpenCloseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideNavOpenCloseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
