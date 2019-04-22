import { NgModule, CUSTOM_ELEMENTS_SCHEMA    } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { UsuarioComponent } from './usuario.component';

import { ListarUsuarioModule } from './listar-usuario/listar-usuario.module';
import { CrearUsuarioModule } from './crear-usuario/crear-usuario.module';

@NgModule({
    imports: [
        CommonModule,
        UsuarioRoutingModule,
        ListarUsuarioModule,
        CrearUsuarioModule
    ],
    declarations: [UsuarioComponent],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class UsuarioModule { }
