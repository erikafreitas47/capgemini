import { TestBed } from '@angular/core/testing';

import { ServiceAuthenticationService } from './service-authentication.service';

describe('ServiceAuthenticationService', () => {
  let service: ServiceAuthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceAuthenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
