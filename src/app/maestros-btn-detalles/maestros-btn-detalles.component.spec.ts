import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaestrosBtnDetallesComponent } from './maestros-btn-detalles.component';

describe('MaestrosBtnDetallesComponent', () => {
  let component: MaestrosBtnDetallesComponent;
  let fixture: ComponentFixture<MaestrosBtnDetallesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaestrosBtnDetallesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaestrosBtnDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
