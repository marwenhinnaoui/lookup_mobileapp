
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AcceuilEsTabsPage } from './acceuil-es-tabs.page';

const routes: Routes = [
  {
    path: 'acceuil-es-tabs',
    component: AcceuilEsTabsPage,
    children:[
      {
        path: 'emploi',
        loadChildren: () => import('./../emploi/emploi.module').then( m => m.EmploiPageModule)
      },
      {
        path: 'menu',
        loadChildren: () => import('./../menu/menu.module').then( m => m.MenuPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('./../profile/profile.module').then( m => m.ProfilePageModule)
      },
      {
        path: 'observation-en',
        loadChildren: () => import('./../observation-en/observation-en.module').then( m => m.ObservationEnPageModule)
      },
      {
        path: 'notificationsEn',
        loadChildren: () => import('./../notifications-en/notifications-en.module').then( m => m.NotificationsEnPageModule)
      },

      
      {
        path: '',
        redirectTo: '/acceuil-es-tabs/emploi',
        pathMatch: 'full'
      }
    ]
  }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AcceuilEsTabsPageRoutingModule {}
