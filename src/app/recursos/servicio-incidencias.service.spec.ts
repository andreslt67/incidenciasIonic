import { TestBed } from '@angular/core/testing';

import { ServicioIncidenciasService } from './servicio-incidencias.service';

describe('ServicioIncidenciasService', () => {
  let service: ServicioIncidenciasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioIncidenciasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
