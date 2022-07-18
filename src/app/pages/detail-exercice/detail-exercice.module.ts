import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { DetailExercicePageRoutingModule } from './detail-exercice-routing.module';

import { DetailExercicePage } from './detail-exercice.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailExercicePageRoutingModule,
    TranslateModule
  ],
  declarations: [DetailExercicePage]
})
export class DetailExercicePageModule {}
