import { TestBed } from '@angular/core/testing';

import { ChamadaService } from './chamada.service';

describe('ChamadaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChamadaService = TestBed.get(ChamadaService);
    expect(service).toBeTruthy();
  });
});
