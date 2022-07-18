import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { MenuConPageRoutingModule } from './menu-con-routing.module';

import { MenuConPage } from './menu-con.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuConPageRoutingModule,
    TranslateModule
  ],
  declarations: [MenuConPage]
})
export class MenuConPageModule {}
