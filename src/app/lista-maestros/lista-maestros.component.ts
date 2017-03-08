import {Component, OnInit, Input} from '@angular/core';
import {Maestro} from "../shared/model/maestro";

@Component({
  selector: 'lista-maestros',
  templateUrl: './lista-maestros.component.html',
  styleUrls: ['./lista-maestros.component.css']
})
export class ListaMaestrosComponent implements OnInit {

  @Input()
  maestros: Maestro[];

  constructor() { }

  ngOnInit() {
  }

}
