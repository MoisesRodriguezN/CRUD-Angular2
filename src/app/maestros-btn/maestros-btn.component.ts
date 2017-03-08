import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {MaestroBtn} from "../shared/model/maestroBtn";
import {MaestrosBtnService} from "../shared/model/maestros-btn.service";

@Component({
  selector: 'maestros-btn',
  templateUrl: './maestros-btn.component.html',
  styleUrls: ['./maestros-btn.component.css']
})
export class MaestrosBtnComponent implements OnInit {


  todosLosMaestros: MaestroBtn[];
  filtrado: MaestroBtn[];

  maestroBtn$: Observable<MaestroBtn[]>;

  constructor(private maestrosBtnService: MaestrosBtnService) { }

  ngOnInit() {
    this.maestrosBtnService.findAllMaestrosBtn()
        .do(console.log)
        .subscribe(
            maestros => this.todosLosMaestros = this.filtrado = maestros
        );
    this.maestroBtn$ = this.maestrosBtnService.findAllMaestrosBtn();
  }

  buscar(buscar:string){
    this.filtrado = this.todosLosMaestros.filter(maestro => maestro.nombre.includes(buscar));
  }


}
