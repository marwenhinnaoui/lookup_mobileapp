import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalvideoPageRoutingModule } from './modalvideo-routing.module';

import { ModalvideoPage } from './modalvideo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalvideoPageRoutingModule
  ],
  declarations: [ModalvideoPage]
})
export class ModalvideoPageModule {}
