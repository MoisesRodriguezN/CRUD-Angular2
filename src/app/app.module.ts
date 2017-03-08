import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {firebaseConfig} from '../environments/firebase.config';
import {AngularFireModule} from 'angularfire2/index';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {MaestrosService} from "./shared/model/maestros.service";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { ListaMaestrosComponent } from './lista-maestros/lista-maestros.component';
import {RouterModule} from "@angular/router";
import {routerConfig} from "./router.config";
import { TopMenuComponent } from './top-menu/top-menu.component';
import { DetallesComponent } from './detalles/detalles.component';
import { MaestrosBtnComponent } from './maestros-btn/maestros-btn.component';
import {MaestrosBtnService} from "./shared/model/maestros-btn.service";
import { MaestrosBtnDetallesComponent } from './maestros-btn-detalles/maestros-btn-detalles.component';
import {DetallesService} from "./shared/model/detalles.service";
import { DetallesCompletoComponent } from './detalles-completo/detalles-completo.component';
import { ReactiveFormsModule} from "@angular/forms";
import { NuevoComponent } from './nuevo/nuevo.component';
import { FormularioNuevoComponent } from './formulario-nuevo/formulario-nuevo.component';
import {DetallesListadoService} from "./shared/model/detalles-listado.service";
import { NuevoMaestroComponent } from './nuevo-maestro/nuevo-maestro.component';
import { FormularioMaestroComponent } from './formulario-maestro/formulario-maestro.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListaMaestrosComponent,
    TopMenuComponent,
    DetallesComponent,
    MaestrosBtnComponent,
    MaestrosBtnDetallesComponent,
    DetallesCompletoComponent,
    NuevoComponent,
    FormularioNuevoComponent,
    NuevoMaestroComponent,
    FormularioMaestroComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot(routerConfig),
    ReactiveFormsModule
  ],
  providers: [MaestrosService, MaestrosBtnService,DetallesService, DetallesListadoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
