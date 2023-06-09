import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdHomeComponent } from './third-home.component';

describe('ThirdHomeComponent', () => {
  let component: ThirdHomeComponent;
  let fixture: ComponentFixture<ThirdHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThirdHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThirdHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
