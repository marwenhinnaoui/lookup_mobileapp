import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotificationsEnPageRoutingModule } from './notifications-en-routing.module';

import { NotificationsEnPage } from './notifications-en.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotificationsEnPageRoutingModule
  ],
  declarations: [NotificationsEnPage]
})
export class NotificationsEnPageModule {}
