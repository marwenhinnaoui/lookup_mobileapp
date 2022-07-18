import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnonnceUserPageRoutingModule } from './anonnce-user-routing.module';
import { TranslateModule } from '@ngx-translate/core';

import { AnonnceUserPage } from './anonnce-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnonnceUserPageRoutingModule,
    TranslateModule
  ],
  declarations: [AnonnceUserPage]
})
export class AnonnceUserPageModule {}
