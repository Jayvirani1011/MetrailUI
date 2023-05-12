import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuNestedComponent } from './menu-nested.component';

describe('MenuNestedComponent', () => {
  let component: MenuNestedComponent;
  let fixture: ComponentFixture<MenuNestedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuNestedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuNestedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
