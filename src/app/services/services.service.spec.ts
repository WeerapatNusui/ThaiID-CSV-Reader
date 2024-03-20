import { TestBed } from '@angular/core/testing';

import { ApiResult, ListForm } from './services.service';

describe('ServicesService', () => {
  let service: ApiResult;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiResult);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

describe('ServicesService', () => {
  let service: ListForm;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListForm);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
