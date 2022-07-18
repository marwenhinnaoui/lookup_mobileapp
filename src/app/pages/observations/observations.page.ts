import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import * as moment from 'moment';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/Services/user.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-observations',
  templateUrl: './observations.page.html',
  styleUrls: ['./observations.page.scss'],
})
export class ObservationsPage implements OnInit {
status:string='Annonces';
lstTotalAnnon=[];
lstAnnon=[];
index=0;
infiniteScroll;
infiniteScroll2;
lstnotif=[];
ok=false;
totalnotif=[];
sub4:Subscription
sub:Subscription;
sub2:Subscription;
sub3:Subscription;

  constructor(private US:UserService,private menu:MenuController,private nav:NavController,private translate: TranslateService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    this.translate.setDefaultLang('en'); 
  }

  ngOnInit() {
    this.menu.enable(true,localStorage.getItem('role'));

    this.sub3=  this.US.getAnonncesUser(localStorage.getItem('token'),localStorage.getItem('ideleve')).subscribe(lstannonceeleve=>{
  this.sub2=  this.US.getAnonncesUser(localStorage.getItem('token'),localStorage.getItem('userid')).subscribe(lstannonce=>{

  this.sub=  this.US.getAnonncesClasse(  localStorage.getItem('token'),localStorage.getItem('classe')).subscribe(val=>{
      
      this.lstTotalAnnon=val.concat(lstannonce,lstannonceeleve);
      this.lstTotalAnnon=  this.lstTotalAnnon.filter((obj, pos, arr) => {
        return arr.map(mapObj => mapObj['id']).indexOf(obj['id']) === pos;
    });
      this.lstTotalAnnon = this.lstTotalAnnon.sort((a, b) => moment(b.createdAt).diff( a.createdAt, 'seconds') )

      for (let i = this.index; i < 5; i++) {
        if(this.lstTotalAnnon[i])
        {this.lstAnnon.push(this.lstTotalAnnon[i]);}
        }
        this.index=5;
    })
  });
});
   
  }
  openmenu(){
    this.menu.enable(true,'Parent');
  this.menu.open('Parent');
  }
  
  segmentChanged(ev: any) {
  }

  private async doRefresh(event){
    this.sub.unsubscribe();
    this.sub2.unsubscribe();
    this.sub3.unsubscribe();    
    //localStorage.getItem('ideleve')
    this.sub3=  this.US.getAnonncesUser(localStorage.getItem('token'),localStorage.getItem('ideleve')).subscribe(lstannonceeleve=>{
    this.sub2=  this.US.getAnonncesUser(localStorage.getItem('token'),localStorage.getItem('userid')).subscribe(lstannonce=>{

      this.sub=  this.US.getAnonncesClasse(  localStorage.getItem('token'),localStorage.getItem('classe')).subscribe(val=>{
          this.lstTotalAnnon=val.concat(lstannonce,lstannonceeleve);
          this.lstTotalAnnon=  this.lstTotalAnnon.filter((obj, pos, arr) => {
            return arr.map(mapObj => mapObj['id']).indexOf(obj['id']) === pos;
        });
          this.lstTotalAnnon = this.lstTotalAnnon.sort((a, b) => moment(b.createdAt).diff( a.createdAt, 'seconds') )    
            this.lstAnnon=this.lstTotalAnnon;
            
           event.target.complete();
         
        })
      });
    });
  }
  ionViewWillEnter(){
    this.lstnotif=[];
this.totalnotif=[];
    this.index=0
    this.sub4=  this.US.getconnecteduser(localStorage.getItem('token')).subscribe(val=>{
  this.doRefresh(null);
 
        this.totalnotif=val.notifications.reverse();
      
        //this.US.Readat(localStorage.getItem('token'), this.totalnotif[0])
        this.totalnotif=  this.totalnotif;
       for (let i = this.index; i < 10; i++) {
       if(this.totalnotif[i] && !this.totalnotif[i].data.message.includes('Examen'))
       {this.lstnotif.push(this.totalnotif[i]);}
       }
       this.index=10;
      })

      
  }
  ionViewDidEnter(){
    this.infiniteScroll=document.getElementById('infinite-scroll');
    this.infiniteScroll.addEventListener('ionInfinite', async  ()=> {
      for (let i = this.index; i < this.index+5; i++) {
        if(this.lstTotalAnnon[i] )
        {this.lstAnnon.push(this.lstTotalAnnon[i]);}
        }
        this.index+=10;
      setTimeout(() => {
        this.infiniteScroll.complete();
      }, 500);
      if (this.index > this.lstTotalAnnon.length) {
        this.infiniteScroll.disabled = true;
      }
    });
    this.infiniteScroll2=document.getElementById('infinite-scroll');
      this.infiniteScroll2.addEventListener('ionInfinite', async  ()=> {

        for (let i = this.index; i < this.index+10; i++) {
          if(this.totalnotif[i] )
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
      this.doRefresh2(null);
  }
  download(doc){
    window.open(this.US.downloadfiles(doc), '_system', 'location=yes')
   
  }


 formatDate(date){
  return moment(date).format('HH:mm DD-MM-YYYY')
 }


 ionViewWillLeave(){
  for (let i = 0; i < this.totalnotif.length; i++) {
   if(this.totalnotif[i].readAt==null)
   {
    this.US.Readat(localStorage.getItem('token'), this.totalnotif[i].id);
   }
    
  }
}

private async doRefresh2(event){
  this.sub4.unsubscribe();
  this.sub4=  this.US.getconnecteduser(localStorage.getItem('token')).subscribe(val=>{
    for (let i = 0; i < val.notifications.length; i++) { 
      if(val.notifications[i].readAt==null)
    {
      this.US.Readat(localStorage.getItem('token'), val.notifications[i].id);
    }}
    this.lstnotif=val.notifications.reverse();
    event?.target.complete();
  });
}


checknotExamen(data:string)
{
  data=data.toUpperCase();
  if(data.includes('EXAMEN'))
   {
     return false;
   }
   else
   {
     return true;
   }
}
checkNotif(data: string)
{
data=data.toUpperCase();
if(data.includes('EXAMEN'))
{
 this.nav.navigateForward('/devoir')
}
else if(data.includes('ABSENT'))
{
this.nav.navigateForward('/presence')
}
else if(data.includes('COURS'))
{
this.nav.navigateForward('/courset-tp')
}
else if(data.includes('EXERCICE'))
{
this.nav.navigateForward('/homework')
}
else if(data.includes('ANNONCE'))
{
this.status='Annonces'

}

}




 checkAnnonce(data: string)
{
data=data.toUpperCase();
if(data.includes('EXAMEN'))
{
 this.nav.navigateForward('/devoir')
}
else if(data.includes('ABSENT'))
{
this.nav.navigateForward('/presence')
}
else if(data.includes('COURS'))
{
this.nav.navigateForward('/courset-tp')
}
else if(data.includes('EXERCICE'))
{
this.nav.navigateForward('/homework')
}
}
}
