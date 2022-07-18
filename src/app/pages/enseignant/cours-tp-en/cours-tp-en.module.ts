import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';

import { CoursTpEnPageRoutingModule } from './cours-tp-en-routing.module';

import { CoursTpEnPage } from './cours-tp-en.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoursTpEnPageRoutingModule,
    TranslateModule
  ],
  declarations: [CoursTpEnPage]
})
export class CoursTpEnPageModule {}
