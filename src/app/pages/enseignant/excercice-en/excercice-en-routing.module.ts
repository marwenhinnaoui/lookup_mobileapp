import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExcerciceEnPage } from './excercice-en.page';

const routes: Routes = [
  {
    path: '',
    component: ExcerciceEnPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExcerciceEnPageRoutingModule {}
