import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoursAjoutEnPage } from './cours-ajout-en.page';

const routes: Routes = [
  {
    path: '',
    component: CoursAjoutEnPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursAjoutEnPageRoutingModule {}
