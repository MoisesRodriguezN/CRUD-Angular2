import {Component, OnInit, Input} from '@angular/core';
import {Detalle} from "../shared/model/detalle";
import {DetallesService} from "../shared/model/detalles.service";
import {DetallesListadoService} from "../shared/model/detalles-listado.service";
import {DetallesListado} from "../shared/model/detallesListado";

@Component({
  selector: 'detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {

  @Input()
  todoDetalles: DetallesListado[];
  detallesFiltrado: DetallesListado[];

  constructor(private detallesListadoService: DetallesListadoService) { }


  ngOnInit() {

    this.detallesListadoService.findAllDetallesListado()
        .do(console.log)
        .subscribe(
            detallesListado => this.todoDetalles = this.detallesFiltrado = detallesListado
        );
  }

  buscarDetalles(buscar:string){
    this.detallesFiltrado = this.todoDetalles.filter(detalleListado => detalleListado.descrip.includes(buscar));
  }

}
