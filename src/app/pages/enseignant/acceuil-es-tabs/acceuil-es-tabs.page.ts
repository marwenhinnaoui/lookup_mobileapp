import { Subscription } from 'rxjs';
import { UserService } from './../../../Services/user.service';
import { MenuController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-acceuil-es-tabs',
  templateUrl: './acceuil-es-tabs.page.html',
  styleUrls: ['./acceuil-es-tabs.page.scss'],
})
export class AcceuilEsTabsPage implements OnInit{
nb=0;
sub:Subscription;
x;
  constructor(private menu:MenuController,private US:UserService,private translate: TranslateService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    this.translate.setDefaultLang('en');
   
   this.menu.getMenus();
  
  
   }
ngOnInit(): void {
  this.menu.enable(true,localStorage.getItem('role'));

  this.x= setInterval(()=>{
    this.nbNotification();
   },2000);
  
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

  openmenu(){
    this.menu.enable(true,'Enseignant');
    this.menu.open('Enseignant').then(val=>{


    },
    err=>{
      console.log(err)
    });
    }
    ngOnDestroy(): void {
   clearInterval(this.x);
      
    }
}
