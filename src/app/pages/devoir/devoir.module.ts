import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';

import { DevoirPageRoutingModule } from './devoir-routing.module';

import { DevoirPage } from './devoir.page';

import { NgCalendarModule  } from 'ionic2-calendar';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    IonicModule,
    DevoirPageRoutingModule,
    NgCalendarModule
  ],
  declarations: [DevoirPage]
})
export class DevoirPageModule {}
