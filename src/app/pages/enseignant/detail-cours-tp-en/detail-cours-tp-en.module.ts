import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';

import { DetailCoursTpEnPageRoutingModule } from './detail-cours-tp-en-routing.module';

import { DetailCoursTpEnPage } from './detail-cours-tp-en.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailCoursTpEnPageRoutingModule,
    TranslateModule
  ],
  declarations: [DetailCoursTpEnPage]
})
export class DetailCoursTpEnPageModule {}
