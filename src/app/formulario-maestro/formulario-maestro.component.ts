import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'formulario-maestro',
  templateUrl: './formulario-maestro.component.html',
  styleUrls: ['./formulario-maestro.component.css']
})
export class FormularioMaestroComponent implements OnInit {

  form:FormGroup;

  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      dni: ['',Validators.required],
      asignatura: ['',Validators.required],
      url: ['',Validators.required]
    });

  }

  isErrorVisible(field:string, error:string){

    return this.form.controls[field].dirty
        && this.form.controls[field].errors &&
        this.form.controls[field].errors[error];
  }


  reset(){
    this.form.reset();
  }

  get valid() {
    return this.form.valid;
  }

  get value() {
    return this.form.value;
  }
}
