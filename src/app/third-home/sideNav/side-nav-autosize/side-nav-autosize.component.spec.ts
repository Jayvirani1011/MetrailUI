import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavAutosizeComponent } from './side-nav-autosize.component';

describe('SideNavAutosizeComponent', () => {
  let component: SideNavAutosizeComponent;
  let fixture: ComponentFixture<SideNavAutosizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideNavAutosizeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideNavAutosizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
