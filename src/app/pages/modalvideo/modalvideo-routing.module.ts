import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalvideoPage } from './modalvideo.page';

const routes: Routes = [
  {
    path: '',
    component: ModalvideoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalvideoPageRoutingModule {}
