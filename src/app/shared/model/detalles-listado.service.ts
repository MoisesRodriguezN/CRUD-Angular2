import {Injectable, Inject} from '@angular/core';
import {AngularFire, FirebaseRef} from "angularfire2";
import {Observable, Subject} from "rxjs";
import {DetallesListado} from "./detallesListado";

@Injectable()
export class DetallesListadoService {
  sdkDb:any;
  constructor(private af: AngularFire, @Inject(FirebaseRef) fb) {
     this.sdkDb= fb.database().ref();
  }

  findAllDetallesListado():Observable<DetallesListado[]>{

    return this.af.database.list('detalle')

  }

  createNewDetalle(lesson:any): Observable<any> {
    const lessonsToSave = Object.assign({}, lesson);

    const newLessonKey = this.sdkDb.child('detalle').push().key;

    let dataToSave = {};

    dataToSave["detalle/" + newLessonKey] = lessonsToSave;

    return this.firebaseUpdate(dataToSave);
  }
    firebaseUpdate(dataToSave) {


      const subject = new Subject();

      this.sdkDb.update(dataToSave)
          .then(
              val => {
                subject.next(val);
                subject.complete();

              },
              err => {
                subject.next(err);
                subject.complete();

              }
          );
      return subject.asObservable();
    }


}
