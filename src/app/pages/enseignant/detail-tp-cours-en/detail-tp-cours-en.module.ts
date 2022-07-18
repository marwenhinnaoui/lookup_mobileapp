import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { DetailTpCoursEnPageRoutingModule } from './detail-tp-cours-en-routing.module';

import { DetailTpCoursEnPage } from './detail-tp-cours-en.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailTpCoursEnPageRoutingModule,
    TranslateModule
  ],
  declarations: [DetailTpCoursEnPage]
})
export class DetailTpCoursEnPageModule {}
