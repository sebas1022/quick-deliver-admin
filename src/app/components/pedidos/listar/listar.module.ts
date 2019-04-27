import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarPedidosComponent } from './listar.component';

@NgModule({
  declarations: [ListarPedidosComponent],
  imports: [
    CommonModule
  ],
  exports: [ListarPedidosComponent],

})
export class ListarPedidosModule { }
