import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DevoirsEnPage } from './devoirs-en.page';

const routes: Routes = [
  {
    path: '',
    component: DevoirsEnPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DevoirsEnPageRoutingModule {}
