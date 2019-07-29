import { TestBed } from '@angular/core/testing';

import { PaginationBase } from './pagination.base';

describe('PaginationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PaginationBase<any> = TestBed.get(PaginationBase);
    expect(service).toBeTruthy();
  });
});
