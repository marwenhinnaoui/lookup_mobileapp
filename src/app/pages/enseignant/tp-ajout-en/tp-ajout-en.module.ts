import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TpAjoutEnPageRoutingModule } from './tp-ajout-en-routing.module';

import { TpAjoutEnPage } from './tp-ajout-en.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TpAjoutEnPageRoutingModule
  ],
  declarations: [TpAjoutEnPage]
})
export class TpAjoutEnPageModule {}
