import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LstSeancesPage } from './lst-seances.page';

const routes: Routes = [
  {
    path: '',
    component: LstSeancesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LstSeancesPageRoutingModule {}
