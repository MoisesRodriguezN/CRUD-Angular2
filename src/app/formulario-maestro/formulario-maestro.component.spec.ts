import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioMaestroComponent } from './formulario-maestro.component';

describe('FormularioMaestroComponent', () => {
  let component: FormularioMaestroComponent;
  let fixture: ComponentFixture<FormularioMaestroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioMaestroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioMaestroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
