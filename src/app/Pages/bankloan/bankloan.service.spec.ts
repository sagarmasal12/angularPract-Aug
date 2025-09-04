import { TestBed } from '@angular/core/testing';

import { BankloanService } from './bankloan.service';

describe('BankloanService', () => {
  let service: BankloanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BankloanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
