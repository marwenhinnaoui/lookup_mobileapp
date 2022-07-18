import { UserService } from './../../../Services/user.service';
import { NavController, ModalController, MenuController } from '@ionic/angular';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { TranslateService } from '@ngx-translate/core';
import * as moment from 'moment';
@Component({
  selector: 'app-devoirs-en',
  templateUrl: './devoirs-en.page.html',
  styleUrls: ['./devoirs-en.page.scss'],
})
export class DevoirsEnPage implements OnInit {
  bars: Chart;
  @ViewChild('barChart',{static:false}) barChart:any;
  constructor(private nav:NavController , private modalCtrl :ModalController,
    private menu:MenuController,private US:UserService,private translate: TranslateService) {
      // this language will be used as a fallback when a translation isn't found in the current language
      this.translate.setDefaultLang('en');
  }
lstDevoirs:any=[];
lstMatieres:any=[];
chartmatieres=[];
chartMax=[];
lstsalles:any=[];
chartMin=[];
chartEtudiant=[];
lstNotes:any=[];
matiere=[];
DevoirType='Oral'
user;switch=false;
lstTypeE:any=[];

  ngOnInit() {
    this.menu.enable(true,localStorage.getItem('role'));
    this.matiere=JSON.parse(localStorage.getItem('matieres'))
    //les_devoirs
    this.US.getExamens(localStorage.getItem('token'),localStorage.getItem('classe')).subscribe(val=>{
      console.log("getExamens",val);
      this.lstDevoirs=val;
      this.lstDevoirs = this.lstDevoirs.sort((a, b) => moment(b.createdAt).diff( a.createdAt, 'seconds') )
      this.lstDevoirs.reverse();
      //this.filterexams();
    });
        this.US.getsalleclasse(localStorage.getItem('token')).subscribe(val=>{
      this.lstsalles=val;
    });

    this.US.getExamenType(localStorage.getItem('token')).subscribe(val=>{
      this.lstTypeE=val;
    });
  }

  doRefresh(event){
    this.menu.enable(true,localStorage.getItem('role'));
    this.matiere=JSON.parse(localStorage.getItem('matieres'))
    //les_devoirs
    this.US.getExamens(localStorage.getItem('token'),localStorage.getItem('classe')).subscribe(val=>{
      this.lstDevoirs=val;
      this.lstDevoirs = this.lstDevoirs.sort((a, b) => moment(b.createdAt).diff( a.createdAt, 'seconds') )
      this.lstDevoirs.reverse();
      //this.filterexams();
    });
        this.US.getsalleclasse(localStorage.getItem('token')).subscribe(val=>{
      this.lstsalles=val;
    });

    this.US.getExamenType(localStorage.getItem('token')).subscribe(val=>{
      this.lstTypeE=val;
      event.target.complete();

    });
  }

getmatiere(index){
  
  for (let i = 0; i < this.lstMatieres.length; i++) {
   if(this.lstMatieres[i].id==Number(index)){
     return this.lstMatieres[i].nomFr;
   }
    
  }
}



getExamenType(index){
  
  var type = this.SerializeJSONDL(index,"/api/examen_types/");
  for (let i = 0; i < this.lstTypeE.length; i++) {
   if(this.lstTypeE[i].id==Number(type)){
     return this.lstTypeE[i].nomFr;
   }
    
  }
}

getSalle(index){
  var salle = this.SerializeJSONDL(index[0].salleClasse,"/api/salle_classes/");
  for (let i = 0; i < this.lstsalles.length; i++) {
   if(this.lstsalles[i].id==Number(salle)){
     return this.lstsalles[i].nomFr;
   }
    
  }
}

filternotes(){
  var tab=[]
  for (let j = 0; j < this.user.notes.length; j++) {
    for (let i = 0; i < this.lstNotes.length; i++) {
      if(this.lstNotes[i].id==Number(this.user.notes[j])){
      tab.push(this.lstNotes[i]);
      }
      
    }
    
  }
  this.lstNotes=tab;
}

assignnotes(){
for (let i = 0; i < this.lstDevoirs.length; i++) {
   for (let j = 0; j < this.lstNotes.length; j++) {
   if(Number(this.lstNotes[j].devoir)==Number(this.lstDevoirs[i].id)){
    
     
         this.lstDevoirs[i].Notes=this.lstNotes[j];
        
     
   }
      
   } 
 }
}

exist(id){
  var ok=false;
  for (let i = 0; i < this.matiere.length; i++) {
    if(this.matiere[i].matiere.id==id)
    {ok=true;break;}
    
  }
  return ok;
}

filterexams(){

  console.log("localStorage.getItem('user')",localStorage.getItem('userid'));
  
  var tab=[];
  for (let i = 0; i < this.lstDevoirs.length; i++) {
    if(this.lstDevoirs[i].enseignant!=null){
      console.log(this.lstDevoirs[i].enseignant.id === localStorage.getItem('userid'),localStorage.getItem('userid'),this.lstDevoirs[i].enseignant.id);
      
      if(this.lstDevoirs[i].enseignant.id === Number(localStorage.getItem('userid'))){
        tab.push(JSON.parse(JSON.stringify(this.lstDevoirs[i])));
      }      
     
       if(i==100){
         break;
       }
    }
    else{
      
    }
  
    
  }
  this.lstDevoirs=tab;
  console.log(this.lstDevoirs);
  

}

