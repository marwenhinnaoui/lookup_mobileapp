import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';

import { NotificationsUserPageRoutingModule } from './notifications-user-routing.module';

import { NotificationsUserPage } from './notifications-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotificationsUserPageRoutingModule,
    TranslateModule
  ],
  declarations: [NotificationsUserPage]
})
export class NotificationsUserPageModule {}
