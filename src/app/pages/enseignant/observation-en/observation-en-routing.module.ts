import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from 'src/app/Services/auth-guard.service';

import { ObservationEnPage } from './observation-en.page';

const routes: Routes = [
  {
    path: '',
    component: ObservationEnPage,
    children: [
      {
        path: 'annoncesEn',
        canActivate: [AuthGuardService],
        loadChildren: () => import('../annonce-en/annonce-en.module').then(m=>m.AnnonceEnPageModule)
      },
      {
        path: 'notificationsEn',
        canActivate: [AuthGuardService],
        loadChildren: () => import('../notifications-en/notifications-en.module').then(m => m.NotificationsEnPageModule)
      }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ObservationEnPageRoutingModule {}
