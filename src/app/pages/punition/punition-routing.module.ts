import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PunitionPage } from './punition.page';

const routes: Routes = [
  {
    path: '',
    component: PunitionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PunitionPageRoutingModule {}
