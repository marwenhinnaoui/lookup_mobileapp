import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExcerciceEnAjoutPage } from './excercice-en-ajout.page';

const routes: Routes = [
  {
    path: '',
    component: ExcerciceEnAjoutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExcerciceEnAjoutPageRoutingModule {}
