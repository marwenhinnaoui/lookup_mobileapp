import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
nom=''
prenom=''
Phone=null;
  constructor(private storage:Storage) {
   this.nom= localStorage.getItem("nom")
   this.prenom= localStorage.getItem("prenom")
   this.Phone= localStorage.getItem("phone")
  }
  disconnect(){
    localStorage.clear();
    this.storage.remove('apiToken');
    this.storage.remove('rememberme');
  }

}
