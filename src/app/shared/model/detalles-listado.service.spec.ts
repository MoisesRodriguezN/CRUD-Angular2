import { TestBed, inject } from '@angular/core/testing';
import { DetallesListadoService } from './detalles-listado.service';

describe('DetallesListadoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DetallesListadoService]
    });
  });

  it('should ...', inject([DetallesListadoService], (service: DetallesListadoService) => {
    expect(service).toBeTruthy();
  }));
});
