import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaMaestrosComponent } from './lista-maestros.component';

describe('ListaMaestrosComponent', () => {
  let component: ListaMaestrosComponent;
  let fixture: ComponentFixture<ListaMaestrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaMaestrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaMaestrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
