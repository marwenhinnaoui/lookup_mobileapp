import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import * as moment from 'moment';
import { UserService, voyage } from 'src/app/Services/user.service';
import { InfoVoyagePage } from '../info-voyage/info-voyage.page';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-ajout-voyage',
  templateUrl: './ajout-voyage.page.html',
  styleUrls: ['./ajout-voyage.page.scss'],
})
export class AjoutVoyagePage implements OnInit {
lstCircuit=[];
lstVehicule=[];
newVoy:voyage={circuit:'',vehicule:'',datedepart:moment().format('YYYY-MM-DD HH:mm:ss'),type:'0'}
  constructor(private userService:UserService,private modal:ModalController,
    private modaTest:ModalController,private toastController:ToastController,private translate: TranslateService) {
      // this language will be used as a fallback when a translation isn't found in the current language
      this.translate.setDefaultLang('en'); 
   }

  ngOnInit() {
  /*  this.userService.getuser(localStorage.getItem('token'),localStorage.getItem('userid')).subscribe(value=>{
      console.log(value);
      let voy1:voyage={
        datedepart:value.voyages[0].dateDepart,
        vehicule:value.voyages[0].vehicule.name,
        circuit:value.voyages[0].circuit.nomFr,
        type:value.voyages[0].type,
      }
      let voy2:voyage={
        datedepart:'2021-12-25T15:35:44+01:00',
        circuit:'bizerte',
        vehicule:'BUS 2',
        type:'1',
      }
      console.log(this.checkIdenticalVoyage(voy1,voy2));
      
    });*/
    
    this.userService.GetVehicule(localStorage.getItem('token')).subscribe(veh=>{
     this.lstVehicule=veh;
    })
    this.userService.GetCircuit(localStorage.getItem('token')).subscribe(cir=>{
      this.lstCircuit =cir;
    })
  }
  close(){
      this.modal.dismiss();
  }

  ajouterVoyage(){
    if(this.newVoy.circuit==''){
      this.showToast('You must select a circuit');
      return;
    }
    if(this.newVoy.vehicule==''){
      this.showToast('You must select a vehicle');
      return;
    }

    //@ts-ignore
    this.newVoy.datedepart=moment(this.newVoy.datedepart).format('YYYY-MM-DD HH:mm:ss');
  
      this.userService.setVoyage(localStorage.getItem('token'),this.newVoy).subscribe(
        val=>{
          console.log("val" ,val,this.newVoy);
          var obj= {info: {voyageAttendances:[], id:val},circuit: this.newVoy}
          this.showModal(obj);
        },
          err=>{console.log(err)
        }
      )

   
    this.modal.dismiss();

  }


  async showModal(item){
    console.log("obj",item);

    const modal2 = await this.modaTest.create({
      component: InfoVoyagePage,
      componentProps:{selectedVoyage:item},
      cssClass: 'my-custom-class'
    });
     await modal2.present();
    //  modal2.onDidDismiss().then(val=>{
    //   this.changeday(this.index)
       
    //  })       
  }

  async showToast(content) {
    const toast = await this.toastController.create({
      message: content,
      duration: 2000
    });
    toast.present();
  }

  checkIdenticalVoyage(voy1:voyage,voy2:voyage){
    
    if(moment(voy1.datedepart).diff(voy2.datedepart, 'days')==0)
    {
     
       if(voy1.circuit==voy2.circuit)
       {
                    if(voy1.vehicule==voy2.vehicule)
           {
             return false;

           }
           else
           {
             return true;
           }
       }
       else
       {
         return true;
       }
    }
    else
    {
      return true;
    }
  }
}
