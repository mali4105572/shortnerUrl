import { TestBed } from '@angular/core/testing'; 
import { SalesHttpService } from './sales-http.service';
 

describe('SalesHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SalesHttpService = TestBed.get(SalesHttpService);
    expect(service).toBeTruthy();
  });
});
