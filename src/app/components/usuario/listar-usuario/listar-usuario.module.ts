import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListarUsuarioComponent } from './listar-usuario.component'

@NgModule({
    declarations: [ListarUsuarioComponent],
    imports: [
        CommonModule
    ],
    exports: [ListarUsuarioComponent]
})
export class ListarUsuarioModule { }
