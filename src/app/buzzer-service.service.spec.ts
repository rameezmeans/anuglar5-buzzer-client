import { TestBed, inject } from '@angular/core/testing';

import { BuzzerServiceService } from './buzzer-service.service';

describe('BuzzerServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BuzzerServiceService]
    });
  });

  it('should be created', inject([BuzzerServiceService], (service: BuzzerServiceService) => {
    expect(service).toBeTruthy();
  }));
});
