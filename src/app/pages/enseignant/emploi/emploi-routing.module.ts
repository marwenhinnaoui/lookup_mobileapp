import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmploiPage } from './emploi.page';

const routes: Routes = [
  {
    path: '',
    component: EmploiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmploiPageRoutingModule {}
