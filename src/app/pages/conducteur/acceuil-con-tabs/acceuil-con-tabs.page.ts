import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/Services/user.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-acceuil-con-tabs',
  templateUrl: './acceuil-con-tabs.page.html',
  styleUrls: ['./acceuil-con-tabs.page.scss'],
})
export class AcceuilConTabsPage implements OnInit {
  nb=0;
  sub:Subscription;
  x;
  constructor(private menu:MenuController,private US:UserService,private translate: TranslateService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    this.translate.setDefaultLang('en'); 
  }

  ngOnInit() {
    
    
    this.x= setInterval(()=>{
      this.nbNotification();
     },2000);
  }
  openmenu(){
    this.menu.enable(true,'Conducteur');
    this.menu.open('Conducteur').then(val=>{

    },
    err=>{
      console.log(err)
    });
    }
    ngOnDestroy(): void {
   clearInterval(this.x);
      
    }
    nbNotification(){
      var x=0;
    this.sub=this.US.getconnecteduser(localStorage.getItem('token')).subscribe(val=>{
      val.notifications.forEach(notif => {
        if(notif.readAt==null)
        {x++;}
       
     });
     if(x!=this.nb)
     {this.nb=x;}
     this.sub.unsubscribe();
    });
    
     }
}
