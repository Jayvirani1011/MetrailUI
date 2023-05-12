import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavCustomEscapeComponent } from './side-nav-custom-escape.component';

describe('SideNavCustomEscapeComponent', () => {
  let component: SideNavCustomEscapeComponent;
  let fixture: ComponentFixture<SideNavCustomEscapeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideNavCustomEscapeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideNavCustomEscapeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
