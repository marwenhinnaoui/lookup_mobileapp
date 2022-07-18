import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotificationsEnPage } from './notifications-en.page';

const routes: Routes = [
  {
    path: '',
    component: NotificationsEnPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotificationsEnPageRoutingModule {}
