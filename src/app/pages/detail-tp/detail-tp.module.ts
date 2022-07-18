import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';

import { DetailTPPageRoutingModule } from './detail-tp-routing.module';

import { DetailTPPage } from './detail-tp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailTPPageRoutingModule,
    TranslateModule
  ],
  declarations: [DetailTPPage]
})
export class DetailTPPageModule {}
