import { ComponentFixture, TestBed } from '@angular/core/testing';

import { M3component3Component } from './m3component3.component';

describe('M3component3Component', () => {
  let component: M3component3Component;
  let fixture: ComponentFixture<M3component3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ M3component3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(M3component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
