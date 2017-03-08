import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {AngularFire} from "angularfire2";
import {MaestroBtn} from "./maestroBtn";

@Injectable()
export class MaestrosBtnService {

  constructor(private af:AngularFire) { }

  findAllMaestrosBtn(): Observable<MaestroBtn[]>{
      return this.af.database.list('maestro').map(MaestroBtn.fromJsonArray);
  }

   /* findDetallesForMaestro(maestroUrl:string){
        console.log(maestroUrl);
    }*/

    findDetallesForMaestro(maestroUrl:string){
        return this.af.database.list('detalle', {
            query: {
                orderByChild:'url',
                equalTo:'profesor-uno'
            }
        });
    }

}
