import { Injectable, Inject} from '@angular/core';
import {Observable, Subject} from "rxjs";
import {Maestro} from "./maestro";
import {AngularFire, FirebaseRef} from "angularfire2";

@Injectable()
export class MaestrosService {

    sdkDb:any;
    constructor(private af: AngularFire, @Inject(FirebaseRef) fb) {
        this.sdkDb= fb.database().ref();
    }

  findAllMaestros():Observable<Maestro[]> {

      return this.af.database.list('maestro')


  }
      createNewMaestro(lesson:any): Observable<any> {
          const lessonsToSave = Object.assign({}, lesson);

      const newLessonKey = this.sdkDb.child('maestro').push().key;

      let dataToSave = {};

      dataToSave["maestro/" + newLessonKey] = lessonsToSave;

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
