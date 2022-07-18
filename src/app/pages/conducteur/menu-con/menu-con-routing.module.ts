import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuConPage } from './menu-con.page';

const routes: Routes = [
  {
    path: '',
    component: MenuConPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuConPageRoutingModule {}
