import { TestBed } from '@angular/core/testing';

import { LibNService } from './lib-n.service';

describe('LibNService', () => {
  let service: LibNService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibNService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
