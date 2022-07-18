import { Subscription } from 'rxjs';
import { UserService } from './../../../Services/user.service';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { MenuController, ModalController, NavController } from '@ionic/angular';
import { DetailannonceEnPage } from '../detailannonce-en/detailannonce-en.page';

@Component({
  selector: 'app-notifications-en',
  templateUrl: './notifications-en.page.html',
  styleUrls: ['./notifications-en.page.scss'],
})
export class NotificationsEnPage implements OnInit {
lstnotif=[];
totalnotif=[];
sub:Subscription
localisation="";
index;
lstAnnon=[];
targetId;
 infiniteScroll = document.getElementById('infinite-scroll');

  constructor(private US:UserService,private modalCtrl: ModalController,
    private menu:MenuController, private modalCrtl: ModalController,private nav: NavController) { }

  ngOnInit(){NavController
    this.menu.enable(true,localStorage.getItem('role'));
    this.localisation= location.pathname;
    this.sub=  this.US.getconnecteduser(localStorage.getItem('token')).subscribe(val=>{
      this.lstnotif=val.notifications;
      this.lstnotif = this.lstnotif.sort((a, b) => moment(b.createdAt).diff( a.createdAt) )
     // this.totalnotif.reverse();
    });
  }
  
  ionViewWillEnter() {
//     this.lstnotif=[];
// this.totalnotif=[];
    this.index=0
  this.sub=  this.US.getconnecteduser(localStorage.getItem('token')).subscribe(val=>{
          
     this.lstnotif = val.notifications;
     this.lstnotif = this.lstnotif.sort((a, b) => moment(b.createdAt).diff( a.createdAt) )
     //this.totalnotif.reverse();
      this.US.getAnonncesClasse(localStorage.getItem('token'),localStorage.getItem('classe')).subscribe(anonn=>{
        this.US.getAnonncesUser(localStorage.getItem('token'),localStorage.getItem('userid')).subscribe(lstannonce=>{
    
          this.lstAnnon=anonn.concat(lstannonce);
          this.SetNotifStatustoRead();
      
      this.index=10;
      })
    })

  })
   
   
  }


  getId(item){
    console.log("item,item",item.data.targetId);
    
    this.targetId = item.data.targetId;
    this.show();
  }

  async show(){ 
    console.log(this.lstAnnon);
     
    for(let i = 0; i < this.lstAnnon.length; i++){
      if(this.lstAnnon[i].id === this.targetId){
        const modal = await this.modalCrtl.create({
          component : DetailannonceEnPage
        })
       var ch =  JSON.stringify(this.lstAnnon[i])
        localStorage.setItem('DannonceEn',ch);
        await modal.present();
      }
    }}


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
    return moment(date).format('HH:mm DD-MM-YYYY')
  }

  SetNotifStatustoRead(){
  }

  doRefresh(event){
    this.sub.unsubscribe();
    this.sub=  this.US.getconnecteduser(localStorage.getItem('token')).subscribe(val=>{
      this.lstnotif=val.notifications;
      this.lstnotif = this.lstnotif.sort((a, b) => moment(b.createdAt).diff( a.createdAt, 'seconds') )
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

  checkNotif(data)
  {
    console.log(this.lstnotif,data);
    
 //data=data.toUpperCase();
 if(data.sujet === ('devoir'))
 {
   this.nav.navigateForward('devoirs-en')
 }
 else if(data.sujet === ('exercice'))
 {
  this.nav.navigateForward('excercice-en')}
  }
  
}
