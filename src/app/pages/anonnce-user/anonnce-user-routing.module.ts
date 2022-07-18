import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnonnceUserPage } from './anonnce-user.page';

const routes: Routes = [
  {
    path: '',
    component: AnonnceUserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnonnceUserPageRoutingModule {}
