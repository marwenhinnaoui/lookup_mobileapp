import { TpAjoutEnPage } from './../tp-ajout-en/tp-ajout-en.page';
import { Subscription } from 'rxjs';
import { CoursAjoutEnPage } from './../cours-ajout-en/cours-ajout-en.page';
import { MenuController, ModalController } from '@ionic/angular';
import { UserService } from './../../../Services/user.service';
import { Component, OnInit } from '@angular/core';
import { DetailCoursTpEnPage } from '../detail-cours-tp-en/detail-cours-tp-en.page';
import { DetailTpCoursEnPage } from '../detail-tp-cours-en/detail-tp-cours-en.page';
import * as moment from 'moment';
import { TranslateService } from '@ngx-translate/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-cours-tp-en',
  templateUrl: './cours-tp-en.page.html',
  styleUrls: ['./cours-tp-en.page.scss'],
})
export class CoursTpEnPage implements OnInit {
  lstMatieres: any = [];
  lstcours: any = [];
  lstmatieres = [];
  lstenmatieres = [];
  lsttp: any = [];
  switch = true;
  sub1: Subscription
  sub2: Subscription
  sub3: Subscription
  constructor(private US: UserService, private modalController: ModalController,
    public modalCtrl: ModalController, private menu: MenuController, private translate: TranslateService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    this.translate.setDefaultLang('en');
  }

  ngOnInit() {
    this.menu.enable(true, localStorage.getItem('role'));

    this.US.GetCoursByIDclass(localStorage.getItem('token'), localStorage.getItem('userid'), localStorage.getItem('classe')).subscribe(callss => {
      this.lstcours = callss;
      this.lstcours.sort((a, b) => moment(b.createdAt).diff(a.createdAt, 'minutes'));
    });

    this.sub1 = this.US.GetTPsByIDclass(localStorage.getItem('token'), localStorage.getItem('userid'), localStorage.getItem('classe')).subscribe(classe => {
      this.lsttp = classe;
      this.lsttp.sort((a, b) => moment(b.createdAt).diff(a.createdAt, 'minutes'));
    });

    this.sub2 = this.US.GetlstSubjects(localStorage.getItem('token')).subscribe(subject => {
      //@ts-ignore
      this.lstmatieres = subject
      var matiereC = [];
      this.sub3 = this.US.getconnecteduser(localStorage.getItem('token')).subscribe(val => {
        for (let i = 0; i < val.enseignantClasses.length; i++) {
          val.enseignantClasses[i].matiere = val.enseignantClasses[i].matiere.id
          val.enseignantClasses[i].matiere = { id: val.enseignantClasses[i].matiere, nom: this.getmatiere(val.enseignantClasses[i].matiere) };
          var idC = this.US.SerializeJSONDL(val.enseignantClasses[i].classe, '/api/classes/');

          if (idC == localStorage.getItem('classe')) {
            matiereC.push(val.enseignantClasses[i]);
          }
        }
        localStorage.setItem('lstmatiers', JSON.stringify(matiereC));
        this.lstenmatieres = val.enseignantClasses;
      });
    });
  }

  doRefresh(event) {
    this.US.GetCoursByIDclass(localStorage.getItem('token'), localStorage.getItem('userid'), localStorage.getItem('classe')).subscribe(callss => {
      this.lstcours = callss;
      this.lstcours.sort((a, b) => moment(b.createdAt).diff(a.createdAt, 'minutes'));
    })

    this.sub1 = this.US.GetTPsByIDclass(localStorage.getItem('token'), localStorage.getItem('userid'), localStorage.getItem('classe')).subscribe(classe => {
      this.lsttp = classe;
      this.lsttp.sort((a, b) => moment(b.createdAt).diff(a.createdAt, 'minutes'));
    });

    this.sub2 = this.US.GetlstSubjects(localStorage.getItem('token')).subscribe(subject => {
      //@ts-ignore
      this.lstmatieres = subject
      var matiereC = [];
      this.sub3 = this.US.getconnecteduser(localStorage.getItem('token')).subscribe(val => {

        for (let i = 0; i < val.enseignantClasses.length; i++) {
          val.enseignantClasses[i].matiere = val.enseignantClasses[i].matiere.id
          val.enseignantClasses[i].matiere = { id: val.enseignantClasses[i].matiere, nom: this.getmatiere(val.enseignantClasses[i].matiere) };
          var idC = this.US.SerializeJSONDL(val.enseignantClasses[i].classe, '/api/classes/');

          if (idC == localStorage.getItem('classe')) {
            matiereC.push(val.enseignantClasses[i]);
          }
        }
        localStorage.setItem('lstmatiers', JSON.stringify(matiereC));

        this.lstenmatieres = val.enseignantClasses;
        event.target.complete();
      });
    });

  }

