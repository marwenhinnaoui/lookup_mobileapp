import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoursTpEnPage } from './cours-tp-en.page';

const routes: Routes = [
  {
    path: '',
    component: CoursTpEnPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursTpEnPageRoutingModule {}
