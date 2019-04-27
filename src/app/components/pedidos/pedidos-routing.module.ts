import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PedidosComponent } from './pedidos.component';

const routes: Routes = [{
  path: '',
  component: PedidosComponent,
  children: [
      {
          path: 'listar',
          loadChildren: './listar/listar.module#ListarPedidosModule'
      }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PedidosRoutingModule { }
