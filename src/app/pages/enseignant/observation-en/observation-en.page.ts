import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-observation-en',
  templateUrl: './observation-en.page.html',
  styleUrls: ['./observation-en.page.scss'],
})
export class ObservationEnPage implements OnInit {

  constructor(private menu: MenuController) { }

  ngOnInit() {
    this.menu.enable(true,localStorage.getItem('role'));

  }

}
