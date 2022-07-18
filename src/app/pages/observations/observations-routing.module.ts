import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from 'src/app/Services/auth-guard.service';

import { ObservationsPage } from './observations.page';

const routes: Routes = [
  {
    // path: '',
    // component: 

    path: '',
    component: ObservationsPage,
    children: [
      {
        path: 'annonces',
        canActivate: [AuthGuardService],
        loadChildren: () => import('../annonces/annonces.module').then(m => m.AnnoncesPageModule)
      },
      {
        path: 'notificationOb',
        canActivate: [AuthGuardService],
        loadChildren: () => import('../notifications-user/notifications-user.module').then(m => m.NotificationsUserPageModule)
      }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ObservationsPageRoutingModule {}
