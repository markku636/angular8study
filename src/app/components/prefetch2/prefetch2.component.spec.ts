import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Prefetch2Component } from './prefetch2.component';

describe('Prefetch2Component', () => {
  let component: Prefetch2Component;
  let fixture: ComponentFixture<Prefetch2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Prefetch2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Prefetch2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
