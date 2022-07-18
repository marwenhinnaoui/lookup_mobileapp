import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestpagePageRoutingModule } from './testpage-routing.module';

import { TestpagePage } from './testpage.page';
import { LocalNotifications} from '@ionic-native/local-notifications/ngx'
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestpagePageRoutingModule
  ],
  providers:[LocalNotifications],
  declarations: [TestpagePage]
})
export class TestpagePageModule {}
