import { MenuController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-punition',
  templateUrl: './punition.page.html',
  styleUrls: ['./punition.page.scss'],
})
export class PunitionPage implements OnInit {

  constructor(private menu:MenuController) { }

  ngOnInit() {
    this.menu.enable(true,localStorage.getItem('role'));

  }
  ionViewWillLeave(){
    this.menu.close();
  }
}
