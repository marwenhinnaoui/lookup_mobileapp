import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotificationsConPage } from './notifications-con.page';

const routes: Routes = [
  {
    path: '',
    component: NotificationsConPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotificationsConPageRoutingModule {}
