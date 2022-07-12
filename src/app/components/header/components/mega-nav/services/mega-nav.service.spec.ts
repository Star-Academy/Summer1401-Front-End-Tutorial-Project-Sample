import { TestBed } from '@angular/core/testing';

import { MegaNavService } from './mega-nav.service';

describe('MegaNavService', () => {
  let service: MegaNavService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MegaNavService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
