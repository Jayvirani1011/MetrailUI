import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicPanelComponent } from './basic-panel.component';

describe('BasicPanelComponent', () => {
  let component: BasicPanelComponent;
  let fixture: ComponentFixture<BasicPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
