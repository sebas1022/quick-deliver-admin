import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './layouts/admin/admin.component';
import { LoginComponent } from './layouts/login/login.component';

const routes: Routes = [
  {
      path: '',
      component: AdminComponent,
      children: [
          {
              path: 'usuario/:accion',
              loadChildren: './components/usuario/usuario.module#UsuarioModule'
          }
      ]
  },
  {
    path: 'login',
    component: LoginComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
