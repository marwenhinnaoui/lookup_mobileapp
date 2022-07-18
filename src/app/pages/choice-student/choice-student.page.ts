import { UserService } from './../../Services/user.service';
import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { locale } from 'moment';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-choice-student',
  templateUrl: './choice-student.page.html',
  styleUrls: ['./choice-student.page.scss'],
})
export class ChoiceStudentPage implements OnInit {

  constructor(private nav:NavController, private menu:MenuController,private US:UserService,private translate: TranslateService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    this.translate.setDefaultLang('en');  
  
   
  }
  ionViewDidEnter(){
    this.menu.enable(false,'Parent');
    this.menu.close();
  }
  lstetudiant:any;
  
  ngOnInit() {
        var id=0;
     this.US.getconnecteduser(localStorage.getItem('token')).subscribe(user=>{
  
    if(user.isParent!=undefined){
      if(user.isParent==true){
         localStorage.setItem('role','Parent');
      }
    }
    if(user.isEleve!=undefined){
      if(user.isEleve==true){
         localStorage.setItem('role','Eleve');
      }
    }
    if(localStorage.getItem('role')=='Eleve')
    {
      this.home(user)
    }
         //@ts-ignore
       localStorage.setItem("nom",user.lastname)
       this.US.nom=user.lastname
       this.US.prenom=user.firstname
       //@ts-ignore
       localStorage.setItem("prenom",user.firstname)
     
       //@ts-ignore
       localStorage.setItem("phone",user.phone);
       var sub:Subscription;
       //@ts-ignore
       if(user.filsPapa.length!=0)
      { this.lstetudiant=user.filsPapa;
        
      }
      else if(user.filsMaman.length!=0)
      { this.lstetudiant=user.filsMaman
        console.log("this.lstetudian",this.lstetudiant);
      }
       
     });
  

        
  }

  home(item:any){
    
    var ch=item.eleveAnneeScolaires[item.eleveAnneeScolaires.length-1].replace('/api/eleve_annee_scolaires/', '')
    localStorage.setItem('eleveAnneeScolaires',ch);
   
   this.US.GetStudents(Number(ch)).subscribe(etudiant=>{
   console.log("etudiant",etudiant);
   
  if(etudiant.classe){
    console.log(etudiant.classe);
    
    var ch=etudiant.classe.id;
   // var ch=etudiant.classe;
   console.log("ch,ch",ch);
   localStorage.setItem('classe',ch);
  }

  var ch1 = JSON.stringify(etudiant.demandeParents);
      localStorage.setItem('demandeList',ch1);
  
   //@ts-ignore
   var ideleve=etudiant.eleve.replace('/api/users/', '')
   localStorage.setItem('ideleve',ideleve);
  
   //@ts-ignore
    ch=etudiant.anneeScolaire.replace('/api/annee_scolaires/', '')
   
    localStorage.setItem('anneeScolaire',ch);
   //@ts-ignore
   if(etudiant.groupClasse){
    ch = typeof etudiant.groupClasse ==='string' ? etudiant.groupClasse.replace('/api/group_classes/') : ''
    localStorage.setItem('groupClasse',ch)
  }
   

   

   this.nav.navigateRoot('/tabs/tab2');
   });
  //@ts-ignore
  /*  
   
    */
  }
  
  ngOnDestroy() {
   
  }

}
