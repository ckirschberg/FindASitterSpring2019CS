import { TestBed } from '@angular/core/testing';

import { TempDataService } from './temp-data.service';

describe('TempDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TempDataService = TestBed.get(TempDataService);
    expect(service).toBeTruthy();
  });
});
