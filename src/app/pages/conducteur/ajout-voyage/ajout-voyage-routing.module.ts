import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjoutVoyagePage } from './ajout-voyage.page';

const routes: Routes = [
  {
    path: '',
    component: AjoutVoyagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjoutVoyagePageRoutingModule {}
