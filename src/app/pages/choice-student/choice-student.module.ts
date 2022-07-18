import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';

import { ChoiceStudentPageRoutingModule } from './choice-student-routing.module';

import { ChoiceStudentPage } from './choice-student.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChoiceStudentPageRoutingModule,
    TranslateModule
  ],
  declarations: [ChoiceStudentPage]
})
export class ChoiceStudentPageModule {}
