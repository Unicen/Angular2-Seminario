/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BeerContactService } from './beer-contact.service';

describe('BeerContactService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BeerContactService]
    });
  });

  it('should ...', inject([BeerContactService], (service: BeerContactService) => {
    expect(service).toBeTruthy();
  }));
});
