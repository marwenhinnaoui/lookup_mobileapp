import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';

import { CoursAjoutEnPageRoutingModule } from './cours-ajout-en-routing.module';

import { CoursAjoutEnPage } from './cours-ajout-en.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoursAjoutEnPageRoutingModule,
    TranslateModule
  ],
  declarations: [CoursAjoutEnPage]
})
export class CoursAjoutEnPageModule {}
