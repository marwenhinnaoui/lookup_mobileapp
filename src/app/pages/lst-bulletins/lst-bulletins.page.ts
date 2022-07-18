import { Component, OnDestroy, OnInit } from '@angular/core';
import { MenuController, ModalController } from '@ionic/angular';
import { UserService } from 'src/app/Services/user.service';
import { BulletinPage } from '../bulletin/bulletin.page';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-lst-bulletins',
  templateUrl: './lst-bulletins.page.html',
  styleUrls: ['./lst-bulletins.page.scss'],
})
export class LstBulletinsPage implements OnInit{
lstbulletins=[];

  constructor(private userService:UserService,private modalController:ModalController,private menu:MenuController,private translate: TranslateService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    this.translate.setDefaultLang('en'); 
  }
 
  ngOnInit() {
    this.menu.enable(true,localStorage.getItem('role'));
    this.menu.enable(true,localStorage.getItem('role'));

    this.userService.bulletinAut(localStorage.getItem('token'),localStorage.getItem('eleveAnneeScolaires')).subscribe(val=>{

      this.lstbulletins= val;
      console.log("bulletinAut",this.lstbulletins);

    });
    this.userService.GetStudents(localStorage.getItem('eleveAnneeScolaires')).subscribe(val=>{
      if(val.bulletinEleves.length)
      {
        for (let i = 0; i <  val.bulletinEleves.length; i++) {
          val.bulletinEleves[i] = val.bulletinEleves[i].replace("/api/bulletin_eleves/",'');
        }
        this.lstbulletins=val.bulletinEleves;
      }
    })
  }

showBulletin(ch){
  this.userService.getBulletinEtudiant(localStorage.getItem('token'),ch).subscribe(async value=>{
    const modal = await this.modalController.create({
      component: BulletinPage,
      cssClass: 'my-custom-class',
      componentProps:{
        bulletin:value
      }
    });
    return await modal.present();
  });
}

}
