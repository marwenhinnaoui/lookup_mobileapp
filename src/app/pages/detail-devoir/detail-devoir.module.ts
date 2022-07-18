import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { DetailDevoirPageRoutingModule } from './detail-devoir-routing.module';

import { DetailDevoirPage } from './detail-devoir.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailDevoirPageRoutingModule,
    TranslateModule
  ],
  declarations: [DetailDevoirPage]
})
export class DetailDevoirPageModule {}
