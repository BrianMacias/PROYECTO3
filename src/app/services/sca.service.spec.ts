import { TestBed } from '@angular/core/testing';

import { ScaService } from './sca.service';

describe('ScaService', () => {
  let service: ScaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
