import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { CoursetTpPageRoutingModule } from './courset-tp-routing.module';

import { CoursetTpPage } from './courset-tp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoursetTpPageRoutingModule,
    TranslateModule
  ],
  declarations: [CoursetTpPage]
})
export class CoursetTpPageModule {}
