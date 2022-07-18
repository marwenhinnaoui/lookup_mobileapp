import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotificationsUserPage } from './notifications-user.page';

const routes: Routes = [
  {
    path: '',
    component: NotificationsUserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotificationsUserPageRoutingModule {}
