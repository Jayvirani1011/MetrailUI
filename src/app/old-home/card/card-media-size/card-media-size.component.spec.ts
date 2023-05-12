import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMediaSizeComponent } from './card-media-size.component';

describe('CardMediaSizeComponent', () => {
  let component: CardMediaSizeComponent;
  let fixture: ComponentFixture<CardMediaSizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardMediaSizeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardMediaSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
