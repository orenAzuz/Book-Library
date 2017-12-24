import { TestBed, inject } from '@angular/core/testing';

import { WindowWidthServiceService } from './window-width-service.service';

describe('WindowWidthServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WindowWidthServiceService]
    });
  });

  it('should be created', inject([WindowWidthServiceService], (service: WindowWidthServiceService) => {
    expect(service).toBeTruthy();
  }));
});
