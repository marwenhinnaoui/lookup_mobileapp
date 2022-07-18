import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import * as moment from 'moment';
import { UserService } from 'src/app/Services/user.service';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-detail-exercice',
  templateUrl: './detail-exercice.page.html',
  styleUrls: ['./detail-exercice.page.scss'],
})
export class DetailExercicePage implements OnInit {
  exercice;
  image="";
  fichier="";
  doc='';
  docLastP='';
  

  constructor(public modalCtrl: ModalController,private userService:UserService,private translate: TranslateService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    this.translate.setDefaultLang('en'); }

  ngOnInit() {
    
    this.exercice =JSON.parse(localStorage.getItem('Dexercice'));
    console.log(this.exercice);    
    
    this.doc =  this.exercice.doc;
    if(this.doc){
    const spltDoc = this.doc.split('.');
    console.log(spltDoc[1]);
    this.docLastP = spltDoc[1];
    if(this.docLastP === "jpg" || this.docLastP ==="jpeg"|| this.docLastP ==="bmp"|| this.docLastP ==="gif"|| this.docLastP ==="png"|| this.docLastP ==="webp"){
      this.image = this.userService.apiUrl+"/uploads/files/doc/"+this.exercice.doc;       
    } else{
      this.fichier = this.userService.apiUrl+"/uploads/files/doc/"+this.exercice.doc;
    }
  
  }
    

  }

 
  download(){
    window.open(this.fichier, '_system', 'location=yes')
  }

  async close (){
    await this.modalCtrl.dismiss();
  }

  formatDate(date){
    return moment(date).format('DD-MM-YYYY')
  }

}
