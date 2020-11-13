import { ComponentFixture, TestBed } from '@angular/core/testing';

import { M4component4Component } from './m4component4.component';

describe('M4component4Component', () => {
  let component: M4component4Component;
  let fixture: ComponentFixture<M4component4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ M4component4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(M4component4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
