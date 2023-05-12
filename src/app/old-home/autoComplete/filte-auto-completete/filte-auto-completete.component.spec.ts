import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilteAutoCompleteteComponent } from './filte-auto-completete.component';

describe('FilteAutoCompleteteComponent', () => {
  let component: FilteAutoCompleteteComponent;
  let fixture: ComponentFixture<FilteAutoCompleteteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilteAutoCompleteteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilteAutoCompleteteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
