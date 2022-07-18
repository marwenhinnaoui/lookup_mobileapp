import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { UserService } from 'src/app/Services/user.service';
import { ToastController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-demande-ad',
  templateUrl: './demande-ad.page.html',
  styleUrls: ['./demande-ad.page.scss'],
})
export class DemandeAdPage implements OnInit {

  listDemande=[];
  demande="";
  autreDemande="";
  itemAutre={id: 0, nom: '', nomAr: ''} 
  demandeParents=[];

  constructor(private userService: UserService,private menu:MenuController,public toastController: ToastController,private translate: TranslateService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    this.translate.setDefaultLang('en'); }

  ngOnInit() {
    this.menu.enable(true,localStorage.getItem('role'));

    this.userService.GetEducoUrl(localStorage.getItem('token')).subscribe(val=>{
      this.listDemande= val[0].listDemandeParents;
    });
    this.getList();
  }

  getList(){
    var ch = localStorage.getItem('eleveAnneeScolaires');
    this.userService.GetStudents(Number(ch)).subscribe(etudiant=>{
    this.demandeParents= etudiant.demandeParents;
    this.demandeParents=this.demandeParents.reverse();
   });
  }

  doRefresh(event){
    var ch = localStorage.getItem('eleveAnneeScolaires');
    this.userService.GetStudents(Number(ch)).subscribe(etudiant=>{
    this.demandeParents= etudiant.demandeParents;
    this.demandeParents=this.demandeParents.reverse();
      event.target.complete();
    });

  }

  changeOption(){
  }
  getOtherDemande(event){
  }
//,id,type,demande
  save(){
    this.userService.setDemande(localStorage.getItem('token'),localStorage.getItem('eleveAnneeScolaires'),this.demande,this.autreDemande).subscribe(
      val=>{
      this.presentToast();
    },
        err=>{console.log(err)
      }
    )  
    this.autreDemande="";  
    this.demande="";
    this.getList();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Request sent successfully.',
      duration: 2000
    });
    toast.present();
  }

}
