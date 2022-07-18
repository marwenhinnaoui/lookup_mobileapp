import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import * as moment from 'moment';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/Services/user.service';
import { DetailAnnoncePage } from '../detail-annonce/detail-annonce.page';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-annonces',
  templateUrl: './annonces.page.html',
  styleUrls: ['./annonces.page.scss'],
})
export class AnnoncesPage implements OnInit {

  sub:Subscription;
  sub3:Subscription;
  sub2:Subscription;
  index=0;

  lstAnnon=[];
  lstTotalAnnon=[];

  constructor(private US:UserService, private modalCtrl :ModalController,private translate: TranslateService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    this.translate.setDefaultLang('en');  }

  ngOnInit() {
    
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
      {this.lstAnnon.push(this.lstTotalAnnon[i]);
      
      }
      }
      this.index=5;
  })
});
});
  }


  async showModal(item){
    if(item.message!=undefined){
      const modal = await this.modalCtrl.create({
        component : DetailAnnoncePage
      })
      var ch=JSON.stringify(item);
      localStorage.setItem('Dannonce',ch);
      await modal.present();
    }    
  }

  doRefresh(event){   
    this.sub.unsubscribe();
    this.sub2.unsubscribe();
    this.sub3.unsubscribe();    
    localStorage.getItem('ideleve')
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

  formatDate(date){
    return moment(date).format('HH:mm DD-MM-YYYY')
   }

   

}
