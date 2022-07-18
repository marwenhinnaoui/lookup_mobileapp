import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailCoursPage } from './detail-cours.page';

const routes: Routes = [
  {
    path: '',
    component: DetailCoursPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailCoursPageRoutingModule {}
