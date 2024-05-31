import { TestBed } from '@angular/core/testing';

import { NgxScarlazzettaService } from './ngx-scarlazzetta.service';

describe('NgxScarlazzettaService', () => {
  let service: NgxScarlazzettaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxScarlazzettaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
