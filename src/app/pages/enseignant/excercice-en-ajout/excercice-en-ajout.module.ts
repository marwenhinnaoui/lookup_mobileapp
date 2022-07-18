import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExcerciceEnAjoutPageRoutingModule } from './excercice-en-ajout-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { ExcerciceEnAjoutPage } from './excercice-en-ajout.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExcerciceEnAjoutPageRoutingModule,
    TranslateModule
  ],
  declarations: [ExcerciceEnAjoutPage]
})
export class ExcerciceEnAjoutPageModule {}
