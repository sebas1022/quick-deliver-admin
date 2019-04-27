import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConnectorService } from '../../services/connector.service';

import { DomicilarioRoutingModule } from './domicilario-routing.module';
import { DomicilarioComponent } from './domicilario.component';
import { AsignarDomiciliarioModule } from './asignar-domiciliario/asignar-domiciliario.module'

@NgModule({
    imports: [
        CommonModule,
        DomicilarioRoutingModule,
        AsignarDomiciliarioModule
    ],
    providers: [
        ConnectorService
    ],
    declarations: [DomicilarioComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DomicilarioModule { }
