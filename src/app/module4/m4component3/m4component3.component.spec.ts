import { ComponentFixture, TestBed } from '@angular/core/testing';

import { M4component3Component } from './m4component3.component';

describe('M4component3Component', () => {
  let component: M4component3Component;
  let fixture: ComponentFixture<M4component3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ M4component3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(M4component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
