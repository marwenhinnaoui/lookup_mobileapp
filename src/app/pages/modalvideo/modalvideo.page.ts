import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modalvideo',
  templateUrl: './modalvideo.page.html',
  styleUrls: ['./modalvideo.page.scss'],
})
export class ModalvideoPage implements OnInit {

  constructor(private nav:NavController) { }

  ngOnInit() {
    setTimeout(()=>{
this.nav.navigateRoot('login') 
    },5000)
  }

}
