import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TpAjoutEnPage } from './tp-ajout-en.page';

const routes: Routes = [
  {
    path: '',
    component: TpAjoutEnPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TpAjoutEnPageRoutingModule {}
