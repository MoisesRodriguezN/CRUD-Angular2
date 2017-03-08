import { TestBed, inject } from '@angular/core/testing';
import { MaestrosBtnService } from './maestros-btn.service';

describe('MaestrosBtnService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MaestrosBtnService]
    });
  });

  it('should ...', inject([MaestrosBtnService], (service: MaestrosBtnService) => {
    expect(service).toBeTruthy();
  }));
});
