import { Subscription } from 'rxjs';
import { ExcerciceEnAjoutPage } from './../excercice-en-ajout/excercice-en-ajout.page';
import { UserService } from './../../../Services/user.service';
import { MenuController, ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { DetailExerciceEnPage } from '../detail-exercice-en/detail-exercice-en.page';
import * as moment from 'moment';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-excercice-en',
  templateUrl: './excercice-en.page.html',
  styleUrls: ['./excercice-en.page.scss'],
})
export class ExcerciceEnPage implements OnInit {
  class;
  lsthomework=[];
  lstmatieres=[];
  lstusers=[];
  sub1:Subscription
  sub2:Subscription
  sub3:Subscription
  sub4:Subscription
  sub5:Subscription
  constructor(private menu:MenuController,private modalCtrl :ModalController,private US:UserService,public modalController: ModalController ,private translate: TranslateService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    this.translate.setDefaultLang('en');
  }
 
  ngOnInit() {
    this.menu.enable(true,localStorage.getItem('role'));

  this.sub1=  this.US.getconnecteduser(localStorage.getItem('token')).subscribe(conn=>{
      localStorage.setItem('en',conn.id+'');
      
      var idClass = localStorage.getItem('classe');
      this.sub2=  this.US.GetClasse(idClass).subscribe(val=>{
          this.class=val;          

         this.sub3=    this.US.GetlstHomework(localStorage.getItem('token')).subscribe(homework =>{
           //@ts-ignore
           for (let i = 0; i < homework.length; i++) {
             
             homework[i].Classe=localStorage.getItem('classe');
            
             
            if(homework[i].enseignant!=null){
              homework[i].enseignant=homework[i].enseignant.id
            }
             homework[i].matiere=homework[i].matiere.id;
             if(conn.id== homework[i].enseignant)
             {
            this.lsthomework.push(homework[i]);
             }
             
           }
           this.sub4=      this.US.GetlstSubjects(localStorage.getItem('token')).subscribe(subject=>{
            //@ts-ignore
            this.lstmatieres=subject;
            var matiereC=[];

            for (let i = 0; i < conn.enseignantClasses.length; i++) {
              conn.enseignantClasses[i].matiere=conn.enseignantClasses[i].matiere.id
              conn.enseignantClasses[i].matiere={id:conn.enseignantClasses[i].matiere,nom:this.getmatiere(conn.enseignantClasses[i].matiere)};
              var idC =this.US.SerializeJSONDL(conn.enseignantClasses[i].classe,'/api/classes/');

              if(idC === localStorage.getItem('classe')){

                matiereC.push(conn.enseignantClasses[i]);
              }
            }
            localStorage.setItem('lstmatiers',JSON.stringify(matiereC));
            this.sub5=  this.US.getusers(localStorage.getItem('token')).subscribe(users=>{
           //@ts-ignore
              this.lstusers=users;
            });
          });
         var lsthom=  JSON.parse(localStorage.getItem('Homework'));
         for (let i = 0; i < this.lsthomework.length; i++) {
         var ok= false;
          if(lsthom!=undefined){
            for (let j = 0; j < lsthom.length; j++) {
              if(lsthom[j].id==this.lsthomework[i].id){
                ok=true;
              } 
              
            }
          }
          if(ok==false){
           /* this.US.testDelayednotification('Excercice',"Avez Vous faire de l'excercice du matiere "+this.getmatiere(this.lsthomework[i].matiere)+" ?",new Date(Date.now()+30000))
            this.US.testDelayednotification('Excercice',"Avez Vous faire de l'excercice du matiere "+this.getmatiere(this.lsthomework[i].matiere)+" ?",new Date(this.lsthomework[i].date-300000))
            this.US.testDelayednotification('Excercice',"n'oublie pas de faire l'excercie du "+this.getmatiere(this.lsthomework[i].matiere)+" ",new Date(this.lsthomework[i].date-600000))
            this.US.testDelayednotification('Excercice',"Avez vous finis ce excercie de  "+this.getmatiere(this.lsthomework[i].matiere)+" ?",new Date(this.lsthomework[i].date-1200000))
            this.US.testDelayednotification('Excercice',"Le date limit de l'excercice du matiere "+this.getmatiere(this.lsthomework[i].matiere)+" et en retard",new Date(this.lsthomework[i].date-180000))*/
          }
          
         }
         this.lsthomework.sort((a, b) => moment(b.createdAt).diff( a.createdAt, 'minutes') );

         localStorage.setItem('Homework',JSON.stringify(this.lsthomework));
           
         })
        
    });
  });
  }
  ionViewWillEnter(){
  }
  ionViewWillLeave(){
    this.menu.close();
  }
refresh(event){
  this.sub1.unsubscribe();
  this.sub2.unsubscribe();
  this.sub3.unsubscribe();
  this.sub4.unsubscribe();
  //this.sub5.unsubscribe();
  this.lsthomework=[];
  this.lstmatieres=[];
  this.lstusers=[];
  this.sub1=  this.US.getconnecteduser(localStorage.getItem('token')).subscribe(conn=>{
    localStorage.setItem('en',conn.id+'')
  
    this.sub2=  this.US.GetlstClasses(localStorage.getItem('token')).subscribe(val=>{
       //@ts-ignore
       for (let i = 0; i < val.length; i++) {
        if(val[i].id==Number(localStorage.getItem('classe'))){
        this.class=val[i];
        }
         
       }
       this.sub3=    this.US.GetlstHomework(localStorage.getItem('token')).subscribe(homework =>{
         //@ts-ignore
         for (let i = 0; i < homework.length; i++) {
           homework[i].Classe=localStorage.getItem('classe')
          
           
          if(homework[i].enseignant!=null){
            homework[i].enseignant=homework[i].enseignant.id
          }
           homework[i].matiere=homework[i].matiere.id
           if(Number(localStorage.getItem('classe'))==Number(homework[i].Classe) && conn.id== homework[i].enseignant)
           {
          this.lsthomework.push(homework[i]);
           }
           
         }
         this.sub4=      this.US.GetlstSubjects(localStorage.getItem('token')).subscribe(subject=>{
          //@ts-ignore
          this.lstmatieres=subject;
          var matiereC=[];
          for (let i = 0; i < conn.enseignantClasses.length; i++) {
            conn.enseignantClasses[i].matiere=this.US.SerializeJSONDL(conn.enseignantClasses[i].matiere,'/api/matieres/')
            conn.enseignantClasses[i].matiere={id:conn.enseignantClasses[i].matiere,nom:this.getmatiere(conn.enseignantClasses[i].matiere)};
            var idC =this.US.SerializeJSONDL(conn.enseignantClasses[i].classe,'/api/classes/');

            if(idC == localStorage.getItem('classe')){

              matiereC.push(conn.enseignantClasses[i]);
            }
          }
          localStorage.setItem('lstmatiers',JSON.stringify(matiereC));
          this.sub5=  this.US.getusers(localStorage.getItem('token')).subscribe(users=>{
         //@ts-ignore
            this.lstusers=users;
          });
        });
       var lsthom=  JSON.parse(localStorage.getItem('Homework'));
       for (let i = 0; i < this.lsthomework.length; i++) {
       var ok= false;
        if(lsthom!=undefined){
          for (let j = 0; j < lsthom.length; j++) {
            if(lsthom[j].id==this.lsthomework[i].id){
              ok=true;
            } 
            
          }
        }
        if(ok==false){
         /* this.US.testDelayednotification('Excercice',"Avez Vous faire de l'excercice du matiere "+this.getmatiere(this.lsthomework[i].matiere)+" ?",new Date(Date.now()+30000))
          this.US.testDelayednotification('Excercice',"Avez Vous faire de l'excercice du matiere "+this.getmatiere(this.lsthomework[i].matiere)+" ?",new Date(this.lsthomework[i].date-300000))
          this.US.testDelayednotification('Excercice',"n'oublie pas de faire l'excercie du "+this.getmatiere(this.lsthomework[i].matiere)+" ",new Date(this.lsthomework[i].date-600000))
          this.US.testDelayednotification('Excercice',"Avez vous finis ce excercie de  "+this.getmatiere(this.lsthomework[i].matiere)+" ?",new Date(this.lsthomework[i].date-1200000))
          this.US.testDelayednotification('Excercice',"Le date limit de l'excercice du matiere "+this.getmatiere(this.lsthomework[i].matiere)+" et en retard",new Date(this.lsthomework[i].date-180000))*/
        }
        
       }
       this.lsthomework.sort((a, b) => moment(b.createdAt).diff( a.createdAt, 'minutes') );

       localStorage.setItem('Homework',JSON.stringify(this.lsthomework));
         console.log(this.lsthomework);
         event.target.complete();

       })
      
  });
});
}

async showModal(item){
  
  if(item.subject!=undefined){
    const modal = await this.modalCtrl.create({
      component : DetailExerciceEnPage
    })
    var ch=JSON.stringify(item);
    localStorage.setItem('DexerciceEn',ch);
    await modal.present();
  }    
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
getenseignant(id){
    var enseignant=''
    for (let i = 0; i < this.lstusers.length; i++) {
     if(this.lstusers[i].id==Number(id)){
      enseignant=  this.lstusers[i].firstname+' '+this.lstusers[i].lastname;
     }
    }
    return enseignant
  }
  async Ajout(){
    const modal = await this.modalController.create({
      component: ExcerciceEnAjoutPage,
      cssClass: 'my-custom-class'
    });
     await modal.present().then(()=>{
    
    })
    // await modal.onWillDismiss().then(()=>{
    //   this.refresh();
    // });
  }
}
