import { UserService } from './Services/user.service';
import { Component } from '@angular/core';

import { Platform, NavController, MenuController, ModalController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Storage } from '@ionic/storage';
import { BulletinPage } from './pages/bulletin/bulletin.page';
import { environment } from 'src/environments/environment';
import { CheckUpdateService } from './Services/check-update.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})

export class AppComponent {
   isparent=null;
   role="";
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private nav:NavController,
    private US:UserService,
    private menu:MenuController,
    private storage: Storage,
    private userService:UserService,
    private modalController:ModalController,
    private plt: Platform,
    private updateS: CheckUpdateService
    ) {
 
    this.role = localStorage.getItem('role');
    var i =0;
   var x=  setInterval(()=>{
    if(localStorage.getItem('role')=='Eleve')
    {
      this.isparent='Eleve';
    }
    else
    {
      this.isparent=null;

    }
      this.nom=this.US.nom
      this.prenom=this.US.prenom
      
      i++;
     
     },3000);
    
    this.initializeApp();
   // this.backgroundMode.enable();
  }

  disconnect(){
    localStorage.clear();
    this.menu.close();
    this.storage.remove('apiToken');
    this.storage.remove('rememberme');
  }
  close(){
    this.menu.close();
  }
  nom='';
  prenom='';
  ionViewDidEnter(){
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
     
    });
  }
  evaluation()
  {this.userService.GetStudents(localStorage.getItem('eleveAnneeScolaires')).subscribe(val=>{

    if(val.bulletinEleves.length)
    {
      let ch = val.bulletinEleves[val.bulletinEleves.length-1].replace("/api/bulletin_eleves/",'')
      this.userService.getBulletinEtudiant(localStorage.getItem('token'),ch).subscribe(async value=>{
        const modal = await this.modalController.create({
          component: BulletinPage,
          cssClass: 'my-custom-class',
          componentProps:{
            bulletin:value
          }
        });
        return await modal.present();
      }
        
        
        )
      
    }
  })
}

  openInscri(){
    this.userService.GetEducoUrl(localStorage.getItem('token')).subscribe(val=>{
      
      window.open(val[0].lienInscrit)      
    },
    err=>{
      console.log(err);
      
    })
  
  }

}
