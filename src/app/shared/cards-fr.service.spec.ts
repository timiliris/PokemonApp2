import { TestBed } from '@angular/core/testing';

import { CardsFRService } from './cards-fr.service';

describe('CardsFRService', () => {
  let service: CardsFRService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardsFRService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
