import {Component, OnInit, Input} from '@angular/core';
import {MaestrosBtnService} from "../shared/model/maestros-btn.service";
import {ActivatedRoute} from "@angular/router";
import {Detalle} from "../shared/model/detalle";
import {DetallesService} from "../shared/model/detalles.service";

@Component({
  selector: 'detalles-completo',
  templateUrl: './detalles-completo.component.html',
  styleUrls: ['./detalles-completo.component.css']
})
export class DetallesCompletoComponent implements OnInit {

  @Input()
  detalles: Detalle[];

  constructor(
      private route: ActivatedRoute,
      private maestrosBtService:MaestrosBtnService,
      private detallesService: DetallesService) { }

  ngOnInit() {
    const maestroUrl = this.route.snapshot.params['id'];


    this.detallesService.findAllDetalles(maestroUrl)
        .do(console.log)
        .subscribe(
            detalles => this.detalles = detalles
        );
  }

}
