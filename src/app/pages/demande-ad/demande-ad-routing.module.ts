import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DemandeAdPage } from './demande-ad.page';

const routes: Routes = [
  {
    path: '',
    component: DemandeAdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemandeAdPageRoutingModule {}
