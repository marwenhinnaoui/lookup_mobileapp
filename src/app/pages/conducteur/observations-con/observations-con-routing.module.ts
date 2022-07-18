import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ObservationsConPage } from './observations-con.page';

const routes: Routes = [
  {
    path: '',
    component: ObservationsConPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ObservationsConPageRoutingModule {}
