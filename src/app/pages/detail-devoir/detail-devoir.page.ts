import { Component, Input, OnInit,ViewChild } from '@angular/core';
import { ModalController, NavParams, MenuController } from '@ionic/angular';
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
import { TranslateService } from '@ngx-translate/core';
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
  selector: 'app-detail-devoir',
  templateUrl: './detail-devoir.page.html',
  styleUrls: ['./detail-devoir.page.scss'],
})
export class DetailDevoirPage implements OnInit {
devoir;
switch=false;
matiere='';
lstNotes=[];
NotesEtudiant=[];
bars: any;
@ViewChild('barChart',{static:false}) barChart:any;
  constructor(public modalCtrl: ModalController,private menu:MenuController,private translate: TranslateService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    this.translate.setDefaultLang('en');    
  }

  async close (){
    await this.modalCtrl.dismiss();
  }

 ionViewDidEnter(){
  this.createChart()
 }

  ngOnInit() {
    this.menu.enable(true,localStorage.getItem('role'));

    this.devoir=JSON.parse(localStorage.getItem('SExam'));
    this.matiere=localStorage.getItem('SExamatiere');

   this.makeClassNotes();
  }


  makeClassNotes(){    
    var Note=this.returnNoteEtudiant();
    for (let i = 0; i < this.devoir.notes.length; i++) {
      if(this.devoir.notes[i].eleveAnneeScolaire.id!=Number(localStorage.getItem('eleveAnneeScolaires'))){
        this.lstNotes.push(this.devoir.notes[i].note);
        this.NotesEtudiant.push(Note)
      }
    }
    
  }
  
  returnNoteEtudiant(){
   var note =0;
    for (let i = 0; i < this.devoir.notes.length; i++) {
      if(this.devoir.notes[i].eleveAnneeScolaire.id==Number(localStorage.getItem('eleveAnneeScolaires'))){
       note=   this.devoir.notes[i].note;
       break;
      }
      
    }
    return note
  }
  createChart(){
    this.bars = new Chart(this.barChart.nativeElement, {
      type: 'line',
      data: {
          labels: this.NotesEtudiant,
          datasets: [{
              label: 'Grade of class',
              data: this.lstNotes,
              borderColor:
                  'rgb(112, 90, 212)'
    ,
              borderWidth: 1
          },
          {
            label: 'My grade',
            data: this.NotesEtudiant,
            borderColor:
                'rgba(255, 159, 64, 1)'
  ,
            borderWidth: 1
        }
        ]
      },
      options: {
          scales: {
            x:{
              display:false
            },
              y: {
                  beginAtZero: true
              }
          }
      }
  });
  }

}
