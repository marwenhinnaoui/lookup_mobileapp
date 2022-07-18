import { excercie, UserService } from "./../../../Services/user.service";
import { MenuController, ModalController } from "@ionic/angular";
import { Component, OnInit } from "@angular/core";
import * as moment from "moment";
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: "app-excercice-en-ajout",
  templateUrl: "./excercice-en-ajout.page.html",
  styleUrls: ["./excercice-en-ajout.page.scss"],
})
export class ExcerciceEnAjoutPage implements OnInit {
  constructor(private modalController: ModalController,private US:UserService,private menu:MenuController,private translate: TranslateService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    this.translate.setDefaultLang('en');
  }

  NewExc: excercie = {
    subject: "",
    description: "",
    matiere: "",
    Classe: "",
    enseignant: "",
    datelimit: "",
    doc:null,
    date: "",
  anneeScolaire:'',
  specialiteNiveau:'',
  };
  lstmatieres=[];

  ngOnInit() {
    this.menu.enable(true,localStorage.getItem('role'));

    this.lstmatieres=JSON.parse(localStorage.getItem('lstmatiers'));
    this.NewExc.Classe="/api/classes/"+localStorage.getItem('classe') 
    this.NewExc.enseignant='/api/users/'+localStorage.getItem('en')
    this.NewExc.date= moment().format('MMMM Do YYYY, h:mm:ss a');
    this.NewExc.anneeScolaire=localStorage.getItem('anneeScolaire');
    this.NewExc.specialiteNiveau=localStorage.getItem('specialiteNiveau');
   }

   appendfile(event: FileList){
    var file= event.item(0)
    this.NewExc.doc=file;
  }

  Ajouter(){
    console.log("this.NewExc",this.NewExc);
    let form:FormData=new FormData();

    if(this.NewExc.doc){
      var docfile=this.NewExc.doc
      form.append('docFile',docfile)
    }
   
   form.append('subject',this.NewExc.subject)
   form.append('description',this.NewExc.description)
   form.append('specialiteNiveau',this.NewExc.specialiteNiveau);   
   form.append('Classe',this.NewExc.Classe);
   form.append('anneeScolaire',this.NewExc.anneeScolaire)
   form.append('matiere',this.NewExc.matiere)
   form.append('enseignant',"api/users/"+localStorage.getItem('en'))
   form.append('datelimit',this.NewExc.date)

    this.US.ajouterHomework(localStorage.getItem('token'),form).subscribe(val=>{
      console.log("ajouterHomework",val);
      
    });
    this.dismiss();
  }

  dismiss() {
    this.modalController.dismiss({
      dismissed: true,
    });
  }

}
