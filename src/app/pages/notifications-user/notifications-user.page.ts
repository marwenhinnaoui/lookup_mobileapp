import { UserService } from './../../Services/user.service';
import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { ModalController, NavController } from '@ionic/angular';
import { DetailAnnoncePage } from '../detail-annonce/detail-annonce.page';
import { TranslateService } from '@ngx-translate/core';
import { DetailExerciceEnPage } from '../enseignant/detail-exercice-en/detail-exercice-en.page';
import { DetailCoursPage } from '../detail-cours/detail-cours.page';
import { DetailTPPage } from '../detail-tp/detail-tp.page';
import { DetailExercicePage } from '../detail-exercice/detail-exercice.page';

@Component({
  selector: 'app-notifications-user',
  templateUrl: './notifications-user.page.html',
  styleUrls: ['./notifications-user.page.scss'],
})
export class NotificationsUserPage implements OnInit {
  lstnotif=[];
  totalnotif=[];
  sub:Subscription
  index;
  localisation="";

  sub1:Subscription;
  sub3:Subscription;
  sub2:Subscription;
  indexx=0;
  targetId;
  lstAnnon=[];
  lstTotalAnnon=[];
   infiniteScroll = document.getElementById('infinite-scroll');
    constructor(private US:UserService,private nav:NavController,public modalCtrl: ModalController,private translate: TranslateService) {
      // this language will be used as a fallback when a translation isn't found in the current language
      this.translate.setDefaultLang('en'); 
    }
  
    ngOnInit() {     
    this.localisation= location.pathname;


        this.sub3=  this.US.getAnonncesUser(localStorage.getItem('token'),localStorage.getItem('ideleve')).subscribe(lstannonceeleve=>{
        this.sub2=  this.US.getAnonncesUser(localStorage.getItem('token'),localStorage.getItem('userid')).subscribe(lstannonce=>{
      
      this.sub1=  this.US.getAnonncesClasse(  localStorage.getItem('token'),localStorage.getItem('classe')).subscribe(val=>{
  
     this.lstTotalAnnon=val.concat(lstannonce,lstannonceeleve);
      this.lstTotalAnnon=  this.lstTotalAnnon.filter((obj, pos, arr) => {
        return arr.map(mapObj => mapObj['id']).indexOf(obj['id']) === pos;
    });
      this.lstTotalAnnon = this.lstTotalAnnon.sort((a, b) => moment(b.createdAt).diff( a.createdAt, 'seconds') )
  
      for (let i = this.indexx; i < 5; i++) {
        if(this.lstTotalAnnon[i])
        {this.lstAnnon.push(this.lstTotalAnnon[i]);
        
        }
        }
        this.indexx=5;
    })
  });
  });
    }

    getId(item){
      this.targetId = item.data.targetId;
      this.show();
    }

    async show(){  
      for(let i = 0; i < this.lstAnnon.length; i++){
        if(this.lstAnnon[i].id === this.targetId){
          const modal = await this.modalCtrl.create({
            component : DetailAnnoncePage
          })
         var ch =  JSON.stringify(this.lstAnnon[i])
          localStorage.setItem('Dannonce',ch);
          await modal.present();
        }
      }
    }

    ionViewWillEnter(){
      this.lstnotif=[];
      this.totalnotif=[];
      this.index=0
      this.sub=  this.US.getconnecteduser(localStorage.getItem('token')).subscribe(val=>{
    
          this.totalnotif=val.notifications;
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
      return moment(date).format('HH:mm DD-MM-YYYY')
    }
    doRefresh(event){
      this.sub.unsubscribe();
      this.sub=  this.US.getconnecteduser(localStorage.getItem('token')).subscribe(val=>{
        this.lstnotif=val.notifications;
        this.lstnotif=this.lstnotif.reverse();
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
      
      console.log(data);
      
   //data=data.toUpperCase();
   if(data.sujet === ('devoir'))
   {
     this.nav.navigateForward('/devoir')
   }
   else if(data.sujet === 'absence')
   {
    this.nav.navigateForward('/presence')
   }
   else if(data.sujet === ('cours'))
   {
   // this.nav.navigateForward('/courset-tp')
    this.goCours(data);
   }
   else if(data.sujet === ('tp'))
   {
    this.goTP(data);
    
   }
   else if(data.sujet === ('exercice'))
   {
   // this.nav.navigateForward('/homework')}
   this.goHomeWork(data);
    
    }
  }

  goCours(item){
    this.US.GetCoursByID(localStorage.getItem('token'),item.data.targetId).subscribe(async val=>{
      console.log(val);
      const modal = await this.modalCtrl.create({
        component : DetailCoursPage
      })
      var ch =  JSON.stringify(val)
      localStorage.setItem('Dcours',ch);
      await modal.present();
      
    })
  }

  goTP(item){
    this.US.GetTpByID(localStorage.getItem('token'),item.data.targetId).subscribe(async val=>{
      console.log(val);
      const modal = await this.modalCtrl.create({
        component : DetailTPPage
      })
      var ch =  JSON.stringify(val)
      localStorage.setItem('Dtp',ch);
      await modal.present();
      
    })
  }

     goHomeWork(item){
      this.US.GetHomeworkByID(localStorage.getItem('token'),item.data.targetId).subscribe(async val=>{
        console.log(val);
        const modal = await this.modalCtrl.create({
          component : DetailExercicePage
        })
        var ch =  JSON.stringify(val)
        localStorage.setItem('Dexercice',ch);
        await modal.present();
        
      })
    }

}
