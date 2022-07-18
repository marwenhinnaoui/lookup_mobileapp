import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EvaluationPageRoutingModule } from './evaluation-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { EvaluationPage } from './evaluation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EvaluationPageRoutingModule,
    TranslateModule
  ],
  declarations: [EvaluationPage]
})
export class EvaluationPageModule {}
