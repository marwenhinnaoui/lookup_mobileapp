import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';

import { DevoirsEnPageRoutingModule } from './devoirs-en-routing.module';

import { DevoirsEnPage } from './devoirs-en.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DevoirsEnPageRoutingModule,
    TranslateModule
  ],
  declarations: [DevoirsEnPage]
})
export class DevoirsEnPageModule {}
