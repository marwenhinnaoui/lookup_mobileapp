import { HttpClient } from '@angular/common/http';
import { UserService } from './../../Services/user.service';
import { Component, OnInit } from '@angular/core';
import { MenuController, ModalController } from '@ionic/angular';
import { DetailTPPage } from '../detail-tp/detail-tp.page';
import { DetailCoursPage } from '../detail-cours/detail-cours.page';
import * as moment from 'moment';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-courset-tp',
  templateUrl: './courset-tp.page.html',
  styleUrls: ['./courset-tp.page.scss'],
})
export class CoursetTpPage implements OnInit {
  lstMatieres:any=[];
  lstcours:any=[];
  lsttp:any=[];
  switch=true;
  constructor(private US:UserService,private http:HttpClient,private menu:MenuController,public modalCtrl: ModalController,private translate: TranslateService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    this.translate.setDefaultLang('en');
   }

  ngOnInit() {
    this.menu.enable(true,localStorage.getItem('role'));

    this.US.getAllCours(localStorage.getItem('token'),localStorage.getItem('classe')).subscribe(classe=>{
      console.log(classe);      
    });
    this.US.GetClasse(localStorage.getItem('classe')).subscribe(classe=>{
      console.log("classe",classe);
      
      //@ts-ignore
      this.lstcours=classe.Cours;
      this.lstcours.sort((a, b) => moment(b.createdAt).diff( a.createdAt) );     
      //this.lstcours.reverse();

      //@ts-ignore
      this.lsttp=classe.tps;
      this.lsttp.sort((a, b) => moment(b.createdAt).diff( a.createdAt) );     
      //this.lsttp.reverse();
    });
   
  }

  doRefresh(event){
    this.US.GetClasse(localStorage.getItem('classe')).subscribe(classe=>{
      //@ts-ignore
      this.lstcours=classe.Cours;
      this.lstcours.sort((a, b) => moment(b.createdAt).diff( a.createdAt) );     
     // this.lstcours.reverse();
      
      //@ts-ignore
      this.lsttp=classe.tps;
      this.lsttp.sort((a, b) => moment(b.createdAt).diff( a.createdAt) );     
      //this.lsttp.reverse();
      event.target.complete();

      console.log(this.lstcours,this.lsttp);

    });
  }

  switchCoursTp(sw:boolean,ch:string,ch2:string){
    this.switch=sw;
   var element=document.getElementById(ch);
   var element2=document.getElementById(ch2);
       element2.classList.remove("active");
       element.classList.add("active");

  }

  download(ch){
    window.open(this.US.downloadfiles(ch), '_system', 'location=yes')
 
  }

  async showModalCours(item){
    console.log(item);
    
    if(item.matiere.nomFr!=undefined){
      const modal = await this.modalCtrl.create({
        component : DetailCoursPage
      })
      var ch=JSON.stringify(item);
      localStorage.setItem('Dcours',ch);
      await modal.present();
    }    
  }

  async showModalTP(item){
    console.log(item);
    
    if(item.matiere.nomFr!=undefined){
      const modal = await this.modalCtrl.create({
        component : DetailTPPage
      })
      var ch=JSON.stringify(item);
      localStorage.setItem('Dtp',ch);
      await modal.present();
    }    
  }

}
