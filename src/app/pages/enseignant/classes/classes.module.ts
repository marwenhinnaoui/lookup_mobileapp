import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { ClassesPageRoutingModule } from './classes-routing.module';

import { ClassesPage } from './classes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClassesPageRoutingModule,
    TranslateModule
  ],
  declarations: [ClassesPage]
})
export class ClassesPageModule {}
