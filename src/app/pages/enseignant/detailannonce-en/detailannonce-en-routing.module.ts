import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailannonceEnPage } from './detailannonce-en.page';

const routes: Routes = [
  {
    path: '',
    component: DetailannonceEnPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailannonceEnPageRoutingModule {}
