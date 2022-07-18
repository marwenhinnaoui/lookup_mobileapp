import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { InfoVoyagePageRoutingModule } from './info-voyage-routing.module';

import { InfoVoyagePage } from './info-voyage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoVoyagePageRoutingModule,
    TranslateModule
  ],
  declarations: [InfoVoyagePage]
})
export class InfoVoyagePageModule {}
