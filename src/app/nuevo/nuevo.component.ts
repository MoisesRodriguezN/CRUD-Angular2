import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DetallesListadoService} from "../shared/model/detalles-listado.service";

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {

  constructor(private route:ActivatedRoute, private detallesListadoService: DetallesListadoService) { }

  ngOnInit() {
  }

  save(form){
    this.detallesListadoService.createNewDetalle(form.value)
        .subscribe(
            () => {
              alert("Se ha creado correctamente");
              form.reset();
            },
            err => alert(`error al crear el detalle ${err}`)
        );
  }

}
