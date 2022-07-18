import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LstElevesPage } from './lst-eleves.page';

const routes: Routes = [
  {
    path: '',
    component: LstElevesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LstElevesPageRoutingModule {}