  SerializeJSONDL(ch:string,ch2:string){
      ch= ch.replace(ch2,'');
      return ch;
  }


  ionViewWillLeave(){
    this.menu.close();
  }


  refreshChart(){
    this.chartmatieres=[];
    this.chartMax=[];
    this.chartMin=[];
    this.chartEtudiant=[];
    var max=0;
    var min =20;
    for (let i = 0; i < this.lstDevoirs.length; i++) {
      if(this.lstDevoirs[i].lesDevoirs!=null){
        if(this.lstDevoirs[i].groupeExamenTypeMatiere.examenType.nomFr==this.DevoirType){
       this.chartmatieres.push(this.getmatiere(this.lstDevoirs[i].lesDevoirs.matiere));
      for (let j = 0; j < this.lstDevoirs[i].notes.length; j++) {
        if(this.lstDevoirs[i].notes[j].note>max){
           max=this.lstDevoirs[i].notes[j].note;
        } 
        if(this.lstDevoirs[i].notes[j].note<min){
          min=this.lstDevoirs[i].notes[j].note;
        }
        if(this.lstDevoirs[i].notes[j].eleveAnneeScolaire.id==Number(localStorage.getItem('eleveAnneeScolaires')))
        {
         this.chartEtudiant.push(this.lstDevoirs[i].notes[j].note)
        }
       }
         this.chartMax.push(max);
         this.chartMin.push(min);
         max=0;
         min =20;
      }
        
        
      }
      
    }
    this.bars.destroy();
  this.createChart();
  }


  createChart(){
    this.bars = new Chart(this.barChart.nativeElement, {
      type: 'line',
      data: {
          labels: this.chartmatieres,
          datasets: [{
              label: 'Note Maximal',
              data: this.chartMax,
              borderColor:
                  'rgb(112, 90, 212)'
    ,
              borderWidth: 1
          },
          {
            label: 'Ma Note',
            data: this.chartEtudiant,
            borderColor:
                'rgba(255, 159, 64, 1)'
  ,
            borderWidth: 1
        },
        {
          label: 'Note Minimal',
          data: this.chartMin,
          borderColor:
              'rgb(221, 34, 81)'
,
          borderWidth: 1
      }
        ]
      },
      options: {
          scales: {
            x:{
              display:true
            },
              y: {
                  beginAtZero: true
              }
          }
      }
  });
  }

  

}
