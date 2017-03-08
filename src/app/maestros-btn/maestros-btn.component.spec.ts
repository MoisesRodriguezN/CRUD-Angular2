import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaestrosBtnComponent } from './maestros-btn.component';

describe('MaestrosBtnComponent', () => {
  let component: MaestrosBtnComponent;
  let fixture: ComponentFixture<MaestrosBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaestrosBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaestrosBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
