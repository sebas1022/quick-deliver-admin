import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConnectorService } from '../../services/connector.service';

import { PedidosRoutingModule } from './pedidos-routing.module';
import { PedidosComponent } from './pedidos.component';

import { ListarPedidosModule } from './listar/listar.module';

@NgModule({
    imports: [
        CommonModule,
        PedidosRoutingModule,
        ListarPedidosModule
    ],
    providers: [
        ConnectorService
    ],
    declarations: [PedidosComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PedidosModule { }
