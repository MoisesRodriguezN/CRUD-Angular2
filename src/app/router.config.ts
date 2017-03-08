

import {HomeComponent} from "./home/home.component";
import {Route} from "@angular/router";
import {DetallesComponent} from "./detalles/detalles.component";
import {MaestrosBtnComponent} from "./maestros-btn/maestros-btn.component";
import {MaestrosBtnDetallesComponent} from "./maestros-btn-detalles/maestros-btn-detalles.component";
import {NuevoComponent} from "./nuevo/nuevo.component";
import {FormularioNuevoComponent} from "./formulario-nuevo/formulario-nuevo.component";
import {NuevoMaestroComponent} from "./nuevo-maestro/nuevo-maestro.component";
import {ListaMaestrosComponent} from "./lista-maestros/lista-maestros.component";

export const routerConfig : Route[] = [
    {
        path:'home',
        children: [
            {
                path:'nuevo',
                component: NuevoComponent

            },
            {
                path:'nuevo-maestro',
                component: NuevoMaestroComponent

            },
            {
                path: '',
                component: HomeComponent
            }
        ]
    },

    {
        path:'detalles',
        component:DetallesComponent
    },


    {
        path:'maestrosbtn',
        children: [
            {
                path:':id',
                children: [
                    {
                        path: '',
                        component: MaestrosBtnDetallesComponent
                    }
                ]

            },
            {
                path: '',
                component: MaestrosBtnComponent
            }
        ]
    },


    {
        path:'',
        redirectTo:'home',
        pathMatch: 'full'
    },

    {
        path:'**',
        redirectTo: 'home'
    }
];