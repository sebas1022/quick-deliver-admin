import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DomicilarioRoutingModule } from './domicilario-routing.module';
import { DomicilarioComponent } from './domicilario.component';

@NgModule({
  declarations: [DomicilarioComponent],
  imports: [
    CommonModule,
    DomicilarioRoutingModule
  ]
})
export class DomicilarioModule { }
