import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailAnnoncePage } from './detail-annonce.page';

const routes: Routes = [
  {
    path: '',
    component: DetailAnnoncePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailAnnoncePageRoutingModule {}
