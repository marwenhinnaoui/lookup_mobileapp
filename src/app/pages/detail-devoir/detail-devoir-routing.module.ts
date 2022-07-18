import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailDevoirPage } from './detail-devoir.page';

const routes: Routes = [
  {
    path: '',
    component: DetailDevoirPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailDevoirPageRoutingModule {}
