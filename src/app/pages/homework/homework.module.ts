import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';

import { HomeworkPageRoutingModule } from './homework-routing.module';

import { HomeworkPage } from './homework.page';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    IonicModule,
    HomeworkPageRoutingModule
  ],
  declarations: [HomeworkPage]
})
export class HomeworkPageModule {}
