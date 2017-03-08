import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoMaestroComponent } from './nuevo-maestro.component';

describe('NuevoMaestroComponent', () => {
  let component: NuevoMaestroComponent;
  let fixture: ComponentFixture<NuevoMaestroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevoMaestroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoMaestroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
