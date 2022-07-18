import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AcceuilConTabsPage } from './acceuil-con-tabs.page';

const routes: Routes = [
  {
    path: '',
    component: AcceuilConTabsPage,
    children:[
      {
        path: 'voyages-con',
        loadChildren: () => import('./../voyages-con/voyages-con.module').then( m => m.VoyagesConPageModule)
      },
      {
        path: 'notifications-con',
        loadChildren: () => import('./../notifications-con/notifications-con.module').then( m => m.NotificationsConPageModule)
      },
      {
        path: 'menu-con',
        loadChildren: () => import('./../menu-con/menu-con.module').then( m => m.MenuConPageModule)
      },
      {
        path: '',
        redirectTo: '/acceuil-con-tabs/voyages-con',
        pathMatch: 'full'
      }
    ],
    
  },
  {
    path: '',
    redirectTo: '/acceuil-con-tabs/voyages-con',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AcceuilConTabsPageRoutingModule {}
