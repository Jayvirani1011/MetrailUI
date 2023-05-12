import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginatorInternationalizationComponent } from './paginator-internationalization.component';

describe('PaginatorInternationalizationComponent', () => {
  let component: PaginatorInternationalizationComponent;
  let fixture: ComponentFixture<PaginatorInternationalizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginatorInternationalizationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginatorInternationalizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
