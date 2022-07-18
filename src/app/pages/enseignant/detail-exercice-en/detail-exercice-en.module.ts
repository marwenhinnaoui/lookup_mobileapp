import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';

import { DetailExerciceEnPageRoutingModule } from './detail-exercice-en-routing.module';

import { DetailExerciceEnPage } from './detail-exercice-en.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailExerciceEnPageRoutingModule,
    TranslateModule
  ],
  declarations: [DetailExerciceEnPage]
})
export class DetailExerciceEnPageModule {}
