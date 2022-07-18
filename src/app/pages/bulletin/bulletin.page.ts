import { Component, Input, OnInit ,ViewEncapsulation } from '@angular/core';
import { MenuController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-bulletin',
  templateUrl: './bulletin.page.html',
  styleUrls: ['./bulletin.page.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class BulletinPage implements OnInit {
  @Input() bulletin: any;
  constructor(private modalController:ModalController,private menu:MenuController) { }

  ngOnInit() {
    this.menu.enable(true,localStorage.getItem('role'));
    
  }
  dismiss() {
    
    this.modalController.dismiss({
      'dismissed': true
    });
  }
}
