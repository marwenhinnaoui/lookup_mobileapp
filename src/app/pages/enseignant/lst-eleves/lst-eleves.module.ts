import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LstElevesPageRoutingModule } from './lst-eleves-routing.module';

import { LstElevesPage } from './lst-eleves.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LstElevesPageRoutingModule
  ],
  declarations: [LstElevesPage]
})
export class LstElevesPageModule {}
