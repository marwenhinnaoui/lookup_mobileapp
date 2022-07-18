import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailExerciceEnPage } from './detail-exercice-en.page';

const routes: Routes = [
  {
    path: '',
    component: DetailExerciceEnPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailExerciceEnPageRoutingModule {}
