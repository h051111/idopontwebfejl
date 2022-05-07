import { TestBed } from '@angular/core/testing';

import { IdopontfoglalService } from './idopontfoglal.service';

describe('IdopontfoglalService', () => {
  let service: IdopontfoglalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IdopontfoglalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
