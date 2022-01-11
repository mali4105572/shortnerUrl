import { TestBed } from '@angular/core/testing'; 
import { CartsHttpService } from './cart-http.service';
 

describe('CartsHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CartsHttpService = TestBed.get(CartsHttpService);
    expect(service).toBeTruthy();
  });
});
