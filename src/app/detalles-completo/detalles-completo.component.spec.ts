import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesCompletoComponent } from './detalles-completo.component';

describe('DetallesCompletoComponent', () => {
  let component: DetallesCompletoComponent;
  let fixture: ComponentFixture<DetallesCompletoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallesCompletoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesCompletoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
