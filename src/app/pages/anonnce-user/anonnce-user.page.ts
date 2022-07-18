import { Subscription } from 'rxjs';
import { MenuController } from '@ionic/angular';
import { UserService } from './../../Services/user.service';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-anonnce-user',
  templateUrl: './anonnce-user.page.html',
  styleUrls: ['./anonnce-user.page.scss'],
})
export class AnonnceUserPage implements OnInit {
lstTotalAnnon=[];
lstAnnon=[];
index=0;
infiniteScroll;
sub:Subscription;
sub2:Subscription;
sub3:Subscription;
  constructor(private US:UserService,private menu:MenuController,private translate: TranslateService) {
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
  doRefresh(event){
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
  ionViewDidEnter(){
    this.infiniteScroll=document.getElementById('infinite-scroll');
    this.infiniteScroll.addEventListener('ionInfinite', async  ()=> {
      for (let i = this.index; i < this.index+5; i++) {
        if(this.lstTotalAnnon[i])
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
  }
  download(doc){
    window.open(this.US.downloadfiles(doc), '_system', 'location=yes')
   
  }
 formatDate(date){
  //return moment(date).format('HH:mm:ss Z YYYY-MM-DD')
  return moment(date).format('HH:mm DD-MM-YYYY')

 }
}
