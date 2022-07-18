import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VoyagesConPageRoutingModule } from './voyages-con-routing.module';

import { VoyagesConPage } from './voyages-con.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VoyagesConPageRoutingModule
  ],
  declarations: [VoyagesConPage]
})
export class VoyagesConPageModule {}
