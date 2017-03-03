/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BeerContactoService } from './beer-contacto.service';

describe('BeerContactoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BeerContactoService]
    });
  });

  it('should ...', inject([BeerContactoService], (service: BeerContactoService) => {
    expect(service).toBeTruthy();
  }));
});
