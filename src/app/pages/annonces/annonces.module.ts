import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';

import { AnnoncesPageRoutingModule } from './annonces-routing.module';

import { AnnoncesPage } from './annonces.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    AnnoncesPageRoutingModule
  ],
  declarations: [AnnoncesPage]
})
export class AnnoncesPageModule {}
