import { UserService } from './../../Services/user.service';
import { DetailDevoirPage } from './../detail-devoir/detail-devoir.page';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, ModalController, MenuController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import {
  Chart,
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,

  Filler,
  Legend,
  Title,
  Tooltip
} from 'chart.js';
import * as moment from 'moment';

Chart.register(
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Filler,
  Legend,
  Title,
  Tooltip
);

@Component({
  selector: 'app-devoir',
  templateUrl: './devoir.page.html',
  styleUrls: ['./devoir.page.scss'],
})
export class DevoirPage implements OnInit {

  bars: Chart;
  @ViewChild('barChart',{static:false}) barChart:any;
  constructor(private nav:NavController , private modalCtrl :ModalController,private menu:MenuController,private US:UserService,private translate: TranslateService) {
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
DevoirType='Oral'
user;switch=false;
  ngOnInit() {
    this.menu.enable(true,localStorage.getItem('role'));
  
    this.US.GetlstSubjects(localStorage.getItem('token')).subscribe(val=>{
      
      this.lstMatieres=val;
    })
    this.US.getsalleclasse(localStorage.getItem('token')).subscribe(val=>{
      this.lstsalles=val;
    })
    this.US.GetDevoirs(localStorage.getItem('token')).subscribe(val=>{
      this.lstDevoirs=val;
      this.lstDevoirs = this.lstDevoirs.sort((a, b) => moment(b.createdAt).diff( a.createdAt, 'seconds') )
     // this.lstDevoirs.reverse();
      for (let i = 0; i < this.lstDevoirs.length; i++) {
        if( this.lstDevoirs[i].lesDevoirs!=null){
          this.lstDevoirs[i].lesDevoirs.anneeScolaire=this.SerializeJSONDL(this.lstDevoirs[i].lesDevoirs.anneeScolaire,"/api/annee_scolaires/")
        this.lstDevoirs[i].lesDevoirs.matiere=this.SerializeJSONDL(this.lstDevoirs[i].lesDevoirs.matiere,"/api/matieres/")
        this.lstDevoirs[i].lesDevoirs.periode=this.SerializeJSONDL(this.lstDevoirs[i].lesDevoirs.periode,"/api/periodes/")
        this.lstDevoirs[i].lesDevoirs.specialiteNiveau=this.SerializeJSONDL(this.lstDevoirs[i].lesDevoirs.specialiteNiveau,"/api/specialite_niveaus/")
     if(this.lstDevoirs[i].lesDevoirs.groupClasse!=null){
      this.lstDevoirs[i].lesDevoirs.groupClasse=this.SerializeJSONDL(this.lstDevoirs[i].lesDevoirs.groupClasse,"/api/group_classes/")
     }
        this.lstDevoirs[i].lesDevoirs.classe=this.SerializeJSONDL(this.lstDevoirs[i].lesDevoirs.classe,"/api/classes/")
        if( this.lstDevoirs[i].salleClasse!=null)
            {this.lstDevoirs[i].salleClasse=this.SerializeJSONDL(this.lstDevoirs[i].salleClasse,"/api/salle_classes/")}        }
      }
      
      this.filterexams();
      this.createChart();
      this.refreshChart();
    })
    this.US.getcursusStudent(localStorage.getItem('token'),localStorage.getItem('eleveAnneeScolaires')).subscribe(students=>{
      //@ts-ignore
      for (let i = 0; i < students.notes.length; i++) {
        //@ts-ignore
        students.notes[i]=this.SerializeJSONDL(students.notes[i],"/api/notes/")
      }
      this.user=students;
      this.lstDevoirs.sort((a, b) => moment(b.date).diff( a.date, 'minutes') );

 });
  }
getmatiere(index){
  
  for (let i = 0; i < this.lstMatieres.length; i++) {
   if(this.lstMatieres[i].id==Number(index)){
     return this.lstMatieres[i].nomFr;
   }
    
  }
}
getSalle(index){
  
  for (let i = 0; i < this.lstsalles.length; i++) {
   if(this.lstsalles[i].id==Number(index)){
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
filterexams(){
  var tab=[];
  for (let i = 0; i < this.lstDevoirs.length; i++) {
    if(this.lstDevoirs[i].lesDevoirs!=null){
      if(Number(this.lstDevoirs[i].lesDevoirs.classe)==Number(localStorage.getItem('classe')) ){
       if(this.lstDevoirs[i].lesDevoirs.groupClasse!=null)
       { if( Number(localStorage.getItem('groupClasse'))==Number(this.lstDevoirs[i].lesDevoirs.groupClasse))
          {tab.push(JSON.parse(JSON.stringify(this.lstDevoirs[i])));}
      }
        else{
          tab.push(JSON.parse(JSON.stringify(this.lstDevoirs[i]))); 
        }
       }
      
    }
    else{
      
    }
  
    
  }
  this.lstDevoirs=tab;

}
  async showModal (selectedExam,matiere){
    if(selectedExam.notes!=undefined){
      const modal = await this.modalCtrl.create({
        component : DetailDevoirPage
      })
      var    ch=JSON.stringify(selectedExam);
      localStorage.setItem('SExam',ch);
      localStorage.setItem('SExamatiere',matiere);
      await modal.present();
    }
   
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

  doRefresh(event){   

    this.US.GetlstSubjects(localStorage.getItem('token')).subscribe(val=>{
      
      this.lstMatieres=val;
    })
    this.US.getsalleclasse(localStorage.getItem('token')).subscribe(val=>{
      this.lstsalles=val;
    })
    this.US.GetDevoirs(localStorage.getItem('token')).subscribe(val=>{
      this.lstDevoirs=val;
      this.lstDevoirs = this.lstDevoirs.sort((a, b) => moment(b.createdAt).diff( a.createdAt, 'seconds') )
     // this.lstDevoirs.reverse();
      for (let i = 0; i < this.lstDevoirs.length; i++) {
        if( this.lstDevoirs[i].lesDevoirs!=null){
          this.lstDevoirs[i].lesDevoirs.anneeScolaire=this.SerializeJSONDL(this.lstDevoirs[i].lesDevoirs.anneeScolaire,"/api/annee_scolaires/")
        this.lstDevoirs[i].lesDevoirs.matiere=this.SerializeJSONDL(this.lstDevoirs[i].lesDevoirs.matiere,"/api/matieres/")
        this.lstDevoirs[i].lesDevoirs.periode=this.SerializeJSONDL(this.lstDevoirs[i].lesDevoirs.periode,"/api/periodes/")
        this.lstDevoirs[i].lesDevoirs.specialiteNiveau=this.SerializeJSONDL(this.lstDevoirs[i].lesDevoirs.specialiteNiveau,"/api/specialite_niveaus/")
     if(this.lstDevoirs[i].lesDevoirs.groupClasse!=null){
      this.lstDevoirs[i].lesDevoirs.groupClasse=this.SerializeJSONDL(this.lstDevoirs[i].lesDevoirs.groupClasse,"/api/group_classes/")
     }
        this.lstDevoirs[i].lesDevoirs.classe=this.SerializeJSONDL(this.lstDevoirs[i].lesDevoirs.classe,"/api/classes/")
        if( this.lstDevoirs[i].salleClasse!=null)
            {this.lstDevoirs[i].salleClasse=this.SerializeJSONDL(this.lstDevoirs[i].salleClasse,"/api/salle_classes/")}        }
      }

      this.filterexams();
      this.createChart();
      this.refreshChart();
    })
    this.US.getcursusStudent(localStorage.getItem('token'),localStorage.getItem('eleveAnneeScolaires')).subscribe(students=>{
      //@ts-ignore
      for (let i = 0; i < students.notes.length; i++) {
        //@ts-ignore
        students.notes[i]=this.SerializeJSONDL(students.notes[i],"/api/notes/")
      }
      this.user=students;
      this.lstDevoirs.sort((a, b) => moment(b.date).diff( a.date, 'minutes') );

      event.target.complete();

 });


     

  }
}
