import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewAutoCompleteteComponent } from './overview-auto-completete.component';

describe('OverviewAutoCompleteteComponent', () => {
  let component: OverviewAutoCompleteteComponent;
  let fixture: ComponentFixture<OverviewAutoCompleteteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverviewAutoCompleteteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverviewAutoCompleteteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
