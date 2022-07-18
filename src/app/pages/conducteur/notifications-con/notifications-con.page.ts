import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import * as moment from 'moment';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-notifications-con',
  templateUrl: './notifications-con.page.html',
  styleUrls: ['./notifications-con.page.scss'],
})
export class NotificationsConPage implements OnInit {
  lstnotif=[];
  totalnotif=[];
  sub:Subscription;
  index;
   infiniteScroll = document.getElementById('infinite-scroll');
    constructor(private US:UserService,private menu:MenuController) { }
    ngOnInit(){
      this.menu.enable(true,'Conducteur');
    }
    
    ionViewWillEnter() {
      this.lstnotif=[];
  this.totalnotif=[];
      this.index=0
    this.sub=  this.US.getconnecteduser(localStorage.getItem('token')).subscribe(val=>{
            
        this.totalnotif=val.notifications;
        this.SetNotifStatustoRead();
        this.totalnotif=  this.totalnotif.reverse();
       for (let i = this.index; i < 10; i++) {
       if(this.totalnotif[i])
       {this.lstnotif.push(this.totalnotif[i]);}
       }
       this.index=10;
        this.US.getAnonncesClasse(localStorage.getItem('token'),localStorage.getItem('classe')).subscribe(anonn=>{
        })
      })    
    }

    ionViewDidEnter(){
      this.infiniteScroll=document.getElementById('infinite-scroll');
      this.infiniteScroll.addEventListener('ionInfinite', async  ()=> {
        for (let i = this.index; i < this.index+10; i++) {
          if(this.totalnotif[i])
          {this.lstnotif.push(this.totalnotif[i]);}
          }
          this.index+=10;
        setTimeout(() => {
          //@ts-ignore
          this.infiniteScroll.complete();
        }, 500);
        if (this.index > this.totalnotif.length) {
          //@ts-ignore
          this.infiniteScroll.disabled = true;
        }
      });
    }
    
    formatDate(date:Date){
     return moment(date).format('YYYY-MM-DD HH:MM')
    }
    SetNotifStatustoRead(){
    }
    doRefresh(event){
      this.sub.unsubscribe();
      this.sub=  this.US.getconnecteduser(localStorage.getItem('token')).subscribe(val=>{
        this.lstnotif=val.notifications;
        event.target.complete();
      });
  
    }
    ionViewWillLeave(){
      for (let i = 0; i < this.totalnotif.length; i++) {
       if(this.totalnotif[i].readAt==null)
       {
        this.US.Readat(localStorage.getItem('token'), this.totalnotif[i].id);
       }
        
      }
    }
    
}
