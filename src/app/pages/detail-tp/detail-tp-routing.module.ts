import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailTPPage } from './detail-tp.page';

const routes: Routes = [
  {
    path: '',
    component: DetailTPPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailTPPageRoutingModule {}
