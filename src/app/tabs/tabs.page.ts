import { UserService } from './../Services/user.service';
import { Subscription } from 'rxjs';
import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  nb=0;
  sub:Subscription;
  x
  constructor(private menu:MenuController,private US:UserService) {}
openmenu(){
  this.menu.enable(true,'Parent');
this.menu.open('Parent');
}
ngOnInit(): void {

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
 ngOnDestroy(): void {
  clearInterval(this.x);
     
   }

}
