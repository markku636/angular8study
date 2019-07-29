import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lazyload1Component } from './lazyload1.component';

describe('Lazyload1Component', () => {
  let component: Lazyload1Component;
  let fixture: ComponentFixture<Lazyload1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lazyload1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lazyload1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
