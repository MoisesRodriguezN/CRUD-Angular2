import { Component, OnInit } from '@angular/core';
import {MaestrosService} from "../shared/model/maestros.service";
import {Maestro} from "../shared/model/maestro";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    //maestros: Maestro[];
    todosLosMaestros: Maestro[];
    filtrado: Maestro[];

  constructor(private maestrosService: MaestrosService) { }

  ngOnInit() {
      this.maestrosService.findAllMaestros()
          .do(console.log)
         .subscribe(
              maestros => this.todosLosMaestros = this.filtrado = maestros
         );

  }

      buscar(buscar:string){
          this.filtrado = this.todosLosMaestros.filter(maestro => maestro.asignatura.includes(buscar));
      }

}
