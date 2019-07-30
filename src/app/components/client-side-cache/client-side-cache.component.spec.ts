import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientSideCacheComponent } from './client-side-cache.component';

describe('ClientSideCacheComponent', () => {
  let component: ClientSideCacheComponent;
  let fixture: ComponentFixture<ClientSideCacheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientSideCacheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientSideCacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
