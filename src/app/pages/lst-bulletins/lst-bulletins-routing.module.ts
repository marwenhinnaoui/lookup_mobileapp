import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LstBulletinsPage } from './lst-bulletins.page';

const routes: Routes = [
  {
    path: '',
    component: LstBulletinsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LstBulletinsPageRoutingModule {}
