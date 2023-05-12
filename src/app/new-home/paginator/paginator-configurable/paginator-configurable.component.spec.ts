import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginatorConfigurableComponent } from './paginator-configurable.component';

describe('PaginatorConfigurableComponent', () => {
  let component: PaginatorConfigurableComponent;
  let fixture: ComponentFixture<PaginatorConfigurableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginatorConfigurableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginatorConfigurableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
