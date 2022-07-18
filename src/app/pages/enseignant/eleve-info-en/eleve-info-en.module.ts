import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';

import { EleveInfoEnPageRoutingModule } from './eleve-info-en-routing.module';

import { EleveInfoEnPage } from './eleve-info-en.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EleveInfoEnPageRoutingModule,
    TranslateModule
  ],
  declarations: [EleveInfoEnPage]
})
export class EleveInfoEnPageModule {}
