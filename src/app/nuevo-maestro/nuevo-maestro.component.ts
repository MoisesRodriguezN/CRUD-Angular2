import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MaestrosService} from "../shared/model/maestros.service";

@Component({
  selector: 'app-nuevo-maestro',
  templateUrl: './nuevo-maestro.component.html',
  styleUrls: ['./nuevo-maestro.component.css']
})
export class NuevoMaestroComponent implements OnInit {


  constructor(private route:ActivatedRoute, private maestroService: MaestrosService) { }

  ngOnInit() {
  }

  save(form){
    this.maestroService.createNewMaestro(form.value)
        .subscribe(
            () => {
              alert("Se ha creado correctamente");
              form.reset();
            },
            err => alert(`error al crear el maestro ${err}`)
        );
  }

}