  exist(ch) {
    var ok = true;
    for (let index = 0; index < this.lstenmatieres.length; index++) {
      if (this.lstenmatieres[index].matiere.nom == ch) {
        ok = false;
        break;
      }
    }
    return ok;
  }

  getmatiere(id) {
    var matiere = ''
    for (let i = 0; i < this.lstmatieres.length; i++) {
      if (this.lstmatieres[i].id == Number(id)) {
        matiere = this.lstmatieres[i].nomFr;
      }
    }
    return matiere
  }

  getmatiere22(item) {
    var id = this.US.SerializeJSONDL(item, '/api/matieres/');
    var matiere = ''
    for (let i = 0; i < this.lstmatieres.length; i++) {
      if (this.lstmatieres[i].id == Number(id)) {
        matiere = this.lstmatieres[i].nomFr;
      }
    }
    return matiere
  }

  switchCoursTp(sw: boolean, ch: string, ch2: string) {
    this.switch = sw;
    var element = document.getElementById(ch);
    var element2 = document.getElementById(ch2);
    element2.classList.remove("active");
    element.classList.add("active");
  }

  download(ch) {
    window.open(this.US.downloadfiles(ch), '_system', 'location=yes')
  }

  refresh() {
    this.lstMatieres = [];
    this.lstcours = [];
    this.lstmatieres = [];
    this.lstenmatieres = [];
    this.lsttp = [];
    this.sub1.unsubscribe();
    this.sub2.unsubscribe();
    this.sub3.unsubscribe();
    this.US.GetCoursByIDclass(localStorage.getItem('token'), localStorage.getItem('userid'), localStorage.getItem('classe')).subscribe(callss => {
      this.lstcours = callss;
      this.lstcours.sort((a, b) => moment(b.createdAt).diff(a.createdAt, 'minutes'));
    })

    this.sub1 = this.US.GetTPsByIDclass(localStorage.getItem('token'), localStorage.getItem('userid'), localStorage.getItem('classe')).subscribe(classe => {
      this.lsttp = classe;
      this.lsttp.sort((a, b) => moment(b.createdAt).diff(a.createdAt, 'minutes'));
    });

    this.sub2 = this.US.GetlstSubjects(localStorage.getItem('token')).subscribe(subject => {
      //@ts-ignore
      this.lstmatieres = subject
      this.sub3 = this.US.getconnecteduser(localStorage.getItem('token')).subscribe(val => {
        for (let i = 0; i < val.enseignantClasses.length; i++) {
          val.enseignantClasses[i].matiere = this.US.SerializeJSONDL(val.enseignantClasses[i].matiere, '/api/matieres/')
          val.enseignantClasses[i].matiere = { id: val.enseignantClasses[i].matiere, nom: this.getmatiere(val.enseignantClasses[i].matiere) };
        }
        this.lstenmatieres = val.enseignantClasses;
      });
    });
  }

  async showModalCours(item) {
    if (item.id != undefined) {
      const modal = await this.modalCtrl.create({
        component: DetailCoursTpEnPage
      })
      var ch = JSON.stringify(item);
      localStorage.setItem('DcoursEn', ch);
      await modal.present();
    }
  }

  async showModalTP(item) {

    const modal = await this.modalCtrl.create({
      component: DetailTpCoursEnPage
    })
    var ch = JSON.stringify(item);
    localStorage.setItem('DtpEn', ch);
    await modal.present();

  }

  async AjoutCours() {
    const modal = await this.modalController.create({
      component: CoursAjoutEnPage,
      cssClass: 'my-custom-class'
    });
    await modal.present().then(() => {

    })
    await modal.onWillDismiss().then(() => {
      this.refresh();
    });
  }
  async AjoutTP() {
    const modal = await this.modalController.create({
      component: TpAjoutEnPage,
      cssClass: 'my-custom-class'
    });
    await modal.present().then(() => {

    })
    await modal.onWillDismiss().then(() => {
      this.refresh();
    });
  }

}
