import { MenuController, ModalController } from '@ionic/angular';
import { UserService } from './../../../Services/user.service';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-eleve-info-en',
  templateUrl: './eleve-info-en.page.html',
  styleUrls: ['./eleve-info-en.page.scss'],
})
export class EleveInfoEnPage implements OnInit {
img=null;
nom=''
pere={firstname:'',lastname:"",phone:''}
mere={firstname:'',lastname:"",phone:''}
lieu=''
adr=''
lstnotes=[]
lstmatieres=[];
  constructor(private us:UserService,private modalController:ModalController,private menu:MenuController,private translate: TranslateService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    this.translate.setDefaultLang('en');
  }

  ngOnInit() {
    this.menu.enable(true,localStorage.getItem('role'));

 this.us.getuser(localStorage.getItem('token'),localStorage.getItem('id')).subscribe(val=>{
   console.log(val);
   
   if(val.lieunaissance)
   {
    
     
    this.lieu=val.lieunaissance
   }
   if(val.adresse)
   {
this.adr=val.adresse
   }
  if(val.image)
  { this.img=this.us.returnurl(val.image)}
   this.nom=val.firstname+' '+val.lastname;
   if(val.pere){
     this.pere.firstname=val.pere.firstname
     this.pere.lastname=val.pere.lastname
     this.pere.phone=val.pere.phone
   }
   if(val.mere){
     if(val.mere.firstname)
     {this.mere.firstname=val.mere.firstname}
     if(val.mere.lastname)
    { this.mere.lastname=val.mere.lastname}
     this.mere.phone=val.mere.phone
  }
  if(val.eleveAnneeScolaires.length!=0)
  {let eac=val.eleveAnneeScolaires[val.eleveAnneeScolaires.length-1].id
 
  this.us.GetlstSubjects(localStorage.getItem('token')).subscribe(subject=>{
    //@ts-ignore
    this.lstmatieres=subject
     this.us.GetDevoirs(localStorage.getItem('token')).subscribe(val=>{
       console.log("GetDevoirs",val);
       
     for (let i = 0; i < val.length; i++) {
       for (let j = 0; j < val[i].notes.length; j++) {
         if(val[i].notes[j].eleveAnneeScolaire.id==eac){
           let mat=this.us.SerializeJSONDL(val[i].lesDevoirs.matiere,'/api/matieres/')
           this.lstnotes.push(
             {
               note:val[i].notes[j].note,
               type:val[i].groupeExamenTypeMatiere.examenType.nomFr,
               coef:val[i].groupeExamenTypeMatiere.coefficient,
               matiere:this.getmatiere(mat)
              });
              console.log("this.lstnotes",this.lstnotes);
              
         }
         
       }
       
     }
    },
    
    err=>{
      console.log(err)
    })
  })
  }
 });
 
 
  }
  
returncolor(note){
  if(note<10){
    return 'red'
  }
  else if(note >=10 && note<=14)
  {
    return 'yellow'
  }
  else if (note > 14 )
  { return 'green'}
}
  dismiss() {
    this.modalController.dismiss({
      dismissed: true,
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
}
