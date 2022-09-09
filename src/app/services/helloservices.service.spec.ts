import { TestBed } from '@angular/core/testing';

import { HelloservicesService } from './helloservices.service';

describe('HelloservicesService', () => {
  let service: HelloservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HelloservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
