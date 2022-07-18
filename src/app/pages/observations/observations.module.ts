import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';

import { ObservationsPageRoutingModule } from './observations-routing.module';

import { ObservationsPage } from './observations.page';
import { NotificationsUserPage } from '../notifications-user/notifications-user.page';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    IonicModule,
    ObservationsPageRoutingModule
  ],
  declarations: [ObservationsPage]
})
export class ObservationsPageModule {}
