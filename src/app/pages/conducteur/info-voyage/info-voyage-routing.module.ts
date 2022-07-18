import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoVoyagePage } from './info-voyage.page';

const routes: Routes = [
  {
    path: '',
    component: InfoVoyagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoVoyagePageRoutingModule {}
