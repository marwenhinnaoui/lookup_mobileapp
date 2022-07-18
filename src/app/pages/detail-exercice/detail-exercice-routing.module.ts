import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailExercicePage } from './detail-exercice.page';

const routes: Routes = [
  {
    path: '',
    component: DetailExercicePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailExercicePageRoutingModule {}
