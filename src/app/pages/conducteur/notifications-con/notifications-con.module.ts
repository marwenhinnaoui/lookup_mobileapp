import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotificationsConPageRoutingModule } from './notifications-con-routing.module';

import { NotificationsConPage } from './notifications-con.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotificationsConPageRoutingModule
  ],
  declarations: [NotificationsConPage]
})
export class NotificationsConPageModule {}
