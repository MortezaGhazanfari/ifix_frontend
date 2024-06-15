import { TestBed } from '@angular/core/testing';

import { RepairorderService } from './repairorder.service';

describe('RepairorderService', () => {
  let service: RepairorderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RepairorderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
