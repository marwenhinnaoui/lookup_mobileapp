import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { AcceuilEsTabsPageRoutingModule } from './acceuil-es-tabs-routing.module';

import { AcceuilEsTabsPage } from './acceuil-es-tabs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AcceuilEsTabsPageRoutingModule,
    TranslateModule
  ],
  declarations: [AcceuilEsTabsPage]
})
export class AcceuilEsTabsPageModule {}
