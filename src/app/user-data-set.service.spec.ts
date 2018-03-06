import { TestBed, inject } from '@angular/core/testing';

import { UserDataSetService } from './user-data-set.service';

describe('UserDataSetService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserDataSetService]
    });
  });

  it('should be created', inject([UserDataSetService], (service: UserDataSetService) => {
    expect(service).toBeTruthy();
  }));
});
