import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnnonceEnPage } from './annonce-en.page';

const routes: Routes = [
  {
    path: '',
    component: AnnonceEnPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnnonceEnPageRoutingModule {}
