import { Component, OnInit } from '@angular/core';
import {MaestrosBtnService} from "../shared/model/maestros-btn.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-maestros-btn-detalles',
  templateUrl: './maestros-btn-detalles.component.html',
  styleUrls: ['./maestros-btn-detalles.component.css']
})
export class MaestrosBtnDetallesComponent implements OnInit {



  constructor(
      private route: ActivatedRoute,
      private maestrosBtService:MaestrosBtnService) { }

  ngOnInit() {
        const maestroUrl = this.route.snapshot.params['id'];
       this.maestrosBtService.findDetallesForMaestro(maestroUrl);
  }

}
