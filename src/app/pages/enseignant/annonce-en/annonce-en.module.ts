import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';

import { AnnonceEnPageRoutingModule } from './annonce-en-routing.module';

import { AnnonceEnPage } from './annonce-en.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnnonceEnPageRoutingModule,
    TranslateModule
  ],
  declarations: [AnnonceEnPage]
})
export class AnnonceEnPageModule {}
