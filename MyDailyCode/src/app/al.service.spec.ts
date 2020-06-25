import { TestBed } from '@angular/core/testing';

import { AlService } from './al.service';

describe('AlService', () => {
  let service: AlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
