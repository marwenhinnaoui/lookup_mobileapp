import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';

import { ExcerciceEnPageRoutingModule } from './excercice-en-routing.module';

import { ExcerciceEnPage } from './excercice-en.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExcerciceEnPageRoutingModule,
    TranslateModule
  ],
  declarations: [ExcerciceEnPage]
})
export class ExcerciceEnPageModule {}
