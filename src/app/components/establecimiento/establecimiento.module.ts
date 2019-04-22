import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstablecimientoRoutingModule } from './establecimiento-routing.module';
import { EstablecimientoComponent } from './establecimiento.component';

@NgModule({
  declarations: [EstablecimientoComponent],
  imports: [
    CommonModule,
    EstablecimientoRoutingModule
  ]
})
export class EstablecimientoModule { }
