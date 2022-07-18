import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-menu-con',
  templateUrl: './menu-con.page.html',
  styleUrls: ['./menu-con.page.scss'],
})
export class MenuConPage implements OnInit {

  constructor(private nav:NavController,private menu:MenuController,private translate: TranslateService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    this.translate.setDefaultLang('en');
  }

  ngOnInit() {
    this.menu.enable(true,'Conducteur');
  }
  observation(){this.nav.navigateForward('/acceuil-con-tabs/notifications-con'); }

  voyage(){this.nav.navigateForward('/acceuil-con-tabs/voyages-con'); }
}
