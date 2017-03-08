import { Component } from '@angular/core';
import { initializeApp, database} from 'firebase';
import {firebaseConfig} from '../environments/firebase.config';
import {AngularFire, FirebaseListObservable, FirebaseObjectObservable} from "angularfire2";
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  maestro$:FirebaseListObservable<any>;
  detalle$:FirebaseObjectObservable<any>;

  primerMestro:any;

  constructor(private af: AngularFire) {

    this.maestro$ = af.database.list('maestro');

    this.maestro$.subscribe(console.log);

    this.detalle$ = af.database.object('detalle/2');

    this.detalle$.subscribe(console.log);

    this.maestro$.map(maestro => maestro[1])
        .subscribe(
            maestro => this.primerMestro = maestro
        );
  }

  agregar() {
    this.maestro$.push({nombre: 'Aitor', apellidos: 'Menta'});
  }

  borrar(){
    this.maestro$.remove(this.primerMestro);
  }

  modificar() {
    this.maestro$.update(this.primerMestro, {nombre: 'Alan', apellidos: 'Brito'});
  }

  actualizarObj() {
    this.detalle$.update({descrip:'Profesor Licenciado en Matemáticas'});
  }

  agregarObj() { //borra el objeto y lo vuelve a crear con lo que se le pase
    this.detalle$.set({descrip:'Profesor Licenciado en Matemáticas 2'});
  }

  borrarObj() {
    this.detalle$.remove();
  }
}