import { UserService } from './../../Services/user.service';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  constructor(private nav:NavController,private US:UserService) { }

  ngOnInit() {
   
  }
  test(){
    this.US.showtoken()
  }
  choice(){this.nav.navigateForward('/choice-student');}

}
