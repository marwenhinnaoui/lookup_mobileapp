import { Component, Input, OnInit } from '@angular/core';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';
import { AlertController, ModalController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import * as moment from 'moment';
import { AttVoyage, statusVoyage, UserService, VoyageAttEleve } from 'src/app/Services/user.service';
@Component({
  selector: 'app-info-voyage',
  templateUrl: './info-voyage.page.html',
  styleUrls: ['./info-voyage.page.scss'],
})
export class InfoVoyagePage implements OnInit {
  data = null;
  lstClasses = [];
  lstetudiants = [];
  newEleve: any;
  lstids = [];
  newStudents = []
  attendance: AttVoyage = {
    voyage: -1 + '',
    users: []
  }
  listeE = [];
  @Input() selectedVoyage

  constructor(private alertController: AlertController, private userService: UserService, private toastController: ToastController, private barcodeScanner: BarcodeScanner, private modal: ModalController) { }

  ngOnInit() {
    this.userService.GetClasses().subscribe(classe => {
      this.lstClasses = classe;
      this.userService.GetEleves().subscribe(value => {
        if (this.selectedVoyage.info.voyageAttendances.length != 0) {
          for (let i = 0; i < this.selectedVoyage.info.voyageAttendances.length; i++) {
            let eleve = this.selectedVoyage.info.voyageAttendances[i].eleve.replace('/api/eleve_annee_scolaires/', '')
            this.lstetudiants.push(
              {
                nom: this.getEleveanneeScolaire(eleve, value),
                status: String(this.selectedVoyage.info.voyageAttendances[i].statut),
                id: eleve
              });
            this.lstids.push(this.selectedVoyage.info.voyageAttendances[i].eleve.id);
          }
        }
        console.log('value', value , this.newStudents);

        for (const item of value) {
          if (!this.existinArray(item.id)) {
           console.log("typeof",typeof item.classe);
           if(item.classe != null){
            if(typeof item.classe === 'object'){
              let id = item.classe.id;
              item.classe = this.getClasseId(id);
              this.newStudents.push(item);
            }else{
              this.newStudents.push(item);
            }            }
          }
        }
        console.log('value', this.newStudents);
      });
    });

  }

  scan() {

    this.barcodeScanner.scan().then(barcodeData => {
      let primary = barcodeData.text;
      let ch = primary.split(':')
      //this.newEleve= ch;
      console.log("ch",ch);
      if (!this.existinArray(ch[0])) {
        console.log("if",this.existinArray(ch[0]));
        this.existinArray(ch[0])
        this.attendance = {
          voyage: String(this.selectedVoyage.info.id),
          users: [ch[0]],
        }

        this.userService.setVoyageAttendance(localStorage.getItem('token'), this.attendance).subscribe(
          val => { },
          err => {
          }
        );
        this.lstetudiants.push({ nom: ch[1], status: 0, id: ch[0] });
        this.listeE.push({ id: String(ch[0]) });
        //this.newEleve
        this.lstids.push(ch[0]); 
      }
      else {
        this.showToast('This student already exists in the list')
      }
    }).catch(err => {
      console.log('Error', err);
    });
  }

  async showToast(content) {
    const toast = await this.toastController.create({
      message: content,
      duration: 2000
    });
    toast.present();
  }

  checkifexist(ch) {
    if (ch == '') { return false; }
    let ok = true;
    for (let i = 0; i < this.lstids.length; i++) {
      if (this.lstids[i] == ch) {
        ok = false;
      }
    }
    return ok;
  }

  close() {
    this.modal.dismiss();
  }

  demarrerVoyage() {

    console.log("lstetudiants",this.lstetudiants[0].status,this.lstetudiants[0].id);    
    for (const item of this.lstetudiants) {
      item.status = "1"
    }

    this.attendance = {
      voyage: String(this.selectedVoyage.info.id),
      users: this.listeE
    }

    this.userService.setVoyageAttendance(localStorage.getItem('token'), this.attendance).subscribe(
      val => { },
      err => {
      }
    );
    let voy: statusVoyage = {
      id: String(this.selectedVoyage.info.id),
      status: '1'
    }
    this.selectedVoyage.info.statut = '1';

    this.userService.updateSatusVoyage(localStorage.getItem('token'), voy).subscribe(
      val => {
        console.log(val);
      },
      err => {
        console.log(err);
      }
    );
  }

  cloturerVoyage() {
    let voy: statusVoyage = {
      id: String(this.selectedVoyage.info.id),
      status: '2'
    }

    this.selectedVoyage.info.statut = '2';

    this.userService.updateSatusVoyage(localStorage.getItem('token'), voy).subscribe(
      val => {
        console.log(val);
      },
      err => {
        console.log(err);
      }
    );
  }

  async DemarrerVoyageAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Trip',
      message: 'Do you really want to start this trip ?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Start',
          handler: () => {
            this.demarrerVoyage();
          }
        }
      ]
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
  }

  setEtudiant(item, index) {
    let stat = '1';
    console.log(item);

    if (item.status == '1') {
      stat = '2'
    }
    else {
      stat = '1'
    }
    let att: VoyageAttEleve = {
      //@ts-ignore
      dateEnCour: moment().format('YYYY-MM-DD HH:MM:SS'),
      ideleve: String(item.id),
      statut: stat,
      idvoyage: String(this.selectedVoyage.info.id)
    }
    this.lstetudiants[index].status = stat

    this.userService.setVoyageAttendanceEleve(localStorage.getItem('token'), att).subscribe(
      val => {
        console.log(val);
      },
      err => {
        console.log(err);
      }
    );
  }



  async CloturerVoyageAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Trip',
      message: 'Do you really want to close this trip  ?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Stop',
          handler: () => {
            if (this.verifyIfallstudentsAreAvailable()) {
              this.cloturerVoyage();
            }
            else {
              this.showToast('All students must be selected')
            }
          }
        }
      ]
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
  }

  verifyIfallstudentsAreAvailable() {
    let ok = true;
    for (const item of this.lstetudiants) {
      if (item.status == '1') {
        ok = false;
      }
    }
    return ok;
  }

  existinArray(id) {
    let ok = false;
    for (let i = 0; i < this.lstetudiants.length; i++) {
      if (this.lstetudiants[i].id == id) {
        ok = true;
        break;
      }

    }
    return ok;
  }

  deleteEtudiant(item, i) {
    console.log(item, i, this.lstetudiants);
    for (let i = 0; i < this.lstetudiants.length; i++) {
      if (this.lstetudiants[i].id == item.id) {
        this.lstetudiants.splice(i, 1);
        this.listeE.splice(i, 1);
        break;
      }
    }
    console.log(this.lstetudiants);

  }

  addEleve() {
    console.log(this.newEleve);
    for (let i = 0; i < this.newStudents.length; i++) {
      if (this.newStudents[i].id == this.newEleve.id) {
        //this.listeE.push(this.newStudents[i].id);
        this.newStudents.splice(i, 1);
        break;
      }
    }
    this.lstetudiants.push({ nom: String(this.newEleve.nom), status: 0, id: String(this.newEleve.id) });
    this.listeE.push({ id: String(this.newEleve.id) });
    this.lstids.push(String(this.newEleve.id));
  }


  getEleveanneeScolaire(id, list) {
    let ch = '';
    for (const item of list) {
      if (String(item.id) === String(id)) {
        ch = item.nom;
        break;
      }
    }

    return ch;
  }

  getClasseId(id) {
    let ch = '';
    for (const item of this.lstClasses) {
      if (String(item.id) === String(id)) {
        ch = item.nomFr;
        break;
      }
    }

    return ch;
  }
}