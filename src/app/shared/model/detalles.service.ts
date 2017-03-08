import { Injectable } from '@angular/core';
import {AngularFire, AngularFireDatabase} from "angularfire2";
import {Observable} from "rxjs";
import {Detalle} from "./detalle";

@Injectable()
export class DetallesService {

  constructor(private db: AngularFireDatabase) { }

  findAllDetalles(maestroUrl:string):Observable<Detalle[]>{

    return this.db.list('detalle', {
      query: {
        orderByChild:'url',
        equalTo:maestroUrl
      }
    })

  }

}
