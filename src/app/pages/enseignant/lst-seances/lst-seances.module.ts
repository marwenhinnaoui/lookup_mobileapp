import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LstSeancesPageRoutingModule } from './lst-seances-routing.module';

import { LstSeancesPage } from './lst-seances.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LstSeancesPageRoutingModule
  ],
  declarations: [LstSeancesPage]
})
export class LstSeancesPageModule {}
