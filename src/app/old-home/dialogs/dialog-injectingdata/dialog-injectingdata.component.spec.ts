import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogInjectingdataComponent } from './dialog-injectingdata.component';

describe('DialogInjectingdataComponent', () => {
  let component: DialogInjectingdataComponent;
  let fixture: ComponentFixture<DialogInjectingdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogInjectingdataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogInjectingdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
