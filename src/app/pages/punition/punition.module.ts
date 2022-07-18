import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PunitionPageRoutingModule } from './punition-routing.module';

import { PunitionPage } from './punition.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PunitionPageRoutingModule
  ],
  declarations: [PunitionPage]
})
export class PunitionPageModule {}
