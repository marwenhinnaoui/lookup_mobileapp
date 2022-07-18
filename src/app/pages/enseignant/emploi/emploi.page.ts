import  swal  from 'sweetalert';
import { MenuController, NavController } from '@ionic/angular';
import { UserService } from './../../../Services/user.service';
import { descrip } from './../../../tab2/tab2.page';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-emploi',
  templateUrl: './emploi.page.html',
  styleUrls: ['./emploi.page.scss'],
})
export class EmploiPage implements OnInit {
  year=new Date().getFullYear();
  month=new Date().getMonth();
  day=new Date();
  days = ["Dimanche", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"];
  months = ["Janvier", "Février","Mars", "Avril", "May", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Decembre"];
  today=this.days[this.day.getDay()];
  thismonth=this.months[this.month];
  SelectedDay='1';
  index=this.day.getDay();
  Timetable:descrip[];
  lstseances=[];
  lstmatieres=[];
  lstusers=[];
  lstsalles=[];
  lstdays=[];
  numberDay;

  constructor(private menu:MenuController ,private US:UserService,private nav:NavController ) 
  {
    this.Timetable=new Array();
    //this.changeday(0);
    var days:descrip[]=[{matiere:'Arabe',classe:'9eme B6',badge:'Red',Salle:'Salle 10',dateen:'9:00-12:00'}];
   }

   ngOnInit() {
    
    this.menu.enable(true,localStorage.getItem('role'));
    this.numberDay = (new Date()).getDay();
    this.US.getconnecteduser(localStorage.getItem('token')).subscribe(val=>{
      for (let i = 0; i < val.enseignantClasses.length; i++) {
        val.enseignantClasses[i].matiere=this.US.SerializeJSONDL(val.enseignantClasses[i].matiere,'/api/matieres/')
        val.enseignantClasses[i].matiere={id:val.enseignantClasses[i].matiere,nom:this.getmatiere(val.enseignantClasses[i].matiere)};
      }
     localStorage.setItem('matieres',JSON.stringify(val.enseignantClasses));
    });

    for (let i = 1; i < 7; i++) {
      this.lstdays.push(moment().weekday(i).format('DD'))  
    }
    this.US.GetSeances(localStorage.getItem('token')).subscribe(val=>{
       //@ts-ignore
       this.lstseances=val;
       for (let i = 0; i <   this.lstseances.length; i++) {
        if(this.lstseances[i].classe!=null){
          this.lstseances[i].classe=this.US.SerializeJSONDL( this.lstseances[i].classe,"/api/classes/");
          } 
        if(this.lstseances[i].matiere!=null){
          this.lstseances[i].matiere=this.US.SerializeJSONDL(this.lstseances[i].matiere, "/api/matieres/");
          } 
        
        if(this.lstseances[i].salleClasse!=null){
        this.lstseances[i].salleClasse=this.US.SerializeJSONDL(this.lstseances[i].salleClasse,"/api/salle_classes/");  
        } 
      }
       var tab=new Array();
       tab
       for (let i = 0; i < this.lstseances.length; i++) {
       
         if(Number(this.lstseances[i].classe)==Number(localStorage.getItem('classe'))){
          tab.push(this.lstseances[i]);
         }
         
       }
       this.lstseances=tab
       this.US.GetlstSubjects(localStorage.getItem('token')).subscribe(subject=>{
          //@ts-ignore
          this.lstmatieres=subject;
            this.US.getsalleclasse(localStorage.getItem('token')).subscribe(salles=>{
              //@ts-ignore
              this.lstsalles=salles;
        
              this.changeday(this.numberDay);
           });
    
      });
       
    var element=document.getElementById(this.numberDay);
    element.classList.remove("unselected");
    element.classList.add("selected")
    },
    err=>{
   swal('Session',
   'Votre session est expiré, veuillez reconnecter',
   'info',
   
   ).then(()=>{
     this.nav.navigateRoot('login');
   })

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
  getclasse(id){

  }
  getsalle(id){
    var salle=''
    for (let i = 0; i < this.lstsalles.length; i++) {
     if(this.lstsalles[i].id==Number(id)){
      salle=  this.lstsalles[i].nomFr;
     }
    }
    return salle
  }

  ionViewDidEnter(){   
    this.menu.enable(true,'Parent');
    this.menu.close();
   
  }
 changeday(i)
 {if(this.index==0)
  {this.index=1}
   if(i!=this.index )
  { 
    var element=document.getElementById(String(i));
  element.classList.remove("unselected");
  element.classList.add("selected");
  element=document.getElementById(String(this.index));
  element.classList.add("unselected");
  element.classList.remove("selected");
   this.index=i;}
  var days=new Array();
  this.lstseances.sort((a, b) => moment(b.heureDebut).diff( a.heureDebut, 'minutes') );
  this.lstseances.reverse();
  for (let j = 0; j < this.lstseances.length; j++) {
    if(this.lstseances[j].jour==i){
      var e=''
      if(this.lstseances[j].enseignant){
       e=this.lstseances[j].enseignant.firstname+' '+this.lstseances[j].enseignant.lastname
      }
    
      days.push({matiere:this.getmatiere(this.lstseances[j].matiere),
        classe:'',
        badge:'#167bbf',
        Salle:this.getsalle(this.lstseances[j].salleClasse),
        dateen:(Number(new Date(this.lstseances[j].heureDebut).getHours()))+':'+this.formatdate(new Date(this.lstseances[j].heureDebut).getMinutes())+'-'+(Number(new Date(this.lstseances[j].heureFin).getHours()))+':'+this.formatdate(new Date(this.lstseances[j].heureFin).getMinutes()),
      Enseignant:e
    })
    }
  }
  this.Timetable=days;
  
  

  
}
getbordercolor(color){
  return '1px solid'+color;
}
formatdate(minute){
if(minute<10){
  return '0'+minute;
}else
{
  return minute
}
}
getJour(jour){
var day =new Date();
var today=this.days[day.getDay()];
 if(this.today=='Lun')
 {
 }
 else if(this.today=='Mar')
 {}
 else if(this.today=='Mer')
 {}
 else if(this.today=='Jeu')
 {}
 else if(this.today=='Ven')
 {}
 else if(this.today=='Sam')
 {}
}

ionViewWillLeave(){
  this.menu.close();
}

}
