import { TestBed } from '@angular/core/testing';

import { NgxDymoService } from './ngx-dymo.service';

describe('NgxDymoService', () => {
  let service: NgxDymoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxDymoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
