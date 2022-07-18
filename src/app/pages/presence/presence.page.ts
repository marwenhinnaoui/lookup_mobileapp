import { UserService } from './../../Services/user.service';
import { MenuController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-presence',
  templateUrl: './presence.page.html',
  styleUrls: ['./presence.page.scss'],
})
export class PresencePage implements OnInit {

  constructor(private menu:MenuController,private US:UserService,private translate: TranslateService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    this.translate.setDefaultLang('en'); 

   }
lstattendance=[]
lstmatieres=[]
lstseances=[];
eleve;
  ngOnInit() {
    this.menu.enable(true,localStorage.getItem('role'));
    this.US.getcursusStudent(localStorage.getItem('token'),localStorage.getItem('eleveAnneeScolaires')).subscribe(ideleve=>{
      //@ts-ignore

ideleve.eleve =this.US.SerializeJSONDL(ideleve.eleve,"/api/users/")
  //@ts-ignore
   this.lstattendance=ideleve.attendances;
  
   
  });
  
  }
  getmatiere(id){
    var matiere=''
    for (let i = 0; i < this.lstmatieres.length; i++) {
     if(this.lstmatieres[i].id==Number(id)){
      matiere=  this.lstmatieres[i].nomFr;
     }
    }
    return matiere
  }
  getseance(id){
    var seance=''
    for (let i = 0; i < this.lstseances.length; i++) {
     if(this.lstseances[i].id==Number(id)){
  
      seance=  this.lstseances[i];
     }
     
    }
    return seance
  }
  ionViewWillLeave(){
    this.menu.close();
  }
}
