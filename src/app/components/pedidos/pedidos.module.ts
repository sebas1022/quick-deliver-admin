import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConnectorService } from '../../services/connector.service';

import { PedidosRoutingModule } from './pedidos-routing.module';
import { PedidosComponent } from './pedidos.component';

@NgModule({
    declarations: [PedidosComponent],
    imports: [
        CommonModule,
        PedidosRoutingModule
    ],
    providers: [
        ConnectorService
    ]
})
export class PedidosModule { }
