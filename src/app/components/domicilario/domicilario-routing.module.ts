import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DomicilarioComponent } from './domicilario.component';

const routes: Routes = [{
	path: '',
	component: DomicilarioComponent,
	children: [
		{
			path: 'asignar/:idPedido',
			loadChildren: './asignar-domiciliario/asignar-domiciliario.module#AsignarDomiciliarioModule'
		}
	]
  }];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class DomicilarioRoutingModule { }

