import { MenuController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.page.html',
  styleUrls: ['./evaluation.page.scss'],
})
export class EvaluationPage implements OnInit {

  constructor(private menu:MenuController,private translate: TranslateService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    this.translate.setDefaultLang('en'); }

  ngOnInit() {
    this.menu.enable(true,localStorage.getItem('role'));
  }
  ionViewWillLeave(){
    this.menu.close();
  }
}
