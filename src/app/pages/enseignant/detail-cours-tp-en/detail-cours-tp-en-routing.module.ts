import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailCoursTpEnPage } from './detail-cours-tp-en.page';

const routes: Routes = [
  {
    path: '',
    component: DetailCoursTpEnPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailCoursTpEnPageRoutingModule {}
