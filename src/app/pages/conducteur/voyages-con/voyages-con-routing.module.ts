import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VoyagesConPage } from './voyages-con.page';

const routes: Routes = [
  {
    path: '',
    component: VoyagesConPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VoyagesConPageRoutingModule {}
